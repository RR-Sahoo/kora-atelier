import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatInr, GARMENTS, LOOKBOOK_SETS } from "@/lib/catalog";

export default function LookbookPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      <div className="max-w-2xl space-y-3">
        <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
          Editorial Lookbook
        </p>
        <h1 className="font-editorial text-4xl text-[#111111]">
          Capsule 04 — Styled Looks
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Each lookbook frame connects directly to the featured garments so
          shoppers can jump seamlessly from campaign photography to purchase.
        </p>
      </div>

      <div className="space-y-16">
        {LOOKBOOK_SETS.map((look) => {
          const items = GARMENTS.filter((g) => look.items.includes(g.slug));
          return (
            <section
              key={look.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#E5E2DC] pt-12"
            >
              <div className="lg:col-span-7 border border-[#E5E2DC] bg-[#EAE6DF] overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-auto block"
                />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="font-editorial text-2xl text-[#111111]">
                    {look.title}
                  </h2>
                  <p className="text-sm text-neutral-600 mt-2">
                    {look.caption}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                    Shop the Pieces in This Look
                  </p>
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/product/${item.slug}`}
                      className="flex items-center justify-between p-3.5 bg-white border border-[#E5E2DC] hover:border-[#111111] transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-12 h-14 object-cover bg-[#EFECE6]"
                        />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-neutral-500">
                            {formatInr(item.priceInr)}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-500" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

