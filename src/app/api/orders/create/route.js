import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Order from "@/src/lib/models/Order";
import Product from "@/src/lib/models/Product";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    await connectMongoDB();
    const session = await getServerSession(authOptions);
    console.log("SESSION =>", session);
    if (!session) {
      return new Response(JSON.stringify({ error: "غير مصرح" }), {
        status: 401,
      });
    }

    const body = await req.json();

    const itemsWithDetails = await Promise.all(
      body.items.map(async (item) => {
        const product = await Product.findById(item.productId);
        return {
          productId: product._id,
          title: product.name,
          price: product.price,
          image: product.images?.[0] || "/placeholder.png",
          quantity: item.quantity,
        };
      })
    );

    const order = await Order.create({
      userId: session.user._id,
      customerInfo: body.customerInfo,
      items: itemsWithDetails,
      subtotal: body.subtotal,
      discountTotal: body.discountTotal,
      total: body.total,
      paymentMethod: body.customerInfo.paymentMethod || "cod",
      status: "قيد الانتظار",
      cancelledAt :null,
    });

    return new Response(JSON.stringify(order), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "فشل إنشاء الطلب" }), {
      status: 500,
    });
  }
}
