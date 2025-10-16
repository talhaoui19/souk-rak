import { NextResponse } from "next/server";
import { connectMongoDB } from "@/src/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import Cart from "@/src/lib/models/cart";

export async function DELETE(req) {
  try {
    await connectMongoDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const { productId } = await req.json();

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    return NextResponse.json({ message: "Product removed", cart });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
