import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import { connectMongoDB } from "../db";
import Wishlist from "../models/wishlist";

export async function getWishlist() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  await connectMongoDB();

  const wishlist = await Wishlist.findOne({ userId: session.user._id })
    .populate("items.productId")
    .lean();

  return wishlist;
}
