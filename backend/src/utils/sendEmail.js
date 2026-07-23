import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "StudentOS <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.log("Email sent:", data);
  } catch (err) {
    console.error("Resend Error:", err);
    throw err;
  }
};

export default sendEmail;