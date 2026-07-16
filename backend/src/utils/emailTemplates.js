export const forgotPasswordTemplate = (fullName, otp) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8" />
      <title>StudentOS Password Reset</title>
  </head>

  <body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
              <td align="center" style="padding:40px 20px;">

                  <table
                      width="600"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                          background:#ffffff;
                          border-radius:18px;
                          overflow:hidden;
                          box-shadow:0 10px 35px rgba(0,0,0,.08);
                      "
                  >

                      <!-- Header -->

                      <tr>
                          <td
                              align="center"
                              style="
                                  padding:35px;
                                  background:linear-gradient(135deg,#4f46e5,#7c3aed);
                              "
                          >

                              <h1
                                  style="
                                      color:white;
                                      margin:0;
                                      font-size:34px;
                                  "
                              >
                                  StudentOS
                              </h1>

                              <p
                                  style="
                                      color:#dbeafe;
                                      margin-top:10px;
                                      font-size:15px;
                                  "
                              >
                                  Smart Workspace for Students
                              </p>

                          </td>
                      </tr>

                      <!-- Body -->

                      <tr>

                          <td style="padding:45px;">

                              <h2
                                  style="
                                      color:#111827;
                                      margin-top:0;
                                  "
                              >
                                  Password Reset Request
                              </h2>

                              <p
                                  style="
                                      color:#4b5563;
                                      line-height:28px;
                                  "
                              >
                                  Hi <strong>${fullName}</strong>,
                              </p>

                              <p
                                  style="
                                      color:#4b5563;
                                      line-height:28px;
                                  "
                              >
                                  We received a request to reset your StudentOS password.
                                  Use the verification code below.
                              </p>

                              <div
                                  style="
                                      margin:40px 0;
                                      text-align:center;
                                  "
                              >

                                  <span
                                      style="
                                          display:inline-block;
                                          background:#eef2ff;
                                          color:#4338ca;
                                          font-size:38px;
                                          letter-spacing:10px;
                                          font-weight:bold;
                                          padding:18px 36px;
                                          border-radius:14px;
                                      "
                                  >
                                      ${otp}
                                  </span>

                              </div>

                              <p
                                  style="
                                      color:#6b7280;
                                      line-height:28px;
                                  "
                              >
                                  This code will expire in
                                  <strong>10 minutes</strong>.
                              </p>

                              <p
                                  style="
                                      color:#6b7280;
                                      line-height:28px;
                                  "
                              >
                                  If you didn't request this password reset,
                                  you can safely ignore this email.
                              </p>

                          </td>

                      </tr>

                      <!-- Footer -->

                      <tr>

                          <td
                              align="center"
                              style="
                                  padding:30px;
                                  background:#f9fafb;
                                  color:#9ca3af;
                                  font-size:13px;
                              "
                          >

                              © ${new Date().getFullYear()} StudentOS

                              <br><br>

                              Built with ❤️ for Students.

                          </td>

                      </tr>

                  </table>

              </td>

          </tr>

      </table>

  </body>
  </html>
  `;
};

// ==============================
// Registration OTP Email
// ==============================

export const registrationOtpTemplate = (fullName, otp) => {
  return `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8" />
<title>Verify your StudentOS Account</title>
</head>

<body
style="
margin:0;
padding:0;
background:#f3f4f6;
font-family:Arial,Helvetica,sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0">

<tr>

<td align="center" style="padding:40px 20px;">

<table
width="600"
cellpadding="0"
cellspacing="0"
style="
background:white;
border-radius:18px;
overflow:hidden;
box-shadow:0 10px 35px rgba(0,0,0,.08);
">

<tr>

<td
align="center"
style="
padding:35px;
background:linear-gradient(135deg,#4f46e5,#7c3aed);
">

<h1
style="
color:white;
margin:0;
font-size:34px;
"
>
StudentOS
</h1>

<p
style="
color:#dbeafe;
margin-top:10px;
"
>
Welcome to StudentOS 🚀
</p>

</td>

</tr>

<tr>

<td style="padding:45px;">

<h2 style="margin-top:0;color:#111827;">
Verify Your Email
</h2>

<p style="color:#4b5563;line-height:28px;">
Hi <strong>${fullName}</strong>,
</p>

<p style="color:#4b5563;line-height:28px;">
Thank you for creating your StudentOS account.

Please verify your email using the OTP below.
</p>

<div
style="
margin:40px 0;
text-align:center;
">

<span
style="
display:inline-block;
background:#eef2ff;
color:#4338ca;
font-size:38px;
letter-spacing:10px;
font-weight:bold;
padding:18px 36px;
border-radius:14px;
">

${otp}

</span>

</div>

<p style="color:#6b7280;">
This OTP expires in <strong>10 minutes</strong>.
</p>

<p style="color:#6b7280;">
If you didn't create this account, you can safely ignore this email.
</p>

</td>

</tr>

<tr>

<td
align="center"
style="
padding:30px;
background:#f9fafb;
font-size:13px;
color:#9ca3af;
">

© ${new Date().getFullYear()} StudentOS

<br><br>

Built with ❤️ for Students

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
};