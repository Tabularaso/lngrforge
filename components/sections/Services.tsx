const services = [
  {
    number: "01",
    title: "ENGINEERING",
    subtitle: "From problem to solution.",
    text: "Technische Entwicklung, CAD, Prototyping, funktionale Bauteile und individuelle Problemlösungen mit Fokus auf saubere Umsetzung.",
    tags: ["CAD", "Prototyping", "Automation", "Problem Solving"],
  },
  {
    number: "02",
    title: "CREATE",
    subtitle: "Digital ideas become physical.",
    text: "KI-generierte Modelle, Büsten, Figuren, kreative Konzepte und individuelle digitale Designs für physische oder digitale Anwendungen.",
    tags: ["AI Models", "3D Sculpting", "Custom Design", "Digital Creation"],
  },
  {
    number: "03",
    title: "AUDIO",
    subtitle: "Ideas you can hear.",
    text: "Personalisierte Songs, Jingles und kreative Audioprojekte mit KI-gestützten Workflows und individuellem Konzept.",
    tags: ["Custom Songs", "Jingles", "AI Music", "Sound Branding"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-white/10 bg-[#0b0b0b] px-6 py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-[12%] top-[15%] h-72 w-72 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-orange-500">
            What we forge
          </p>

          <h2 className="text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Ideas take
            <span className="block text-orange-500">different forms.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            LNGR Forge verbindet technische Entwicklung, digitale Kreativität
            und KI-basierte Werkzeuge unter einer gemeinsamen Idee:
            aus Gedanken funktionierende Ergebnisse machen.
          </p>
        </div>

        {/* Service Panels */}
        <div className="grid gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:border-orange-500/30 hover:bg-white/[0.04] lg:p-10"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-500/0 blur-[80px] transition duration-500 group-hover:bg-orange-500/10" />

              <div className="relative grid gap-8 lg:grid-cols-[120px_1fr_1fr] lg:items-start">
                {/* Number */}
                <div>
                  <span className="text-sm font-semibold tracking-[0.25em] text-zinc-600">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-orange-500">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-base leading-7 text-zinc-400">
                    {service.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}