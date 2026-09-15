import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen pt-12 px-12 pb-24 bg-background max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-light mb-12">Checkout</h1>
      <div className="grid grid-cols-2 gap-12">
        <section className="space-y-6">
            <h2 className="text-xl font-light">Shipping Address</h2>
            <input className="w-full bg-transparent border-b border-border p-2" placeholder="Full Name" />
            <input className="w-full bg-transparent border-b border-border p-2" placeholder="Address" />
            <input className="w-full bg-transparent border-b border-border p-2" placeholder="City" />
            <input className="w-full bg-transparent border-b border-border p-2" placeholder="Phone Number" />
        </section>
        <section className="space-y-6">
            <h2 className="text-xl font-light">Payment Method</h2>
            <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2"><input type="radio" name="pay" /> Credit/Debit Card</label>
                <label className="flex items-center gap-2"><input type="radio" name="pay" /> Cash on Delivery</label>
            </div>
            <Button className="w-full rounded-none bg-foreground text-background py-6 uppercase tracking-widest">
                Place Order
            </Button>
        </section>
      </div>
    </main>
  );
}
