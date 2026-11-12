"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";

export function Navbar() {
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/shop", label: "Shop All" },
    { href: "/shop?category=tees-knitwear", label: "Tees & Knits" },
    { href: "/shop?category=outerwear", label: "Outerwear" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur border-b border-[#E5E2DC]">
      {/* Honest Sample Notice Bar */}
      <div className="bg-[#111111] text-[#FAF9F6] text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-center py-2 px-4">
        Concept Fashion Storefront Sample • Customizable to Your Brand Style
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            className="lg:hidden p-1.5 text-[#111111]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link
            href="/"
            className="text-lg sm:text-xl font-bold tracking-[0.26em] uppercase text-[#111111]"
          >
            KORA ATELIER
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.18em] transition-colors ${
                pathname === item.href
                  ? "text-[#111111] font-bold"
                  : "text-neutral-600 hover:text-[#111111]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#111111] hover:opacity-75"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Bag ({totalCount})</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E5E2DC] bg-[#FAF9F6] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] text-[#111111] py-1.5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

