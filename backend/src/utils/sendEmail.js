import transporter from "../config/mail.js";

const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"StudentOS Team" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent:", info);
  } catch (error) {
    console.error("Email Error:", error.message);

    throw error;
  }
};

export default sendEmail;