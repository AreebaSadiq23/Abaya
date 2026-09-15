import ProductCard from "../components/ProductCard";

const products = [
  { id: 7, name: "Silk Crepe Abaya", price: 159, image: "https://picsum.photos/seed/7/400/500" },
  { id: 8, name: "Velvet Detail Abaya", price: 179, image: "https://picsum.photos/seed/8/400/500" },
  { id: 9, name: "Minimalist Linen Abaya", price: 119, image: "https://picsum.photos/seed/9/400/500" },
];

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen pt-12 px-12 pb-24 bg-background">
      <h1 className="text-4xl font-serif font-light mb-12">New Arrivals</h1>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
