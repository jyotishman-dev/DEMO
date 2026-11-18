"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroProps {
  onOpenPreorder: (modelName?: string) => void;
}

export default function Hero({ onOpenPreorder }: HeroProps) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      title: "Silent Mini-Fridge",
      desc: "Chills 8 cans down to 4°C with whisper-quiet operation under 25 decibels.",
      x: "32%",
      y: "56%",
    },
    {
      id: 2,
      title: "Dual 65W USB-C",
      desc: "Concealed fast charging powers tablets, phones, and controllers without trailing cords.",
      x: "52%",
      y: "48%",
    },
    {
      id: 3,
      title: "Pull-Out Snack Console",
      desc: "Sturdy food-grade tray slides out smoothly for popcorn, snacks, or laptops.",
      x: "68%",
      y: "54%",
    },
    {
      id: 4,
      title: "Deep Tumbler Cup Holders",
      desc: "Dual silicone-lined holders keep cold drinks upright and secure against spills.",
      x: "48%",
      y: "62%",
    },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center px-4 overflow-hidden">
      {/* Container capped for readability */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-[#272727] mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="caption-1 text-[#9B9B9B]">Flagship launch model • Pre-orders now open</span>
        </div>

        {/* Hero Heading (B5: text gradient only, capped at 680px, no hyphens, meaningful breaks) */}
        <h1 className="heading-1 hero-gradient-text max-w-[680px] mb-6">
          Cold drinks and fast charging
          <br className="hidden sm:inline" /> without leaving your seat
        </h1>

        {/* Subheading (B5: max width 680px, no hyphens) */}
        <p className="body-2 text-[#9B9B9B] max-w-[680px] mb-8 text-base md:text-lg">
          The smart entertainment sofa engineered with a whisper-silent mini-fridge,
          dual 65W fast USB-C charging, and a spill-proof pull-out snack console
          built right into your armrest.
        </p>

        {/* Primary CTA & Risk Reversal Micro-copy (SKILL.md Part A) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <button
            onClick={() => onOpenPreorder("ChillSofa Classic")}
            className="button-lg bg-white text-[#181818] py-2 px-4 rounded-xl hover:bg-neutral-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg"
          >
            Pre-order ChillSofa Classic
          </button>
          <a
            href="#models"
            className="button-lg bg-[#1F1F1F] text-white border border-[#272727] py-2 px-4 rounded-xl hover:bg-[#272727] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            View all 4 models
          </a>
        </div>

        {/* Single Proof Signal (A2: one proof signal above the fold) */}
        <div className="flex items-center gap-3 text-[#9B9B9B] caption-1 mt-2 mb-12">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-[#272727] border border-[#181818] flex items-center justify-center text-[10px] text-white">★</div>
            <div className="w-5 h-5 rounded-full bg-[#313131] border border-[#181818] flex items-center justify-center text-[10px] text-white">★</div>
            <div className="w-5 h-5 rounded-full bg-[#1F1F1F] border border-[#181818] flex items-center justify-center text-[10px] text-white">★</div>
          </div>
          <span>Tested in over 1,200 living rooms • 4.9 rating • 30-day home trial</span>
        </div>

        {/* Hero Visual Card with Interactive Feature Hotspots */}
        <div className="relative w-full max-w-3xl rounded-2xl border border-[#272727] bg-[#181818] p-4 sm:p-6 shadow-2xl overflow-hidden">
          {/* Top Bar Status */}
          <div className="flex items-center justify-between pb-4 border-b border-[#272727]/80 text-left">
            <div className="flex items-center gap-2">
              <span className="caption-3 px-2 py-0.5 rounded-md bg-[#272727] text-white border border-[#313131]">
                Classic Flagship
              </span>
              <span className="caption-2 text-[#9B9B9B]">₹69,999 • All-inclusive</span>
            </div>
            <span className="caption-4 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Silent cooling active (4°C)
            </span>
          </div>

          {/* Product Center Display */}
          <div className="relative my-6 aspect-video sm:aspect-[16/9] w-full rounded-xl bg-[#131209] border border-[#272727] flex items-center justify-center overflow-hidden group">
            {/* Background Studio Lighting (flat styling, no gradient) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#181818] opacity-80" />
            </div>

            {/* Sofa Photo / Render */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
              <Image
                src="/products/classic.jpg"
                alt="ChillSofa Classic flagship entertainment sofa with integrated mini-fridge and charging"
                width={700}
                height={350}
                priority
                className="max-h-[280px] w-auto object-contain rounded-lg drop-shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>

            {/* Hotspots */}
            {hotspots.map((hs) => (
              <div
                key={hs.id}
                style={{ left: hs.x, top: hs.y }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
              >
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                  aria-label={`Highlight ${hs.title}`}
                  className="relative group/btn flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#181818] shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                  <span className="caption-3 font-bold">{hs.id}</span>
                  <span className="absolute -inset-1 rounded-full bg-white/30 animate-ping pointer-events-none" />
                </button>

                {/* Hotspot Popover */}
                {activeHotspot === hs.id && (
                  <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-56 p-3 rounded-xl bg-[#272727] border border-[#313131] shadow-2xl text-left z-30 animate-in fade-in zoom-in-95 duration-200">
                    <p className="title-4 text-white font-medium mb-1">{hs.title}</p>
                    <p className="caption-2 text-[#9B9B9B] leading-snug">{hs.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Spec Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-left">
            <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#272727]">
              <p className="caption-4 text-[#9B9B9B]">Refrigeration</p>
              <p className="title-4 text-white font-medium">8 Cans • 4°C chilled</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#272727]">
              <p className="caption-4 text-[#9B9B9B]">Acoustics</p>
              <p className="title-4 text-white font-medium">Under 25 dB noise</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#272727]">
              <p className="caption-4 text-[#9B9B9B]">Power Delivery</p>
              <p className="title-4 text-white font-medium">Dual 65W USB-C</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#272727]">
              <p className="caption-4 text-[#9B9B9B]">Comfort</p>
              <p className="title-4 text-white font-medium">Triple density foam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
