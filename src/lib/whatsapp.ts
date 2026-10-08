import { siteConfig } from "@/config/site";
export const whatsappUrl = (message: string) => `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
export const productMessage = (name: string) => `Hi, I'm interested in the ${name}. Is it available?`;
export const generalMessage = "Hi, I'd like to ask about your products.";
