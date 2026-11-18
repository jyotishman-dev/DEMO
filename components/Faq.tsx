"use client";

import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the built-in mini-fridge stay powered?",
      a: "ChillSofa connects via a single heavy-duty 2.5-meter grounded power cable exiting cleanly from the bottom rear center. It plugs directly into any standard domestic wall socket without dedicated line installation.",
    },
    {
      q: "Is the mini-fridge noisy during quiet movie scenes?",
      a: "No. ChillSofa uses solid-state thermoelectric cooling engineered to run below 25 decibels. That is quieter than a whisper and virtually imperceptible even during silence in suspense movies.",
    },
    {
      q: "What happens if a drink spills on the console or cushions?",
      a: "The electronic console and cup holder compartment feature sealed IPX4 liquid barriers that protect internal wiring. The upholstery is treated with hydrophobic nano-coating so liquids pool up and wipe away with a damp microfiber cloth.",
    },
    {
      q: "Will ChillSofa fit through narrow apartment doors and elevators?",
      a: "Yes. ChillSofa ships in modular interlocking sections engineered to navigate standard doorways with at least 72 cm clearance. Our delivery crew handles all lifting and room placement.",
    },
    {
      q: "Can I turn off the mini-fridge or charging ports when traveling?",
      a: "Yes. A master toggle rocker switch located inside the armrest console lets you shut down the refrigeration and USB ports with one click while keeping the sofa safely dormant.",
    },
    {
      q: "What is covered under the 3-year warranty?",
      a: "The warranty covers the solid kiln-dried hardwood frame, internal electrical wiring, USB-C fast charging modules, thermoelectric chiller, and reclining motors against manufacturing defects.",
    },
    {
      q: "How does the 30-day home trial work?",
      a: "From the day of white-glove delivery, you have 30 days to test ChillSofa in your own living room. If you are not satisfied with the comfort or features, we arrange pickup and return your deposit without return freight fees.",
    },
    {
      q: "Can I configure the Modular sofa for left or right room corners?",
      a: "Yes. ChillSofa Modular sections utilize reversible quick-release steel brackets allowing you to position the chaise on either the left or right side whenever you rearrange your room.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 flex justify-center bg-[#131209]">
      <div className="max-w-4xl w-full">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-2">
            Clear Answers
          </p>
          <h2 className="heading-3 text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="body-3 text-[#9B9B9B]">
            Everything you need to know about electrical safety, delivery access, and
            daily maintenance.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#272727] bg-[#181818] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="title-3 text-white font-medium">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-md bg-[#272727] text-white flex items-center justify-center shrink-0 border border-[#313131] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#9B9B9B] body-4 border-t border-[#272727]/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
