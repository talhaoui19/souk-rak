"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAddToCart = async (product, quantity, currentItems) => {
    setIsLoading(true);

    try {
      const existingItem = currentItems.find(
        (item) => item.productId._id === product._id
      );
      const totalQuantity = existingItem
        ? existingItem.quantity + quantity
        : quantity;

      if (totalQuantity > product.quantity) {
        toast.error("لا يمكنك طلب أكثر من الكمية المتوفرة في المخزون");
        setIsLoading(false);
        return;
      }

      const res = await fetch("/api/cart/add/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          quantity,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("تمت إضافة المنتج للسلة", { position: "top-left" });
        router.refresh();
      } else {
        toast.error(data.error || "حدث خطأ أثناء الإضافة");
      }
    } catch (error) {
      console.error(error);
      toast.error("مشكلة في الإتصال بالسيرفر");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleAddToCart,
  };
};
