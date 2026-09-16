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
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />

      {/* Editorial Philosophy Section */}
      <section className="py-12 px-5 md:py-20 md:px-10 xl:py-32 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 xl:gap-20 items-center">
          <div className="md:col-span-5 space-y-4 md:space-y-6 xl:space-y-8">
            <span className="text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-primary/80">The Philosophy</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-light font-heading leading-[1.1] tracking-tight">Crafted for the Modern Woman</h2>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-foreground/70 font-light leading-relaxed">Experience the perfect blend of tradition and contemporary design. Each piece is meticulously crafted to ensure you feel confident and elegant in every movement.</p>
            <Button variant="outline" className="w-full sm:w-auto rounded-none border border-foreground/20 px-6 py-4 md:px-8 md:py-6 xl:px-10 xl:py-7 uppercase tracking-[0.2em] text-xs xl:text-sm hover:bg-foreground hover:text-background transition-all duration-700 ease-in-out">
              Discover Our Story
            </Button>
          </div>
          <div className="md:col-span-7 aspect-[4/5] xl:aspect-[5/6] relative bg-muted shadow-2xl">
            <Image src="/assets/images/lifestyle_01_archway_model.jpg" alt="Editorial Focus" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Lifestyle Mosaic Section */}
      <section className="py-10 px-5 md:py-16 md:px-10 xl:px-32">
        <div className="grid grid-cols-2 gap-2 md:gap-4 h-[40vh] md:h-[50vh] xl:h-[60vh]">
          <div className="col-span-2 row-span-1 md:row-span-2 relative bg-muted"><Image src="/assets/images/lifestyle_02_black_abaya.jpg" alt="Lifestyle" fill className="object-cover" /></div>
          <div className="relative bg-muted"><Image src="/assets/images/lifestyle_03_black_portrait.jpg" alt="Lifestyle" fill className="object-cover" /></div>
          <div className="relative bg-muted"><Image src="/assets/images/lifestyle_04_sleeve_bag.jpg" alt="Lifestyle" fill className="object-cover" /></div>
        </div>
      </section>

      {/* 'The Craft' Storytelling Section */}
      <section className="py-12 md:py-20 xl:py-32 bg-[#f9f5f0] px-5 md:px-10 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 xl:gap-20 items-center">
          <div className="md:col-span-7 aspect-[4/3] relative bg-muted shadow-xl">
            <Image src="/assets/images/detail_01_gold_embroidery.jpg" alt="The Craft" fill className="object-cover" />
          </div>
          <div className="md:col-span-5 space-y-4 md:space-y-6 xl:space-y-8">
            <span className="text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-primary/80">The Craft</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light font-heading leading-tight">Artistry in Every Stitch</h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 font-light leading-relaxed">We source only the finest fabrics, working closely with master artisans. Our attention to detail ensures that every Abaya is not just clothing, but a piece of wearable art designed to last a lifetime.</p>
          </div>
        </div>
      </section>

      {/* Style Guide Navigation Section */}
      <section className="py-12 md:py-20 xl:py-32 px-5 md:px-10 xl:px-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light font-heading mb-8 md:mb-12 xl:mb-16 text-center">Style Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {['Evening Elegance', 'Daytime Chic', 'Minimalist Essentials'].map(guide => (
            <div key={guide} className="group relative aspect-[3/4] bg-muted overflow-hidden">
                <Image src="/assets/images/detail_02_beige_fabric.jpg" alt={guide} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <span className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-xl md:text-2xl font-light text-white tracking-widest">{guide}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Asymmetrical Showcase */}
      <section className="py-12 md:py-20 xl:py-32 bg-background">
        <div className="px-5 mb-8 md:mb-16 xl:mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-light font-heading tracking-tight">Curated Selection</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-16 px-5 md:px-10 xl:px-32">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={`group space-y-4 md:space-y-6 xl:space-y-8 ${index === 1 ? 'lg:mt-16 xl:mt-32' : ''}`}>
              <div className="aspect-[3/4] relative overflow-hidden bg-muted shadow-lg">
                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" />
              </div>
              <div className="space-y-1 md:space-y-2 xl:space-y-3 text-center">
                <h3 className="text-base md:text-lg xl:text-2xl font-light tracking-widest uppercase">{product.name}</h3>
                <p className="text-xs md:text-sm xl:text-base font-light text-foreground/60 italic">{product.description}</p>
                <p className="font-light text-sm md:text-base xl:text-lg tracking-widest pt-1 md:pt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Press Section */}
      <section className="py-12 md:py-20 xl:py-32 bg-[#f9f5f0] px-5 text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-primary/80 mb-6 md:mb-8 block">As Featured In</span>
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 xl:gap-24 text-lg sm:text-xl md:text-3xl xl:text-4xl font-serif text-foreground/40">
           <span>VOGUE</span>
           <span>HARPER&apos;S BAZAAR</span>
           <span>ELLE</span>
           <span>MARIE CLAIRE</span>
        </div>
      </section>

      {/* Newsletter/Lookbook Signup Section */}
      <section className="py-12 md:py-20 xl:py-32 bg-background text-center px-5">
        <div className="max-w-xl mx-auto space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light font-heading tracking-tight">Join Our Journal</h2>
          <p className="text-sm md:text-base xl:text-lg text-foreground/70 font-light">Subscribe to receive our seasonal lookbooks, style guides, and early access to new collections.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 xl:pt-6">
            <input type="email" placeholder="Enter your email" className="w-full p-3 md:p-4 bg-transparent border-b border-foreground/30 focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/40 text-sm md:text-base" />
            <Button variant="outline" className="w-full sm:w-auto rounded-none border border-foreground/20 px-6 md:px-10 py-3 md:py-4 uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-foreground hover:text-background transition-all duration-500">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
