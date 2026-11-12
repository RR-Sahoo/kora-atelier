import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-3 border-b border-[#E5E2DC] pb-8">
        <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
          Studio Note
        </p>
        <h1 className="font-editorial text-4xl text-[#111111]">
          About Kora Atelier (Sample Concept Storefront)
        </h1>
      </div>

      <div className="space-y-5 text-sm text-neutral-700 leading-relaxed">
        <p>
          <strong>Kora Atelier</strong> is a concept e-commerce storefront
          created to demonstrate modern fashion design, clean product
          presentation, lookbook storytelling, and friction-free cart UX.
        </p>
        <p>
          Every aspect of this storefront — color palette (dark, minimal,
          vibrant, or ethnic), typography, currency, size guides, inventory CMS,
          WhatsApp ordering, and Razorpay / Stripe / Shopify checkout — can be
          tailored completely to match your clothing brand&apos;s identity.
        </p>
      </div>

      <div className="pt-4">
        <Link
          href="/shop"
          className="inline-block px-7 py-3.5 bg-[#111111] text-white text-xs font-bold uppercase tracking-[0.2em]"
        >
          Browse the Sample Collection
        </Link>
      </div>
    </div>
  );
}

