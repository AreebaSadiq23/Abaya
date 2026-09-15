"use client";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <main className="min-h-screen pt-12 px-12 pb-24 bg-background max-w-5xl mx-auto">
      <h1 className="text-4xl font-serif font-light mb-12">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-foreground/70">Your bag is empty.</p>
      ) : (
        <div className="grid grid-cols-[1fr,350px] gap-12">
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-border pb-4">
                <div className="w-20 h-24 bg-muted" />
                <div className="flex-grow">
                  <h3 className="font-light">{item.name}</h3>
                  <p className="text-sm text-foreground/70">${item.price.toFixed(2)}</p>
                </div>
                <Button variant="ghost" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            ))}
          </div>
          <div className="bg-muted p-6 space-y-4">
            <h2 className="text-xl font-light">Order Summary</h2>
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            <Button className="w-full rounded-none bg-foreground text-background py-6 uppercase tracking-widest">
                Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
