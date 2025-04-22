"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Featured cars data - Updated for April 2025 with actual images
const featuredCars = [
  {
    id: 2,
    name: "Audi R8 V8",
    year: "2014",
    price: 7500000,
    color: "White",
    image: "/audi-r8.png",
    description: "Powerful V8 Engine, Premium Interior, Iconic Design",
  },
  {
    id: 3,
    name: "Lexus LX570 Prestige",
    year: "2014",
    price: 3270000,
    color: "Black",
    image: "/lexus-lx570.png",
    description: "Luxury SUV, Premium Features, Exceptional Comfort",
  },
  {
    id: 4,
    name: "Mustang GT 500",
    year: "2013",
    price: 3470000,
    color: "Red",
    image: "/mustang-gt500.png",
    description: "American Muscle, Powerful Engine, Iconic Design",
  },
];

export default function CarCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % featuredCars.length);
  };

  const prev = () => {
    setCurrent((current - 1 + featuredCars.length) % featuredCars.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="relative h-screen mt-[-70px] w-full overflow-hidden">
      {/* Carousel slides */}
      {featuredCars.map((car, index) => (
        <div
          key={car.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
          <Image
            src={car.image || "/placeholder.svg"}
            alt={car.name}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Update the text overlay to ensure it's readable in light mode */}
          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-md text-sm mb-4">
                Featured Vehicle
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {car.name}
              </h2>
              <p className="text-xl text-white/90 mb-2">
                {car.year} • {car.color}
              </p>
              <p className="text-2xl font-bold text-white mb-4">
                {formatPrice(car.price)}
              </p>
              <p className="text-white/80 mb-6">{car.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-[#e32636] hover:bg-[#c01f2d] text-white"
                >
                  <Link href={`/car/${car.id}`}>View Details</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/20"
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="bg-black/50 border-silver-400 text-white hover:bg-black/70 rounded-full"
          onClick={() => {
            prev();
            setAutoplay(false);
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-black/50 border-silver-400 text-white hover:bg-black/70 rounded-full"
          onClick={() => {
            next();
            setAutoplay(false);
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {featuredCars.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? "bg-primary w-8" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrent(index);
              setAutoplay(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
