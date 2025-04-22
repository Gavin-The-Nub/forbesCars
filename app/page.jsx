import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import CarCarousel from "@/components/car-carousel";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="relative">
        <CarCarousel />
      </section>

      {/* Brief Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/f2a-logo.jpg"
                alt="Forbes Capital Cars Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Welcome to Forbes Capital Cars
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Forbes Capital Cars is a premier car dealership in Manila,
              Philippines, offering a wide selection of quality vehicles at
              negotiable prices. With our commitment to excellent customer
              service and aftersales support, we ensure your car buying
              experience is smooth and satisfying.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span className="text-secondary">Quality Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span className="text-secondary">Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span className="text-secondary">Excellent Aftersales</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span className="text-secondary">Negotiable Prices</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about">About Us</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-silver-400 text-secondary hover:bg-accent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Cars Section */}
      <section id="inventory" className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-secondary">
              Featured Vehicles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our selection of premium vehicles available for purchase.
              All prices are negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Highlighted Car 1 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="relative h-56">
                <Image
                  src="/c1.jpg"
                  alt="Nissan GTR Premium"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs">
                  Premium
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-secondary">
                  Nissan GTR Premium
                </h3>
                <p className="text-muted-foreground text-sm">2018 • White</p>
                <p className="text-xl font-bold mt-2 mb-3 text-secondary">
                  ₱8,580,000
                </p>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Highlighted Car 2 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="relative h-56">
                <Image
                  src="/c2.jpg"
                  alt="McLaren 570s"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs">
                  Luxury
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-secondary">
                  McLaren 570s
                </h3>
                <p className="text-muted-foreground text-sm">
                  2020-21 • Orange
                </p>
                <p className="text-xl font-bold mt-2 mb-3 text-secondary">
                  ₱17,800,000
                </p>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Highlighted Car 3 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="relative h-56">
                <Image
                  src="/c3.jpg"
                  alt="Audi R8 v10"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs">
                  Sport
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-secondary">
                  Audi R8 v10
                </h3>
                <p className="text-muted-foreground text-sm">2018 • Red</p>
                <p className="text-xl font-bold mt-2 mb-3 text-secondary">
                  ₱11,800,000
                </p>
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <Link href="/inventory">View All Inventory</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Car?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today to schedule a viewing or inquire about any of our
              available vehicles. All prices are negotiable and we offer
              financing options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-silver-400 text-secondary hover:bg-accent/50"
                asChild
              >
                <Link href="/inventory">Browse Inventory</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <PhoneCall className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-semibold text-secondary">Call Us</h3>
                <p className="text-muted-foreground">0915 615 3040</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-semibold text-secondary">Email Us</h3>
                <p className="text-muted-foreground">
                  info@forbescapitalcars.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-semibold text-secondary">Visit Us</h3>
                <p className="text-muted-foreground">
                  Flamingo, Manila, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
