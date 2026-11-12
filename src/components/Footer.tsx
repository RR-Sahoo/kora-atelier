import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-[#FAF9F6] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg font-bold tracking-[0.26em] uppercase">
            KORA ATELIER
          </p>
          <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
            A concept clothing storefront demo built to showcase editorial
            fashion design, category &amp; size filtering, color swatches, and
            interactive shopping bag UX. Every element — colors, fonts,
            products, and checkout — can be customized to your brand.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Storefront
          </p>
          <ul className="space-y-2.5 text-xs text-neutral-300">
            <li>
              <Link href="/shop" className="hover:text-white">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="/lookbook" className="hover:text-white">
                Capsule 04 Lookbook
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                Brand &amp; Studio
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Supported Integrations
          </p>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li>Razorpay / Stripe Checkout</li>
            <li>Shopify / Custom CMS</li>
            <li>WhatsApp Quick Ordering</li>
            <li>Size &amp; Inventory Sync</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 px-4 py-5 text-center text-[11px] text-neutral-500 uppercase tracking-[0.2em]">
        KORA ATELIER • Sample Concept Demo
      </div>
    </footer>
  );
}

