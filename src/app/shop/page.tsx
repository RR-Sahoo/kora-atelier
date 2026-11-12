"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import {
  CATEGORIES,
  GARMENTS,
  type CategorySlug,
  type GarmentSize,
} from "@/lib/catalog";

const SIZES: GarmentSize[] = ["XS", "S", "M", "L", "XL"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = (searchParams.get("category") as CategorySlug) || "all";

  const [category, setCategory] = useState<CategorySlug>(initialCat);
  const [sizeFilter, setSizeFilter] = useState<GarmentSize | "">("");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">(
    "featured"
  );

  const filtered = useMemo(() => {
    const list = GARMENTS.filter((g) => {
      if (category !== "all" && g.category !== category) return false;
      if (sizeFilter && !g.sizes.includes(sizeFilter)) return false;
      return true;
    });

    if (sort === "price-asc") {
      return [...list].sort((a, b) => a.priceInr - b.priceInr);
    }
    if (sort === "price-desc") {
      return [...list].sort((a, b) => b.priceInr - a.priceInr);
    }
    return list;
  }, [category, sizeFilter, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="border-b border-[#E5E2DC] pb-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            Collection
          </p>
          <h1 className="font-editorial text-3xl sm:text-4xl text-[#111111] mt-1">
            Shop Capsule 04
          </h1>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
          Showing {filtered.length} Garments
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCategory(c.slug)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] border transition-colors ${
                category === c.slug
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-[#111111] border-[#D4CFC5] hover:border-[#111111]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 mr-1">
              Size:
            </span>
            {SIZES.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSizeFilter(sizeFilter === sz ? "" : sz)}
                className={`px-2.5 py-1.5 text-[10px] font-bold uppercase border transition-colors ${
                  sizeFilter === sz
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-neutral-700 border-[#D4CFC5] hover:border-[#111111]"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            aria-label="Sort garments"
            className="bg-white border border-[#D4CFC5] px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#111111]"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {filtered.map((item) => (
          <ProductCard key={item.slug} product={item} />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-xs uppercase tracking-[0.2em] text-neutral-500">
          Loading collection...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}

