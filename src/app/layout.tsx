import type { Metadata } from "next";
import { CartProvider } from "@/components/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KORA ATELIER | Contemporary Clothing Storefront Demo",
    template: "%s | KORA ATELIER",
  },
  description:
    "Concept fashion & contemporary streetwear storefront demo featuring editorial lookbook, category & size filters, color swatches, and interactive shopping bag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111111]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

