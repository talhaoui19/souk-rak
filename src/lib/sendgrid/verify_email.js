import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ to, subject, html }) => {
  const msg = {
    to,
    from: {
      email: process.env.SENDGRID_VERIFIED_SENDER,
      name: "موقع سوق راك",
    },
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export const emailVerificationTemplate = (userName, verificationUrl) => `
  <div>
      <div
        style="
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          background-color: #ffffff;
          color: #718096;
          height: 100%;
          line-height: 1.4;
          margin: 0;
          padding: 0;
          width: 100% !important;
        "
      >
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            background-color: #edf2f7;
            border-radius: 12px;
            margin: 0;
            padding: 0;
            width: 100%;
          "
        >
          <tbody>
            <tr>
              <td
                align="center"
                style="
                  box-sizing: border-box;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                    'Segoe UI Emoji', 'Segoe UI Symbol';
                "
              >
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  dir="rtl"
                  style="
                    box-sizing: border-box;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                      'Segoe UI Emoji', 'Segoe UI Symbol';
                    margin: 0;
                    padding: 0;
                    width: 100%;
                  "
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          box-sizing: border-box;
                          font-family: -apple-system, BlinkMacSystemFont,
                            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                            'Apple Color Emoji', 'Segoe UI Emoji',
                            'Segoe UI Symbol';
                          padding: 25px 0;
                          text-align: center;
                        "
                      >
                        <a
                          href="https://souk-rak-nextjs.vercel.app/"
                          style="
                            box-sizing: border-box;
                            font-family: -apple-system, BlinkMacSystemFont,
                              'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                              'Apple Color Emoji', 'Segoe UI Emoji',
                              'Segoe UI Symbol';
                            color: #ee0f48;
                            font-size: 19px;
                            font-weight: bold;
                            text-decoration: none;
                            display: inline-block;
                            margin-top: 25px;
                          "
                          target="_blank"
                        >
                          <img
                            src="https://res.cloudinary.com/dzvf36zth/image/upload/v1737890313/profile_images/jxwtncw8z6j8rosbwfj3.png"
                            alt="logo_img"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          box-sizing: border-box;
                          font-family: -apple-system, BlinkMacSystemFont,
                            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                            'Apple Color Emoji', 'Segoe UI Emoji',
                            'Segoe UI Symbol';
                          background-color: #edf2f7;
                          border-bottom: 1px solid #edf2f7;
                          border-top: 1px solid #edf2f7;
                          margin: 0;
                          padding: 0;
                          width: 100%;
                          border: hidden !important;
                        "
                      >
                        <table
                          align="center"
                          width="570"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            box-sizing: border-box;
                            font-family: -apple-system, BlinkMacSystemFont,
                              'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                              'Apple Color Emoji', 'Segoe UI Emoji',
                              'Segoe UI Symbol';
                            background-color: #ffffff;
                            border-color: #e8e5ef;
                            border-radius: 8px;
                            border-width: 1px;
                            margin: 0 auto;
                            padding: 0;
                            width: 570px;
                          "
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  box-sizing: border-box;
                                  font-family: -apple-system, BlinkMacSystemFont,
                                    'Segoe UI', Roboto, Helvetica, Arial,
                                    sans-serif, 'Apple Color Emoji',
                                    'Segoe UI Emoji', 'Segoe UI Symbol';
                                  max-width: 100vw;
                                  padding: 32px;
                                "
                              >
                                <h1
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    color: #26b356;
                                    font-size: 18px;
                                    font-weight: bold;
                                    margin-top: 0;
                                  "
                                >
                                  مرحبًا!
                                </h1>
                                <p
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    font-size: 16px;
                                    line-height: 1.5em;
                                    margin-top: 0;
                                  "
                                >
                                  لقد تلقيت هذا البريد الإلكتروني لأننا تلقينا
                                  طلبًا لتأكيد بريدك الإلكتروني .
                                </p>
                                <table
                                  align="center"
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    margin: 30px auto;
                                    padding: 0;
                                    text-align: center;
                                    width: 100%;
                                  "
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          font-family: -apple-system,
                                            BlinkMacSystemFont, 'Segoe UI',
                                            Roboto, Helvetica, Arial, sans-serif,
                                            'Apple Color Emoji',
                                            'Segoe UI Emoji', 'Segoe UI Symbol';
                                        "
                                      >
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            box-sizing: border-box;
                                            font-family: -apple-system,
                                              BlinkMacSystemFont, 'Segoe UI',
                                              Roboto, Helvetica, Arial,
                                              sans-serif, 'Apple Color Emoji',
                                              'Segoe UI Emoji',
                                              'Segoe UI Symbol';
                                          "
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  box-sizing: border-box;
                                                  font-family: -apple-system,
                                                    BlinkMacSystemFont,
                                                    'Segoe UI', Roboto,
                                                    Helvetica, Arial, sans-serif,
                                                    'Apple Color Emoji',
                                                    'Segoe UI Emoji',
                                                    'Segoe UI Symbol';
                                                "
                                              >
                                                <a
                                                  href="${verificationUrl}"
                                                  class="m_-7181054872124137535button"
                                                  rel="noopener"
                                                  style="
                                                    box-sizing: border-box;
                                                    font-family: -apple-system,
                                                      BlinkMacSystemFont,
                                                      'Segoe UI', Roboto,
                                                      Helvetica, Arial,
                                                      sans-serif,
                                                      'Apple Color Emoji',
                                                      'Segoe UI Emoji',
                                                      'Segoe UI Symbol';
                                                    border-radius: 4px;
                                                    color: #fff;
                                                    display: inline-block;
                                                    overflow: hidden;
                                                    text-decoration: none;
                                                    background-color: #26b356;
                                                    border-bottom: 8px solid
                                                      #26b356;
                                                    border-left: 18px solid
                                                      #26b356;
                                                    border-right: 18px solid
                                                      #26b356;
                                                    border-top: 8px solid
                                                      #26b356;
                                                  "
                                                  target="_blank"
                                                  >تأكيد البريد الإلكتروني</a
                                                >
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    font-size: 16px;
                                    line-height: 1.5em;
                                    margin-top: 0;
                                  "
                                >
                                 ستنتهي صلاحية رابط تأكيد البريد الإلكتروني هذا
                                  بعد 24 ساعة .
                                </p>
                                <p
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    font-size: 16px;
                                    line-height: 1.5em;
                                    margin-top: 0;
                                  "
                                >
                                  إذا لم تطلب تأكيد بريدك الإلكتروني فلا يلزم
                                  اتخاذ أي إجراء آخر.
                                </p>
                                <p
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    font-size: 16px;
                                    line-height: 1.5em;
                                    margin-top: 0;
                                  "
                                >
                                  تحياتنا,<br />موقع سوق راك
                                </p>
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    border-top: 1px solid #e8e5ef;
                                    margin-top: 25px;
                                    padding-top: 25px;
                                  "
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          box-sizing: border-box;
                                          font-family: -apple-system,
                                            BlinkMacSystemFont, 'Segoe UI',
                                            Roboto, Helvetica, Arial, sans-serif,
                                            'Apple Color Emoji',
                                            'Segoe UI Emoji', 'Segoe UI Symbol';
                                        "
                                      >
                                        <p
                                          style="
                                            box-sizing: border-box;
                                            font-family: -apple-system,
                                              BlinkMacSystemFont, 'Segoe UI',
                                              Roboto, Helvetica, Arial,
                                              sans-serif, 'Apple Color Emoji',
                                              'Segoe UI Emoji',
                                              'Segoe UI Symbol';
                                            line-height: 1.5em;
                                            margin-top: 0;
                                            font-size: 14px;
                                          "
                                        >
                                          إذا كنت تواجه مشكلة في النقر على الزر
                                          "تأكيد البريد الإلكتروني"، فانسخ عنوان
                                          URL أدناه والصقه في متصفح الويب الخاص
                                          بك:
                                          <span
                                            style="
                                              box-sizing: border-box;
                                              font-family: -apple-system,
                                                BlinkMacSystemFont, 'Segoe UI',
                                                Roboto, Helvetica, Arial,
                                                sans-serif, 'Apple Color Emoji',
                                                'Segoe UI Emoji',
                                                'Segoe UI Symbol';
                                              word-break: break-all;
                                            "
                                            ><a
                                              href="${verificationUrl}"
                                              style="
                                                box-sizing: border-box;
                                                font-family: -apple-system,
                                                  BlinkMacSystemFont, 'Segoe UI',
                                                  Roboto, Helvetica, Arial,
                                                  sans-serif,
                                                  'Apple Color Emoji',
                                                  'Segoe UI Emoji',
                                                  'Segoe UI Symbol';
                                                color: #3869d4;
                                              "
                                              target="_blank"
                                              >${verificationUrl}</a
                                            ></span
                                          >
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          box-sizing: border-box;
                          font-family: -apple-system, BlinkMacSystemFont,
                            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                            'Apple Color Emoji', 'Segoe UI Emoji',
                            'Segoe UI Symbol';
                        "
                      >
                        <table
                          align="center"
                          width="570"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            box-sizing: border-box;
                            font-family: -apple-system, BlinkMacSystemFont,
                              'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                              'Apple Color Emoji', 'Segoe UI Emoji',
                              'Segoe UI Symbol';
                            margin: 0 auto;
                            padding: 0;
                            text-align: center;
                            width: 570px;
                          "
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-family: -apple-system, BlinkMacSystemFont,
                                    'Segoe UI', Roboto, Helvetica, Arial,
                                    sans-serif, 'Apple Color Emoji',
                                    'Segoe UI Emoji', 'Segoe UI Symbol';
                                  max-width: 100vw;
                                  padding: 32px;
                                "
                              >
                                <p
                                  style="
                                    box-sizing: border-box;
                                    font-family: -apple-system,
                                      BlinkMacSystemFont, 'Segoe UI', Roboto,
                                      Helvetica, Arial, sans-serif,
                                      'Apple Color Emoji', 'Segoe UI Emoji',
                                      'Segoe UI Symbol';
                                    line-height: 1.5em;
                                    margin-top: 0;
                                    color: #b0adc5;
                                    font-size: 12px;
                                    text-align: center;
                                  "
                                >
                                  © 2025 موقع سوق راك كل الحقوق محفوظة.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
`;
