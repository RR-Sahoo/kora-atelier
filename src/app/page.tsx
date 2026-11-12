import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, GARMENTS } from "@/lib/catalog";

export default function HomePage() {
  const featured = GARMENTS.slice(0, 6);

  return (
    <div>
      {/* Editorial Hero */}
      <section className="border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 font-semibold">
                Autumn / Winter • Capsule 04
              </p>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-[#111111]">
                Form in Motion. Heavyweight Essentials.
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed">
                Small-batch garments cut in architectural silhouettes from
                280–440 GSM organic cotton, brushed wool twill, and fluid
                suiting fabrics.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  Shop the Drop
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lookbook"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  View Lookbook
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#E5E2DC] bg-[#EAE6DF] overflow-hidden">
                <img
                  src="/images/hero-editorial.svg"
                  alt="Kora Atelier Capsule 04 Editorial Silhouette"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="border-b border-[#E5E2DC] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CATEGORIES.filter((c) => c.slug !== "all").map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:border-[#111111] p-5 transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] text-neutral-400 tracking-[0.2em] block">
                    0{i + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#111111] mt-1 block">
                    {cat.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#111111] group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Drop */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                Curated Release
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#111111] mt-1">
                Featured Garments
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] hover:underline inline-flex items-center gap-1.5"
            >
              View Full Collection
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {featured.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Lookbook Split */}
      <section className="bg-[#111111] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 border border-neutral-800 overflow-hidden">
              <img
                src="/images/lookbook-studio.svg"
                alt="Kora Atelier Lookbook Campaign"
                className="w-full h-auto block"
              />
            </div>
            <div className="lg:col-span-5 space-y-5">
              <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-400">
                Editorial Campaign
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl leading-tight">
                Designed Around Proportion &amp; Longevity.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Explore styled outfits from Capsule 04 and jump straight from
                editorial lookbook frames into individual garment sizing and
                fabric specifications.
              </p>
              <div className="pt-2">
                <Link
                  href="/lookbook"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF9F6] hover:bg-neutral-200 text-[#111111] text-xs font-bold uppercase tracking-[0.2em]"
                >
                  Explore Lookbook
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="border-b border-[#E5E2DC] bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "280–440 GSM Fabrics",
              desc: "High-density organic cotton jersey, loopback terry, and structured suiting twill.",
            },
            {
              title: "Small-Batch Tailoring",
              desc: "Limited numbered drops focused on clean seams, drape, and lasting collar structure.",
            },
            {
              title: "Pan-India Dispatch",
              desc: "Complimentary express shipping above ₹3,999 with easy 7-day size exchanges.",
            },
          ].map((p) => (
            <div key={p.title} className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
                {p.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

