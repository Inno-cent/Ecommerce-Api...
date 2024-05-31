const Cart = require("../models/payment-model");
const nodemailer = require("nodemailer");
const myMail = process.env.myMail
const nodePass = process.env.emailPass;

//Setting up Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: false,
    auth: {
      user: myMail,
      pass: nodePass,
    },
});
