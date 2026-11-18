export default function Benefits() {
  const benefits = [
    {
      title: "Zero mid-movie pauses",
      summary: "Integrated thermoelectric mini-fridge keeps 8 cans chilled at 4°C right at arm's reach.",
      detail:
        "No more missing key plot moments or getting up to walk to the kitchen. The solid-state cooling operates below 25 decibels, making it quieter than a gentle whisper in your living room.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <line x1="5" y1="10" x2="19" y2="10" />
          <line x1="9" y1="6" x2="9" y2="7" />
          <line x1="9" y1="14" x2="9" y2="16" />
        </svg>
      ),
    },
    {
      title: "Tangle-free charging hub",
      summary: "Dual 65W fast USB-C ports and Qi wireless dock built directly into the console armrest.",
      detail:
        "Charge your smartphone, tablet, or wireless gaming controllers at full speed without dangerous extension cords running across your living room floor.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Spill-proof console & tray",
      summary: "Food-grade slide-out snack tray and silicone-lined deep cup holders protect your furniture.",
      detail:
        "Engineered with IPX4 sealed electronic compartments and hydrophobic fabric treatment. Accidental drops of coffee or soda bead up instantly and wipe dry with a damp cloth.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      title: "All-day spine & posture support",
      summary: "High-resilience triple-density foam maintains shape and lumbar alignment through marathon sessions.",
      detail:
        "Unlike standard soft sofas that sag after months of use, ChillSofa uses structured ergonomic support engineered for 8-hour movie marathons and gaming tournaments.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 px-4 flex justify-center bg-[#181818]">
      <div className="max-w-5xl w-full">
        {/* Section Heading */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-2">
            Engineered For Living
          </p>
          <h2 className="heading-3 text-white mb-4">
            Everything your entertainment space was missing
          </h2>
          <p className="body-3 text-[#9B9B9B]">
            Every function is integrated cleanly inside the chassis, eliminating living room
            clutter, exposed cables, and unnecessary trips to the kitchen.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#1F1F1F] border border-[#272727] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#272727] text-emerald-400 border border-[#313131]">
                    {item.icon}
                  </div>
                  <h3 className="title-2 text-white font-semibold">{item.title}</h3>
                </div>
                <p className="body-1 text-white font-medium mb-2.5">{item.summary}</p>
                <p className="body-4 text-[#9B9B9B] leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
