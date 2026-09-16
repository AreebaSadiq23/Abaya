"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

type Product = { id: number; name: string; price: number; image: string };

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="group space-y-4">
        <div className="aspect-[3/4] relative overflow-hidden bg-muted border border-border/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="space-y-1 text-center">
          <h3 className="text-lg font-light tracking-wide">{product.name}</h3>
          <p className="text-sm font-light text-foreground/70">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
