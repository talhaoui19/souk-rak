// api/product/create/route.js

import { connectMongoDB } from "../../../../lib/db";
import ProductModal from "../../../../lib/models/product";

export async function POST(req) {
  await connectMongoDB();

  try {
    const data = await req.json();
    console.log("Received data:", data);
    const newProduct = await ProductModal.create({
      name: data.name,
      category: data.category,
      description: data.description,
      size: data.size,
      price: data.price,
      createdAt: Date.now(),
    });
    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("sssssssssss:", error);
  }
}
