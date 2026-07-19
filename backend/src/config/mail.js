import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("SMTP VERIFY FAILED");
    console.error(error);
  } else {
    console.log("SMTP VERIFIED");
  }
});

export default transporter;