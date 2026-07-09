import sendEmail from "../utils/sendEmail.js";

export const testEmail = async (req, res) => {
  try {
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: "🎉 StudentOS Email Setup Successful",
      html: `
        <div style="font-family:Arial,sans-serif;padding:40px;background:#0f172a;color:white">
          <h1 style="color:#6366f1;">StudentOS</h1>

          <h2>Email Service Connected Successfully ✅</h2>

          <p>
            Congratulations! Your StudentOS email service is working correctly.
          </p>

          <hr />

          <p>This email confirms that StudentOS can now send:</p>

          <ul>
            <li>🔐 Forgot Password OTP</li>
            <li>📧 Welcome Emails</li>
            <li>✅ Email Verification</li>
            <li>📚 Future Notifications</li>
          </ul>

          <br>

          <p>
            Built with ❤️ by StudentOS
          </p>
        </div>
      `,
    });

    return res.json({
      success: true,
      message: "Test email sent successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
};