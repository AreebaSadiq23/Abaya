"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";

type Product = { id: number; name: string; price: number; image: string };

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="group space-y-4">
      <div className="aspect-[3/4] relative overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-light">{product.name}</h3>
        <p className="text-sm text-foreground/70">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
