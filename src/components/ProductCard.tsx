"use client";

import Link from "next/link";
import { useState } from "react";
import { formatInr, type GarmentProduct, type GarmentSize } from "@/lib/catalog";
import { useCart } from "./CartContext";

export function ProductCard({ product }: { product: GarmentProduct }) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[5/6] bg-[#EFECE6] overflow-hidden border border-[#E5E2DC]">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        {product.tag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#FAF9F6]/95 text-[#111111] text-[10px] font-bold uppercase tracking-[0.18em]">
            {product.tag}
          </span>
        )}

        {/* Quick Add Size Strip */}
        <div className="absolute inset-x-3 bottom-3 bg-[#FAF9F6]/95 backdrop-blur border border-[#E5E2DC] p-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hidden sm:block">
          <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 mb-1.5 text-center">
            Quick Add
          </p>
          <div className="flex items-center justify-center gap-1.5">
            {product.sizes.map((sz: GarmentSize) => (
              <button
                key={sz}
                type="button"
                onClick={() => addItem(product, sz, selectedColor)}
                className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider border border-[#D4CFC5] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-colors"
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3.5 space-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/product/${product.slug}`}
            className="text-xs font-bold uppercase tracking-[0.12em] text-[#111111] hover:underline"
          >
            {product.name}
          </Link>
          <span className="text-xs font-medium text-[#111111] shrink-0">
            {formatInr(product.priceInr)}
          </span>
        </div>

        <p className="text-[11px] text-neutral-500">{product.subtitle}</p>

        {/* Color swatches */}
        <div className="flex items-center gap-2 pt-1">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              title={c.name}
              onClick={() => setSelectedColor(c.name)}
              aria-label={`Select color ${c.name}`}
              className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                selectedColor === c.name
                  ? "ring-1 ring-offset-2 ring-[#111111] scale-110"
                  : "border-neutral-300"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <span className="text-[10px] text-neutral-500 ml-1">
            {selectedColor}
          </span>
        </div>
      </div>
    </article>
  );
}

