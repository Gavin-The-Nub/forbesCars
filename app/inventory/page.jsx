"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Heart, PhoneCall, X } from "lucide-react";

// Car inventory data - Updated for April 2025 with actual images
const cars = [
  {
    id: 1,
    name: "Land Cruiser 200",
    year: "2007",
    price: 3600000,
    color: "Beige",
    image: "/land-cruiser-200.png",
    status: "available",
    type: "suv",
  },
  {
    id: 2,
    name: "Audi R8 V8",
    year: "2014",
    price: 7500000,
    color: "White",
    image: "/audi-r8.png",
    status: "available",
    type: "luxury",
  },
  {
    id: 3,
    name: "Lexus LX570 Prestige",
    year: "2014",
    price: 3270000,
    color: "Black",
    image: "/lexus-lx570.png",
    status: "available",
    type: "luxury",
  },
  {
    id: 4,
    name: "Mustang GT 500",
    year: "2013",
    price: 3470000,
    color: "Red",
    image: "/mustang-gt500.png",
    status: "available",
    type: "sports",
  },
  {
    id: 5,
    name: "Westfield Megabird",
    year: "2020",
    price: 1570000,
    color: "Yellow",
    image: "/westfield-megabird.png",
    status: "available",
    type: "sports",
  },
  {
    id: 6,
    name: "Mercedes Benz Viano (Vclass)",
    year: "2007",
    price: 795000,
    color: "Silver",
    image: "/mercedes-viano.png",
    status: "available",
    type: "mpv",
  },
  {
    id: 7,
    name: "Land Cruiser Navigator Kits",
    year: "2015",
    price: 3170000,
    color: "White",
    image: "/land-cruiser-navigator.png",
    status: "available",
    type: "suv",
  },
  {
    id: 8,
    name: "Mercedes Benz SLK 350",
    year: "2008",
    price: 1470000,
    color: "Silver",
    image: "/mercedes-slk.png",
    status: "available",
    type: "luxury",
  },
  {
    id: 9,
    name: "Mercedes Benz CLA 180",
    year: "2017",
    price: 1270000,
    color: "Black",
    image: "/mercedes-cla.png",
    status: "available",
    type: "luxury",
  },
  {
    id: 10,
    name: "Jaguar XF",
    year: "2010",
    price: 770000,
    color: "Black",
    image: "/jaguar-xf.png",
    status: "available",
    type: "sedan",
  },
  {
    id: 11,
    name: "Toyota Alphard",
    year: "2014",
    price: 828000,
    color: "Silver",
    image: "/toyota-alphard.png",
    status: "available",
    type: "mpv",
  },
  {
    id: 12,
    name: "GMC Savana",
    year: "2017",
    price: 1970000,
    color: "White",
    image: "/gmc-savana.png",
    status: "available",
    type: "mpv",
  },
  /*{
    id: 13,
    name: "Lexus RCF",
    year: "2015",
    price: 3270000,
    color: "Gray",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
    type: "luxury",
  },*/
];

export default function InventoryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500">Available</Badge>;
      case "reserved":
        return (
          <Badge
            variant="outline"
            className="border-yellow-500 text-yellow-500"
          >
            Reserved
          </Badge>
        );
      case "upcoming":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Upcoming
          </Badge>
        );
      default:
        return null;
    }
  };

  // Filter cars based on active filter
  const filteredCars = cars.filter((car) => {
    if (activeFilter === "all") return true;
    if (
      activeFilter === "available" ||
      activeFilter === "reserved" ||
      activeFilter === "upcoming"
    ) {
      return car.status === activeFilter;
    }
    return car.type === activeFilter;
  });

  // Filter options
  const filterOptions = [
    { id: "all", label: "All Vehicles" },
    { id: "available", label: "Available" },
    { id: "luxury", label: "Luxury" },
    { id: "sports", label: "Sports" },
    { id: "sedan", label: "Sedan" },
    { id: "suv", label: "SUV" },
    { id: "mpv", label: "MPV" },
  ];

  return (
    <>
      <Navbar />

      {/* Add Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/c1.jpg"
          alt="Forbes Capital Cars Inventory"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Inventory
            </h1>
            <p className="text-xl text-white/90">Looking for a new car⁉️</p>
            <p className="text-xl font-bold text-white mt-2">
              AVAILABLE UNITS FOR APRIL 2025
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl font-bold mb-4 text-foreground">
            Available Units
          </h1>
          <p className="text-muted-foreground">
            Browse our selection of premium quality vehicles. All prices are
            negotiable and available for cash, trade-in, or financing.
          </p>
        </div>

        <Separator className="mb-8 bg-border" />

        {/* Filter options */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                variant={activeFilter === option.id ? "default" : "outline"}
                className={`rounded-full ${
                  activeFilter === option.id
                    ? "bg-primary hover:bg-primary/90"
                    : "border-input text-foreground hover:bg-accent"
                }`}
                onClick={() => setActiveFilter(option.id)}
              >
                {option.label}
              </Button>
            ))}
          </div>

          {activeFilter !== "all" && (
            <div className="mt-4 text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilter("all")}
                className="text-primary"
              >
                <X className="h-4 w-4 mr-2" />
                Clear filter
              </Button>
            </div>
          )}
        </div>

        {/* Car grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    className="absolute top-2 right-2 p-2 bg-background/80 rounded-full"
                    onClick={() => toggleFavorite(car.id)}
                  >
                    <Heart
                      size={20}
                      className={
                        favorites.includes(car.id)
                          ? "fill-primary text-primary"
                          : "text-foreground"
                      }
                    />
                  </button>
                  <div className="absolute bottom-2 left-2">
                    {getStatusBadge(car.status)}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">{car.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {car.year} • {car.color}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl font-bold text-foreground">
                      {formatPrice(car.price)}
                    </p>
                    <p className="text-xs text-muted-foreground">Negotiable</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 gap-1 bg-primary hover:bg-primary/90"
                    >
                      <PhoneCall size={16} />
                      Inquire
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-input text-foreground"
                      asChild
                    >
                      <Link href={`/car/${car.id}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No vehicles match your search criteria.
            </p>
            <Button
              variant="link"
              className="mt-2 text-primary"
              onClick={() => setActiveFilter("all")}
            >
              Clear filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
