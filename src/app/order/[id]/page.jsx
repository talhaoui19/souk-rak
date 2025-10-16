import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LocationIcon,
  ShoppingArrowIcon,
} from "@/src/components/icons";
import { authOptions } from "@/src/lib/authOptions";
import { connectMongoDB } from "@/src/lib/db";
import Order from "@/src/lib/models/Order";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function OrderDetailPage({ params }) {
  await connectMongoDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>الرجاء تسجيل الدخول لعرض الطلب.</p>;
  }

  const order = await Order.findOne({
    _id: params.id,
    userId: session.user._id,
  }).lean();

  if (!order) {
    return <p>هذا الطلب غير موجود أو لا تملك صلاحية لعرضه.</p>;
  }

  // TOTAL
  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 100;
  const discount = 50;
  const total = subtotal + shipping - discount;

  const statusSteps = ["قيد الانتظار", "تم التأكيد", "تم الشحن", "تم التسليم"];

  // نجيب index للخطوة الحالية
  const currentStepIndex = statusSteps.indexOf(order.status);

  return (
    <section className="bg-white rounded-[12px] p-6 w-full">
      <div className="container flex items-center justify-between">
        <Link
          href={"/profile?tab=orders"}
          className="--but w-[184px] bg-transparent text-[#9E9E9E] border border-[#9E9E9E]"
        >
          <ArrowRightIcon color={"#9E9E9E"} />
          رجوع الى الطلبات
        </Link>
        <button className="--but w-[184px] bg-transparent text-[var(--main-color)] border border-[var(--main-color)]">
          استكمال التسوق
          <ShoppingArrowIcon />
        </button>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-16">
        <div className="space-y-8">
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link href={`/product/${item.productId}`}>
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.title}
                    width={80}
                    height={80}
                    quality={100}
                    className="w-[80px] h-[80px] object-cover rounded-md"
                  />
                </Link>
                <div>
                  <h3 className="font-semibold text-[#174086] text-base">
                    {item.title}
                  </h3>
                  <div className="mt-2">
                    <span
                      className={`text-base font-semibold ml-2 ${
                        item.discount > 0
                          ? "line-through text-[#CACACA]"
                          : "text-[var(--main-color)]"
                      }`}
                    >
                      {item.price}.00 دج{" "}
                    </span>
                    {item.discount > 0 && (
                      <span className="text-[var(--main-color)] text-base font-semibold">
                        {(
                          item.price -
                          (item.price * item.discount) / 100
                        ).toFixed(2)}{" "}
                        دج
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-end mt-12">
                الكمية: {item.quantity}
              </p>
            </div>
          ))}

          {/* تفاصيل السعر */}
          <div className="flex items-center justify-between">
            <p>تفاصيل السعر</p>
            <p>{discount} دج</p>
          </div>
          <div className="border-t py-2 space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>الخصم</span>
              <span>{discount} دج</span>
            </div>
            <div className="flex justify-between">
              <span>تكلفة الشحن</span>
              <span>{shipping} دج</span>
            </div>
            <div className="flex justify-between">
              <span>المجموع</span>
              <span>{subtotal} دج</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-lg text-green-600">
              <span className="text-xl text-[#174086]">الإجمالي</span>
              <span>{total} دج</span>
            </div>
          </div>
        </div>

        <div>
          <div className="border-b pb-4 mb-6 flex justify-between items-center">
            <h1 className="text-lg text-[var(--main-color)] font-bold">
              تتبع الطلب رقم{" "}
            </h1>
            <span className="text-xl text-[var(--main-color)] font-bold">
              #{order._id.toString().slice(0, 9).toUpperCase()}
            </span>
          </div>

          <div className="py-2 flex items-center gap-2">
            <LocationIcon color="#26b356" />
            <div className="space-y-1">
              <p>العنوان الذي تم اضافته للشحن..</p>
              <p className="text-[#9E9E9E]">{order.customerInfo.address}</p>
            </div>
          </div>
          {[
            {
              status:
                order.status === "ملغي" ? "تم إلغاء الطلب" : "تم تنفيذ الطلب",
              description:
                order.status === "ملغي"
                  ? new Date(order.statusUpdatedAt).toLocaleDateString(
                      "ar-DZ",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )
                  : new Date(order.createdAt).toLocaleDateString("ar-DZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
              active: order.status,
              isCancelled: order.status === "ملغي",
            },
            {
              status: "جاري مراجعة الطلب",
              description: "يقوم البائع بمعالجة تفاصيل الطلب",
              active: order.status,
            },
            {
              status: "تم شحن الطلب",
              description:
                order.status === "تم الشحن"
                  ? new Date(order.statusUpdatedAt).toLocaleDateString(
                      "ar-DZ",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )
                  : new Date(
                      new Date(order.createdAt).setDate(
                        new Date(order.createdAt).getDate() + 7
                      )
                    ).toLocaleDateString("ar-DZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
              active: order.status,
            },
            {
              status: "تم توصيل الطلب بنجاح",
              description: "تقييمك مهم لمساعدتك اصدقائك",
              active: order.status,
            },
          ].map((step, index) => {
            const isActive = index <= currentStepIndex;
            return (
              <div key={index} className="flex items-start gap-3 mt-2">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                      step.isCancelled
                        ? "border-[#f85555]"
                        : isActive
                        ? "border-[var(--main-color)]"
                        : "border-[#C4C4C4]"
                    }`}
                  >
                    {(step.isCancelled || isActive) && (
                      <span
                        className={`w-5 h-5 ${
                          step.isCancelled
                            ? "bg-[#f85555]"
                            : "bg-[var(--main-color)]"
                        } rounded-full`}
                      ></span>
                    )}
                  </div>
                  {step.status === "تم توصيل الطلب بنجاح" ? (
                    ""
                  ) : (
                    <div
                      class={`h-24 my-2 border-l-2  ${
                        step.isCancelled
                          ? "border-solid border-[#f85555]"
                          : isActive
                          ? "border-solid border-[var(--main-color)]"
                          : "border-dashed border-[#C4C4C4]"
                      }`}
                    />
                  )}
                </div>

                <div className="flex items-center justify-between w-full gap-4 mt-3">
                  <p
                    className={`text-base ${
                      step.isCancelled
                        ? "text-[#f85555] font-bold"
                        : isActive
                        ? "text-[var(--main-color)] font-bold"
                        : "text-[#2B2F4E]"
                    }`}
                  >
                    {step.status}
                  </p>
                  <p className="text-sm text-gray-500 text-end flex-1">
                    {step.status === "تم شحن الطلب"
                      ? order.status === "تم الشحن"
                        ? "تم الشحن يوم"
                        : "متوقع الشحن يوم"
                      : ""}
                     {""} {step.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="mt-8 flex gap-4">
            <button className="--but w-[180px] bg-transparent border border-[#9E9E9E] text-[#9E9E9E] rounded-md">
              إلغاء الطلب
            </button>
            <button className="--but w-[300px] bg-transparent border border-[var(--main-color)] text-[var(--main-color)] rounded-md">
              الاتصال والدعم
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
