import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { token } = await req.json();

    const verificationTokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await UserModal.findOne({
      emailVerificationToken: verificationTokenHash,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!user) {
      return NextResponse.json({
        error: "رابط التحقق غير صالح أو منتهي الصلاحية"
      }, { status: 400 });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    return NextResponse.json({
      message: "تم تأكيد البريد الإلكتروني بنجاح"
    });

  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.json({
      error: "حدث خطأ أثناء معالجة الطلب."
    }, { status: 500 });
  }
}