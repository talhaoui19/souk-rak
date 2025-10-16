"use client";

import { useIsNewProduct } from "@/src/hooks/useIsNewProduct";
import { useState } from "react";
import ProductImage from "./ui/ProductImage";
import ProductPrice from "./ui/ProductPrice";
import ProductActions from "./ui/ProductActions";

const ProductCard = ({ source, product, cartItems, isFavorite }) => {
  const [inWishlist, setInWishlist] = useState(isFavorite);
  const isNew = useIsNewProduct(product.createdAt, 3);
  return (
    <div className="product w-fit">
      <div className="bg-white relative w-[274px] h-[271px] flex items-center justify-center rounded-lg">
        <ProductImage product={product} isNew={isNew} source={source}/>
      </div>
      <span className="text-[var(--main-color)] text-xs font-bold block mt-2 ">
        {product.category[0]}
      </span>
      <h4 className="text-[#35383F] text-base font-bold my-2">
        {product.name}
      </h4>
      <ProductPrice price={product.price} discount={product.discount} />
      <ProductActions
        product={product}
        cartItems={cartItems}
        inWishlist={inWishlist}
        setInWishlist={setInWishlist}
      />
    </div>
  );
};

export default ProductCard;
