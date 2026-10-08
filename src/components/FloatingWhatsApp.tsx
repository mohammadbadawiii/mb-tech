import { whatsappUrl, generalMessage } from "@/lib/whatsapp";
export default function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.800 14.200c-.2.700-1.400 1.300-1.900 1.300-.5.100-1.100.100-1.800-.1-.4-.1-1-.3-1.700-.6-3-1.300-4.900-4.300-5.100-4.500-.1-.2-1.200-1.600-1.200-3s.8-2.100 1-2.400c.3-.3.600-.3.800-.3h.6c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .500l-.4.500-.3.400c-.1.100-.3.300-.1.600.2.300.7 1.200 1.500 1.900 1 .9 1.900 1.200 2.200 1.300.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.2 1.500Z"/></svg>
    </a>
  );
}
