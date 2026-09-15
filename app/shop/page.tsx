"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Filter } from "lucide-react";

const products = [
  { id: 1, name: "Classic Black Abaya", price: 89, image: "/assets/images/product_01_black_embroidery.jpg" },
  { id: 2, name: "Embroidered Abaya", price: 129, image: "/assets/images/product_02_taupe_abaya.jpg" },
  { id: 3, name: "Beige Open Abaya", price: 99, image: "/assets/images/product_03_beige_abaya.jpg" },
  { id: 4, name: "Olive Green Abaya", price: 109, image: "/assets/images/product_04_olive_abaya.jpg" },
  { id: 5, name: "Pleated Abaya", price: 109, image: "/assets/images/product_05_black_abaya.jpg" },
  { id: 6, name: "Premium Silk Abaya", price: 149, image: "/assets/images/product_06_black_gold_abaya.jpg" },
];

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main className="min-h-screen pt-8 md:pt-12 px-4 md:px-12 pb-24 bg-background">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-serif font-light">Shop All Abayas</h1>
        <button 
          className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest border border-border px-4 py-2 w-max"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="w-4 h-4" /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-[200px,1fr] gap-12">
        {/* Sidebar */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block space-y-8 bg-muted/30 p-4 md:p-0 md:bg-transparent`}>
          <div>
            <h3 className="font-medium mb-4 uppercase tracking-widest text-sm">Categories</h3>
            <ul className="text-sm space-y-3 text-foreground/70">
              <li className="hover:text-primary cursor-pointer transition-colors">All Abayas</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Classic</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Embroidered</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Open Abayas</li>
            </ul>
          </div>
        </aside>
        
        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
