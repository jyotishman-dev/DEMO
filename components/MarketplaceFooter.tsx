export default function MarketplaceFooter() {
  return (
    <footer className="bg-[#181818] border-t border-[#272727] py-12 px-4 mt-16 text-xs text-[#9B9B9B]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-2 text-white font-semibold text-base mb-1.5">
            <div className="w-6 h-6 rounded-md bg-[#272727] flex items-center justify-center border border-[#313131]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M4 11V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                <path d="M2 13a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
                <path d="M4 19v2" />
                <path d="M20 19v2" />
              </svg>
            </div>
            <span>ChillSofa Marketplace</span>
          </div>
          <p className="max-w-sm text-[#9B9B9B] leading-relaxed">
            Direct-to-consumer designer couches, recliners, and smart entertainment sofas
            with white-glove living room installation.
          </p>
          <p className="mt-3 text-[11px] text-[#9B9B9B]/60">
            © 2026 ChillSofa Marketplace. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs">
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold uppercase tracking-wider text-[11px]">Categories</span>
            <a href="#" className="hover:text-white transition-colors">Smart Sofas (Mini-Fridge)</a>
            <a href="#" className="hover:text-white transition-colors">Modular Sectionals</a>
            <a href="#" className="hover:text-white transition-colors">Motorized Recliners</a>
            <a href="#" className="hover:text-white transition-colors">Compact 2-Seaters</a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold uppercase tracking-wider text-[11px]">Customer Support</span>
            <a href="#" className="hover:text-white transition-colors">Free In-Home Assembly</a>
            <a href="#" className="hover:text-white transition-colors">Doorway Clearance Check</a>
            <a href="#" className="hover:text-white transition-colors">30-Day Risk-Free Trial</a>
            <a href="#" className="hover:text-white transition-colors">3-Year Frame & Motor Warranty</a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold uppercase tracking-wider text-[11px]">Policies</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
            <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
            <a href="#" className="hover:text-white transition-colors">Electrical Safety Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
