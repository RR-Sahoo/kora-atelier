"use client";

import { ArrowLeft, MessageCircle, Ruler, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import {
  formatInr,
  type GarmentProduct,
  type GarmentSize,
} from "@/lib/catalog";

export function ProductDetailClient({ product }: { product: GarmentProduct }) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState<GarmentSize>(
    product.sizes.includes("M") ? "M" : product.sizes[0]
  );
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const whatsappDemoUrl = `https://wa.me/?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.name} (${selectedColor}, Size ${selectedSize}) from the Kora Atelier concept storefront.`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-600 hover:text-[#111111] mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Dual Studio Images */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.images.map((img, idx) => (
            <div
              key={img}
              className="aspect-[5/6] bg-[#EFECE6] border border-[#E5E2DC] overflow-hidden"
            >
              <img
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Purchase Controls */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <div className="space-y-2 border-b border-[#E5E2DC] pb-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              {product.categoryLabel}
            </p>
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-editorial text-3xl text-[#111111]">
                {product.name}
              </h1>
              <span className="text-lg font-semibold text-[#111111] shrink-0">
                {formatInr(product.priceInr)}
              </span>
            </div>
            <p className="text-xs text-neutral-500">{product.subtitle}</p>
          </div>

          <p className="text-sm text-neutral-700 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selector */}
          <div className="space-y-2.5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-600">
              Color: <strong className="text-[#111111]">{selectedColor}</strong>
            </p>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedColor(c.name)}
                  aria-label={c.name}
                  className={`w-7 h-7 rounded-full border ${
                    selectedColor === c.name
                      ? "ring-2 ring-offset-2 ring-[#111111]"
                      : "border-neutral-300"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-600">
                Size: <strong className="text-[#111111]">{selectedSize}</strong>
              </span>
              <button
                type="button"
                onClick={() => setShowSizeGuide(true)}
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-neutral-600 hover:text-[#111111] underline"
              >
                <Ruler className="w-3.5 h-3.5" />
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`py-2.5 text-xs font-bold uppercase border transition-colors ${
                    selectedSize === sz
                      ? "bg-[#111111] text-white border-[#111111]"
                      : "bg-white text-[#111111] border-[#D4CFC5] hover:border-[#111111]"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={() => addItem(product, selectedSize, selectedColor)}
              className="w-full py-4 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.22em] inline-flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag — {formatInr(product.priceInr)}
            </button>

            <a
              href={whatsappDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp (Option)
            </a>
          </div>

          {/* Specs */}
          <div className="border-t border-[#E5E2DC] pt-5 space-y-3 text-xs">
            <div>
              <span className="font-bold uppercase tracking-wider text-[#111111]">
                Fabric:{" "}
              </span>
              <span className="text-neutral-600">{product.fabric}</span>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-[#111111]">
                Fit:{" "}
              </span>
              <span className="text-neutral-600">{product.fit}</span>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-[#111111]">
                Care:{" "}
              </span>
              <span className="text-neutral-600">{product.care}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white max-w-md w-full p-6 border border-[#E5E2DC] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
                Garment Measurements (Inches)
              </h2>
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                aria-label="Close size guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E2DC] text-neutral-500 uppercase">
                  <th className="py-2">Size</th>
                  <th className="py-2">Chest</th>
                  <th className="py-2">Length</th>
                  <th className="py-2">Shoulder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E2DC]">
                {[
                  ["XS", "40", "26.5", "19.5"],
                  ["S", "42", "27.5", "20.5"],
                  ["M", "44", "28.5", "21.5"],
                  ["L", "46", "29.5", "22.5"],
                  ["XL", "48", "30.5", "23.5"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="py-2 font-bold">{row[0]}</td>
                    <td className="py-2">{row[1]}&quot;</td>
                    <td className="py-2">{row[2]}&quot;</td>
                    <td className="py-2">{row[3]}&quot;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

