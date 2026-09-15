import Link from "next/link";

const collections = [
  { id: 1, name: "Celestial", image: "https://picsum.photos/seed/coll1/600/800" },
  { id: 2, name: "Opulence", image: "https://picsum.photos/seed/coll2/600/800" },
  { id: 3, name: "Minimalist", image: "https://picsum.photos/seed/coll3/600/800" },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen pt-24 px-12 pb-24">
      <h1 className="text-5xl font-serif font-light text-primary mb-16 text-center tracking-wide">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {collections.map((collection) => (
          <Link href="/shop" key={collection.id} className="group space-y-4">
            <div className="aspect-[3/4] relative overflow-hidden bg-muted">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-serif font-light text-primary text-center tracking-wide group-hover:underline">
              {collection.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
