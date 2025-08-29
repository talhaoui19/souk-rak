"use client";
import { useState } from "react";
import { useWishlistActions } from "../hooks/useWishlistActions";
import WishlistProducts from "./WishlistProducts";

const WishlistItem = ({ wishlist }) => {
  const [items, setItems] = useState(wishlist.items);
  const { isLoading, handleDeleteItem, handleMoveToCart } =
    useWishlistActions(setItems);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-16">
      <WishlistProducts
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleMoveToCart={handleMoveToCart}
        isLoading={isLoading}
      />
    </div>
  );
};

export default WishlistItem;
