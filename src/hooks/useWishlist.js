"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useWishlist = () => {
  const [wishIsLoading, setWishIsLoading] = useState(false);
  const router = useRouter();

  const addToWishlist = async (productId) => {
    setWishIsLoading(true);
    try {
      const res = await fetch("/api/wishlist/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        toast.success("تمت الإضافة إلى المفضلة");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "خطأ أثناء الإضافة");
      }
    } catch (err) {
      toast.error("خطأ في الاتصال بالسيرفر");
    } finally {
      setWishIsLoading(false);
    }
  };

  const removeFromWishlist = async (productId) => {
    setWishIsLoading(true);
    try {
      const res = await fetch("/api/wishlist/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        toast.success("تم الحذف من المفضلة ");
        router.refresh();
      } else {
        const data = await res.json();
        toast.error(data.error || "خطأ أثناء الحذف");
      }
    } catch (err) {
      toast.error("خطأ في الاتصال بالسيرفر");
    } finally {
      setWishIsLoading(false);
    }
  };

  const checkInWishlist = async (productId) => {
    try {
      const res = await fetch(`/api/wishlist/check?productId=${productId}`);
      if (res.ok) {
        const data = await res.json();
        return data.inWishlist; 
      }
      return false;
    } catch {
      return false;
    }
  };

  return {
    wishIsLoading,
    addToWishlist,
    removeFromWishlist,
    checkInWishlist,
  };
};
