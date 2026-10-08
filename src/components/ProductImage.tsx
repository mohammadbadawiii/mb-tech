import Image from "next/image";
import { categories } from "@/data/categories";
// Shows the real image if available; otherwise a clearly-marked placeholder.
export default function ProductImage({ src, alt, category, className = "" }: { src?: string; alt: string; category: string; className?: string }) {
  if (src) return <div className={`relative aspect-square overflow-hidden bg-neutral-100 ${className}`}><Image src={src} alt={alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-contain p-4" /></div>;
  const icon = categories.find((c) => c.slug === category)?.icon ?? "📦";
  return (
    <div role="img" aria-label={`${alt} (placeholder image)`} className={`relative flex aspect-square flex-col items-center justify-center gap-2 bg-gradient-to-b from-neutral-100 to-neutral-200 ${className}`}>
      <span className="text-5xl" aria-hidden="true">{icon}</span>
      <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">Placeholder image</span>
    </div>
  );
}
