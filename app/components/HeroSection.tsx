import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/images/home.jpg"
        alt="Zeenah Collection"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 lg:px-8 space-y-6 md:space-y-10 text-white w-full max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight">
          MODEST ELEGANCE
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-widest uppercase">
          Timeless Modesty, Redefined
        </p>
        <Button 
          variant="outline" 
          className="rounded-none border-2 border-white text-white bg-transparent px-10 py-6 text-lg uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
        >
          Explore the Journey
        </Button>
      </div>
    </section>
  );
}
