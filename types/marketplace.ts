export interface Product {
  id: string;
  name: string;
  category: "Smart Sofas" | "Sectionals" | "Recliners" | "Compact" | "Luxury";
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  tagline: string;
  colors: { name: string; hex: string }[];
  dimensions: string;
  material: string;
  features: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}
