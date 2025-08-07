import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPasswordResetEmail(email, resetUrl) {
  try {
    const data = await resend.emails.send({
      from: "Souk Rak <soukrak@resend.dev>",
      to: [email],
      subject: "إعادة تعيين كلمة المرور",
      html: `
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
                    margin-top: 90px;
                  "
                >
                  <tbody>
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
                            border-radius: 8px;
                            border-color: #e8e5ef;
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
                                  طلبًا لإعادة تعيين كلمة المرور لحسابك.
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
                                                  href="${resetUrl}"
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
                                                  >إعادة تعيين كلمة المرور</a
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
                                  ستنتهي صلاحية رابط إعادة تعيين كلمة المرور هذا
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
                                  إذا لم تطلب إعادة تعيين كلمة المرور، فلا يلزم
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
                                          "إعادة تعيين كلمة المرور"، فانسخ عنوان
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
                                              href="${resetUrl}"
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
                                              >${resetUrl}</a
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
      `,
    });

    return {
      success: true,
      message: "تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني.",
    };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "فشل في إرسال البريد الإلكتروني" };
  }
}
