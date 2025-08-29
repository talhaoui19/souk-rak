import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Wishlist from "@/src/lib/models/wishlist";

export async function POST(req) {
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

    let wishlist = await Wishlist.findOne({ userId: session.user._id });

    if (!wishlist) {
      wishlist = await Wishlist.create({
        userId: session.user._id,
        items: [{ productId }],
      });
    } else {
      const alreadyExists = wishlist.items.some(
        (item) => item.productId.toString() === productId
      );

      if (!alreadyExists) {
        wishlist.items.push({ productId });
        await wishlist.save();
      }
    }

    return new Response(
      JSON.stringify({ message: "تمت الإضافة إلى المفضلة" }),
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
