"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-white">
            LNGR
          </span>

          <span className="text-xl font-black tracking-tight text-orange-500">
            FORGE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-zinc-400 transition hover:text-orange-500"
          >
            Leistungen
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-zinc-400 transition hover:text-orange-500"
          >
            Projekte
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-zinc-400 transition hover:text-orange-500"
          >
            Über uns
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-zinc-400 transition hover:text-orange-500"
          >
            Kontakt
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <span className="rounded-lg border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400">
            Projektanfragen bald verfügbar
          </span>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="#services"
              className="text-zinc-300 transition hover:text-orange-500"
            >
              Leistungen
            </a>

            <a
              href="#projects"
              className="text-zinc-300 transition hover:text-orange-500"
            >
              Projekte
            </a>

            <a
              href="#about"
              className="text-zinc-300 transition hover:text-orange-500"
            >
              Über uns
            </a>

            <a
              href="#contact"
              className="text-zinc-300 transition hover:text-orange-500"
            >
              Kontakt
            </a>

            <span className="mt-2 rounded-lg border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400">
              Projektanfragen bald verfügbar
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}