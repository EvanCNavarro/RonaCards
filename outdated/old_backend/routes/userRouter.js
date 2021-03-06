const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
        try {
                const { username, email, password } = req.body;
                if (!username || !email || !password)
                        return res.status(400).json({ msg: "Empty field(s)." });
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
                res.json(savedUser);
        } catch (err) {
                res.status(500).json({ error: err });
        }
});

router.post("/login", async (req, res) => {
        try {
                const { username, password } = req.body;
                if (!username || !password)
                        return res.status(400).json({ msg: "Empty fields(s)." });
                const user = await User.findOne({ username : username });
                if (!user)
                        return res.status(400).json({ msg: "Username does not exist!" });
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
});
module.exports = router;
