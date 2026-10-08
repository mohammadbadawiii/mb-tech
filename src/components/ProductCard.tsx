import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/products";
import { productMessage } from "@/lib/whatsapp";
import ProductImage from "./ProductImage";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md">
      <Link href={`/products/${p.slug}`} className="relative block" aria-label={`View ${p.name}`}>
        <ProductImage src={p.images[0]} alt={p.name} category={p.category} />
        {p.isNew && <span className="absolute left-2 top-2 rounded bg-ink px-2 py-0.5 text-[11px] font-semibold text-white">New</span>}
      </Link>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{p.brand}</p>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold sm:text-base"><Link href={`/products/${p.slug}`}>{p.name}</Link></h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold">{formatPrice(p.price)}</span>
          {p.oldPrice && <span className="text-sm text-neutral-400 line-through">{formatPrice(p.oldPrice)}</span>}
        </div>
        <p className={`mt-1 text-xs font-medium ${p.inStock ? "text-accent" : "text-neutral-500"}`}>{p.inStock ? "In stock" : "Out of stock"}</p>
        <div className="mt-auto flex flex-col gap-2 pt-3">
          <Link href={`/products/${p.slug}`} className="rounded-lg border border-neutral-300 px-3 py-2 text-center text-sm font-semibold hover:border-ink">View Product</Link>
          <WhatsAppButton message={productMessage(p.name)} label="Order on WhatsApp" />
        </div>
      </div>
    </article>
  );
}
