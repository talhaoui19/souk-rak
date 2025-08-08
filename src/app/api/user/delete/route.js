import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
  }

  const { email } = session.user;

  try {
    await connectMongoDB();

    const deletedUser = await UserModal.findOneAndDelete({ email: email });

    if (!deletedUser) {
      return NextResponse.json(
        { error: "لم يتم العثور على المستخدم" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "تم حذف المستخدم بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    console.error("خطأ في حذف المستخدم:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء حذف المستخدم" },
      { status: 500 }
    );
  }
}
