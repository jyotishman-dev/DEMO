"use client";

import Image from "next/image";
import { CartItem } from "@/types/marketplace";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, color: string, qty: number) => void;
  onRemoveItem: (id: string, color: string) => void;
  onProceedCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md h-full bg-[#181818] border-l border-[#272727] flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#272727] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-white">Your Cart</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#272727] text-[#9B9B9B]">
              {items.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#272727] text-[#9B9B9B] hover:text-white flex items-center justify-center border border-[#313131]"
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Alert */}
        <div className="bg-[#1F1F1F] px-5 py-2.5 border-b border-[#272727] flex items-center gap-2 text-xs text-emerald-400">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>You unlocked <strong>Free White-Glove Room Delivery & Setup</strong>!</span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#9B9B9B]">
              <div className="w-16 h-16 rounded-2xl bg-[#1F1F1F] border border-[#272727] flex items-center justify-center mb-4 text-[#9B9B9B]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-white mb-1">Your cart is empty</p>
              <p className="text-xs text-[#9B9B9B] max-w-xs mb-6">
                Explore our selection of smart recliners, sectionals, and luxury living room couches.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200"
              >
                Start Browsing
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}`}
                className="p-3.5 rounded-xl bg-[#1F1F1F] border border-[#272727] flex gap-3.5 items-center"
              >
                <div className="relative w-20 h-20 rounded-lg bg-[#131209] overflow-hidden shrink-0 border border-[#272727]">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-white truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-[#9B9B9B] mt-0.5">
                    Color: {item.selectedColor}
                  </p>
                  <p className="text-xs font-bold text-emerald-400 mt-1">
                    ₹{item.product.price.toLocaleString("en-IN")}
                  </p>

                  {/* Quantity & Delete */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#272727] bg-[#181818] rounded-lg">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        className="px-2 py-0.5 text-xs text-[#9B9B9B] hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="px-2 py-0.5 text-xs text-[#9B9B9B] hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        onRemoveItem(item.product.id, item.selectedColor)
                      }
                      className="text-[11px] text-[#9B9B9B] hover:text-rose-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#272727] bg-[#181818] space-y-3">
            <div className="space-y-1.5 text-xs text-[#9B9B9B]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-medium">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>White-Glove Delivery</span>
                <span className="text-emerald-400 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#272727]">
                <span>Total Amount</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button
              onClick={onProceedCheckout}
              className="w-full py-3 rounded-xl bg-white text-black text-xs font-bold hover:bg-neutral-200 active:scale-[0.98] transition-all shadow-xl"
            >
              Proceed to Checkout
            </button>
            <p className="text-[10px] text-[#9B9B9B] text-center">
              Cash on delivery or UPI available • 30-day risk-free in-home trial
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
