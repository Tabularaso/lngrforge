import SectionTitle from "@/components/ui/SectionTitle";
const steps = [
  { number: "01", title: "Verstehen", text: "Was soll entstehen? Wir beginnen bei der Idee, dem Anlass und den Details, die den Unterschied machen." },
  { number: "02", title: "Form geben", text: "Aus Gedanken wird ein klares Konzept. Medium, Stil und Richtung folgen der Idee – nicht umgekehrt." },
  { number: "03", title: "Ausarbeiten", text: "Kreative Werkzeuge und technische Sorgfalt bringen das Konzept in eine konkrete Form." },
  { number: "04", title: "Verfeinern", text: "Die kleinen Entscheidungen machen ein Ergebnis eigenständig. Genau dort liegt der Anspruch von LNGR-Forge." },
];
export default function Projects() {
  return (
    <section id="projects" className="section process-section" tabIndex={-1} aria-labelledby="projects-title">
      <div className="container"><SectionTitle number="03" label="EINBLICKE / DER ANSATZ" /><div className="section-heading"><h2 id="projects-title">Gute Arbeit entsteht<br /><span className="muted">nicht zufällig.</span></h2><p>Von der ersten Skizze bis zum letzten Detail: ein klarer Weg für kreative und technische Projekte.</p></div>
        <ol className="process-grid">{steps.map((step) => <li key={step.number}><span className="process-number mono">{step.number}<span aria-hidden="true">↗</span></span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        <p className="reference-note"><span className="orange-tick" /> Das Projektportfolio wächst mit freigegebenen Arbeiten. Aktuell sind noch keine Kundenreferenzen veröffentlicht.</p>
      </div>
    </section>
  );
}
