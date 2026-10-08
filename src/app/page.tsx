import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getBrands, getCategories, getFeaturedProducts } from "@/lib/products";
import { generalMessage } from "@/lib/whatsapp";
import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import ProductGrid from "@/components/ProductGrid";
import WhatsAppButton from "@/components/WhatsAppButton";

const reasons = [
  ["Quality Products", "Carefully selected accessories and electronics from trusted brands."],
  ["Competitive Prices", "Fair pricing on everyday tech."],
  ["Delivery Across Lebanon", "We deliver to your door."],
  ["WhatsApp Support", "Ask a question or place an order in one message."],
];

export default async function Home() {
  const [categories, featured, brands] = await Promise.all([getCategories(), getFeaturedProducts(), getBrands()]);
  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{siteConfig.tagline}</h1>
            <p className="mt-4 max-w-md text-lg text-neutral-600">We offer quality mobile accessories and electronics at competitive prices.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="rounded-lg bg-ink px-6 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800">Shop Products</Link>
              <WhatsAppButton message={generalMessage} label="Chat on WhatsApp" variant="outline" className="px-6 py-3" />
            </div>
          </div>
          {/* Placeholder visual: replace with real product photography */}
          <div role="img" aria-label="Product visual placeholder" className="grid aspect-[4/3] grid-cols-3 gap-3 rounded-2xl bg-neutral-100 p-4">
            {["⌚", "🎧", "🔋", "⚡", "🔌", "🚗"].map((e, i) => (
              <div key={i} className="flex items-center justify-center rounded-xl bg-white text-4xl shadow-sm">{e}</div>
            ))}
          </div>
        </div>
      </section>
      <Section id="categories" title="Shop by category">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categories.map((c) => <CategoryCard key={c.slug} category={c} />)}</div>
      </Section>
      <Section title="Featured products"><ProductGrid products={featured} />
        <div className="mt-8 text-center"><Link href="/shop" className="text-sm font-semibold underline underline-offset-4">View all products</Link></div>
      </Section>
      <Section title="Brands we carry">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {brands.map((b) => <li key={b} className="rounded-xl border border-neutral-200 bg-white py-5 text-center text-lg font-bold tracking-wide text-neutral-700">{b}</li>)}
        </ul>
      </Section>
      <Section title="Why choose us">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([t, d]) => <div key={t} className="rounded-xl border border-neutral-200 bg-white p-5"><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-neutral-600">{d}</p></div>)}
        </div>
      </Section>
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-ink px-6 py-12 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to order?</h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-300">Message us on WhatsApp to check availability and place your order.</p>
          <WhatsAppButton message={generalMessage} label="Order on WhatsApp" className="mt-6 px-8 py-3" />
        </div>
      </section>
    </>
  );
}
