"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  ArrowLeft,
  Heart,
  Share2,
  Shield,
  Check,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// This would normally come from a database
const getCar = (id) => {
  const cars = [
    {
      id: "1",
      name: "Nissan GTR Premium",
      year: "2018",
      price: 8580000,
      color: "White",
      image: "/c1.jpg",
      status: "available",
      mileage: "15,000 km",
      transmission: "Automatic",
      engine: "3.8L Twin-Turbo V6",
      features: [
        "All-Wheel Drive",
        "Twin-Turbo V6 Engine",
        "565 Horsepower",
        "Premium Sound System",
        "Leather Interior",
        "Navigation System",
        "Backup Camera",
        "Bluetooth Connectivity",
      ],
      description:
        "This 2018 Nissan GT-R Premium is in excellent condition with low mileage. The iconic supercar features a powerful twin-turbo V6 engine, all-wheel drive, and premium interior amenities. Perfect for collectors and performance enthusiasts.",
    },
  ];

  return cars.find((car) => car.id === id) || cars[0];
};

export default function CarDetailPage({ params }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const car = getCar(params.id);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Navbar />

      {/* Add Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src={car.image || "/placeholder.svg?height=800&width=1600"}
          alt={car.name}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              {car.name}
            </h1>
            <p className="text-xl text-secondary/90">
              {car.year} • {car.color}
            </p>
            <p className="text-2xl font-bold text-secondary mt-2">
              {formatPrice(car.price)}
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/inventory"
            className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to inventory
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Car Images */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className={`rounded-full ${
                    isFavorite
                      ? "bg-primary/20"
                      : "bg-background/80 hover:bg-background"
                  }`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    size={18}
                    className={
                      isFavorite ? "fill-primary text-primary" : "text-primary"
                    }
                  />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-background/80 hover:bg-background"
                >
                  <Share2 size={18} className="text-primary" />
                </Button>
              </div>
              <Badge className="absolute bottom-4 left-4 bg-green-500">
                Available
              </Badge>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-md overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-secondary">{car.name}</h1>
              <p className="text-muted-foreground">
                {car.year} • {car.color}
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold text-secondary">
                {formatPrice(car.price)}
              </p>
              <Badge
                variant="outline"
                className="ml-3 border-silver-400 text-secondary"
              >
                Negotiable
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                <PhoneCall size={18} />
                Call Dealer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-silver-400 text-secondary hover:bg-accent"
              >
                Request Information
              </Button>
            </div>

            <Separator className="bg-border" />

            <div>
              <h2 className="text-xl font-semibold mb-4 text-secondary">
                Specifications
              </h2>
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-medium text-secondary">{car.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Color</p>
                  <p className="font-medium text-secondary">{car.color}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Mileage</p>
                  <p className="font-medium text-secondary">{car.mileage}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-medium text-secondary">
                    {car.transmission}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Engine</p>
                  <p className="font-medium text-secondary">{car.engine}</p>
                </div>
              </div>
            </div>

            <Separator className="bg-border" />

            <div>
              <h2 className="text-xl font-semibold mb-4 text-secondary">
                Features
              </h2>
              <div className="grid grid-cols-2 gap-y-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-border" />

            <div>
              <h2 className="text-xl font-semibold mb-4 text-secondary">
                Description
              </h2>
              <p className="text-muted-foreground">{car.description}</p>
            </div>

            <div className="bg-accent p-4 rounded-lg flex items-center gap-4 border border-border">
              <Shield className="text-primary h-10 w-10" />
              <div>
                <h3 className="font-semibold text-secondary">
                  F2A CARS Quality Guarantee
                </h3>
                <p className="text-sm text-muted-foreground">
                  All our vehicles undergo thorough inspection and come with
                  excellent aftersales service.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-secondary">
            Similar Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <div className="relative h-48">
                  <Image
                    src="/u2.jpg"
                    alt="Similar car"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-secondary">
                    Similar Vehicle {i}
                  </h3>
                  <p className="text-sm text-muted-foreground">2020 • White</p>
                  <p className="text-lg font-bold mt-2 text-secondary">
                    ₱2,500,000
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
