import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Forbes Capital Cars - Premium Quality Vehicles",
  description:
    "Forbes Capital Cars is a trusted car dealership offering premium quality vehicles at negotiable prices. Buy, sell, trade, or consign with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
