// context/CartContext.jsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/api/user-data")
      .then((res) => res.json())
      .then(({ cart, favorites }) => {
        setCart(cart);
        setFavorites(favorites);
      });
  }, []);

  return (
    <CartContext.Provider value={{ cart, favorites, setCart, setFavorites }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
