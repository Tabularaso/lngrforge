import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Arrow from "@/components/ui/Arrow";

export default function Services() {
  return (
    <section id="services" className="section services" tabIndex={-1} aria-labelledby="services-title">
      <div className="container">
        <SectionTitle number="01" label="EINE MARKE. MEHRERE MÖGLICHKEITEN." />
        <div className="section-heading"><h2 id="services-title">Kreativität braucht<br /><span className="muted">keine Schublade.</span></h2><p>Von einer Geschichte, die hörbar wird, bis zur Idee, die Gestalt annimmt. Zwei Felder. Ein Anspruch: durchdacht bis ins Detail.</p></div>
        <div className="service-grid">
          <article className="service-card service-card--music">
            <div className="card-topline"><span className="mono">M / 01</span><span className="status-tag">Aktueller Fokus</span></div>
            <div className="sound-mark" aria-hidden="true">{[22,46,32,72,96,62,110,82,48,90,58,30,46,22].map((height,index) => <span key={index} style={{height:`${height}px`}} />)}</div>
            <p className="eyebrow">MUSIC FORGE</p><h3>Deine Geschichte.<br />Ein eigener Sound.</h3>
            <p>Personalisierte Songs und individuelle Audiokonzepte. Für Menschen, besondere Momente und Ideen, die im Kopf bleiben.</p>
            <Link className="text-link" href="/#music">Music Forge kennenlernen <Arrow diagonal /></Link>
          </article>
          <article className="service-card service-card--engineering">
            <div className="card-topline"><span className="mono">E / 02</span><span className="status-tag status-tag--quiet">Weiteres Markenfeld</span></div>
            <div className="engineering-mark" aria-hidden="true"><span /><span /><span /></div>
            <p className="eyebrow">ENGINEERING & DIGITAL CREATION</p><h3>Gedanken werden<br />greifbar.</h3>
            <p>Raum für CAD, 3D-Design sowie technische und digitale Kreativleistungen. Dieses Markenfeld wird schrittweise ausgestaltet.</p>
            <p className="availability-note">Noch kein verbindliches Buchungsangebot.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
