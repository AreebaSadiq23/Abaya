"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = { id: number; name: string; price: number; image: string; quantity: number };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}>({ cart: [], addToCart: () => {}, removeFromCart: () => {}, updateQuantity: () => {} });

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

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));
  
  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
