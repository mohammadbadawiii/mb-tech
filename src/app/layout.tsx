import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — ${siteConfig.tagline}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: { title: siteConfig.name, description: siteConfig.description, type: "website", siteName: siteConfig.name, images: [{ url: "/og.png", width: 1200, height: 630, alt: siteConfig.name }] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <Header /><main>{children}</main><Footer /><FloatingWhatsApp />
    </body></html>
  );
}
