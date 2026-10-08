"use client";
import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
const field = "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none";
// No backend: the form opens WhatsApp with the message pre-filled.
export default function ContactForm() {
  const [name, setName] = useState(""); const [msg, setMsg] = useState("");
  return (
    <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); window.open(whatsappUrl(`Hi, I'm ${name}. ${msg}`), "_blank", "noopener"); }}>
      <label className="block text-sm font-medium">Your name<input required value={name} onChange={(e) => setName(e.target.value)} className={`${field} mt-1`} /></label>
      <label className="block text-sm font-medium">Message<textarea required rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} className={`${field} mt-1`} /></label>
      <button className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark">Send via WhatsApp</button>
    </form>
  );
}
