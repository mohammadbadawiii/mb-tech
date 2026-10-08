// Data-access layer. Swap these functions for API/database calls later; UI stays unchanged.
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import type { Product } from "@/types/product";
export async function getProducts(): Promise<Product[]> { return products; }
export async function getFeaturedProducts(): Promise<Product[]> { return products.filter((p) => p.featured); }
export async function getProductBySlug(slug: string) { return products.find((p) => p.slug === slug) ?? null; }
export async function getRelatedProducts(p: Product, limit = 4) {
  return products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, limit);
}
export async function getCategories() { return categories; }
export async function getBrands() { return brands; }
export const formatPrice = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
