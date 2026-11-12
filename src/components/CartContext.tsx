"use client";

import { createContext, useContext, useState } from "react";
import type { GarmentProduct, GarmentSize } from "@/lib/catalog";

export interface CartItem {
  product: GarmentProduct;
  size: GarmentSize;
  colorName: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (
    product: GarmentProduct,
    size: GarmentSize,
    colorName: string
  ) => void;
  updateQty: (
    slug: string,
    size: GarmentSize,
    colorName: string,
    delta: number
  ) => void;
  removeItem: (slug: string, size: GarmentSize, colorName: string) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function addItem(
    product: GarmentProduct,
    size: GarmentSize,
    colorName: string
  ) {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) =>
          i.product.slug === product.slug &&
          i.size === size &&
          i.colorName === colorName
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
        return copy;
      }
      return [...prev, { product, size, colorName, quantity: 1 }];
    });
    setIsOpen(true);
  }

  function updateQty(
    slug: string,
    size: GarmentSize,
    colorName: string,
    delta: number
  ) {
    setItems((prev) =>
      prev
        .map((i) =>
          i.product.slug === slug &&
          i.size === size &&
          i.colorName === colorName
            ? { ...i, quantity: i.quantity + delta }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  }

  function removeItem(slug: string, size: GarmentSize, colorName: string) {
    setItems((prev) =>
      prev.filter(
        (i) =>
          !(
            i.product.slug === slug &&
            i.size === size &&
            i.colorName === colorName
          )
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalCount = items.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = items.reduce(
    (acc, i) => acc + i.product.priceInr * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        updateQty,
        removeItem,
        clearCart,
        totalCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

