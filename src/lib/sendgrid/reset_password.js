import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_VERIFIED_SENDER,
    subject: "إعادة تعيين كلمة المرور",
    html: `

    `,
  };

  try {
    await sgMail.send(msg);
    return {
      success: true,
      message:
        "لقد تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.",
    };
  } catch (error) {
    console.error("Error sending mail:", error);
    return {
      success: false,
      error: "An error occurred while sending the mail.",
    };
  }
};
