import Link from "next/link";
import { siteConfig } from "@/config/site";
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-semibold text-ink">{siteConfig.name}</p><p>{siteConfig.tagline}</p></div>
        <nav aria-label="Footer" className="flex gap-5">
          {siteConfig.nav.map((n) => <Link key={n.label} href={n.href} className="hover:text-ink">{n.label}</Link>)}
        </nav>
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
