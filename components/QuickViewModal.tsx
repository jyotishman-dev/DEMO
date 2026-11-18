"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/marketplace";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, quantity: number) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
}: QuickViewModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>(
    product ? product.colors[0]?.name : ""
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  if (!product) return null;

  const currentColor = selectedColor || product.colors[0]?.name;

  const handleAdd = () => {
    onAddToCart(product, currentColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#181818] border border-[#272727] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#272727] text-[#9B9B9B] hover:text-white flex items-center justify-center border border-[#313131] transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="relative aspect-square w-full rounded-xl bg-[#131209] overflow-hidden border border-[#272727]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#181818]/90 backdrop-blur-md text-emerald-400 border border-[#272727] text-xs font-medium">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="text-xs uppercase tracking-wider text-[#9B9B9B] font-medium">
              {product.category}
            </span>
            <h2 className="text-xl font-bold text-white mt-1 mb-2">
              {product.name}
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-white">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-[#9B9B9B] line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              <span className="text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                In Stock • Ready to ship
              </span>
            </div>

            <p className="text-xs text-[#9B9B9B] leading-relaxed mb-4">
              {product.tagline}
            </p>

            {/* Dimensions & Material Chips */}
            <div className="space-y-1.5 text-xs text-[#9B9B9B] p-3 rounded-xl bg-[#1F1F1F] border border-[#272727] mb-4">
              <p><span className="text-white font-medium">Dimensions:</span> {product.dimensions}</p>
              <p><span className="text-white font-medium">Material:</span> {product.material}</p>
            </div>

            {/* Color Swatch Picker */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-white block mb-1.5">
                Color: <span className="font-normal text-[#9B9B9B]">{currentColor}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs transition-all ${
                      currentColor === c.name
                        ? "bg-[#272727] border-white text-white"
                        : "bg-[#1F1F1F] border-[#272727] text-[#9B9B9B]"
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add Button */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center border border-[#272727] bg-[#1F1F1F] rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm text-[#9B9B9B] hover:text-white"
                >
                  -
                </button>
                <span className="px-3 text-sm text-white font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm text-[#9B9B9B] hover:text-white"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                  added
                    ? "bg-emerald-500 text-black"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {added ? "Added to Cart!" : `Add to Cart • ₹${(product.price * quantity).toLocaleString("en-IN")}`}
              </button>
            </div>

            <p className="text-[11px] text-[#9B9B9B] text-center mt-3">
              Includes free room setup, doorstep unboxing, and 3-year warranty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
