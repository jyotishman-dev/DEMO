export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#131209] border-t border-[#272727] text-[#9B9B9B] flex justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
            <div className="w-6 h-6 rounded-md bg-[#272727] flex items-center justify-center border border-[#313131]">
              <svg
                width="14"
                height="14"
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
          </div>
          <p className="caption-2 max-w-sm">
            “Sit Back. Chill More.” The smart entertainment sofa engineered with whisper-quiet
            cooling and built-in fast charging.
          </p>
          <p className="caption-4 mt-3 text-[#9B9B9B]/80">
            © 2026 ChillSofa Inc. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 caption-2">
          <div className="flex flex-col gap-2">
            <p className="caption-3 text-white uppercase tracking-wider">Models</p>
            <a href="#models" className="hover:text-white transition-colors">ChillSofa Lite (₹39,999)</a>
            <a href="#models" className="hover:text-white transition-colors">ChillSofa Classic (₹69,999)</a>
            <a href="#models" className="hover:text-white transition-colors">ChillSofa Luxe (₹1,09,999)</a>
            <a href="#models" className="hover:text-white transition-colors">ChillSofa Modular (₹1,29,999)</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="caption-3 text-white uppercase tracking-wider">Assurance</p>
            <a href="#faq" className="hover:text-white transition-colors">30-Day Home Trial</a>
            <a href="#faq" className="hover:text-white transition-colors">3-Year Frame & Motor Warranty</a>
            <a href="#room-fit" className="hover:text-white transition-colors">Doorway Clearance Check</a>
            <a href="#faq" className="hover:text-white transition-colors">White-Glove Setup</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="caption-3 text-white uppercase tracking-wider">Legal</p>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Electrical Safety Standards</a>
            <a href="#" className="hover:text-white transition-colors">Support & Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
