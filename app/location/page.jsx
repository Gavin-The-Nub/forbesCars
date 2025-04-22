"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Navigation, Clock, Car } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function LocationPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/u15.jpg"
          alt="Forbes Capital Cars Location"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Our Location
            </h1>
            <p className="text-xl text-secondary/90">
              Visit our dealership in Pasig City
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
              Find Us Easily
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Visit our dealership in Pasig to view our premium vehicles in
              person.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <Card className="mb-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-secondary">
                Visit Our Dealership
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Our dealership is conveniently located in Pasig City,
                Philippines.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden rounded-b-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.965514472328!2d121.09628771538445!3d14.615727789791137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9cb4eb93dd5%3A0xb112ebe0fa79b65b!2sForbes%20Capital%20Cars%20Pasig!5e0!3m2!1sen!2sph!4v1713762187534!5m2!1sen!2sph"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Forbes Capital Cars Pasig Location"
              />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">
                  Address & Directions
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  How to find us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary">Address</h3>
                    <p className="text-muted-foreground">
                      144 Dr. Sixto Antonio Avenue, Pasig, Metro Manila,
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="bg-accent p-4 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2 text-secondary">
                    Directions
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span className="text-muted-foreground">
                        From Eulogio Rodriguez Jr. Ave (C-5), turn into Dr.
                        Sixto Antonio Avenue.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span className="text-muted-foreground">
                        Drive straight for around 1.5 km — you'll see Forbes
                        Capital Cars on your left.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span className="text-muted-foreground">
                        We’re right beside the Total gas station.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-start gap-4">
                  <Navigation className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary">Navigation</h3>
                    <p className="text-muted-foreground mb-2">
                      Use these coordinates in your GPS:
                    </p>
                    <p className="text-sm bg-accent p-2 rounded font-mono text-secondary">
                      14.6157° N, 121.0985° E
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full md:w-auto bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/8Pb6KQBCscKTYvg57"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions on Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-secondary">
                    Hours of Operation
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    When you can visit us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-secondary">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        We are always open to serve you.
                      </p>
                      <div className="mt-2">
                        <p className="font-semibold text-secondary">
                          Monday - Sunday
                        </p>
                        <p className="text-muted-foreground">
                          24 hours / 7 days a week
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-secondary">
                    Parking Information
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Convenient parking options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We offer free parking for all our customers. There is ample
                    space available in our dealership lot.
                  </p>
                  <div className="flex items-start gap-4">
                    <Car className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-secondary">
                        Test Drive
                      </h3>
                      <p className="text-muted-foreground">
                        Visit us today to test drive any of our available
                        vehicles. No appointment necessary, but we recommend
                        calling ahead for specific models.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">
                  Dealership Photos
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Take a virtual tour of our facility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-border">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Dealership exterior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden border border-border">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Showroom interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden border border-border">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Vehicle display"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Ready to Visit Us?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Come see our premium vehicles in person and take a test drive. Our
              friendly staff is ready to assist you with all your automotive
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-silver-400 text-secondary hover:bg-accent"
                asChild
              >
                <Link href="/inventory">Browse Inventory</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
