export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose your model & finish",
      desc: "Select between Lite, Classic, Luxe, or Modular. Customize with breathable performance fabric tones that fit your room style.",
    },
    {
      step: "02",
      title: "Scheduled white-glove delivery",
      desc: "Our two-person team delivers directly into your living room, navigates tight doorways, completes full assembly, and tests the electrical circuits.",
    },
    {
      step: "03",
      title: "Plug in and chill out",
      desc: "Connect the single discreet rear cord to any standard wall outlet. Fill the mini-fridge with your favorite drinks and enjoy uninterrupted entertainment.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 flex justify-center bg-[#131209]">
      <div className="max-w-5xl w-full">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-2">
            Simple Three-Step Process
          </p>
          <h2 className="heading-3 text-white mb-4">
            How ChillSofa arrives in your home
          </h2>
          <p className="body-3 text-[#9B9B9B]">
            From placing your pre-order to your first movie night, we take care of all the
            heavy lifting and electrical safety checks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-2xl bg-[#181818] border border-[#272727] relative flex flex-col justify-between"
            >
              <div>
                <span className="caption-3 px-2 py-1 rounded bg-[#272727] text-white border border-[#313131] inline-block mb-4">
                  Step {s.step}
                </span>
                <h3 className="title-2 text-white font-semibold mb-2">{s.title}</h3>
                <p className="body-4 text-[#9B9B9B] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
