"use client";
import { useState } from "react";
import ProductImage from "./ProductImage";
export default function ProductGallery({ images, name, category }: { images: string[]; name: string; category: string }) {
  const [i, setI] = useState(0);
  const thumbs = images.length ? images : [undefined, undefined, undefined];
  return (
    <div>
      <ProductImage src={images[i]} alt={name} category={category} className="rounded-xl border border-neutral-200" />
      <div className="mt-3 grid grid-cols-4 gap-2">
        {thumbs.map((src, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Show image ${idx + 1}`}
            className={`overflow-hidden rounded-lg border-2 ${i === idx ? "border-ink" : "border-transparent"}`}>
            <ProductImage src={src} alt={`${name} view ${idx + 1}`} category={category} />
          </button>
        ))}
      </div>
    </div>
  );
}
