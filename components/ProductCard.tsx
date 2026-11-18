"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/marketplace";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string) => void;
}

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
}: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Default");
  const [added, setAdded] = useState(false);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAdd = () => {
    onAddToCart(product, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group rounded-2xl bg-[#181818] border border-[#272727] hover:border-[#3a3a3a] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl">
      <div>
        {/* Product Image Box */}
        <div className="relative aspect-[16/11] w-full bg-[#131209] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#181818]/90 backdrop-blur-md text-emerald-400 border border-[#272727] text-xs font-medium">
              {product.badge}
            </span>
          )}

          {/* Discount Pill */}
          {discountPercent > 0 && (
            <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-rose-950/90 text-rose-300 border border-rose-800 text-[11px] font-semibold">
              -{discountPercent}%
            </span>
          )}

          {/* Quick View Hover Button */}
          <button
            onClick={() => onQuickView(product)}
            className="absolute inset-x-4 bottom-3 py-2 rounded-xl bg-[#181818]/90 backdrop-blur-md text-white text-xs font-semibold border border-[#313131] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-1.5 shadow-lg"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Quick View
          </button>
        </div>

        {/* Info Content */}
        <div className="p-4 sm:p-5">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#9B9B9B] mb-2">
            <span className="uppercase tracking-wider font-medium text-[11px]">{product.category}</span>
            <div className="flex items-center gap-1 text-amber-400 font-medium">
              <span>★</span>
              <span className="text-white text-xs">{product.rating}</span>
              <span className="text-[#9B9B9B] text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-semibold text-white line-clamp-1 hover:text-emerald-400 transition-colors cursor-pointer mb-1.5"
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-[#9B9B9B] line-clamp-2 min-h-[32px] mb-3 leading-relaxed">
            {product.tagline}
          </p>

          {/* Color Swatches */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] text-[#9B9B9B]">Finish:</span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  title={c.name}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColor === c.name
                      ? "ring-2 ring-white ring-offset-1 ring-offset-[#181818] scale-110"
                      : "border-white/20 opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Price Strip */}
          <div className="flex items-baseline gap-2 pt-2 border-t border-[#272727]">
            <span className="text-lg font-bold text-white">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-[#9B9B9B] line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 pt-0 sm:p-5 sm:pt-0">
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
            added
              ? "bg-emerald-500 text-black shadow-lg"
              : "bg-white text-black hover:bg-neutral-200"
          }`}
        >
          {added ? (
            <>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Added to Cart!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
