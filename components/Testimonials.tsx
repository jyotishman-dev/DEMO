export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Working professional & film enthusiast, Mumbai",
      model: "ChillSofa Classic",
      quote:
        "Having cold drinks right inside the armrest during cricket matches and weekend movies is unbeatable. The cooling is completely silent, and the 65W charging ports keep our tablets full without messy cords.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Apartment planner, Bengaluru",
      model: "ChillSofa Lite",
      quote:
        "I was worried about whether it would fit through our narrow apartment elevator. The delivery team had it carried up, assembled, and set up in 25 minutes. The snack tray is super sturdy.",
      rating: 5,
    },
    {
      name: "Vikram Das",
      role: "Software engineer & gamer, Hyderabad",
      model: "ChillSofa Luxe",
      quote:
        "The powered recline paired with the chilled mini-fridge makes this the best piece of furniture I own. Quality of the fabric is exceptional and wipes clean easily.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 flex justify-center bg-[#181818] border-t border-[#272727]">
      <div className="max-w-5xl w-full">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="caption-3 text-[#9B9B9B] uppercase tracking-wider mb-2">
            Verified In-Home Experiences
          </p>
          <h2 className="heading-3 text-white mb-4">
            Loved by entertainment lovers and space planners
          </h2>
          <p className="body-3 text-[#9B9B9B]">
            Real feedback from early apartment owners enjoying cold drinks, fast charging,
            and uncompromised comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-6 rounded-2xl bg-[#1F1F1F] border border-[#272727] flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="body-4 text-white leading-relaxed mb-6">“{r.quote}”</p>
              </div>

              <div className="pt-4 border-t border-[#272727]">
                <p className="title-4 text-white font-medium">{r.name}</p>
                <p className="caption-4 text-[#9B9B9B]">{r.role}</p>
                <span className="inline-block mt-2 caption-5 px-2 py-0.5 rounded bg-[#272727] text-emerald-400 border border-[#313131]">
                  Verified Owner • {r.model}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
