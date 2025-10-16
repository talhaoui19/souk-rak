import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Wishlist from "@/src/lib/models/wishlist";

export async function DELETE(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "يجب تسجيل الدخول" }), {
        status: 401,
      });
    }

    const { productId } = await req.json();

    if (!productId) {
      return new Response(JSON.stringify({ error: "معرف المنتج مطلوب" }), {
        status: 400,
      });
    }

    await connectMongoDB();

    await Wishlist.updateOne(
      { userId: session.user._id },
      { $pull: { items: { productId } } }
    );

    return new Response(
      JSON.stringify({ message: "تم حذف المنتج من المفضلة" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "خطأ في السيرفر" }), {
      status: 500,
    });
  }
}
