import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/f2a-logo.jpg"
                alt="Forbes Capital Cars Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-secondary">
                Forbes Capital Cars
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in finding premium quality vehicles at
              negotiable prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Buy</li>
              <li className="text-muted-foreground">Sell</li>
              <li className="text-muted-foreground">Trade</li>
              <li className="text-muted-foreground">Consign</li>
              <li className="text-muted-foreground">Financing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">0915 615 3040</li>
              <li className="text-muted-foreground">
                info@forbescapitalcars.com
              </li>
              <li className="text-muted-foreground">
                Flamingo, Manila, Philippines
              </li>
              <li className="text-muted-foreground">Always open</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Forbes Capital Cars. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
