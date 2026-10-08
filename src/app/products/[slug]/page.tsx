import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getCategories, getProductBySlug, getProducts, getRelatedProducts } from "@/lib/products";
import { productMessage } from "@/lib/whatsapp";
import ProductGallery from "@/components/ProductGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGrid from "@/components/ProductGrid";

export async function generateStaticParams() { return (await getProducts()).map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await getProductBySlug(params.slug);
  if (!p) return {};
  return { title: p.name, description: p.description, openGraph: { title: p.name, description: p.description, images: [p.images[0] ?? "/og.png"] } };
}
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const p = await getProductBySlug(params.slug);
  if (!p) notFound();
  const [related, cats] = await Promise.all([getRelatedProducts(p), getCategories()]);
  const cat = cats.find((c) => c.slug === p.category);
  const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description, brand: { "@type": "Brand", name: p.brand },
    offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock" } };
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-500"><Link href="/shop" className="hover:text-ink">Shop</Link> / {p.name}</nav>
      <div className="grid gap-10 md:grid-cols-2">
        <ProductGallery images={p.images} name={p.name} category={p.category} />
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">{p.brand}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">{p.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold">{formatPrice(p.price)}</span>
            {p.oldPrice && <span className="text-lg text-neutral-400 line-through">{formatPrice(p.oldPrice)}</span>}
          </div>
          <p className={`mt-2 text-sm font-medium ${p.inStock ? "text-accent" : "text-neutral-500"}`}>{p.inStock ? "In stock" : "Out of stock"}</p>
          <p className="mt-5 text-neutral-700">{p.description}</p>
          <WhatsAppButton message={productMessage(p.name)} className="mt-6 w-full py-3.5 text-base sm:w-auto sm:px-10" />
          <dl className="mt-8 divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white text-sm">
            <div className="flex justify-between px-4 py-3"><dt className="text-neutral-500">Category</dt><dd><Link href={`/shop?category=${p.category}`} className="font-medium underline">{cat?.name}</Link></dd></div>
            {Object.entries(p.specifications).map(([k, v]) => <div key={k} className="flex justify-between px-4 py-3"><dt className="text-neutral-500">{k}</dt><dd className="font-medium">{v}</dd></div>)}
          </dl>
        </div>
      </div>
      {related.length > 0 && <section className="mt-16"><h2 className="mb-6 text-2xl font-bold">Related products</h2><ProductGrid products={related} /></section>}
    </div>
  );
}
