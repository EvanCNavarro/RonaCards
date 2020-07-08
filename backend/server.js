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
    host: "smtp.gmail.com",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'ronacards@gmail.com', // made a new email for this
      pass: 'COP4331_G6', //didn't want to set up an email server, or use my real email
    },
    tls:{
      rejectUnauthorized:false
    }
  });

// TEST code, remove before we're finished

let info = transporter.sendMail = {
            from: '"Rona Cards" <ronacards@gmail.com', // sender address
            to: "ronacards@gmail.com", // list of receivers
            subject: 'testing email', // Subject line
            text: 'testing email functionality',
        };

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
