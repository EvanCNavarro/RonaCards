const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

// Put this code into register api to automatically send verification email
/*
let info = transporter.sendMail({
            from: '"Rona Cards" <ronacards@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Verify your email address with RonaCards', // Subject line
            html: '<a href=\"http://localhost:5000/EmailVerification/${result.ops[0]._id}\">Click here to verify your email</a>',
        });
res.status(200)send('Verification email sent to ' + email + '.');
*/
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//Email verification
app.put('/EmailVerification', async (req,res) =>
{
	//store incoming json
	const {_id} = req.body;

	//database connection
	const db = client.db();

	var query = {_id: ObjectId(_id}

	var newValues = {$set:{Verified:true}};

	var result = await db.collection('users').updateOne(query,newValues);

	res.status(200).send('Account verified.');
}
