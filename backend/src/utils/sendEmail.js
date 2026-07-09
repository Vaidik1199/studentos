import transporter from "../config/mail.js";

const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"StudentOS Team" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log(`📨 Email sent successfully to ${to}`);
  } catch (error) {
    console.error("❌ Failed to send email");
    console.error(error);
    throw error;
  }
};

export default sendEmail;