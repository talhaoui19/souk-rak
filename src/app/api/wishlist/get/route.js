import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Wishlist from "@/src/lib/models/wishlist";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "يجب تسجيل الدخول" }), {
        status: 401,
      });
    }

    await connectMongoDB();

    const wishlist = await Wishlist.findOne({ userId: session.user._id })
      .populate("items.productId")
      .lean();

    return new Response(JSON.stringify(wishlist || { items: [] }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "خطأ في السيرفر" }), {
      status: 500,
    });
  }
}
