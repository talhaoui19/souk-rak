import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import bcrypt from "bcrypt";

export async function POST(request) {
  // التحقق من جلسة المستخدم
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
  }

  const { email } = session.user;
  const { currentPassword, newPassword } = await request.json();

  try {
    await connectMongoDB();

    const user = await UserModal.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "لم يتم العثور على المستخدم" },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "password Not Correcet" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt();
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedNewPassword;
    await user.save();

    return NextResponse.json(
      { message: "تم تغيير كلمة المرور بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    console.error("خطأ في تغيير كلمة المرور:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء تغيير كلمة المرور" },
      { status: 500 }
    );
  }
}
