"use client";
import { useState } from "react";
import { useCartActions } from "../../cart/hooks/useCartActions";
import { CartProducts } from "../../cart/ui";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutItems({ cart }) {
  const [items, setItems] = useState(cart.items);

  const {
    isLoading,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleDeleteItem,
  } = useCartActions(setItems);

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
        <CartProducts
          items={items}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDeleteItem={handleDeleteItem}
          isLoading={isLoading}
        />
        <CheckoutForm items={items} isLoading={isLoading} />
      </div>

    </section>
  );
}
