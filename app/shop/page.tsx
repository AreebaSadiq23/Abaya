"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Filter } from "lucide-react";

const products = [
  { id: 1, name: "Classic Black Abaya", price: 89, image: "/assets/images/1.jfif" },
  { id: 2, name: "Embroidered Taupe", price: 129, image: "/assets/images/2.jfif" },
  { id: 3, name: "Minimalist Beige", price: 99, image: "/assets/images/3.jfif" },
  { id: 4, name: "Olive Green Abaya", price: 109, image: "/assets/images/4.jfif" },
  { id: 5, name: "Pleated Abaya", price: 109, image: "/assets/images/5.jfif" },
  { id: 6, name: "Premium Silk Abaya", price: 149, image: "/assets/images/6.jfif" },
  { id: 7, name: "Elegant Abaya 7", price: 119, image: "/assets/images/7.jfif" },
  { id: 8, name: "Elegant Abaya 8", price: 129, image: "/assets/images/8.jfif" },
  { id: 9, name: "Elegant Abaya 9", price: 139, image: "/assets/images/9.jfif" },
  { id: 10, name: "Elegant Abaya 10", price: 149, image: "/assets/images/10.jfif" },
  { id: 11, name: "Elegant Abaya 11", price: 159, image: "/assets/images/11.jfif" },
  { id: 12, name: "Elegant Abaya 12", price: 169, image: "/assets/images/12.jfif" },
  { id: 13, name: "Luxury Abaya 13", price: 119, image: "/assets/images/13.jfif" },
  { id: 14, name: "Luxury Abaya 14", price: 129, image: "/assets/images/14.jfif" },
  { id: 15, name: "Luxury Abaya 15", price: 139, image: "/assets/images/15.jfif" },
  { id: 16, name: "Luxury Abaya 16", price: 149, image: "/assets/images/16.jfif" },
  { id: 17, name: "Luxury Abaya 17", price: 159, image: "/assets/images/17.jfif" },
  { id: 18, name: "Luxury Abaya 18", price: 169, image: "/assets/images/18.jfif" },
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
