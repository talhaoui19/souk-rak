import UserModal from "../../../lib/models/user";
import { connectMongoDB } from "../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const obj = await request.json();

    await connectMongoDB();

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(obj.password, salt);

    await UserModal.create({
      name: obj.name,
      email: obj.email,
      phone: obj.phone,
      password: hashedPassword,
      image: obj.image,
      isEmailVerified: false,
    });

    return NextResponse.json(
      { message: "تم إنشاء الحساب بنجاح" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إنشاء الحساب" },
      { status: 500 }
    );
  }
}
