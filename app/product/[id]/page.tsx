"use client";
import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();
  
  // Updated data to include image field for cart functionality
  const product = { 
    id: parseInt(id),
    name: "Classic Black Abaya", 
    price: 129.00, 
    image: `/assets/images/${id}.jfif`,
    description: "Experience the perfect blend of tradition and contemporary design. Crafted from premium, breathable fabric, this piece features subtle hand-embroidery and a silhouette that ensures you feel confident and elegant in every movement.",
    features: ["Premium Crepe Fabric", "Subtle Gold Embroidery", "Includes Matching Hijab"]
  };
  
  const handleAddToCart = () => {
    addToCart(product);
    alert("Added to cart!");
  };
  
  return (
    <main className="min-h-screen bg-background text-foreground py-10 px-5 md:py-20 md:px-12 xl:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
        {/* Left: Image Gallery */}
        <div className="relative aspect-[3/4] bg-muted shadow-2xl">
          <Image 
            src={`/assets/images/${id}.jfif`} 
            alt={product.name} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            priority
          />
        </div>

        {/* Right: Detailed Information */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-10">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light font-heading tracking-tight">{product.name}</h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.1em] text-primary">${product.price.toFixed(2)}</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-light leading-relaxed">{product.description}</p>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-foreground/70 font-light">
                {product.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] font-light">Select Size: <span className="font-medium text-primary">{selectedSize || "None"}</span></p>
            <div className="flex gap-2 sm:gap-4">
                {['S', 'M', 'L', 'XL'].map(size => (
                    <button 
                        key={size} 
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 sm:w-12 sm:h-12 border transition-all duration-300 font-light text-sm ${selectedSize === size ? 'border-primary bg-primary text-primary-foreground' : 'border-foreground/20 hover:border-foreground'}`}
                    >
                        {size}
                    </button>
                ))}
            </div>
          </div>

          <Button 
            onClick={handleAddToCart}
            className="w-full rounded-none border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background py-4 sm:py-6 uppercase tracking-[0.2em] text-sm transition-all duration-500"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
}
