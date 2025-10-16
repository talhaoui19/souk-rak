"use client";
import { CartIcon, HeartIcon, WishHeartIcon } from "@/src/components/icons";
import { useCart } from "@/src/hooks/useCart";
import { useWishlist } from "@/src/hooks/useWishlist";
import { useState } from "react";

const ProductActions = ({ product, productCount, cartItems, isFavorite }) => {
  const { isLoading, handleAddToCart } = useCart();
  const [inWishlist, setInWishlist] = useState(isFavorite);
  const { addToWishlist, removeFromWishlist, wishIsLoading } = useWishlist();

  const toggleWishlist = async () => {
    if (inWishlist) {
      await removeFromWishlist(product._id);
      setInWishlist(false);
    } else {
      const res = await addToWishlist(product._id);
      if (res.ok) {
        setInWishlist(true);
      }
    }
  };

  return (
    <div className="flex gap-2 mt-6">
      <button
        className="--but flex items-center justify-center gap-2"
        onClick={() => handleAddToCart(product, productCount, cartItems)}
      >
        {isLoading ? (
          <div className="--spr" />
        ) : (
          <>
            <CartIcon className="w-5 h-5" />
            <span>اضافة للسلة</span>
          </>
        )}
      </button>

      <button
        className="--but w-[174px] flex items-center justify-center bg-transparent border border-[#CDCDCD]"
        onClick={toggleWishlist}
        disabled={wishIsLoading}
      >
        {wishIsLoading ? (
          <div className="--spr border-[var(--main-color)] border-r-white" />
        ) : inWishlist ? (
          <WishHeartIcon />
        ) : (
          <HeartIcon />
        )}
      </button>
    </div>
  );
};

export default ProductActions;
