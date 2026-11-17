import Link from "next/link";
import Brand from "@/components/ui/Brand";
export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><Link className="brand-link" href="/#top" aria-label="LNGR-Forge – zurück zum Anfang"><Brand large /></Link><p>Kreativ denken.<br />Präzise machen.</p><nav aria-label="Footernavigation"><Link href="/#music">Music Forge</Link><Link href="/#services">Leistungen</Link><Link href="/#about">Das Studio</Link><Link href="/#contact">Kontakt</Link></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LNGR-Forge</span><div><Link href="/impressum">Impressum <span>(in Vorbereitung)</span></Link><Link href="/datenschutz">Datenschutz <span>(in Vorbereitung)</span></Link></div><span className="mono">BUILD 0.3</span></div></div></footer>;
}
