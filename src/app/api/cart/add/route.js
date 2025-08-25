import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectMongoDB } from "@/src/lib/db";
import Product from "@/src/lib/models/product";
import { authOptions } from "@/src/lib/authOptions";
import Cart from "@/src/lib/models/cart";

export async function POST(req) {
  try {
    await connectMongoDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const { productId, quantity } = await req.json();

    // تأكد المنتج موجود
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // ابحث عن سلة المستخدم
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // لو ما عندوش سلة، نعمل وحدة جديدة
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
      });
    } else {
      // لو عندو سلة، نشوف هل المنتج موجود فيها
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (itemIndex > -1) {
        // المنتج موجود → نزيد الكمية
        cart.items[itemIndex].quantity += quantity;
      } else {
        // المنتج مش موجود → نضيفه
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();

    return NextResponse.json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
