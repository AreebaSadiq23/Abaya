"use client";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <main className="min-h-screen pt-20 px-6 md:px-12 lg:px-24 bg-background max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-light font-heading mb-16 tracking-tight">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-foreground/70 font-light text-lg">Your bag is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-16">
          <div className="space-y-8">
            {cart.map((item, i) => (
              <div key={i} className="flex gap-6 border-b border-border/50 pb-6">
                <div className="w-24 h-32 bg-muted relative">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-light tracking-wide text-lg">{item.name}</h3>
                    <p className="text-sm font-light text-foreground/70">${item.price.toFixed(2)}</p>
                  </div>
                  <Button variant="ghost" className="w-max p-0 text-xs uppercase tracking-widest text-foreground/50 hover:text-primary" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#f9f5f0] p-10 space-y-8 h-max">
            <h2 className="text-2xl font-light font-heading tracking-tight">Order Summary</h2>
            <div className="flex justify-between font-light">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-light text-foreground/60 border-t pt-4">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
            </div>
            <Button className="w-full rounded-none border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background py-6 uppercase tracking-[0.2em] transition-all duration-500">
                Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
