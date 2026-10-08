export type Product = {
  id: string; slug: string; name: string; brand: string; category: string;
  price: number; oldPrice?: number; description: string;
  specifications: Record<string, string>;
  images: string[]; // paths under /public; empty => placeholder shown
  featured: boolean; isNew: boolean; inStock: boolean;
};
export type Category = { slug: string; name: string; description: string; icon: string };
