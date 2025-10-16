
import User from '@/src/lib/models/user';
import { connectMongoDB } from "@/src/lib/db";

export async function POST(req) {
  try {
    await connectMongoDB();

    const { email } = await req.json();

    const updatedUser = await User.findOneAndUpdate(
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
