const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const nodemailer = require('nodemailer');


//mail transporter
let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,

	//true for 465, otherwise is false
	secure: true,

	//email account credentials
	auth: {
		user: 'ronacards@gmail.com',
		pass: 'COP4331_G6',
	},
	tls:{
		rejectUnauthorized:false
	}
});


//(CRUD) [C] create new user API
router.post("/register", async (req, res) => {
	try {
		//store received values into variables for the user
		const { username, email, password } = req.body;

		//enter check then print error, IF any of the provided values are null/empty
		if (!username || !email || !password) {
			return res.status(400).json({ msg: "Can't submit with empty fields." });
		}

		//enter check then print errer, IF the password contains less that 5 characters.
 		if (password.length < 5) {
			return res.status(400).json({ msg: "Passwords need 5 or more characters." });
		}

		//find any one user by the provided username
		const existingUsername = await User.findOne({ username: username });

		//find any one user by the provided email
		const existingEmail = await User.findOne({ email: email });

		//enter check then print error, IF the username provided is taken
		if (existingUsername) {
			return res.status(400).json({ msg: "Username already exists." });
		}

		//enter check then print error, IF the email provided is taken
		if (existingEmail) {
			return res.status(400).json({ msg: "Email already exists." });
		}

		//generate salt and use in creation of hashed password (via the bcrypt function)
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(password, salt);

		//create new user according to required fields of User schema, store hashed password
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
		});

		//save the newly created user into the MongoDB database
		const savedUser = await newUser.save();

		//generate URL with the user's id (for when they return back from their email)
		const registerURL = "http://rona.cards/verify?_id=" + savedUser._id;

		//send an email to the user for verification, and to allow them to log in afterwards
		let info = transporter.sendMail({

			//sender address
			from: '"Rona Cards" <ronacards@gmail.com>',

			//recipient address
			to: email,

			//subject line of email (verify email)
			subject: '[RONA CARDS] Verify your email!',

			//creating link that uses previously set URL
			html: '<a href="' + registerURL + '">( Click here to verify your email )</a>',
		});

		//send back the created/saved user information
		res.json(savedUser);
	} catch (err) {
		res.status(500).json({ error: err });
	}
});


