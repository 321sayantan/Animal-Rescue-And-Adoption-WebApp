const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "AdoPet2024@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports = mailTransporter