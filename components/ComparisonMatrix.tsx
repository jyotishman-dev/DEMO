interface ComparisonProps {
  onOpenPreorder: (modelName: string) => void;
}

export default function ComparisonMatrix({ onOpenPreorder }: ComparisonProps) {
  const rows = [
    { feature: "Price", lite: "₹39,999", classic: "₹69,999", luxe: "₹1,09,999", modular: "From ₹1,29,999" },
    { feature: "Target Audience", lite: "Young professionals", classic: "Families & cinephiles", luxe: "Home theater luxury", modular: "Custom living layouts" },
    { feature: "Seating Capacity", lite: "2 to 3 seats", classic: "3 seats", luxe: "3 seats (dual recline)", modular: "4 to 6 expandable" },
    { feature: "Built-in Mini-Fridge", lite: "No (insulated cup holders)", classic: "Yes (8 cans, 4°C)", luxe: "Yes (8 cans, active chiller)", modular: "Optional module" },
    { feature: "Charging Console", lite: "USB-A + USB-C (45W)", classic: "Dual 65W USB-C + Qi", luxe: "Dual 65W USB-C + Dual Qi", modular: "Modular bus bar hub" },
    { feature: "Pull-Out Snack Tray", lite: "Yes (Standard)", classic: "Yes (Food-grade slide)", luxe: "Yes (Reinforced matte)", modular: "Optional module" },
    { feature: "Powered Reclining", lite: "Manual static", classic: "Ergonomic static", luxe: "Dual electric whisper-tilt", modular: "Optional module" },
    { feature: "Sound & Ambient Lights", lite: "No", classic: "No", luxe: "Concealed speakers & floor glow", modular: "Optional upgrade" },
    { feature: "Warranty", lite: "3 Years", classic: "3 Years", luxe: "3 Years", modular: "3 Years" },
  ];

  return (
    <section className="py-20 px-4 flex justify-center bg-[#181818] border-t border-[#272727]">
      <div className="max-w-5xl w-full">
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-2">
            Side-by-Side Matrix
          </p>
          <h2 className="heading-3 text-white mb-4">
            Compare all 4 models
          </h2>
          <p className="body-3 text-[#9B9B9B]">
            Transparent specifications and pricing to help you pick the exact fit.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="rounded-2xl border border-[#272727] bg-[#1F1F1F] overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-[#272727] bg-[#272727]/60">
                <th className="p-4 title-4 text-white font-medium">Feature</th>
                <th className="p-4 title-4 text-white font-medium">Lite</th>
                <th className="p-4 title-4 text-white font-medium bg-emerald-950/40 text-emerald-300">
                  Classic <span className="caption-5 ml-1 text-emerald-400 font-semibold">(Hero)</span>
                </th>
                <th className="p-4 title-4 text-white font-medium">Luxe</th>
                <th className="p-4 title-4 text-white font-medium">Modular</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={`border-b border-[#272727]/60 ${
                    idx % 2 === 0 ? "bg-[#1F1F1F]" : "bg-[#181818]"
                  }`}
                >
                  <td className="p-4 body-4 text-white font-medium">{row.feature}</td>
                  <td className="p-4 body-5 text-[#9B9B9B]">{row.lite}</td>
                  <td className="p-4 body-4 text-white font-medium bg-emerald-950/20">{row.classic}</td>
                  <td className="p-4 body-5 text-[#9B9B9B]">{row.luxe}</td>
                  <td className="p-4 body-5 text-[#9B9B9B]">{row.modular}</td>
                </tr>
              ))}
              <tr>
                <td className="p-4"></td>
                <td className="p-4">
                  <button
                    onClick={() => onOpenPreorder("ChillSofa Lite")}
                    className="button-xsm bg-[#272727] hover:bg-[#313131] text-white py-1.5 px-3 rounded-lg border border-[#313131] transition-all"
                  >
                    Select Lite
                  </button>
                </td>
                <td className="p-4 bg-emerald-950/20">
                  <button
                    onClick={() => onOpenPreorder("ChillSofa Classic")}
                    className="button-xsm bg-white hover:bg-neutral-200 text-[#181818] py-1.5 px-3 rounded-lg font-semibold transition-all shadow-md"
                  >
                    Select Classic
                  </button>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => onOpenPreorder("ChillSofa Luxe")}
                    className="button-xsm bg-[#272727] hover:bg-[#313131] text-white py-1.5 px-3 rounded-lg border border-[#313131] transition-all"
                  >
                    Select Luxe
                  </button>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => onOpenPreorder("ChillSofa Modular")}
                    className="button-xsm bg-[#272727] hover:bg-[#313131] text-white py-1.5 px-3 rounded-lg border border-[#313131] transition-all"
                  >
                    Select Modular
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
