"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { PhoneCall, Heart } from "lucide-react";

// Car inventory data
const cars = [
  {
    id: 1,
    name: "Nissan GTR Premium",
    year: "2018",
    price: 8580000,
    color: "White",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 2,
    name: "McLaren 570s",
    year: "2020-21",
    price: 17800000,
    color: "Orange",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 3,
    name: "Honda Civic Fk8",
    year: "2017",
    price: 2650000,
    color: "Red",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 4,
    name: "Audi R8 v10",
    year: "2018",
    price: 11800000,
    color: "Red",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 5,
    name: "Lexus IS350",
    year: "2014-15",
    price: 1100000,
    color: "White",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 6,
    name: "Honda Mobilio RS",
    year: "2023",
    price: 680000,
    color: "Blue",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 7,
    name: "Toyota Vios GRS",
    year: "2023",
    price: 890000,
    color: "Red",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 8,
    name: "Subaru BRZ A/T",
    year: "2015-16",
    price: 1420000,
    color: "Silver",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 9,
    name: "Subaru BRZ",
    year: "2015",
    price: 1350000,
    color: "White",
    transmission: "MT",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 10,
    name: "Montero GLS",
    year: "2020",
    price: 1280000,
    color: "Black",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 11,
    name: "Ford Mustang GT 5.0",
    year: "2017-18",
    price: 2180000,
    color: "Yellow",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 12,
    name: "Ford Mustang GT Shelby",
    year: "2017-18",
    price: 2180000,
    color: "White",
    image: "/placeholder.svg?height=600&width=800",
    status: "available",
  },
  {
    id: 13,
    name: "Montero GT",
    year: "2020",
    price: 1350000,
    color: "White",
    image: "/placeholder.svg?height=600&width=800",
    status: "reserved",
  },
  {
    id: 14,
    name: "TRD 86",
    year: "2019",
    price: 1650000,
    color: "Red",
    image: "/placeholder.svg?height=600&width=800",
    status: "reserved",
  },
  {
    id: 15,
    name: "Subaru BRZ A/T",
    year: "2016",
    price: 1450000,
    color: "White",
    image: "/placeholder.svg?height=600&width=800",
    status: "upcoming",
  },
];

export default function CarInventory() {
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

  return (
    <Tabs defaultValue="available" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="reserved">Reserved</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
      </TabsList>

      <TabsContent value="available">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars
            .filter((car) => car.status === "available")
            .map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden bg-card border-border"
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
                <CardContent className="p-4">
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
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </TabsContent>

      <TabsContent value="reserved">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars
            .filter((car) => car.status === "reserved")
            .map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden bg-card border-border"
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
                <CardContent className="p-4">
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
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </TabsContent>

      <TabsContent value="upcoming">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars
            .filter((car) => car.status === "upcoming")
            .map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden bg-card border-border"
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
                <CardContent className="p-4">
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
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
