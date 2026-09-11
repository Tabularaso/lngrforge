export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white flex items-center justify-center px-6">
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.15),transparent_45%)]" />

      {/* Under Construction Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/30 bg-black/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm">
          <span className="font-bold text-orange-500">
            🚧 UNDER CONSTRUCTION
          </span>
          <span className="text-zinc-300">
            {" "}
            – LNGR Forge befindet sich aktuell im Aufbau. Es können derzeit
            keine Aufträge angenommen werden.
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-5xl w-full">

        <p className="mb-6 tracking-[0.35em] uppercase text-orange-500 text-sm">
          ENGINEERING • PROTOTYPING • ADDITIVE MANUFACTURING
        </p>

        <h1 className="text-7xl font-black leading-none">
          <span className="block text-white">LNGR</span>
          <span className="block text-orange-500">FORGE</span>
        </h1>

        <p className="mt-10 max-w-2xl text-xl leading-9 text-zinc-400">
          Von der Idee zum fertigen Produkt.
          <br />
          Engineering, Softwareentwicklung, KI-Lösungen,
          Prototypen und Additive Fertigung –
          alles unter einem Dach.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button
            disabled
            className="cursor-not-allowed rounded-lg bg-zinc-800 px-8 py-4 font-semibold text-zinc-500"
          >
            Projektanfragen bald verfügbar
          </button>

          <button
            disabled
            className="cursor-not-allowed rounded-lg border border-zinc-700 px-8 py-4 font-semibold text-zinc-500"
          >
            Website im Aufbau
          </button>

        </div>

        <div className="mt-16 rounded-xl border border-orange-500/20 bg-zinc-900/60 p-6 backdrop-blur">
          <h2 className="text-xl font-bold text-orange-500">
            Aktueller Status
          </h2>

          <p className="mt-3 text-zinc-400 leading-8">
            Die Infrastruktur von LNGR Forge ist erfolgreich online.
            In den kommenden Wochen entstehen hier Portfolio,
            Dienstleistungen, Referenzprojekte und weitere Inhalte.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm text-green-400">
              ✓ Domain online
            </span>

            <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm text-green-400">
              ✓ Vercel Deployment
            </span>

            <span className="rounded-full bg-green-600/20 px-4 py-2 text-sm text-green-400">
              ✓ GitHub Repository
            </span>

            <span className="rounded-full bg-orange-600/20 px-4 py-2 text-sm text-orange-400">
              🚧 Inhalte im Aufbau
            </span>

          </div>
        </div>

      </section>
    </main>
  );
}