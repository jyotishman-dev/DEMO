"use client";

import { useState, useMemo } from "react";
import MarketplaceHeader from "@/components/MarketplaceHeader";
import MarketplaceBanner from "@/components/MarketplaceBanner";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import MarketplaceFooter from "@/components/MarketplaceFooter";
import { MARKETPLACE_PRODUCTS } from "@/data/products";
import { Product, CartItem } from "@/types/marketplace";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "rating">("featured");

  const [cart, setCart] = useState<CartItem[]>([
    // Pre-populate with the flagship hero so cart has a live item to start
    {
      product: MARKETPLACE_PRODUCTS[0],
      quantity: 1,
      selectedColor: "Charcoal Slate",
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const [priceRange, setPriceRange] = useState<"all" | "under-50k" | "50k-100k" | "above-100k">("all");

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    return MARKETPLACE_PRODUCTS.filter((p) => {
      const matchesCat =
        selectedCategory === "All" || p.category === selectedCategory;

      let matchesPrice = true;
      if (priceRange === "under-50k") matchesPrice = p.price < 50000;
      else if (priceRange === "50k-100k") matchesPrice = p.price >= 50000 && p.price <= 100000;
      else if (priceRange === "above-100k") matchesPrice = p.price > 100000;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));
      return matchesCat && matchesPrice && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  // Cart Handlers
  const handleAddToCart = (product: Product, color: string, quantity = 1) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === product.id && i.selectedColor === color
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity, selectedColor: color }];
    });
  };

  const handleUpdateQuantity = (id: string, color: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(id, color);
      return;
    }
    setCart((prev) =>
      prev.map((i) =>
        i.product.id === id && i.selectedColor === color
          ? { ...i, quantity: qty }
          : i
      )
    );
  };

  const handleRemoveItem = (id: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (i) => !(i.product.id === id && i.selectedColor === color)
      )
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#131209] text-white">
      {/* Header */}
      <MarketplaceHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 flex flex-col">
        {/* Marketplace Banner */}
        <MarketplaceBanner />

        {/* Catalog Control Strip */}
        <section className="max-w-7xl mx-auto px-4 w-full pt-8 pb-4 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {selectedCategory === "All" ? "All Living Room Sofas" : selectedCategory}
              </h2>
              <p className="text-xs text-[#9B9B9B] mt-0.5">
                Showing {filteredProducts.length} premium models with high-res photos & specs
              </p>
            </div>

            {/* Quick Sort Controls */}
            <div className="flex flex-wrap items-center gap-2 text-xs w-full md:w-auto">
              <span className="text-[#9B9B9B] hidden sm:inline">Sort:</span>
              
              {/* Highlighted Dedicated Low to High Button */}
              <button
                type="button"
                onClick={() => setSortBy("price-low")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                  sortBy === "price-low"
                    ? "bg-emerald-500 text-black border-emerald-400 shadow-md ring-2 ring-emerald-400/30"
                    : "bg-[#1F1F1F] text-white border-[#272727] hover:bg-[#272727] hover:border-[#3a3a3a]"
                }`}
              >
                <span>₹ Low to High</span>
                <span className="text-[11px] font-bold">↑</span>
              </button>

              <button
                type="button"
                onClick={() => setSortBy("price-high")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  sortBy === "price-high"
                    ? "bg-white text-black border-white shadow-md font-semibold"
                    : "bg-[#1F1F1F] text-[#9B9B9B] border-[#272727] hover:text-white hover:bg-[#272727]"
                }`}
              >
                <span>₹ High to Low</span>
                <span className="text-[11px]">↓</span>
              </button>

              <button
                type="button"
                onClick={() => setSortBy("featured")}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  sortBy === "featured"
                    ? "bg-white text-black border-white shadow-md font-semibold"
                    : "bg-[#1F1F1F] text-[#9B9B9B] border-[#272727] hover:text-white hover:bg-[#272727]"
                }`}
              >
                Featured
              </button>

              <button
                type="button"
                onClick={() => setSortBy("rating")}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  sortBy === "rating"
                    ? "bg-white text-black border-white shadow-md font-semibold"
                    : "bg-[#1F1F1F] text-[#9B9B9B] border-[#272727] hover:text-white hover:bg-[#272727]"
                }`}
              >
                Top Rated ★
              </button>
            </div>
          </div>

          {/* Secondary Price Range Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#272727]/60 text-xs">
            <span className="text-[#9B9B9B] text-[11px]">Price filter:</span>
            {[
              { id: "all", label: "All Prices" },
              { id: "under-50k", label: "Under ₹50,000" },
              { id: "50k-100k", label: "₹50,000 – ₹1,00,000" },
              { id: "above-100k", label: "Above ₹1,00,000" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() =>
                  setPriceRange(
                    p.id as "all" | "under-50k" | "50k-100k" | "above-100k"
                  )
                }
                className={`px-2.5 py-1 rounded-md text-[11px] transition-all ${
                  priceRange === p.id
                    ? "bg-[#272727] text-white border border-white/20 font-medium"
                    : "text-[#9B9B9B] hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Active Sort Banner */}
          {sortBy === "price-low" && (
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Sorted by <strong>Price: Low to High</strong> (Showing most affordable models first)</span>
              </span>
              <button
                onClick={() => setSortBy("featured")}
                className="text-[11px] underline text-emerald-400 hover:text-white"
              >
                Reset to Featured
              </button>
            </div>
          )}
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-4 w-full pb-16">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center text-[#9B9B9B]">
              <p className="text-base font-semibold text-white mb-2">No sofas match your search</p>
              <p className="text-xs mb-4">Try clearing filters or searching for &quot;recliners&quot;, &quot;modular&quot;, or &quot;mini-fridge&quot;</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onAddToCart={(p, color) => handleAddToCart(p, color, 1)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <MarketplaceFooter />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* 1-Step Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderSuccess={() => setCart([])}
      />
    </div>
  );
}
