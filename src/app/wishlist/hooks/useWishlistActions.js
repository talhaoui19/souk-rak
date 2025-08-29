"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export const useWishlistActions = (setItems) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteItem = async (item) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/wishlist/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: item.productId._id }),
      });

      if (res.ok) {
        setItems((prev) => prev.filter((p) => p._id !== item._id));
        router.refresh();
      } else {
        toast.error("حدث خطأ أثناء الحذف");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoveToCart = async (item) => {
    setIsLoading(true);
    try {
      await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: item.productId._id, quantity: 1 }),
      });

      await handleDeleteItem(item);
      toast.success("تم نقل المنتج إلى السلة");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleDeleteItem, handleMoveToCart };
};
