import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import ForgeArtwork from "@/components/sections/ForgeArtwork";

export default function Hero() {
  return (
    <section id="top" className="hero" tabIndex={-1} aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="orange-tick" /> KREATIVSTUDIO & ENGINEERING</p>
          <h1 id="hero-title">Ideen verdienen<br />eine eigene<br /><span>Form.</span></h1>
          <p className="hero-description">Klang. Design. Technik.<br />LNGR-Forge verbindet kreative Geschichten mit präziser Umsetzung. Für Ideen, die mehr werden sollen.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/#music">Music Forge entdecken <Arrow diagonal /></Link><Link className="text-link" href="/#about">Das Studio <Arrow /></Link></div>
        </div>
        <ForgeArtwork />
      </div>
      <div className="container hero-bottom"><span className="mono">KREATIV DENKEN. PRÄZISE MACHEN.</span><Link href="/#services" className="scroll-link">Die Möglichkeiten entdecken <span aria-hidden="true">↓</span></Link><span className="mono hero-build">BUILD 0.3 / IN ENTWICKLUNG</span></div>
    </section>
  );
}
