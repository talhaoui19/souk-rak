import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/lib/resend/reset_password";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();

    const user = await UserModal.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "البريد الإلكتروني غير مسجل" },
        { status: 404 }
      );
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const resetUrl = `${process.env.NEXTAUTH_URL}/reset_password/${resetToken}`;

    const emailResult = await sendPasswordResetEmail(user.email, resetUrl);

    if (emailResult.success) {
      return NextResponse.json(
        { message: emailResult.message },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: emailResult.error }, { status: 500 });
    }
  } catch (error) {
    console.error("Password reset error :", error);
    return NextResponse.json(
      { error: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
