import { Button } from "@/components/ui/button";

export default function PDP() {
  const product = { 
    name: "Embroidered Abaya", 
    price: 129.00, 
    description: "A timeless abaya with delicate hand-embroidery detail. Crafted from premium crepe fabric, it offers elegance, comfort and grace for every occasion." 
  };
  
  return (
    <main className="min-h-screen pt-12 px-12 pb-24 bg-background grid grid-cols-2 gap-16">
      <div className="aspect-[3/4] bg-muted relative">
        {/* Placeholder for images */}
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-serif font-light">{product.name}</h1>
        <p className="text-2xl">${product.price.toFixed(2)}</p>
        <p className="text-foreground/70">{product.description}</p>
        
        <div className="space-y-2">
            <p className="text-sm">Color: Black</p>
            <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-black border border-border" />
                <div className="w-8 h-8 rounded-full bg-gray-600" />
            </div>
        </div>

        <Button className="w-full rounded-none bg-foreground text-background py-6 uppercase tracking-widest">
          Add to Cart
        </Button>
      </div>
    </main>
  );
}
