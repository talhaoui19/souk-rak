"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export const useCartActions = (setItems) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const updateQuantity = async (item, newQty) => {
    setIsLoading(true);

    try {
      await fetch("/api/cart/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item.productId._id,
          quantity: newQty,
        }),
      });

      setItems((prev) =>
        prev.map((p) => (p._id === item._id ? { ...p, quantity: newQty } : p))
      );

      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecreaseQuantity = async (item) => {
    const newQty = item.quantity - 1;
    if (newQty >= 1) await updateQuantity(item, newQty);
  };

  const handleIncreaseQuantity = async (item) => {
    const newQty = item.quantity + 1;
    const maxStock = item.productId.quantity;

    console.log("المخزون:", maxStock, "الكمية المطلوبة:", newQty);

    if (newQty > maxStock) {
      toast.error(" لا يمكنك طلب أكثر من الكمية المتوفرة في المخزون");
      return;
    }

    await updateQuantity(item, newQty);
  };

  const handleDeleteItem = async (item) => {
    const confirmDelete = window.confirm(
      "هل أنت متأكد أنك تريد حذف هذا المنتج من السلة؟"
    );
    if (!confirmDelete) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/cart/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: item.productId._id }),
      });

      if (res.ok) {
        setItems((prev) => prev.filter((p) => p._id !== item._id));
        router.refresh();
      } else {
        const data = await res.json();
        console.error(data.error || "Failed to delete item");
      }
    } catch (err) {
      console.error("Error deleting item:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleDeleteItem,
  };
};
