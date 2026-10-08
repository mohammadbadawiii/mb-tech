import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generalMessage } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact", description: "Reach us on WhatsApp, Instagram or phone. Delivery across Lebanon." };
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5"><h2 className="font-semibold">WhatsApp</h2><p className="text-sm text-neutral-600">The fastest way to order or ask about availability.</p>
            <WhatsAppButton message={generalMessage} label="Chat on WhatsApp" className="mt-3" /></div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5"><h2 className="font-semibold">Instagram</h2>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-sm underline">{siteConfig.instagramHandle}</a></div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5"><h2 className="font-semibold">Phone</h2>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm underline">{siteConfig.phone}</a></div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5"><h2 className="font-semibold">Delivery</h2><p className="text-sm text-neutral-600">We deliver across Lebanon. Message us with your area to confirm delivery details.</p></div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5"><h2 className="mb-4 font-semibold">Send us a message</h2><ContactForm /></div>
      </div>
    </div>
  );
}
