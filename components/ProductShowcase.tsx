"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductShowcaseProps {
  onOpenPreorder: (modelName: string) => void;
}

export interface SofaProduct {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceRaw: number;
  tagline: string;
  image: string;
  features: string[];
  specs: {
    dimensions: string;
    seating: string;
    cooling: string;
    power: string;
  };
  idealFor: string;
  buttonText: string;
}

export const PRODUCTS: SofaProduct[] = [
  {
    id: "lite",
    name: "ChillSofa Lite",
    price: "₹39,999",
    priceRaw: 39999,
    tagline: "Cup holders, snack tray and charging ports",
    image: "/products/lite.jpg",
    features: [
      "Dual deep tumbler cup holders",
      "Pull-out food-grade snack tray",
      "Fast USB-C and USB-A charging hub",
      "Durable stain-resistant weave",
      "Space-smart compact profile"
    ],
    specs: {
      dimensions: "172 cm W × 92 cm D × 88 cm H",
      seating: "2 to 3 persons",
      cooling: "Insulated cup holders only",
      power: "Single rear power inlet (45W output)"
    },
    idealFor: "Young professionals and budget-conscious buyers",
    buttonText: "Pre-order ChillSofa Lite"
  },
  {
    id: "classic",
    name: "ChillSofa Classic",
    badge: "Launch first • Hero product",
    price: "₹69,999",
    priceRaw: 69999,
    tagline: "Mini-fridge, charging, cup holders and snack tray",
    image: "/products/classic.jpg",
    features: [
      "Silent thermoelectric mini-fridge (8 cans at 4°C)",
      "Sub-25dB whisper cooling operation",
      "Dual 65W fast USB-C and wireless dock",
      "Pull-out food-grade console tray",
      "Spill-proof IPX4 silicone drink holders",
      "Triple-density high-resilience foam cushions"
    ],
    specs: {
      dimensions: "215 cm W × 98 cm D × 90 cm H",
      seating: "3 persons",
      cooling: "Active thermoelectric solid-state chiller",
      power: "Single grounded rear cord (120W max load)"
    },
    idealFor: "Families, entertainment enthusiasts, and film lovers",
    buttonText: "Pre-order ChillSofa Classic"
  },
  {
    id: "luxe",
    name: "ChillSofa Luxe",
    price: "₹1,09,999",
    priceRaw: 109999,
    tagline: "Premium fabric, powered reclining and optional speakers",
    image: "/products/luxe.jpg",
    features: [
      "Motorized dual whisper-quiet power recliners",
      "Premium micro-suede velvet upholstery",
      "Active thermoelectric mini-fridge console",
      "Optional concealed Bluetooth acoustic soundbar",
      "Subtle floor ambient cinema lighting",
      "Fast wireless charging armrest docks"
    ],
    specs: {
      dimensions: "230 cm W × 105 cm D × 92 cm H",
      seating: "3 persons with dual recline",
      cooling: "Active chiller with cold-air circulation",
      power: "Grounded rear inlet with surge protector"
    },
    idealFor: "Dedicated home theater and premium luxury seekers",
    buttonText: "Pre-order ChillSofa Luxe"
  },
  {
    id: "modular",
    name: "ChillSofa Modular",
    price: "From ₹1,29,999",
    priceRaw: 129999,
    tagline: "Movable seats, storage and refreshment modules",
    image: "/products/modular.jpg",
    features: [
      "Reversible modular chaise and corner sections",
      "Drop-in refreshment and mini-fridge console",
      "Lift-up hidden storage for blankets and remotes",
      "Expandable from 3 to 6 seats as your home grows",
      "Magnetic quick-latch connection brackets",
      "Spill-resistant performance weave"
    ],
    specs: {
      dimensions: "Configurable (Standard: 280 cm × 170 cm L-shape)",
      seating: "4 to 6 persons",
      cooling: "Interchangeable cooling console block",
      power: "Modular internal bus bar with single wall lead"
    },
    idealFor: "Apartment planners and custom living room layouts",
    buttonText: "Configure ChillSofa Modular"
  }
];

