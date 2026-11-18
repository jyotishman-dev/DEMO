export default function MarketplaceBanner() {
  return (
    <section className="px-4 pt-6 pb-2 max-w-7xl mx-auto w-full">
      <div className="rounded-2xl bg-gradient-to-r from-[#181818] via-[#1F1F1F] to-[#181818] border border-[#272727] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="max-w-xl z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-xs font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Seasonal Furniture Drop
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
            Upgrade your living room with smart entertainment sofas
          </h1>
          <p className="text-sm text-[#9B9B9B] mt-2 leading-relaxed">
            Discover luxury sectionals, cloud recliners, and our flagship smart sofas with
            silent built-in mini-fridges, fast charging ports, and stain-resistant performance weave.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 z-10 w-full sm:w-auto">
          <div className="p-3 rounded-xl bg-[#272727] border border-[#313131] text-xs text-[#9B9B9B] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1F1F1F] text-emerald-400 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Free White-Glove Setup</p>
              <p className="text-[11px] text-[#9B9B9B]">Room delivery & electrical plug-in</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#272727] border border-[#313131] text-xs text-[#9B9B9B] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1F1F1F] text-emerald-400 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">3-Year Full Warranty</p>
              <p className="text-[11px] text-[#9B9B9B]">Frame, motor & cooling guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
