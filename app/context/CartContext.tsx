"use client";
import React, { createContext, useContext, useState } from 'react';

type CartItem = { id: number; name: string; price: number; image: string };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}>({ cart: [], addToCart: () => {}, removeFromCart: () => {} });

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (item: CartItem) => setCart((prev) => [...prev, item]);
  const removeFromCart = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
