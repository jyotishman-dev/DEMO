"use client";

import { useState } from "react";
import { PRODUCTS } from "./ProductShowcase";

interface PreorderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultModel?: string;
}

export default function PreorderModal({
  isOpen,
  onClose,
  defaultModel = "ChillSofa Classic",
}: PreorderModalProps) {
  const [selectedModel, setSelectedModel] = useState<string>(defaultModel);
  const [selectedColor, setSelectedColor] = useState<string>("Charcoal Slate");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("CS-849201");
  const [errorMessage, setErrorMessage] = useState<string>("");

  if (!isOpen) return null;

  const currentProduct =
    PRODUCTS.find((p) => p.name.toLowerCase() === selectedModel.toLowerCase()) ||
    PRODUCTS[1];

  const colors = [
    { name: "Charcoal Slate", bg: "#2E3033" },
    { name: "Warm Sand", bg: "#7A7065" },
    { name: "Midnight Black", bg: "#151515" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validation per SKILL.md B10
    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!city.trim()) {
      setErrorMessage("Please specify your delivery city.");
      return;
    }

    setLoading(true);
    setOrderId(`CS-${Math.floor(100000 + Math.random() * 900000)}`);
    // Simulate instantaneous verification
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrorMessage("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#181818] border border-[#272727] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-[#272727] text-[#9B9B9B] hover:text-white flex items-center justify-center border border-[#313131] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="caption-3 px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                Risk-Free Priority Reservation
              </span>
              <h2 id="modal-title" className="heading-5 text-white font-semibold mt-2">
                Reserve your ChillSofa
              </h2>
              <p className="caption-2 text-[#9B9B9B] mt-1">
                Zero deposit required today. Our team confirms measurements and schedules
                delivery before any billing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Model Choice */}
              <div>
                <label className="caption-3 text-white uppercase tracking-wider block mb-1.5">
                  Select Model
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PRODUCTS.map((prod) => (
                    <button
                      type="button"
                      key={prod.id}
                      onClick={() => setSelectedModel(prod.name)}
                      className={`p-2.5 rounded-xl border text-left transition-all duration-300 ${
                        selectedModel.toLowerCase() === prod.name.toLowerCase()
                          ? "bg-[#272727] border-white text-white"
                          : "bg-[#1F1F1F] border-[#272727] text-[#9B9B9B] hover:text-white"
                      }`}
                    >
                      <p className="title-5 font-semibold text-white truncate">
                        {prod.name.replace("ChillSofa ", "")}
                      </p>
                      <p className="caption-4 text-emerald-400">{prod.price}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="caption-3 text-white uppercase tracking-wider block mb-1.5">
                  Fabric Finish ({selectedColor})
                </label>
                <div className="flex items-center gap-3">
                  {colors.map((c) => (
                    <button
                      type="button"
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                        selectedColor === c.name
                          ? "bg-[#272727] border-white text-white"
                          : "bg-[#1F1F1F] border-[#272727] text-[#9B9B9B]"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: c.bg }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="caption-4 text-[#9B9B9B] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rahul Sharma"
                    className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="caption-4 text-[#9B9B9B] block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="caption-4 text-[#9B9B9B] block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9876543210"
                      className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="caption-4 text-[#9B9B9B] block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Mumbai / Bengaluru"
                      className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="caption-4 text-[#9B9B9B] block mb-1">Postal Code</label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="400001"
                      className="w-full px-3 py-2 rounded-lg bg-[#1F1F1F] border border-[#272727] text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Error Message (B9: inline and specific) */}
              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-800 text-rose-300 caption-2">
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full button-md bg-white text-[#181818] py-2 px-3 rounded-xl hover:bg-neutral-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 font-semibold shadow-lg text-center mt-2 disabled:opacity-50"
              >
                {loading ? "Confirming reservation..." : `Reserve ${currentProduct.name} (${currentProduct.price})`}
              </button>

              <p className="caption-5 text-center text-[#9B9B9B]">
                30-day home trial • 3-year warranty • Free living room delivery
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
            <h3 className="heading-5 text-white font-semibold mb-2">
              Reservation Confirmed
            </h3>
            <p className="body-4 text-[#9B9B9B] max-w-sm mx-auto mb-6">
              Thank you, {name}! We have reserved your {selectedModel} in {selectedColor}.
              Our delivery concierge will contact {phone} within 24 hours to confirm doorway
              dimensions and schedule your delivery.
            </p>
            <div className="p-3 rounded-xl bg-[#1F1F1F] border border-[#272727] text-left max-w-sm mx-auto mb-6 caption-3 text-[#9B9B9B] space-y-1">
              <p><span className="text-white">Order Reference:</span> {orderId}</p>
              <p><span className="text-white">Model:</span> {selectedModel}</p>
              <p><span className="text-white">Estimated Delivery:</span> Within 5 to 7 business days</p>
            </div>
            <button
              onClick={resetForm}
              className="button-sm bg-white text-[#181818] py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
