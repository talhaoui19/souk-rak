"use client";
import { useState } from "react";
import { useCartTotals } from "../../cart/hooks/useCartTotals";
import { UserIcon } from "@/src/components/icons";
import PhooneIcon from "@/src/components/icons/PhoneIcon";
import LoadingOverlay from "./LoadingOverlay";
import CheckoutAddressFields from "./CheckoutAddressFields";
import { toast } from "react-toastify";
import CheckoutField from "./CheckoutField";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ items, isLoading }) => {
  const { subtotal, discountTotal, total } = useCartTotals(items);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    postalCode: "",
    address: "",
    state: "",
    city: "",
    note: "",
    paymentMethod: "cod",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!form.fullName || !form.phone || !form.address) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    try {
      const formattedItems = items.map((item) => ({
        productId: item.productId._id,
        title: item.productId.name,
        price: item.productId.price,
        image: item.productId.images?.[0],
        quantity: item.quantity,
      }));

      console.log("Formatted items before sending:", formattedItems);

      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerInfo: form,
          items: formattedItems,
          subtotal,
          discountTotal,
          total,
        }),
      });

      if (res.ok) {
        toast.success("تم إرسال طلبك بنجاح");
        router.push("/profile?tab=orders")
      } else {
        const data = await res.json();
        toast.error(data.error || "فشل إنشاء الطلب");
      }
    } catch (err) {
      console.error(err);
      toast.error("خطأ في السيرفر");
    }
  };

  return (
    <section className="relative col-span-3">
      <h2 className="text-xl text-[var(--main-color)] font-bold mb-6">
        عنوان الشحن
      </h2>

      <div className="space-y-4">
        <CheckoutField
          label="اسم المستخدم"
          name="fullName"
          placeholder="أحمد ابراهيم"
          value={form.fullName}
          onChange={handleChange}
          Icon={UserIcon}
          className="w-[450px] h-[60px]"
        />

        <CheckoutField
          label="رقم الهاتف"
          name="phone"
          placeholder="أدخل رقم الهاتف الخاص بك"
          value={form.phone}
          onChange={handleChange}
          Icon={PhooneIcon}
          className="w-[450px] h-[60px]"
        />

        <CheckoutField
          label="الرمز البريدي"
          name="postalCode"
          value={form.postalCode}
          onChange={handleChange}
          className="w-[450px] h-[60px]"
        />

        <CheckoutField
          label="تفاصيل العنوان"
          name="address"
          placeholder="شرح العنوان بالكامل"
          value={form.address}
          onChange={handleChange}
          className="w-[450px] h-[60px]"
        />

        <CheckoutAddressFields form={form} handleChange={handleChange} />
      </div>

      <button onClick={handlePlaceOrder} className="--but w-[450px] mt-4">
        تأكيد الطلب
      </button>

      {isLoading && <LoadingOverlay />}
    </section>
  );
};

export default CheckoutForm;
