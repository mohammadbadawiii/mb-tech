import Link from "next/link";
import type { Category } from "@/types/product";
export default function CategoryCard({ category: c }: { category: Category }) {
  return (
    <Link href={`/shop?category=${c.slug}`} className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-ink">
      <span className="text-2xl" aria-hidden="true">{c.icon}</span>
      <span className="font-semibold">{c.name}</span>
      <span className="text-xs text-neutral-500">{c.description}</span>
    </Link>
  );
}
