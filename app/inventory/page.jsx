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

// Car inventory data
const cars = [
  {
    id: 1,
    name: "Nissan GTR Premium",
    year: "2018",
    price: 8580000,
    color: "White",
    image: "/u1.jpg",
    status: "available",
    type: "sports",
  },
  {
    id: 2,
    name: "McLaren 570s",
    year: "2020-21",
    price: 17800000,
    color: "Orange",
    image: "/c2.jpg",
    status: "available",
    type: "luxury",
  },
  {
    id: 3,
    name: "Honda Civic Fk8",
    year: "2017",
    price: 2650000,
    color: "Red",
    image: "/u2.jpg",
    status: "available",
    type: "sports",
  },
  {
    id: 4,
    name: "Audi R8 v10",
    year: "2018",
    price: 11800000,
    color: "Red",
    image: "/u3.jpg",
    status: "available",
    type: "luxury",
  },
  {
    id: 5,
    name: "Lexus IS350",
    year: "2014-15",
    price: 1100000,
    color: "White",
    image: "/u4.jpg",
    status: "available",
    type: "sedan",
  },
  {
    id: 6,
    name: "Honda Mobilio RS",
    year: "2023",
    price: 680000,
    color: "Blue",
    image: "/u5.jpg",
    status: "available",
    type: "mpv",
  },
  {
    id: 7,
    name: "Toyota Vios GRS",
    year: "2023",
    price: 890000,
    color: "Red",
    image: "/u6.jpg",
    status: "available",
    type: "sedan",
  },
  {
    id: 8,
    name: "Subaru BRZ A/T",
    year: "2015-16",
    price: 1420000,
    color: "Silver",
    image: "/u7.jpg",
    status: "available",
    type: "sports",
  },
  {
    id: 9,
    name: "Subaru BRZ",
    year: "2015",
    price: 1350000,
    color: "White",
    transmission: "MT",
    image: "/u8.jpg",
    status: "available",
    type: "sports",
  },
  {
    id: 10,
    name: "Montero GLS",
    year: "2020",
    price: 1280000,
    color: "Black",
    image: "/u9.jpg",
    status: "available",
    type: "suv",
  },
  {
    id: 11,
    name: "Ford Mustang GT 5.0",
    year: "2017-18",
    price: 2180000,
    color: "Yellow",
    image: "/u10.jpg",
    status: "available",
    type: "sports",
  },
  {
    id: 12,
    name: "Ford Mustang GT Shelby",
    year: "2017-18",
    price: 2180000,
    color: "White",
    image: "/u11.jpg",
    status: "available",
    type: "sports",
  },
  {
    id: 13,
    name: "Montero GT",
    year: "2020",
    price: 1350000,
    color: "White",
    image: "/u12.jpg",
    status: "reserved",
    type: "suv",
  },
  {
    id: 14,
    name: "TRD 86",
    year: "2019",
    price: 1650000,
    color: "Red",
    image: "/u13.jpg",
    status: "reserved",
    type: "sports",
  },
  {
    id: 15,
    name: "Subaru BRZ A/T",
    year: "2016",
    price: 1450000,
    color: "White",
    image: "/u14.jpg",
    status: "upcoming",
    type: "sports",
  },
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
    { id: "reserved", label: "Reserved" },
    { id: "upcoming", label: "Upcoming" },
    { id: "luxury", label: "Luxury" },
    { id: "sports", label: "Sports" },
    { id: "sedan", label: "Sedan" },
    { id: "suv", label: "SUV" },
  ];

  return (
    <>
      <Navbar />

      {/* Add Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/n1.jpg"
          alt="F2A CARS Inventory"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl text-center md:text-5xl font-bold text-secondary mb-4">
              Our Inventory
            </h1>
            <p className="text-center md:text-xl text-secondary/90">
              Browse our selection of premium quality vehicles
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl font-bold mb-4 text-secondary">
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
                    : "border-silver-400 text-secondary hover:bg-accent"
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
                          : "text-secondary"
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
                      <h3 className="font-bold text-secondary">{car.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {car.year} • {car.color}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xl font-bold text-secondary">
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
                      className="flex-1 border-silver-400 text-secondary"
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
