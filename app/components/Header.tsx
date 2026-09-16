"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, X, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
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
        <Link href="/profile" className="hidden md:block p-1 hover:text-primary transition-colors"><User className="w-4 h-4" /></Link>
        <Link href="/cart" className="relative p-1 hover:text-primary transition-colors">
          <ShoppingBag className="w-4 h-4" />
          {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{cart.length}</span>}
        </Link>
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
