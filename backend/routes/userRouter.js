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
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'ronacards@gmail.com', // made a new email for this
      pass: 'COP4331_G6', //didn't want to set up an email server, or use my real email
    },
    tls:{
      rejectUnauthorized:false
    }
  });


router.post("/register", async (req, res) => {
        try {
                const { username, email, password } = req.body;
                if (!username || !email || !password)
                        return res.status(400).json({ msg: "Fields cannot be empty!" });
                if (password.length < 5)
                        return res.status(400).json({ msg: "Passwords must be at least 5 characters long." });
                const existingEmail = await User.findOne({ email: email });
                const existingUsername = await User.findOne({ username: username });
                if (existingUsername)
                        return res.status(400).json({ msg: "Username already exists." });
                if (existingEmail)
                        return res.status(400).json({ msg: "Email already exists." });
                const salt = await bcrypt.genSalt();
                const passwordHash = await bcrypt.hash(password, salt);
                const newUser = new User({
                        username,
                        email,
                        password: passwordHash,
                });
                const savedUser = await newUser.save();
		console.log(savedUser._id);
		const registerURL = "http://localhost:4000/EmailVerification/" + savedUser._id;
		console.log(registerURL);
                let info = transporter.sendMail({
                        from: '"Rona Cards" <ronacards@gmail.com>', // sender address
                        to: email, // list of receivers
                        subject: 'Verify your email address with RonaCards', // Subject line
                        html: '<a href="' + registerURL + '">Click here to verify your email</a>',
                });
                res.json(savedUser);
        } catch (err) {
                res.status(500).json({ error: err });
        }
});

router.post("/reset", async (req, res) => {
	try {
		const { email } = req.body;
		if (!email)
                        return res.status(400).json({ msg: "Email cannot be empty!" });
		const existingEmail = await User.findOne({ email: email });
		if (!existingEmail)
			return res.status(400).json({ msg: "This email does not exist.." });
		const token = jwt.sign({ id: existingEmail._id }, process.env.JWT_SECRET);
		res.json({
			token,
			user: {
				id: existingEmail._id,
				username: existingEmail.username,
				email: existingEmail.email,
			},
		});
	} catch (err) {
                res.status(500).json({ error: err.message });
        }
});

router.post("/login", async (req, res) => {
        try {
                const { username, password } = req.body;
                if (!username || !password)
                        return res.status(400).json({ msg: "Fields cannot be empty!" });
                const user = await User.findOne({ username : username });
                if (!user)
                        return res.status(400).json({ msg: "Username does not exist!" });
		if (!user.verified)
			return res.status(400).json({ msg: "You must verify your email before being able to log in. Check your inbox!" });
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch)
                        return res.status(400).json({ msg: "Invalid credentials." });
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
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

router.put("/update", auth, async (req, res) => {
        const token = req.header("x-auth-token");
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(verified.id);
        const id = user._id;
        User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
                .then(data => {
                        if (!data) {
                                res.status(404).send({
                                        message: `Cannot update User with id=${id}. Maybe User was not found!`
                                });
                        } else res.send({ message: "User was updated successfully." });
                })
                .catch(err => {
                        res.status(500).send({
                                message: "Error updating User with id=" + id
                        });
                });
});

router.delete("/delete", auth, async (req, res) => {
        try {
                const deletedUser = await User.findByIdAndDelete(req.user);
                res.json(deletedUser);
        } catch (err) {
                res.status(500).json({ error: err.message });
        }
});

router.post("/tokenIsValid", async (req, res) => {
        try {
                const token = req.header("x-auth-token");
                if (!token)
                        return res.json(false);
                const verified = jwt.verify(token, process.env.JWT_SECRET);
                if (!verified)
                        return res.json(false);
                const user = await User.findById(verified.id);
                if (!user)
                        return res.json(false);
                return res.json(true);
        } catch (err) {
                res.status(500).json({ error: err.message });
        }
});

router.get("/", auth, async (req, res) => {
        const user = await User.findById(req.user);
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

module.exports = router;
