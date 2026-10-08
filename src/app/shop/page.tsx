import type { Metadata } from "next";
import { getBrands, getCategories, getProducts } from "@/lib/products";
import ShopClient from "@/components/ShopClient";
export const metadata: Metadata = { title: "Shop", description: "Browse mobile accessories and electronics: chargers, cables, power banks, audio and more." };
export default async function ShopPage({ searchParams }: { searchParams: { category?: string } }) {
  const [products, categories, brands] = await Promise.all([getProducts(), getCategories(), getBrands()]);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Shop</h1>
      <ShopClient products={products} categories={categories} brands={brands} initialCategory={searchParams.category ?? ""} />
    </div>
  );
}
