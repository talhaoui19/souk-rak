import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Order from "@/src/lib/models/Order";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function OrderListPage() {
  await connectMongoDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>الرجاء تسجيل الدخول لعرض طلباتك.</p>;
  }

  const orders = await Order.find({ userId: session.user._id })
    .sort({ createdAt: -1 })
    .lean();

  return (
    <section className="w-full space-y-4">
      {orders.length === 0 ? (
        <p>لا توجد طلبات بعد.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-[12px] py-4 px-6 w-full"
          >
            <div className="flex justify-between">
              <h2
                className={`text-sm font-semibold ${
                  order.status === "تم التسليم"
                    ? "text-[var(--main-color)]"
                    : order.status === "ملغي"
                    ? "text-[#F75555]"
                    : "text-[#174086]"
                } mt-1`}
              >
                {order.status === "تم التسليم"
                  ? "تم توصيل الطلب بنجاح"
                  : order.status === "ملغي"
                  ? "تم الغاء الطلب يوم"
                  : order.status === "قيد الانتظار"
                  ? "تم الطلب يوم"
                  : "تم شحن الطلب يوم"}

                <span>
                  {order.status === "قيد الانتظار"
                    ? new Date(order.createdAt).toLocaleDateString("ar-DZ", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : order.status === "ملغي"
                    ? new Date(order.updatedAt).toLocaleDateString("ar-DZ", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : new Date(order.statusUpdatedAt).toLocaleDateString(
                        "ar-DZ",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                </span>
              </h2>

              <div className="flex items-center gap-2">
                {order.items.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden w-[70px] h-[70px] flex items-center border-[1px] border-[#F4F4F4] rounded-[8px] gap-4 py-2"
                  >
                    <Image
                      src={item.image || "/placeholder.png"}
                      alt={item.title}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-sm font-semibold text-[#9E9E9E]">
                رقم الطلب :{" "}
                <span className="font-black">
                  {order._id.toString().slice(0, 9).toUpperCase()}
                </span>
              </h2>
              <Link
                href={`/order/${order._id}`}
                className="text-sm font-semibold text-[var(--main-color)] hover:underline"
              >
                تصفح الطلب
              </Link>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
