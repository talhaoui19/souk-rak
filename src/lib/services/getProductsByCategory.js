import { connectMongoDB } from "../db";
import Product from "../models/Product";

import { getCartAndFavorites } from "./getCartAndFavorites";

export default async function getProductgetProductsByCategory(category) {
  await connectMongoDB();

  const products = await Product.find({ category }).lean();

  const { cartItems, favoriteIds } = await getCartAndFavorites();

  return { products, cartItems, favoriteIds };
}
