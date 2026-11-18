"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function TaglineReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const words = [
    "Never",
    "pause",
    "movie",
    "night",
    "for",
    "a",
    "warm",
    "drink",
    "again.",
    "Everything",
    "you",
    "need",
    "to",
    "unwind,",
    "built",
    "right",
    "into",
    "your",
    "seat."
  ];

  useEffect(() => {
    if (reducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // When top of section enters 85% of screen to 35% of screen
          const progressStart = windowHeight * 0.85;
          const progressEnd = windowHeight * 0.35;

          if (rect.top <= progressStart) {
            const fraction = Math.min(
              1,
              Math.max(0, (progressStart - rect.top) / (progressStart - progressEnd))
            );
            const revealedCount = Math.floor(fraction * words.length);
            setActiveWordIndex(revealedCount);
          } else {
            setActiveWordIndex(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length, reducedMotion]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-4 flex justify-center bg-[#131209] overflow-hidden"
      aria-label="Core Brand Tagline"
    >
      <div className="max-w-[680px] w-full text-center">
        {/* Category Label */}
        <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-6">
          The ChillSofa Promise
        </p>

        {/* Tagline Reveal (B11: Heading 2, 25-35% initial opacity, transitions per word) */}
        <h2 className="heading-2 font-semibold text-white leading-tight">
          {words.map((word, index) => {
            const isRevealed = reducedMotion || index <= activeWordIndex;
            return (
              <span
                key={`${word}-${index}`}
                className={`inline-block mr-2.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isRevealed
                    ? "text-white opacity-100 scale-100"
                    : "text-white/30 opacity-30 scale-[0.98]"
                }`}
              >
                {word}
              </span>
            );
          })}
        </h2>

        {/* Context line */}
        <p className="body-3 text-[#9B9B9B] mt-8 text-base">
          Custom engineered for apartment living rooms, home theaters, and gaming dens.
        </p>
      </div>
    </section>
  );
}
