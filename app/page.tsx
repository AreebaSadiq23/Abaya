import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

const featuredProducts = [
  { id: 1, name: "Classic Black Abaya", price: 89, image: "/assets/images/product_01_black_embroidery.jpg", description: "Timeless elegance for every occasion." },
  { id: 2, name: "Embroidered Taupe", price: 129, image: "/assets/images/product_02_taupe_abaya.jpg", description: "Subtle details, sophisticated charm." },
  { id: 3, name: "Minimalist Beige", price: 99, image: "/assets/images/product_03_beige_abaya.jpg", description: "Effortless style, refined quality." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroSection />

      {/* Editorial Philosophy Section */}
      <section className="py-32 px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-5 space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] text-primary/80">The Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-light font-heading leading-[1.1] tracking-tight">Crafted for the Modern Woman</h2>
            <p className="text-xl text-foreground/70 font-light leading-relaxed">Experience the perfect blend of tradition and contemporary design. Each piece is meticulously crafted to ensure you feel confident and elegant in every movement.</p>
            <Button variant="outline" className="rounded-none border border-foreground/20 px-10 py-7 uppercase tracking-[0.3em] text-sm hover:bg-foreground hover:text-background transition-all duration-700 ease-in-out">
              Discover Our Story
            </Button>
          </div>
          <div className="md:col-span-7 aspect-[5/6] relative bg-muted shadow-2xl">
            <Image src="/assets/images/lifestyle_01_archway_model.jpg" alt="Editorial Focus" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Lifestyle Mosaic Section (New) */}
      <section className="py-20 px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh]">
          <div className="col-span-2 row-span-2 relative bg-muted"><Image src="/assets/images/lifestyle_02_black_abaya.jpg" alt="Lifestyle" fill className="object-cover" /></div>
          <div className="relative bg-muted"><Image src="/assets/images/lifestyle_03_black_portrait.jpg" alt="Lifestyle" fill className="object-cover" /></div>
          <div className="relative bg-muted"><Image src="/assets/images/lifestyle_04_sleeve_bag.jpg" alt="Lifestyle" fill className="object-cover" /></div>
          <div className="col-span-2 relative bg-muted"><Image src="/assets/images/detail_05_fabric_stack.jpg" alt="Lifestyle" fill className="object-cover" /></div>
        </div>
      </section>

      {/* 'The Craft' Storytelling Section */}
      <section className="py-32 bg-[#f9f5f0] px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-7 aspect-[4/3] relative bg-muted shadow-xl">
            <Image src="/assets/images/detail_01_gold_embroidery.jpg" alt="The Craft" fill className="object-cover" />
          </div>
          <div className="md:col-span-5 space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] text-primary/80">The Craft</span>
            <h3 className="text-4xl md:text-5xl font-light font-heading leading-tight">Artistry in Every Stitch</h3>
            <p className="text-lg text-foreground/70 font-light leading-relaxed">We source only the finest fabrics, working closely with master artisans. Our attention to detail ensures that every Abaya is not just clothing, but a piece of wearable art designed to last a lifetime.</p>
          </div>
        </div>
      </section>

      {/* Style Guide Navigation Section (New) */}
      <section className="py-32 px-6 md:px-12 lg:px-32">
        <h2 className="text-4xl font-light font-heading mb-16 text-center">Style Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Evening Elegance', 'Daytime Chic', 'Minimalist Essentials'].map(guide => (
            <div key={guide} className="group relative aspect-[3/4] bg-muted overflow-hidden">
                <Image src="/assets/images/detail_02_beige_fabric.jpg" alt={guide} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <span className="absolute bottom-6 left-6 text-2xl font-light text-white tracking-widest">{guide}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Asymmetrical Showcase */}
      <section className="py-32 bg-background">
        <div className="px-6 md:px-12 lg:px-32 mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-light font-heading tracking-tight">Curated Selection</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-12 lg:px-32">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={`group space-y-8 ${index === 1 ? 'lg:mt-32' : ''}`}>
              <div className="aspect-[2/3] relative overflow-hidden bg-muted shadow-lg">
                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-2xl font-light tracking-widest uppercase">{product.name}</h3>
                <p className="text-base font-light text-foreground/60 italic">{product.description}</p>
                <p className="font-light text-lg tracking-widest pt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Press Section (New) */}
      <section className="py-32 bg-[#f9f5f0] px-6 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-primary/80 mb-8 block">As Featured In</span>
        <div className="flex flex-wrap justify-center gap-16 md:gap-24 text-2xl md:text-4xl font-serif text-foreground/40">
           <span>VOGUE</span>
           <span>HARPER&apos;S BAZAAR</span>
           <span>ELLE</span>
           <span>MARIE CLAIRE</span>
        </div>
      </section>

      {/* Newsletter/Lookbook Signup Section */}
      <section className="py-32 bg-background text-center px-6">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-light font-heading tracking-tight">Join Our Journal</h2>
          <p className="text-lg text-foreground/70 font-light">Subscribe to receive our seasonal lookbooks, style guides, and early access to new collections.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <input type="email" placeholder="Enter your email" className="flex-grow p-4 bg-transparent border-b border-foreground/30 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/40" />
            <Button variant="outline" className="rounded-none border border-foreground/20 px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-foreground hover:text-background transition-all duration-500">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
