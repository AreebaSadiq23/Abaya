"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { UserButton, SignInButton, Show } from '@clerk/nextjs';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CartItemList } from './CartItemList';

const Header = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm text-foreground border-b border-border p-4 flex justify-between items-center px-4 md:px-12 sticky top-0 z-50">
      <button className="md:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <Link href="/" className="font-heading text-2xl tracking-[0.2em] uppercase font-light">SABAYAH</Link>
      
      <nav className={`absolute top-full left-0 w-full bg-background border-b border-border p-6 transition-all duration-300 ease-in-out md:static md:w-auto md:border-0 md:p-0 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'} overflow-hidden md:overflow-visible`}>
        <ul className="flex flex-col gap-6 md:flex-row md:gap-8 text-xs font-light uppercase tracking-[0.2em] text-center md:text-left">
          <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Shop</Link></li>
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About Us</Link></li>
          <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </nav>

      <div className="flex gap-4 md:gap-6 items-center">
        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-1 hover:text-primary transition-colors">
          <Search className="w-4 h-4" />
        </button>
        
        <Show when="signed-in">
            <UserButton />
        </Show>
        <Show when="signed-out">
            <SignInButton />
        </Show>

        <SheetTrigger>
          <Button variant="ghost" className="relative p-1 hover:text-primary transition-colors h-auto w-auto bg-transparent border-0 rounded-none focus-visible:ring-0">
            <ShoppingBag className="w-4 h-4" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Button>
          <SheetContent side="right" className="w-full sm:max-w-md h-full flex flex-col bg-background border-l border-border/40 text-foreground p-0">
            <SheetHeader className="p-6 border-b border-border/20 flex flex-row items-center justify-between">
              <SheetTitle className="text-xl font-light font-heading tracking-widest uppercase">Your Bag</SheetTitle>
            </SheetHeader>
            
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground/40 stroke-[1]" />
                  <p className="text-foreground/70 font-light text-base">Your bag is empty.</p>
                  <SheetClose>
                    <Button className="rounded-none border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300">
                      Continue Shopping
                    </Button>
                  </SheetClose>
                </div>
              ) : (
                <CartItemList cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} variant="drawer" />
              )}
            </div>

            {cart.length > 0 && (
              <SheetFooter className="p-6 border-t border-border/20 bg-[#f9f5f0]/30 mt-auto space-y-4 flex flex-col gap-0">
                <div className="flex justify-between items-center text-sm font-light">
                  <span className="tracking-widest uppercase">Subtotal</span>
                  <span className="text-base font-medium">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
                <p className="text-[11px] font-light text-muted-foreground">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="space-y-2 pt-2">
                  <Button className="w-full rounded-none border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground py-5 uppercase tracking-[0.2em] transition-all duration-300 text-xs">
                    Proceed to Checkout
                  </Button>
                  <SheetClose className="w-full block">
                    <Link href="/cart" className="block text-center text-xs font-light uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors pt-2 underline underline-offset-4">
                      View & Edit Bag
                    </Link>
                  </SheetClose>
                </div>
              </SheetFooter>
            )}
          </SheetContent>
        </SheetTrigger>
      </div>
      
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-4 md:p-8 flex justify-center items-center z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <form onSubmit={handleSearch} className="flex gap-4 w-full max-w-xl items-center">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..." 
              className="flex-grow bg-transparent border-b border-border p-2 focus:outline-none focus:border-primary transition-colors"
              autoFocus
            />
            <button type="submit" className="uppercase tracking-widest text-sm hover:text-primary transition-colors">Search</button>
            <button type="button" onClick={() => setIsSearchOpen(false)} className="hover:text-primary transition-colors"><X className="w-5 h-5" /></button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
