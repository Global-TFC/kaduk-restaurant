"use client";
import Image from "next/image";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel
          className="w-full h-full"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                width={500}
                height={500}
                src="/ramadanfood.jpg"
                alt="Restaurant Interior"
                className="w-full h-[100vh] object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                width={500}
                height={500}
                src="/hero.png"
                alt="Traditional Mandi dish with spiced lamb and saffron rice"
                className="w-full h-[100vh] object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                width={500}
                height={500}
                src="/kalpa.jpg"
                alt="Restaurant Interior"
                className="w-full h-[100vh] object-cover"
              />
            </CarouselItem>

            <CarouselItem>
              <Image
                width={500}
                height={500}
                src="/menu-spread.jpg"
                alt="Menu Spread"
                className="w-full h-[100vh] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:visible" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:visible" />
        </Carousel>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto px-4 py-16 animate-in fade-in duration-1000 delay-300 min-h-[60vh]">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight text-white mb-2">
          Authentic Flavors
          <span className="block text-4xl md:text-6xl font-playfair font-bold mt-2 ">
            Of <span className="text-primary">Arabia</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-inter font-light max-w-2xl mx-auto leading-relaxed mt-4">
          Indulge in traditional Middle Eastern cuisine crafted with passion and
          served with pride.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            className="hover:text-white px-8 py-3  text-lg transition cursor-pointer"
            size={10}
          >
            Reserve Your Table
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-8 mt-8 text-gold">
          <div className="text-center">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Signature Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
