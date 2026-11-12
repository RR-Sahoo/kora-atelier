"use client";

import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react";
import { formatInr } from "@/lib/catalog";
import { useCart } from "./CartContext";

const FREE_SHIPPING_THRESHOLD = 3999;

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQty,
    removeItem,
    clearCart,
    subtotal,
    totalCount,
  } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const remainingForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal
  );
  const progressPct = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/40 backdrop-blur-[1px]"
      />

      {/* Drawer */}
      <aside className="relative w-full max-w-md bg-[#FAF9F6] h-full shadow-2xl flex flex-col border-l border-[#E5E2DC]">
        <div className="px-6 py-5 border-b border-[#E5E2DC] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-[#111111]" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]">
              Shopping Bag ({totalCount})
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close bag"
            className="p-1.5 text-neutral-600 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="px-6 py-3 bg-white border-b border-[#E5E2DC]">
          <p className="text-[11px] uppercase tracking-wider text-neutral-600 mb-2">
            {remainingForFreeShipping === 0
              ? "Unlocked complimentary express shipping"
              : `Add ${formatInr(remainingForFreeShipping)} more for complimentary shipping`}
          </p>
          <div className="h-1 w-full bg-neutral-200 overflow-hidden">
            <div
              className="h-full bg-[#111111] transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {checkedOut ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#111111] mx-auto" />
              <p className="text-sm font-bold uppercase tracking-[0.18em]">
                Sample Checkout Preview
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
                This is a concept storefront demo. In your live brand store,
                this button connects directly to Razorpay, Stripe, or Shopify
                checkout.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCheckedOut(false);
                  clearCart();
                  closeCart();
                }}
                className="px-6 py-3 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Continue Browsing
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Your bag is currently empty
              </p>
              <p className="text-xs text-neutral-500">
                Select a size on any garment to preview the cart experience.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.slug}-${item.size}-${item.colorName}`}
                className="flex gap-4 pb-5 border-b border-[#E5E2DC]"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover bg-[#EFECE6] border border-[#E5E2DC]"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                        {item.product.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(
                            item.product.slug,
                            item.size,
                            item.colorName
                          )
                        }
                        aria-label="Remove item"
                        className="text-neutral-400 hover:text-black"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      {item.colorName} • Size {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="inline-flex items-center border border-[#D4CFC5] bg-white">
                      <button
                        type="button"
                        onClick={() =>
                          updateQty(
                            item.product.slug,
                            item.size,
                            item.colorName,
                            -1
                          )
                        }
                        className="px-2 py-1 text-neutral-700 hover:bg-neutral-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQty(
                            item.product.slug,
                            item.size,
                            item.colorName,
                            1
                          )
                        }
                        className="px-2 py-1 text-neutral-700 hover:bg-neutral-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-xs font-semibold text-[#111111]">
                      {formatInr(item.product.priceInr * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && !checkedOut && (
          <div className="p-6 bg-white border-t border-[#E5E2DC] space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-[0.18em] text-neutral-600">
                Subtotal
              </span>
              <span className="text-sm font-bold text-[#111111]">
                {formatInr(subtotal)}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setCheckedOut(true)}
              className="w-full py-3.5 bg-[#111111] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-[0.22em] transition-colors"
            >
              Proceed to Checkout (Demo)
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

