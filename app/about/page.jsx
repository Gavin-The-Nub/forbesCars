"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      vehicle: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/c3.jpg"
          alt="Contact Forbes Capital Cars"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-secondary/90">
              Get in touch with our team for inquiries and assistance
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get in touch with us for inquiries about our vehicles or to
              schedule a viewing.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-secondary">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-secondary">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-input text-secondary border-border"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-secondary">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input text-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-secondary">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-input text-secondary border-border"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-secondary">
                    Service Interested In
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleSelectChange("service", value)
                    }
                  >
                    <SelectTrigger
                      id="service"
                      className="bg-input text-secondary border-border"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card text-secondary border-border">
                      <SelectItem value="buy">Buy a Vehicle</SelectItem>
                      <SelectItem value="sell">Sell Your Vehicle</SelectItem>
                      <SelectItem value="trade">Trade-In</SelectItem>
                      <SelectItem value="consign">Consignment</SelectItem>
                      <SelectItem value="financing">
                        Financing Options
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicle" className="text-secondary">
                    Vehicle of Interest
                  </Label>
                  <Input
                    id="vehicle"
                    name="vehicle"
                    placeholder="Which vehicle are you interested in?"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="bg-input text-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-secondary">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your inquiry"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input text-secondary border-border"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Reach out to us directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-secondary">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      0915 615 3040
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-secondary">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      info@forbescapitalcars.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-secondary">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      Forbes Capital Cars, Pasig City, Metro Manila, Philippines
                    </p>
                    <div className="mt-2">
                      <a
                        href="https://www.google.com/maps/place/Forbes+Capital+Cars+Pasig/@14.6157225,121.0984768,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b9cb4eb93dd5:0xb112ebe0fa79b65b!8m2!3d14.6157225!4d121.0984768!16s%2Fg%2F11ss9qv745?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">Business Hours</CardTitle>
                <CardDescription className="text-muted-foreground">
                  When you can reach us.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary">Monday - Sunday</span>
                    <span className="text-muted-foreground">Always Open</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-secondary">Our Services</CardTitle>
                <CardDescription className="text-muted-foreground">
                  What we offer to our clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-secondary">
                      Buy - Purchase your dream car
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-secondary">
                      Sell - We'll help you sell your vehicle
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-secondary">
                      Trade - Trade in your current vehicle
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-secondary">
                      Consign - We'll help you find buyers
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
