"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative space-y-4">
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-2 right-2 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full transition-colors hover:bg-background"
      >
        <Heart className={`w-5 h-5 ${wishlisted ? "fill-primary text-primary" : "text-foreground"}`} />
      </button>
      <Link href={`/product/${product.id}`} className="block">
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
      </Link>
    </div>
  );
}
