import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gem, Truck, ShieldCheck, RefreshCw, Heart } from "lucide-react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

const bestSellers = [
  { id: 10, name: "Classic Black Abaya", price: 89, image: "/assets/images/product_01_black_embroidery.jpg" },
  { id: 11, name: "Embroidered Abaya", price: 129, image: "/assets/images/product_02_taupe_abaya.jpg" },
  { id: 12, name: "Linen Open Abaya", price: 99, image: "/assets/images/product_03_beige_abaya.jpg" },
  { id: 13, name: "Pleated Abaya", price: 109, image: "/assets/images/product_04_olive_abaya.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroSection />

      {/* Features Bar */}
      <section className="py-8 px-4 md:px-12 border-b border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs md:text-sm uppercase tracking-widest">
        <div className="flex flex-col items-center gap-2"><Gem className="w-5 h-5" /> Premium Quality Fabrics</div>
        <div className="flex flex-col items-center gap-2"><Truck className="w-5 h-5" /> Worldwide Shipping</div>
        <div className="flex flex-col items-center gap-2"><ShieldCheck className="w-5 h-5" /> Secure Payments</div>
        <div className="flex flex-col items-center gap-2"><RefreshCw className="w-5 h-5" /> Easy Returns</div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 md:py-24 px-4 md:px-12">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-wide">Shop by Category</h2>
          <Link href="/shop" className="text-sm underline tracking-widest">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            { name: 'Classic Abayas', img: '/assets/images/lifestyle_01_archway_model.jpg' },
            { name: 'Embroidered', img: '/assets/images/lifestyle_02_black_abaya.jpg' },
            { name: 'Open Abayas', img: '/assets/images/lifestyle_03_black_portrait.jpg' },
            { name: 'Seasonal Collection', img: '/assets/images/lifestyle_04_sleeve_bag.jpg' }
          ].map((cat) => (
            <div key={cat.name} className="aspect-[3/4] bg-muted relative group overflow-hidden">
                <Image src={cat.img} alt={cat.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute bottom-4 left-4 text-sm md:text-xl font-light text-white">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-12 md:py-24 px-4 md:px-12">
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif font-light tracking-wide text-left">Best Sellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <div key={product.id} className="relative group space-y-4">
              <button className="absolute top-4 left-4 z-10 p-2 bg-background/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm md:text-lg font-light">{product.name}</h3>
                <p className="text-xs md:text-sm text-foreground/70">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative py-20 md:py-24 px-4 md:px-12 text-center text-white space-y-6">
        <Image src="/assets/images/lifestyle_01_archway_model.jpg" alt="Banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative space-y-4 md:space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif font-light tracking-wide">More Than Just An Abaya</h2>
            <p className="text-sm md:text-base">It&apos;s a statement of elegance, comfort and confidence.</p>
            <Button variant="outline" className="rounded-none border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-3 uppercase tracking-widest transition-all duration-300">
                Our Story
            </Button>
        </div>
      </section>
    </div>
  );
}
