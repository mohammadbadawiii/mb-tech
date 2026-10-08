import { whatsappUrl } from "@/lib/whatsapp";
const styles = {
  solid: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-accent text-accent hover:bg-accent hover:text-white",
};
export default function WhatsAppButton({ message, label = "Order on WhatsApp", variant = "solid", className = "" }:
  { message: string; label?: string; variant?: keyof typeof styles; className?: string }) {
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${styles[variant]} ${className}`}>
      {label}
    </a>
  );
}
