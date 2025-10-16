import { connectMongoDB } from "@/src/lib/db";
import Order from "@/src/lib/models/Order";

export async function GET() {
  try {
    await connectMongoDB();
    const orders = await Order.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "فشل جلب الطلبات" }), {
      status: 500,
    });
  }
}
