"use client";
import { starProduct } from "@/src/assets";
import { useCart } from "@/src/hooks/useCart";
import { useIsNewProduct } from "@/src/hooks/useIsNewProduct";
import { useWishlist } from "@/src/hooks/useWishlist";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, WishHeartIcon } from "../icons";
import { useState } from "react";

const ProductCard = ({ product, cartItems, isFavorite }) => {
  const [inWishlist, setInWishlist] = useState(isFavorite);
  const { isLoading, handleAddToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishIsLoading } = useWishlist();
  const isNew = useIsNewProduct(product.createdAt, 3);
  return (
    <div className="product w-fit">
      <div className="bg-white relative w-[274px] h-[271px] flex items-center justify-center rounded-lg">
        <Link href={`/product/${product._id}`}>
          <Image
            src={product.images?.[0]}
            width={"150"}
            height={"150"}
            alt="prodcut1-img"
            className="my-9 hover:mt-1 transition-[0.7s]"
          />
        </Link>
        {isNew && (
          <div className="absolute top-3 left-5 bg-[#56B53F] text-white text-sm font-medium w-[58px] h-[32px] flex items-center justify-center rounded-[8px]">
            جديد
          </div>
        )}
        {product.discount && (
          <div className="absolute top-3 left-5 bg-[#f97316] text-white text-sm font-medium w-[58px] h-[32px] flex items-center justify-center rounded-[8px]">
            تخفيض
          </div>
        )}
      </div>
      <span className="text-[var(--main-color)] text-xs font-bold block mt-2 ">
        {product.category[0]}
      </span>
      <h4 className="text-[#35383F] text-base font-bold my-2">
        {product.name}
      </h4>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <span className="text-[#1F222A] text-base font-bold">
            {product.price}.00 دج
          </span>
          <span className="text-[#CACACA] text-base font-bold line-through">
            70.3 رس
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold">4.1</span>
          <Image
            src={starProduct}
            alt="starProduct-img"
            className="w-[13px] h-[12px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <button
          className="--but bg-transparent w-[179px] h-[57px] text-[var(--main-color)] border-[1px] border-[var(--main-color)]"
          onClick={() => handleAddToCart(product, 1, cartItems)}
        >
          {isLoading ? (
            <div className="--spr border-[var(--main-color)] border-r-transparent" />
          ) : (
            "أضف للسلة"
          )}
        </button>
        <div className="relative h-[57px]">
          <button
            className="--but bg-transparent flex items-center justify-center w-[75px] h-[57px] text-[var(--main-color)] border-[1px] border-[#CDCDCD]"
            onClick={async () => {
              if (inWishlist) {
                await removeFromWishlist(product._id);
                setInWishlist(false);
              } else {
                await addToWishlist(product._id);
                setInWishlist(true);
              }
            }}
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
      </div>
    </div>
  );
};

export default ProductCard;
