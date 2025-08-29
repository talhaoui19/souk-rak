import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import Cart from "./models/cart";
import Wishlist from "./models/wishlist";
import { connectMongoDB } from "./db";

export async function getCartAndFavorites() {
  await connectMongoDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return { cartItems: [], favoriteIds: [] };
  }

  // 🛒 Cart
  const cart = await Cart.findOne({ userId: session.user._id })
    .populate("items.productId")
    .lean();

  const cartItems = cart ? cart.items : [];

  // ⭐ Wishlist
  const wishlist = await Wishlist.findOne({ userId: session.user._id }).lean();
  const favoriteIds = wishlist
    ? wishlist.items.map((i) => i.productId.toString())
    : [];

  return { cartItems, favoriteIds };
}
