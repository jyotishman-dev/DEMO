interface RiskReversalProps {
  onOpenPreorder: (modelName?: string) => void;
}

export default function RiskReversal({ onOpenPreorder }: RiskReversalProps) {
  return (
    <section className="py-20 px-4 flex justify-center bg-[#181818] border-t border-[#272727]">
      <div className="max-w-4xl w-full text-center flex flex-col items-center">
        {/* Risk-free Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-[#272727] mb-6">
          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="caption-1 text-[#9B9B9B]">Guaranteed in-home satisfaction</span>
        </div>

        <h2 className="heading-2 text-white max-w-[680px] mb-4">
          Experience the comfort for thirty days with zero risk
        </h2>

        <p className="body-2 text-[#9B9B9B] max-w-[680px] mb-8 text-base md:text-lg">
          If ChillSofa doesn’t completely transform your movie nights and relaxation,
          our team picks it up from your living room with no return shipping charges.
        </p>

        {/* Identical Primary CTA to Top (SKILL.md A2 #12) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <button
            onClick={() => onOpenPreorder("ChillSofa Classic")}
            className="button-lg bg-white text-[#181818] py-2 px-4 rounded-xl hover:bg-neutral-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-xl"
          >
            Pre-order ChillSofa Classic
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 caption-2 text-[#9B9B9B]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            30-day home trial
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            3-year full warranty
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Free living room setup
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Cancel anytime before delivery
          </span>
        </div>
      </div>
    </section>
  );
}
