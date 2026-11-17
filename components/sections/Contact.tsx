import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Arrow from "@/components/ui/Arrow";
import { site } from "@/lib/site";
export default function Contact() {
  return (
    <section id="contact" className="section contact-section" tabIndex={-1} aria-labelledby="contact-title">
      <div className="container"><SectionTitle number="05" label="KONTAKT / DER NÄCHSTE SCHRITT" /><div className="contact-grid"><div><h2 id="contact-title">Alles beginnt<br />mit <span>einer Idee.</span></h2><p className="contact-intro">Ein persönlicher Song? Ein digitales Konzept? Mit einer klaren Beschreibung wird aus dem ersten Gedanken ein guter Ausgangspunkt.</p><Link className="text-link" href="/#music">Noch einmal Music Forge entdecken <Arrow /></Link></div><div className="contact-panel"><p className="eyebrow">GUT VORBEREITET</p><h3>Was deine Idee mitbringen kann.</h3><ol className="briefing-list"><li><span>01</span><div><strong>Die Richtung</strong><p>Musik, Design oder eine technische Idee?</p></div></li><li><span>02</span><div><strong>Das Persönliche</strong><p>Anlass, Stil und das, was dir besonders wichtig ist.</p></div></li><li><span>03</span><div><strong>Der Rahmen</strong><p>Dein gewünschtes Ergebnis und ein passender Zeitrahmen.</p></div></li></ol>{site.contact ? <Link className="button button-primary" href={`mailto:${site.contact.email}`}>Kontakt per E-Mail <Arrow diagonal /></Link> : <div className="contact-status"><span className="status-light" aria-hidden="true" /><div><strong>Der direkte Kontaktkanal wird vorbereitet.</strong><p>Verifizierte Geschäftskontaktdaten sind noch nicht hinterlegt. Deshalb gibt es hier aktuell kein Anfrageformular und keine Bestellmöglichkeit.</p></div></div>}</div></div></div>
    </section>
  );
}
