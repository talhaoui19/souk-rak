/* eslint-disable @next/next/no-img-element */
"use client";
import {
  AddCountIcon,
  HeartIcon,
  RemoveCountIcon,
  StarsIcon,
  WishHeartIcon,
} from "@/src/components/icons";
import CartIcon from "@/src/components/icons/Cart";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useWishlist } from "@/src/hooks/useWishlist";
import { useCart } from "@/src/hooks/useCart";
import { useIsNewProduct } from "@/src/hooks/useIsNewProduct";

const ProductCard = ({ product, cartItems }) => {
  const [productCount, setProductCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [inWishlist, setInWishlist] = useState(product.isFavorite);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const isNew = useIsNewProduct(product.createdAt, 3);
  const { isLoading, handleAddToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishIsLoading } = useWishlist();

  return (
    <div className="product_info flex gap-6 p-[80px]">
      <div className="product_img relative flex items-center justify-center w-[900px] h-[500px] border border-[#F2F2F2] py-[18px] rounded-[7px]">
        <div>
          <img
            src={selectedImage}
            alt="صورة المنتج"
            className="w-[310px] h-[310px] rounded-[12px] object-cover"
            onClick={() => {
              setPhotoIndex(product.images.indexOf(selectedImage));
              setIsOpen(true);
            }}
          />
        </div>

        {isNew && (
          <div className="absolute top-3 left-5 bg-[#56B53F] text-white text-sm font-bold w-[61px] h-[36px] flex items-center justify-center rounded-[8px]">
            جديد
          </div>
        )}

        <div className="product_images flex items-center gap-2 absolute bottom-8">
          {product.images.map((image, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`bg-white w-[78px] h-[78px] flex items-center justify-center border px-4 py-2 rounded-[7px] cursor-pointer transition 
              ${
                selectedImage === image
                  ? "border-[#26B356]"
                  : "border-[#DCDCDC]"
              }`}
              >
                <img src={image} alt="product_image" />
              </div>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          styles={{
            container: { backgroundColor: "rgba(0,0,0,0.85)" },
          }}
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={product.images.map((img) => ({ src: img }))}
        />
      )}

      <div className="product_dusc max-w-[500px]">
        <h3 className="text-[#174086] text-[24px] font-black">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-[#39CE8A] text-sm">
            تبقي فى المخزن {product.quantity} قطعة
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[#100D22] text-sm">(160 مراجعة)</h1>
            <StarsIcon />
          </div>
        </div>
        <div className="product_size flex items-center justify-between mt-6">
          <h2 className="text-[#174086] font-semibold">القياس:</h2>
          <select className="w-[238px] h-[50px] px-5 border border-[#DCDCDC] rounded-[4px] text-[#9E9E9E]">
            <option hidden>اختار</option>
            <option>1 مم</option>
            <option>2 مم</option>
            <option>3 مم</option>
            <option>4 مم</option>
          </select>
        </div>
        <div className="product_size flex items-center justify-between mt-6">
          <h2 className="text-[#174086] font-semibold">اللون:</h2>
          <div className="flex gap-[10px]"></div>
        </div>
        <div className="product_size flex items-center justify-between mt-6">
          <h2 className="text-[#174086] font-semibold">الكمية:</h2>
          <div className="flex items-center justify-between w-[238px] h-[50px] px-4 border border-[#DCDCDC] rounded-[4px]">
            <div
              className="cursor-pointer p-3"
              onClick={() => {
                if (productCount < product.quantity)
                  setProductCount(productCount + 1);
              }}
            >
              <AddCountIcon />
            </div>
            <span className="block bg-[#DCDCDC] w-[1px] h-[30px]" />
            <span className="text-[var(--main-color)] text-lg font-semibold">
              {productCount < 10 ? `0${productCount}` : `${productCount}`}
            </span>
            <span className="block bg-[#DCDCDC] w-[1px] h-[30px]" />
            <div
              className="cursor-pointer p-3"
              onClick={() => {
                if (productCount > 1) {
                  setProductCount(productCount - 1);
                }
              }}
            >
              <RemoveCountIcon />
            </div>
          </div>
        </div>
        <div className="product_size flex items-center justify-between mt-6">
          <div>
            <h2 className="text-[#174086] font-semibold">السعر:</h2>
            <span className="text-xs text-[#9E9E9E]">السعر شامل الضريبه</span>
          </div>
          <div>
            <span
              className={`text-[var(--main-color)] text-[30px] font-bold ml-2 ${
                product.discount ? "line-through" : ""
              }`}
            >
              {product.price}.00 دج{" "}
            </span>
            {product.discount && (
              <span className="text-[#CACACA]">
                {(
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(2)}{" "}
                دج
              </span>
            )}
            <span className="bg-[var(--main-color)] text-[#ffff] text-sm p-1 px-2 rounded-[3px] mr-2">
              {product.discount ? `${product.discount}%` : "0 %"}
            </span>
          </div>
        </div>

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
