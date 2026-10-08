"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "./WhatsAppButton";
import { generalMessage } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label={`${siteConfig.name} — home`} className="flex shrink-0 items-center">
          <Image src="/brand/mb-tech-logo.png" alt={siteConfig.name} width={1255} height={467} priority sizes="(min-width: 768px) 119px, 108px" className="h-10 w-auto md:h-11" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {siteConfig.nav.map((n) => <Link key={n.label} href={n.href} className="text-neutral-600 hover:text-ink">{n.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/shop" className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-semibold hover:border-ink">Shop</Link>
          <WhatsAppButton message={generalMessage} label="WhatsApp" />
        </div>
        <button className="rounded-lg p-2 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {siteConfig.nav.map((n) => <Link key={n.label} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium">{n.label}</Link>)}
          </nav>
          <WhatsAppButton message={generalMessage} label="Chat on WhatsApp" className="mt-2 w-full" />
        </div>
      )}
    </header>
  );
}
