"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = { id: number; name: string; price: number; image: string };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}>({ cart: [], addToCart: () => {}, removeFromCart: () => {} });

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('abaya-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('abaya-cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (item: CartItem) => setCart((prev) => [...prev, item]);
  const removeFromCart = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
