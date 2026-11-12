import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { GARMENTS } from "@/lib/catalog";

export function generateStaticParams() {
  return GARMENTS.map((g) => ({ slug: g.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = GARMENTS.find((g) => g.slug === slug);
  if (!product) {
    notFound();
  }
  return <ProductDetailClient product={product} />;
}

