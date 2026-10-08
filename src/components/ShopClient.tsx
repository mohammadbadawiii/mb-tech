"use client";
import { useMemo, useState } from "react";
import type { Product, Category } from "@/types/product";
import ProductGrid from "./ProductGrid";

const field = "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none";
export default function ShopClient({ products, categories, brands, initialCategory = "" }:
  { products: Product[]; categories: Category[]; brands: string[]; initialCategory?: string }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("featured");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const r = products.filter((p) =>
      (!category || p.category === category) && (!brand || p.brand === brand) &&
      (!s || `${p.name} ${p.brand}`.toLowerCase().includes(s)));
    if (sort === "price-asc") r.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") r.sort((a, b) => b.price - a.price);
    else if (sort === "newest") r.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    else r.sort((a, b) => Number(b.featured) - Number(a.featured));
    return r;
  }, [products, q, category, brand, sort]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <input type="search" aria-label="Search products" placeholder="Search products" value={q} onChange={(e) => setQ(e.target.value)} className={`${field} col-span-2 md:col-span-4`} />
        <select aria-label="Category" value={category} onChange={(e) => setCategory(e.target.value)} className={field}>
          <option value="">All categories</option>{categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
        <select aria-label="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} className={field}>
          <option value="">All brands</option>{brands.map((b) => <option key={b}>{b}</option>)}
        </select>
        <select aria-label="Sort" value={sort} onChange={(e) => setSort(e.target.value)} className={`${field} col-span-2`}>
          <option value="featured">Featured</option><option value="newest">Newest</option>
          <option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option>
        </select>
      </div>
      <p className="my-5 text-sm text-neutral-500" aria-live="polite">{list.length} product{list.length === 1 ? "" : "s"}</p>
      {list.length ? <ProductGrid products={list} /> : <p className="rounded-xl border border-dashed border-neutral-300 p-10 text-center text-neutral-500">No products match your filters.</p>}
    </>
  );
}