//(CRUD) [R] read user API
router.get("/", auth, async (req, res) => {
	//run 'auth' function using the token stored in header

	//find any one user by the provided information stored in the token
	const user = await User.findById(req.user);

	//try to send back the user's information
	try {
		res.json({
			id: user._id,
			username: user.username,
			email: user.email,
			card1: user.card1,
			card2: user.card2,
			card3: user.card3,
			card4: user.card4,
			card5: user.card5,
			card6: user.card6,
			card7: user.card7,
			card8: user.card8,
			card9: user.card9,
			card10: user.card10
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});


//(CRUD) [U] update user API
router.put("/update", auth, async (req, res) => {
	//run 'auth' function using the token stored in header

	//grab and store token information from the header
	const token = req.header("x-auth-token");

	//check to see if the token is valid using the secret key (from '.env' file)
	const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

	//find any one user by the provided information stored in the verified token
	const user = await User.findById(verifiedToken.id);

	//set id from the verifiedToken information
	const id = user._id;

        //find any one user by the id from the verifiedToken, and update the given values
	User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then(data => {

			//enter check then print error, IF id not found
			if (!data) {
				return res.status(404).json({ msg: "That user does not exist." });

			//enter if user was successfuly updated
			} else {
				res.send({ msg: "User was successfully updated." });
			}
		})
		.catch(err => {
			return res.status(500).json({ msg: "Error occurred while updating." });
		}
	);
});


//(CRUD) [D] delete user API
router.delete("/delete", auth, async (req, res) => {
	//run 'auth' function using the token stored in header

	try {
		//find any one user, from value in token, then delete from database
		const deletedUser = await User.findByIdAndDelete(req.user);

		//send back the delete user value
		res.json(deletedUser);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});


//verify the user's email, by setting 'verified' to 'true'
router.put("/verify", async (req, res) => {

	//store the given id (grabbed on the frontend from the URL)
	const { id } = req.body;

	//find any one user by the id from the verifiedToken, and set 'verified' to 'true'
	User.findByIdAndUpdate(id, { verified : true }, { useFindAndModify: false })
		.then(data => {

			//enter check then print error, IF id not found
			if (!data) {
				return res.status(404).json({ msg: "That user does not exist." });

			//enter if user was successfuly updated
			} else {
				res.send({ msg: "Email successfully verified." });
			}
		})
		.catch(err => {
			return res.status(500).json({ msg: "Error occurred while verifying user's email." });
		}
	);
});


//send the user an email to reset their password
router.post("/reset", async (req, res) => {
	try {
		//get the provided email and store value
		const { email } = req.body;

		//enter check then print error, IF the email provided is null/empty
		if (!email) {
			return res.status(400).json({ msg: "Email cannot be empty!" });
		}

		//find any one user by the provided email
		const existingEmail = await User.findOne({ email: email });

		//enter check then print error, IF the email provided doesn't exit
		if (!existingEmail) {
			return res.status(400).json({ msg: "This email does not exist.." });
		}

                //generate URL with the user's id (for when they return back from their email)
		const resetURL = "http://rona.cards/reset?_id=" + existingEmail._id;

                //send an email to the user to reset their password
		let resetsender = transporter.sendMail({

			//sender address
			from: '"Rona Cards" <ronacards@gmail.com>',

			//recipient address
			to: email,

			//subject line of email (reset password)
			subject: '[RONA CARDS] Reset your password!',

			////creating link that uses previously set URL
			html: '<a href="' + resetURL + '">( Click here to reset your password )</a>',
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});


//get and set new password for user's account
router.put("/newPassword", async (req, res) => {

	//get the provided id, and password, then store values
	const { id, password } = req.body;

	//generate salt and use in creation of hashed password (via the bcrypt function)
	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(password, salt);

	//find any one user by the id given, hash the password given, then update with newly hashed password
	User.findByIdAndUpdate(id, { password : hashedPassword }, { useFindAndModify: false })
		.then(data => {

			//enter check then print error, IF id not found
			if (!data) {
				return res.status(404).json({ msg: "That user does not exist." });

			//enter if user was successfuly updated
			} else {
				res.send({ msg: "Password successfully changed." });
			}
		})
		.catch(err => {
			return res.status(500).json({ msg: "Error occurred while setting new password." });
		}
	);
});


//user login = check provided user credentials and provide created token
router.post("/login", async (req, res) => {
	try {
		//get the provided username, and password, then store values
		const { username, password } = req.body;

		//enter check then print error, IF the email or password provided is null/empty
		if (!username || !password) {
			return res.status(400).json({ msg: "Fields cannot be empty!" });
		}

		//find any one user by the provided username
		const user = await User.findOne({ username : username });

		//enter check then print error, IF the user does not exist
		if (!user) {
			return res.status(404).json({ msg: "Username does not exist!" });
		}

		//enter check then print error, IF the user's email has NOT been verified
		if (!user.verified) {
			return res.status(401).json({ msg: "Verify email before logging in." });
		}

		//check if the given password matches the stored password, after being hashed
		const isMatch = await bcrypt.compare(password, user.password);

		//enter check then print error, IF password provided is incorrect
		if (!isMatch) {
			return res.status(412).json({ msg: "Invalid credentials." });
		}

		//create valid JWT token while using the secret key (from '.env' file)
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

		//send back the created token and user
		res.json({
			token,
			user: {
				id: user._id,
				username: user.username,
				email: user.email,
			},
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});


//check to see if the token was created by us, and is valid
router.post("/isTokenValid", async (req, res) => {
	try {
		//grab and store token information from the header
		const token = req.header("x-auth-token");

		//enter check then return false, IF the token is null/empty
		if (!token) {
			return res.json(false);
		}

		//check to see if the token is valid using the secret key (from '.env' file)
		const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

		//enter check then return false, IF the token is not valid
		if (!verifiedToken) {
			return res.json(false);
		}

		//find any one user by the provided id (grabbed from inside token)
		const user = await User.findById(verifiedToken.id);

		//enter check then return false, IF the user doesn't exist
		if (!user) {
			return res.json(false);
		}

		//return true if the token and the user is valid
		return res.json(true);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});


module.exports = router;
