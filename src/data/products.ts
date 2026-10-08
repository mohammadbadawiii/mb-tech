import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "ven-dens-power-bank",
    slug: "ven-dens-power-bank",
    name: "VEN-DENS Power Bank",
    brand: "Ven-Dens",
    category: "power-banks",
    price: 15,
    description:
      "VEN-DENS 10,000mAh power bank with up to 22.5W maximum output, overheating protection, a high-quality battery, and a flight-friendly design.",
    images: ["/products/Ven-Dens_22.5W-PB060.webp"],
    specifications: {
      Capacity: "10,000 mAh",
      "Maximum Output": "22.5W",
      Protection: "Overheating protection",
      Battery: "High-quality battery",
      Travel: "Flight-friendly",
    },
    featured: true,
    isNew: true,
    inStock: true,
  },

    {
  id: "hoco-eq34-plus",
  slug: "hoco-eq34-plus",
  name: "HOCO EQ34 Plus ANC+ENC TWS Headset",
  brand: "HOCO",
  category: "audio",
  price: 20, // replace with your selling price
  description:
    "HOCO EQ34 Plus TWS headset featuring ANC + ENC noise cancellation, a 4-microphone system for clearer calls, a 13mm large dynamic driver, and up to 7 hours of playback.",
  images: ["/products/hoco-eq34.jpg"],
  specifications: {
    "Noise Cancellation": "ANC + ENC",
    Microphones: "4 microphones",
    Driver: "13mm large dynamic driver",
    "Playback Time": "Up to 7 hours",
  },
  featured: true,
  isNew: true,
  inStock: true,
},

  {
    id: "hoco-ear-clip-tws",
    slug: "hoco-ear-clip-tws",
    name: "HOCO Ear Clip Open-Ear TWS",
    brand: "HOCO",
    category: "audio",
    price: 20,
    description:
      "HOCO Ear Clip Open-Ear TWS headset with a 13mm large dynamic driver, 35mAh earbuds, a 350mAh charging case, and up to 6 hours of playback.",
    images: ["/products/hoco-ea8.webp"],
    specifications: {
      Design: "Open-ear ear clip",
      Driver: "13mm large dynamic driver",
      "Earbud Battery": "35mAh",
      "Charging Case": "350mAh",
      "Playback Time": "Up to 6 hours",
    },
    featured: true,
    isNew: true,
    inStock: true,
  },

    {
    id: "hoco-y43",
    slug: "hoco-y43",
    name: "HOCO Y43 Smart Watch",
    brand: "HOCO",
    category: "smart-wearables",
    price: 30,
    description:
      "HOCO Y43 Smart Watch with a 1.43-inch AMOLED display, Bluetooth calling, built-in GPS, health and activity tracking, and IP67 water and dust resistance.",
    images: ["/products/hoco-y43.webp",
            "/products/hoco-y43-2.webp"
    ],
    specifications: {
      Display: '1.43" AMOLED',
      Calling: "Bluetooth calling",
      GPS: "Built-in GPS",
      Monitoring: "Heart-rate & SpO₂",
      Tracking: "Sleep & activity tracking",
      Resistance: "IP67 water & dust resistance",
      Bluetooth: "Bluetooth 5.3",
    },
    featured: true,
    isNew: true,
    inStock: true,
  },


];