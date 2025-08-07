import { connectMongoDB } from "@/lib/db";
import UserModal from "@/lib/models/user";

export async function POST(req) {
  try {
    await connectMongoDB();

    const { email } = await req.json();

    const updatedUser = await UserModal.findOneAndUpdate(
      { email },
      { image: "" },
      { new: true }
    );

    return new Response(
      JSON.stringify({ message: "تم حذف الصورة", imageUrl: "" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "خطأ في حذف الصورة" }), {
      status: 500,
    });
  }
}
