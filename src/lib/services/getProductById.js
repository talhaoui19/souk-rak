import { connectMongoDB } from "../db";
import Product from "../models/Product";

export async function getProductById(id) {
  await connectMongoDB();

  const product = Product.findById(id).lean();

  return product;
}
