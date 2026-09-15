import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/images/home.jpg"
        alt="Zeenah Collection"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 lg:px-8 space-y-4 md:space-y-8 text-white w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-tight">
          MODEST ELEGANCE
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl">
          Timeless Modesty, Redefined
        </p>
        <Button 
          variant="outline" 
          className="rounded-none border-2 border-white text-white bg-transparent px-8 py-3 md:px-10 md:py-4 uppercase tracking-widest hover:bg-white hover:text-black w-full sm:w-auto transition-all duration-300"
        >
          Explore the Journey
        </Button>
      </div>
    </section>
  );
}
