import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email configuration failed.");
    console.error(error.message);
  } else {
    console.log("📧 Email service connected successfully.");
  }
});

export default transporter;