export default function RoomFitGuide() {
  const specs = [
    {
      title: "Doorway clearance guarantee",
      value: "Fits through 72 cm doors",
      desc: "Ships in modular sub-assemblies. Our white-glove crew easily clears narrow apartment hallways, lifts, and standard entry doors without scuffing walls.",
    },
    {
      title: "Discreet power connection",
      value: "Single rear 3-prong cord",
      desc: "A 2.5-meter heavy-duty grounded power cable exits cleanly from the bottom rear center. Runs flat along baseboards to any standard wall outlet.",
    },
    {
      title: "Spill & stain maintenance",
      value: "Hydrophobic nano-weave",
      desc: "Liquids bead up instead of soaking in. Blot spills away with a dry paper towel or damp microfiber cloth. Removable zippered cushion covers.",
    },
  ];

  return (
    <section id="room-fit" className="py-20 px-4 flex justify-center bg-[#131209]">
      <div className="max-w-5xl w-full">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-2">
            Living Room Planning
          </p>
          <h2 className="heading-3 text-white mb-4">
            Designed to fit your apartment seamlessly
          </h2>
          <p className="body-3 text-[#9B9B9B]">
            Clear dimensions, doorway clearance, and electrical details so you never have
            to guess how ChillSofa will integrate into your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {specs.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#181818] border border-[#272727] flex flex-col justify-between"
            >
              <div>
                <p className="title-4 text-emerald-400 font-semibold mb-1">{item.value}</p>
                <h3 className="title-2 text-white font-semibold mb-2">{item.title}</h3>
                <p className="body-4 text-[#9B9B9B] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dimension Diagram Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1F1F1F] border border-[#272727]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#272727]">
            <div>
              <h3 className="title-1 text-white font-semibold">Standard Footprint Guide (Classic Model)</h3>
              <p className="body-4 text-[#9B9B9B]">Requires 215 cm width and 98 cm depth with 10 cm rear breathing clearance for silent thermal venting.</p>
            </div>
            <span className="caption-3 px-3 py-1.5 rounded-lg bg-[#272727] text-white border border-[#313131]">
              Standard 220V plug compatible
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
            <div className="p-4 rounded-xl bg-[#181818] border border-[#272727]">
              <p className="caption-3 text-[#9B9B9B] uppercase">Width</p>
              <p className="heading-5 text-white font-semibold mt-1">215 cm</p>
              <p className="caption-5 text-[#9B9B9B] mt-0.5">Fits 3 adults comfortably</p>
            </div>
            <div className="p-4 rounded-xl bg-[#181818] border border-[#272727]">
              <p className="caption-3 text-[#9B9B9B] uppercase">Depth</p>
              <p className="heading-5 text-white font-semibold mt-1">98 cm</p>
              <p className="caption-5 text-[#9B9B9B] mt-0.5">Deep lounge seating angle</p>
            </div>
            <div className="p-4 rounded-xl bg-[#181818] border border-[#272727]">
              <p className="caption-3 text-[#9B9B9B] uppercase">Power Load</p>
              <p className="heading-5 text-white font-semibold mt-1">85 Watts</p>
              <p className="caption-5 text-[#9B9B9B] mt-0.5">Standard lightbulb equivalent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
