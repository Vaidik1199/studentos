import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

transporter.verify((err) => {
  if (err) {
    console.error("SMTP VERIFY FAILED");
    console.error(err);
  } else {
    console.log("SMTP VERIFIED");
  }
});

export default transporter;