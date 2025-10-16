/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useIsNewProduct } from "@/src/hooks/useIsNewProduct";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import ProductQuantity from "./ProductQuantity";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";

const ProductCard = ({ product, cartItems }) => {
  const [productCount, setProductCount] = useState(1);
  const isNew = useIsNewProduct(product.createdAt, 3);

  return (
    <div className="product_info flex gap-6 p-[80px]">
      <ProductImages
        images={product.images}
        isNew={isNew}
        isDiscount={product.discount}
      />
      <div className="product_dusc max-w-[500px]">
        <ProductDetails product={product} />
        <ProductQuantity
          count={productCount}
          setCount={setProductCount}
          max={product.quantity}
        />
        <ProductPrice price={product.price} discount={product.discount} />
        <ProductActions
          product={product}
          productCount={productCount}
          cartItems={cartItems}
          isFavorite={product.isFavorite}
        />
      </div>
    </div>
  );
};

export default ProductCard;
