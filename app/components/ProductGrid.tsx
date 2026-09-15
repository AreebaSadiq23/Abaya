import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Elegant Black Abaya", price: 120, image: "/assets/images/product_01_black_embroidery.jpg" },
  { id: 2, name: "Embroidered Abaya", price: 150, image: "/assets/images/product_02_taupe_abaya.jpg" },
  { id: 3, name: "Minimalist Abaya", price: 100, image: "/assets/images/product_03_beige_abaya.jpg" },
  { id: 4, name: "Silk Abaya", price: 200, image: "/assets/images/product_04_olive_abaya.jpg" },
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <h2 className="text-4xl font-serif font-light mb-16 text-center text-primary tracking-wide">The Abaya Edit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
