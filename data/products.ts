import { Product } from "@/types/marketplace";

export const MARKETPLACE_PRODUCTS: Product[] = [
  {
    id: "chill-elite-smart",
    name: "Lite",
    category: "Recliners",
    price: 39999,
    originalPrice: 50000,
    rating: 4.9,
    reviewsCount: 128,
    image: "/1.jpeg",
    badge: "Wireless Charging",
    tagline: "Premium black leather recliner featuring a smart center console with wireless charging and LED cup holders.",
    colors: [
      { name: "Midnight Black", hex: "#151515" },
      { name: "Charcoal Slate", hex: "#2E3033" }
    ],
    dimensions: "210 cm W × 100 cm D × 92 cm H",
    material: "Top-grain breathable leather",
    features: [
      "Built-in wireless charging pad & dual USB ports",
      "Illuminated LED cup holders",
      "Plush adjustable headrests",
      "Concealed storage console"
    ],
    inStock: true
  },
  {
    id: "apex-modern-sectional",
    name: "Classic",
    category: "Sectionals",
    price: 69999,
    originalPrice: 99000,
    rating: 4.8,
    reviewsCount: 94,
    image: "/4.jpeg",
    badge: "Minimalist Design",
    tagline: "Sleek, low-profile black leather L-shaped sectional with extra-deep seats for ultimate lounging.",
    colors: [
      { name: "Obsidian Black", hex: "#1a1a1a" },
      { name: "Cool Grey", hex: "#4a4e51" }
    ],
    dimensions: "280 cm W × 170 cm D × 75 cm H",
    material: "Matte finish premium leather",
    features: [
      "Modular chaise configuration",
      "Ultra-low profile modern silhouette",
      "High-density memory foam cushions",
      "Stain-resistant and easy to clean"
    ],
    inStock: true
  },
  {
    id: "chill-multifunction-sofa",
    name: "Luxe",
    category: "Compact",
    price: 109999,
    originalPrice: 170000,
    rating: 4.7,
    reviewsCount: 156,
    image: "/3.jpeg",
    badge: "Hidden Storage",
    tagline: "Versatile loveseat with a drop-down center table and a hidden pull-out drawer for gaming accessories.",
    colors: [
      { name: "Jet Black", hex: "#111111" },
      { name: "Espresso", hex: "#2b1e16" }
    ],
    dimensions: "185 cm W × 95 cm D × 88 cm H",
    material: "Performance faux leather",
    features: [
      "Drop-down center console with cup holders",
      "Pull-out under-seat storage drawer",
      "Side pockets for magazines and remotes",
      "Reclining backrests"
    ],
    inStock: true
  },
  {
    id: "chill-grand-theater",
    name: "Modular",
    category: "Luxury",
    price: 129999,
    originalPrice: 220000,
    rating: 5.0,
    reviewsCount: 67,
    image: "/2.jpeg",
    badge: "Built-in Bar Fridge",
    tagline: "Ultimate home cinema U-shaped sectional featuring a built-in wine cooler, ambient LED lighting, and smart screens.",
    colors: [
      { name: "Deep Onyx", hex: "#0d0d0d" },
      { name: "Dark Graphite", hex: "#2c2c2c" }
    ],
    dimensions: "350 cm W × 220 cm D × 95 cm H",
    material: "Heavyweight luxury leather",
    features: [
      "Integrated center console with wine/bar chiller",
      "Dual-motor power reclining seats",
      "Customizable ambient blue LED under-glow",
      "Smart touch-screen control panel on armrest",
      "Hidden side storage compartments"
    ],
    inStock: true
  }
];