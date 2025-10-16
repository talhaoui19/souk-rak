import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import { connectMongoDB } from "../db";
import Cart from "../models/cart";
import Wishlist from "../models/wishlist";

export async function getCartAndFavorites() {
  const session = await getServerSession(authOptions);
  if (!session) return { cartItems: [], favoriteIds: [] };

  await connectMongoDB();

  const cart = await Cart.findOne({ userId: session.user._id })
    .populate("items.productId")
    .lean();

  const wishlist = await Wishlist.findOne({ userId: session.user._id }).lean();

  return {
    cartItems: cart?.items || [],
    favoriteIds: wishlist?.items.map((i) => i.productId.toString()) || [],
  };
}
