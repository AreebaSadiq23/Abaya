import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border p-8 md:p-12 text-center">
      <div className="font-serif text-2xl mb-8 tracking-wider">SABAYAH</div>
      <nav className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm uppercase tracking-widest mb-8 text-foreground/70">
        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        <Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link>
      </nav>
      <p className="text-xs text-foreground/50">&copy; {new Date().getFullYear()} SABAYAH. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
