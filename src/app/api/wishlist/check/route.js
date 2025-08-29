import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Wishlist from "@/src/lib/models/wishlist";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ inWishlist: false }), { status: 200 });
    }

    await connectMongoDB();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    const wishlist = await Wishlist.findOne({
      userId: session.user._id,
      "items.productId": productId,
    });

    return new Response(
      JSON.stringify({ inWishlist: !!wishlist }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ inWishlist: false }), { status: 500 });
  }
}
