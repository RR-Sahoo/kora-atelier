export type CategorySlug =
  | "all"
  | "tees-knitwear"
  | "hoodies-sweats"
  | "outerwear"
  | "trousers";

export type GarmentSize = "XS" | "S" | "M" | "L" | "XL";

export interface GarmentColor {
  name: string;
  hex: string;
}

export interface GarmentProduct {
  slug: string;
  name: string;
  subtitle: string;
  category: Exclude<CategorySlug, "all">;
  categoryLabel: string;
  priceInr: number;
  tag?: string;
  colors: GarmentColor[];
  sizes: GarmentSize[];
  images: [string, string];
  fabric: string;
  fit: string;
  care: string;
  description: string;
}

export const CATEGORIES: { slug: CategorySlug; label: string }[] = [
  { slug: "all", label: "Shop All" },
  { slug: "tees-knitwear", label: "Tees & Knitwear" },
  { slug: "hoodies-sweats", label: "Hoodies & Sweats" },
  { slug: "outerwear", label: "Outerwear" },
  { slug: "trousers", label: "Trousers" },
];

export const GARMENTS: GarmentProduct[] = [
  {
    slug: "heavyweight-boxy-tee",
    name: "Heavyweight Boxy Tee",
    subtitle: "280 GSM Combed Organic Cotton",
    category: "tees-knitwear",
    categoryLabel: "Tees & Knitwear",
    priceInr: 1899,
    tag: "BESTSELLER",
    colors: [
      { name: "Obsidian", hex: "#18181B" },
      { name: "Warm Stone", hex: "#A8A29E" },
      { name: "Chalk", hex: "#E7E5E4" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/heavyweight-boxy-tee-1.svg",
      "/images/heavyweight-boxy-tee-2.svg",
    ],
    fabric: "100% Combed Ring-Spun Cotton — 280 GSM",
    fit: "Dropped shoulder, boxy cropped silhouette",
    care: "Machine wash cold inside out, dry flat in shade",
    description:
      "Cut in an architectural boxy block from dense 280 GSM single-jersey cotton with a high-ribbed collar that holds structure wear after wear.",
  },
  {
    slug: "cropped-french-terry-hoodie",
    name: "Atelier French Terry Hoodie",
    subtitle: "440 GSM Loopback Fleece",
    category: "hoodies-sweats",
    categoryLabel: "Hoodies & Sweats",
    priceInr: 4299,
    tag: "CAPSULE 04",
    colors: [
      { name: "Espresso", hex: "#292524" },
      { name: "Charcoal", hex: "#3F3F46" },
      { name: "Oatmeal", hex: "#D6D3CD" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/croppped-french-terry-hoodie-1.svg",
      "/images/croppped-french-terry-hoodie-2.svg",
    ],
    fabric: "100% Heavyweight Loopback French Terry — 440 GSM",
    fit: "Relaxed dropped shoulder, slightly cropped hem",
    care: "Cold gentle wash, do not tumble dry",
    description:
      "Double-lined structured hood with zero drawstrings for a clean neckline, finished with tonal kangaroo pocket stitching and heavy rib cuffs.",
  },
  {
    slug: "wool-blend-overshirt",
    name: "Tailored Wool-Blend Overshirt",
    subtitle: "Structured Layering Piece",
    category: "outerwear",
    categoryLabel: "Outerwear",
    priceInr: 5499,
    tag: "NEW DROP",
    colors: [
      { name: "Slate Umber", hex: "#44403C" },
      { name: "Midnight", hex: "#18181B" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/wool-blend-overshirt-1.svg",
      "/images/wool-blend-overshirt-2.svg",
    ],
    fabric: "Brushed Wool-Viscose Twill — 360 GSM",
    fit: "Relaxed tailored cut designed over tees or knits",
    care: "Dry clean recommended",
    description:
      "Bridges a crisp shirt and an everyday jacket with matte horn buttons, concealed side-seam pockets, and clean chest utility pocket.",
  },
  {
    slug: "wide-pleated-trouser",
    name: "Double-Pleated Wide Trouser",
    subtitle: "Fluid Drape Suiting Twill",
    category: "trousers",
    categoryLabel: "Trousers",
    priceInr: 3699,
    colors: [
      { name: "Ink Black", hex: "#1C1917" },
      { name: "Ash Grey", hex: "#71717A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/wide-pleated-trouser-1.svg",
      "/images/wide-pleated-trouser-2.svg",
    ],
    fabric: "290 GSM Poly-Viscose Elastane Twill",
    fit: "Mid-rise waist, relaxed wide leg with front double pleats",
    care: "Gentle cold wash or steam press",
    description:
      "Engineered for effortless movement with crisp front pleats, concealed hook-and-bar closure, and a full-length clean drape over sneakers or boots.",
  },
  {
    slug: "structured-atelier-trench",
    name: "Structured Atelier Trench",
    subtitle: "Water-Repellent Cotton Gabardine",
    category: "outerwear",
    categoryLabel: "Outerwear",
    priceInr: 8999,
    tag: "LIMITED",
    colors: [
      { name: "Warm Taupe", hex: "#78716C" },
      { name: "Deep Charcoal", hex: "#292524" },
    ],
    sizes: ["S", "M", "L"],
    images: [
      "/images/structured-atelier-trench-1.svg",
      "/images/structured-atelier-trench-2.svg",
    ],
    fabric: "High-Density Cotton Gabardine with Matte Finish",
    fit: "Longline relaxed silhouette with detachable waist belt",
    care: "Spot clean or professional dry clean",
    description:
      "Minimalist storm-flap outerwear stripped of excess hardware, tailored to anchor both casual streetwear and evening looks.",
  },
  {
    slug: "ribbed-merino-polo",
    name: "Open-Collar Knit Polo",
    subtitle: "Fine-Gauge Cotton-Modal Knit",
    category: "tees-knitwear",
    categoryLabel: "Tees & Knitwear",
    priceInr: 2899,
    colors: [
      { name: "Graphite", hex: "#27272A" },
      { name: "Sandstone", hex: "#A8A29E" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/ribbed-merino-polo-1.svg",
      "/images/ribbed-merino-polo-2.svg",
    ],
    fabric: "60% Combed Cotton, 40% Modal Fine Knit",
    fit: "Relaxed torso with ribbed hem & open Johnny collar",
    care: "Hand wash cold, reshape and dry flat",
    description:
      "Breathable open-placket knit polo offering understated texture and soft drape for warm afternoons and layered evenings.",
  },
];

export const LOOKBOOK_SETS = [
  {
    id: "look-01",
    title: "Look 01 — Monolith Layering",
    caption: "Oversized 280 GSM Tee paired with Double-Pleated Wide Trouser.",
    items: ["heavyweight-boxy-tee", "wide-pleated-trouser"],
    image: "/images/hero-editorial.svg",
  },
  {
    id: "look-02",
    title: "Look 02 — Studio Uniform",
    caption: "Tailored Wool-Blend Overshirt styled with Open-Collar Knit Polo.",
    items: ["wool-blend-overshirt", "ribbed-merino-polo"],
    image: "/images/lookbook-studio.svg",
  },
];

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

