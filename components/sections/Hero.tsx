export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090909] px-6 pb-20 pt-36">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Orange Glow */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left */}
        <div>
          <div className="mb-7 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-zinc-500">
            <span className="text-orange-500">Engineering</span>
            <span>•</span>
            <span>AI</span>
            <span>•</span>
            <span>Software</span>
            <span>•</span>
            <span>Manufacturing</span>
          </div>

          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            We forge
            <span className="block text-orange-500">ideas into reality.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            LNGR Forge verbindet Engineering, KI, Software und moderne
            Fertigung, um aus Ideen funktionierende Lösungen zu machen.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
            >
              Explore
            </a>

            <a
              href="#about"
              className="rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-white transition hover:border-orange-500/50 hover:bg-orange-500/5"
            >
              About LNGR Forge
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
              Beta
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-zinc-400">
              Website in development
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-zinc-400">
              No orders yet
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full border border-orange-500/20" />
          <div className="absolute h-96 w-96 rounded-full border border-white/5" />

          <div className="relative text-center">
            <div className="text-7xl font-black leading-none tracking-[-0.06em] text-white sm:text-8xl">
              LNGR
            </div>

            <div className="mt-2 text-7xl font-black leading-none tracking-[-0.06em] text-orange-500 sm:text-8xl">
              FORGE
            </div>

            <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            <p className="mt-6 text-xs uppercase tracking-[0.38em] text-zinc-500">
              Design · Engineer · Create
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="relative mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5">
        <div className="flex flex-wrap justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-zinc-600">
          <span>LNGR Forge / Build 0.2</span>
          <span>Independent Engineering & Digital Creation</span>
        </div>
      </div>
    </section>
  );
}