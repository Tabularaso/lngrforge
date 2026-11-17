"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import Brand from "@/components/ui/Brand";
import Arrow from "@/components/ui/Arrow";
import { navigation } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 960px)");
    const onResize = () => { if (breakpoint.matches) setOpen(false); };
    breakpoint.addEventListener("change", onResize);
    return () => breakpoint.removeEventListener("change", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [open]);

  return (
    <header ref={header} className="site-header">
      <div className="container header-inner">
        <Link href="/#top" aria-label="LNGR-Forge – Startseite" className="brand-link" onClick={() => setOpen(false)}><Brand /></Link>
        <nav aria-label="Hauptnavigation" className="desktop-nav">
          {navigation.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="header-contact" href="/#contact">Kontakt <Arrow diagonal /></Link>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen(!open)}>
          <span>{open ? "Schließen" : "Menü"}</span>
          <span className={`menu-symbol${open ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile Navigation" className="mobile-nav" hidden={!open}>
        <div className="container">
          {[...navigation, { href: "/#contact", label: "Kontakt" }].map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><span className="mono">0{index + 1}</span>{link.label}<Arrow diagonal /></Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
