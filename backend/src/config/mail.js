import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
});
console.log("BREVO_LOGIN:", process.env.BREVO_LOGIN);
console.log(
  "SMTP KEY EXISTS:",
  !!process.env.BREVO_SMTP_KEY
);
export default transporter;