export default function ProductShowcase({ onOpenPreorder }: ProductShowcaseProps) {
  const [selectedId, setSelectedId] = useState<string>("classic");
  const selectedProduct = PRODUCTS.find((p) => p.id === selectedId) || PRODUCTS[1];

  return (
    <section id="models" className="py-20 px-4 flex justify-center bg-[#131209]">
      <div className="max-w-6xl w-full">
        {/* Section Heading */}
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-2">
            The 4-Model Range
          </p>
          <h2 className="heading-3 text-white mb-4">
            Pick the right configuration for your home
          </h2>
          <p className="body-3 text-[#9B9B9B]">
            From the compact Lite to the expandable Modular, every ChillSofa delivers
            unmatched entertainment comfort with verified specs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#181818] border border-[#272727] max-w-2xl mx-auto mb-12">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelectedId(prod.id)}
              className={`button-sm py-2 px-3 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                selectedId === prod.id
                  ? "bg-white text-[#181818] shadow-md font-semibold"
                  : "text-[#9B9B9B] hover:text-white hover:bg-[#272727]"
              }`}
            >
              <span>{prod.name.replace("ChillSofa ", "")}</span>
              {prod.badge && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Highlighted Detail View of Selected Product */}
        <div className="rounded-2xl bg-[#181818] border border-[#272727] p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full aspect-[16/10] rounded-xl bg-[#131209] border border-[#272727] flex items-center justify-center p-8 overflow-hidden group">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={500}
                  height={300}
                  className="max-h-[220px] w-auto object-contain drop-shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                {selectedProduct.badge && (
                  <span className="absolute top-3 left-3 caption-3 px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              {/* Specs Grid */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                <div className="p-3 rounded-lg bg-[#1F1F1F] border border-[#272727]">
                  <p className="caption-5 text-[#9B9B9B]">Dimensions</p>
                  <p className="title-5 text-white font-medium mt-0.5">{selectedProduct.specs.dimensions}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#1F1F1F] border border-[#272727]">
                  <p className="caption-5 text-[#9B9B9B]">Seating</p>
                  <p className="title-5 text-white font-medium mt-0.5">{selectedProduct.specs.seating}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#1F1F1F] border border-[#272727]">
                  <p className="caption-5 text-[#9B9B9B]">Cooling</p>
                  <p className="title-5 text-white font-medium mt-0.5">{selectedProduct.specs.cooling}</p>
                </div>
                <div className="p-3 rounded-lg bg-[#1F1F1F] border border-[#272727]">
                  <p className="caption-5 text-[#9B9B9B]">Power Input</p>
                  <p className="title-5 text-white font-medium mt-0.5">{selectedProduct.specs.power}</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="heading-4 text-white font-semibold">{selectedProduct.name}</h3>
                <span className="heading-5 text-emerald-400 font-semibold">{selectedProduct.price}</span>
              </div>
              <p className="body-4 text-[#9B9B9B] mb-4">{selectedProduct.tagline}</p>
              
              <div className="p-3 rounded-lg bg-[#1F1F1F] border border-[#272727] mb-6">
                <p className="caption-4 text-[#9B9B9B]">Best suited for</p>
                <p className="body-5 text-white font-medium mt-0.5">{selectedProduct.idealFor}</p>
              </div>

              <div className="space-y-2.5 mb-8">
                <p className="caption-3 text-white uppercase tracking-wider">Included Features</p>
                {selectedProduct.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-sm text-[#9B9B9B]">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenPreorder(selectedProduct.name)}
                className="w-full button-md bg-white text-[#181818] py-2 px-3 rounded-xl hover:bg-neutral-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg text-center"
              >
                {selectedProduct.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid (All models side-by-side for rapid comparison) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className={`flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                prod.id === "classic"
                  ? "bg-[#1F1F1F] border-[#313131] shadow-xl relative"
                  : "bg-[#181818] border-[#272727] hover:border-[#313131]"
              }`}
            >
              {prod.badge && (
                <span className="self-start mb-3 caption-4 px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  {prod.badge}
                </span>
              )}

              <div>
                <div className="h-32 w-full rounded-xl bg-[#131209] border border-[#272727] flex items-center justify-center p-3 mb-4">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={180}
                    height={90}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>

                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="title-2 text-white font-semibold">{prod.name}</h4>
                </div>
                <p className="heading-6 text-emerald-400 font-semibold mb-2">{prod.price}</p>
                <p className="caption-2 text-[#9B9B9B] mb-4 min-h-[40px]">{prod.tagline}</p>
              </div>

              <div className="pt-4 border-t border-[#272727] mt-4">
                <button
                  onClick={() => onOpenPreorder(prod.name)}
                  className={`w-full button-sm py-2 px-3 rounded-lg transition-all duration-300 text-center ${
                    prod.id === "classic"
                      ? "bg-white text-[#181818] hover:bg-neutral-200"
                      : "bg-[#272727] text-white hover:bg-[#313131] border border-[#313131]"
                  }`}
                >
                  Choose {prod.name.replace("ChillSofa ", "")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing presentation note from reference JPEG */}
        <p className="caption-4 text-center text-[#9B9B9B] mt-8">
          Prices and product specifications are taken from your marketing presentation and are illustrative estimates.
        </p>
      </div>
    </section>
  );
}
