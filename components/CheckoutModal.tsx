"use client";

import { useState } from "react";
import { CartItem } from "@/types/marketplace";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [orderRef, setOrderRef] = useState("CS-948201");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !address.trim() || !city.trim()) {
      setError("Please fill in all delivery details.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setOrderRef(`SOFA-${Math.floor(100000 + Math.random() * 900000)}`);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
      onOrderSuccess();
    }, 700);
  };

  const handleFinish = () => {
    setCompleted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#181818] border border-[#272727] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleFinish}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#272727] text-[#9B9B9B] hover:text-white flex items-center justify-center border border-[#313131]"
        >
          ✕
        </button>

        {!completed ? (
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Complete Your Order</h2>
            <p className="text-xs text-[#9B9B9B] mb-5">
              Includes free white-glove setup and 30-day home trial.
            </p>

            {/* Order summary mini bar */}
            <div className="p-3 rounded-xl bg-[#1F1F1F] border border-[#272727] mb-5 flex justify-between items-center text-xs">
              <span className="text-[#9B9B9B]">Total to pay ({items.length} items):</span>
              <span className="text-sm font-bold text-emerald-400">₹{total.toLocaleString("en-IN")}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs text-[#9B9B9B] block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rahul Sharma"
                  className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-xs focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#9B9B9B] block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-xs focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#9B9B9B] block mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-xs focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#9B9B9B] block mb-1">Delivery Address</label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Flat 402, Sunshine Heights, Main Road..."
                  className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-xs focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#9B9B9B] block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Mumbai / Bengaluru"
                    className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-xs focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#9B9B9B] block mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="400001"
                    className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-xs focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs text-white font-medium block mb-1.5">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      paymentMethod === "cod"
                        ? "bg-[#272727] border-white text-white font-semibold"
                        : "bg-[#1F1F1F] border-[#272727] text-[#9B9B9B]"
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      paymentMethod === "upi"
                        ? "bg-[#272727] border-white text-white font-semibold"
                        : "bg-[#1F1F1F] border-[#272727] text-[#9B9B9B]"
                    }`}
                  >
                    UPI / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      paymentMethod === "card"
                        ? "bg-[#272727] border-white text-white font-semibold"
                        : "bg-[#1F1F1F] border-[#272727] text-[#9B9B9B]"
                    }`}
                  >
                    Credit / EMI
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-400 p-2 rounded-lg bg-rose-950/40 border border-rose-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-white text-black text-xs font-bold hover:bg-neutral-200 active:scale-[0.98] transition-all shadow-xl mt-2 disabled:opacity-50"
              >
                {loading ? "Placing Order..." : `Confirm Order • ₹${total.toLocaleString("en-IN")}`}
              </button>

              <p className="text-[10px] text-[#9B9B9B] text-center">
                Free cancellation before dispatch • 3-year warranty included
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Order Placed Successfully!</h3>
            <p className="text-xs text-[#9B9B9B] max-w-xs mx-auto mb-5">
              Thank you, {name}! Your order reference is <strong>{orderRef}</strong>. Our logistics
              concierge will call you at {phone} to coordinate delivery time and doorway measurements.
            </p>

            <div className="p-3 rounded-xl bg-[#1F1F1F] border border-[#272727] text-left max-w-sm mx-auto mb-6 text-xs text-[#9B9B9B] space-y-1">
              <p><span className="text-white">Delivery Mode:</span> White-Glove In-Home Setup</p>
              <p><span className="text-white">Payment:</span> {paymentMethod.toUpperCase()}</p>
              <p><span className="text-white">Estimated Arrival:</span> 3 to 5 business days</p>
            </div>

            <button
              onClick={handleFinish}
              className="py-2 px-5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
