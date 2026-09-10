export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,106,0,0.16),transparent_35%)]" />

        <div className="relative mx-auto w-full max-w-6xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-500">
            Engineering · Prototyping · Additive Manufacturing
          </p>

          <h1 className="max-w-4xl text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
            LNGR
            <span className="block text-orange-500">FORGE</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Von der Idee zum fertigen Bauteil. Technische Lösungen,
            Prototypen und Kleinserien mit Fokus auf Funktion,
            Präzision und saubere Umsetzung.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
            >
              Projekt anfragen
            </a>

            <a
              href="#leistungen"
              className="rounded-md border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-orange-500"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </section>

      <section id="leistungen" className="border-t border-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
            Leistungen
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Engineering statt nur Drucken.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "3D-Druck",
              "Prototyping",
              "CAD & Konstruktion",
              "Kleinserien",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <div className="mb-6 h-px w-12 bg-orange-500" />
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
              LNGR Forge
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Technische Lösungen mit Anspruch.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              Keine Massenware. Keine Standardlösung um jeden Preis.
              LNGR Forge steht für individuelle technische Lösungen,
              funktionale Konstruktionen und hochwertige Fertigung.
            </p>

            <p>
              Von Einzelteilen über Prototypen bis zur Kleinserie.
            </p>
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="border-t border-zinc-900 bg-orange-500 px-6 py-24 text-black"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">
            Projekt starten
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black sm:text-6xl">
            Du hast eine Idee. Wir machen daraus ein Bauteil.
          </h2>

          <a
            href="mailto:info@lngr-forge.de"
            className="mt-10 inline-block rounded-md bg-black px-6 py-3 font-semibold text-white"
          >
            info@lngr-forge.de
          </a>
        </div>
      </section>
    </main>
  );
}