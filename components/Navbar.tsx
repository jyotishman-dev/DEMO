"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  onOpenPreorder: (modelName?: string) => void;
}

export default function Navbar({ onOpenPreorder }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Models", href: "#models" },
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Room fit", href: "#room-fit" },
    { label: "Questions", href: "#faq" },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`flex items-center justify-between gap-6 px-4 py-2 rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "bg-[#181818]/90 backdrop-blur-md border-[#272727] shadow-xl"
              : "bg-[#181818]/70 backdrop-blur-sm border-[#272727]/80"
          } max-w-4xl w-full`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg px-1"
          >
            <div className="w-7 h-7 rounded-lg bg-[#272727] flex items-center justify-center border border-[#313131]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                <path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
                <path d="M4 19v2" />
                <path d="M20 19v2" />
              </svg>
            </div>
            <span>ChillSofa</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#9B9B9B] hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md py-1 px-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenPreorder("ChillSofa Classic")}
              className="button-sm bg-white text-[#181818] py-2 px-3 rounded-lg hover:bg-neutral-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              Pre-order Classic
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[#272727] text-white border border-[#313131] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-4 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`w-4 h-0.5 bg-white rounded transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white rounded transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white rounded transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Full-Height Mobile Menu Panel (B7 Rules) */}
      <div
        className={`fixed inset-0 z-40 bg-[#131209]/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-24 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider">Navigation</p>
          <div className="flex flex-col gap-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 60}ms` : "0ms",
                }}
                className={`heading-4 text-white hover:text-[#9B9B9B] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#272727] flex flex-col gap-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPreorder("ChillSofa Classic");
            }}
            className="w-full button-md bg-white text-[#181818] py-2 px-3 rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition-all duration-300 text-center"
          >
            Pre-order Classic (₹69,999)
          </button>
          <p className="caption-2 text-center text-[#9B9B9B]">
            Free living room setup • 30-day home trial
          </p>
        </div>
      </div>
    </>
  );
}
