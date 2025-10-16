import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Order from "@/src/lib/models/Order";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function MyOrdersPage() {
  await connectMongoDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>الرجاء تسجيل الدخول لعرض طلباتك.</p>;
  }

  const orders = await Order.find({ userId: session.user._id })
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">طلباتي</h1>

      {orders.length === 0 ? (
        <p>لا توجد طلبات بعد.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border p-4 rounded-lg shadow-md mb-6">
            {/* بيانات الطلب */}
            <div className="flex justify-between items-center mb-4">
              <p>
                <span className="font-bold">كود الطلب:</span>{" "}
                {order._id.toString()}
              </p>
              <p>
                <span className="font-bold">الحالة:</span>{" "}
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </p>
            </div>

            {/* المنتجات */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">المنتجات:</h3>
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b py-2"
                >
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p>السعر: {item.price} د.ج</p>
                    <p>الكمية: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* تفاصيل العميل */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">تفاصيل العميل:</h3>
              <p>الاسم: {order.customerInfo.fullName}</p>
              <p>الهاتف: {order.customerInfo.phone}</p>
              <p>العنوان: {order.customerInfo.address}</p>
              {order.customerInfo.city && (
                <p>المدينة: {order.customerInfo.city}</p>
              )}
              {order.customerInfo.state && (
                <p>الولاية: {order.customerInfo.state}</p>
              )}
              {order.customerInfo.note && (
                <p>ملاحظة: {order.customerInfo.note}</p>
              )}
            </div>

            {/* المجموع */}
            <div className="flex justify-end gap-4 font-bold text-lg">
              <p>المجموع قبل الخصم: {order.subtotal} د.ج</p>
              <p>الخصم: {order.discountTotal} د.ج</p>
              <p>المجموع الكلي: {order.total} د.ج</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
