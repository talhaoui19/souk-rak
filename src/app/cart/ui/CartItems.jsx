/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import CartProducts from "./CartProducts";
import CartTotals from "./CartTotals";
import { useCartActions } from "../hooks/useCartActions";

const CartItem = ({ cart }) => {
  const [items, setItems] = useState(cart.items);
  const {
    isLoading,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleDeleteItem,
  } = useCartActions(setItems);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
       <CartProducts
          items={items}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDeleteItem={handleDeleteItem}
          isLoading={isLoading}
        />

        <CartTotals items={items} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default CartItem;
