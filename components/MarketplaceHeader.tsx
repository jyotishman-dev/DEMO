"use client";

interface MarketplaceHeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const CATEGORIES = [
  "All",
  "Smart Sofas",
  "Sectionals",
  "Recliners",
  "Compact",
  "Luxury"
];

export default function MarketplaceHeader({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  cartCount,
  onOpenCart,
}: MarketplaceHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#181818]/95 backdrop-blur-md border-b border-[#272727]">
      {/* Top Banner Bar */}
      <div className="bg-[#1F1F1F] text-xs text-[#9B9B9B] py-1.5 px-4 text-center border-b border-[#272727]">
        <span className="text-white font-medium">Free White-Glove Room Delivery & Setup</span> on all sofa orders across India • 30-Day Risk-Free Trial
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col gap-3">
        {/* Main Bar: Logo, Search, Cart */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#272727] flex items-center justify-center border border-[#313131]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                <path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
                <path d="M4 19v2" />
                <path d="M20 19v2" />
              </svg>
            </div>
            <span>ChillSofa<span className="text-emerald-400 font-normal ml-1 text-sm">Marketplace</span></span>
          </a>

          {/* Search Box */}
          <div className="flex-1 max-w-md relative hidden sm:block">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search sofas, recliners, mini-fridge..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#1F1F1F] border border-[#272727] text-white text-sm placeholder-[#9B9B9B] focus:outline-none focus:border-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9B9B9B] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Right Actions: Cart Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#272727] text-white border border-[#313131] hover:bg-[#313131] active:scale-95 transition-all"
              aria-label={`View cart with ${cartCount} items`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="text-sm font-semibold hidden md:inline">Cart</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-black text-xs font-bold leading-none">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search sofas, recliners, mini-fridge..."
            className="w-full px-3.5 py-2 rounded-xl bg-[#1F1F1F] border border-[#272727] text-white text-sm placeholder-[#9B9B9B] focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-white text-black shadow-sm font-semibold"
                  : "bg-[#1F1F1F] text-[#9B9B9B] hover:text-white hover:bg-[#272727] border border-[#272727]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
