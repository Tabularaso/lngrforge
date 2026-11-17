import SectionTitle from "@/components/ui/SectionTitle";
export default function About() {
  return (
    <section id="about" className="section about-section" tabIndex={-1} aria-labelledby="about-title">
      <div className="container about-grid"><div><SectionTitle number="04" label="DAS STUDIO / DIE HALTUNG" /><h2 id="about-title">Nicht auf ein<br />Medium festgelegt.<br /><span className="muted">Auf Qualität schon.</span></h2></div><div className="about-copy"><p className="large-copy">LNGR-Forge ist eine Dachmarke für kreative und technische Ideen. Musik, Design und Engineering gehören für uns nicht in getrennte Welten.</p><p>Was sie verbindet: der Wunsch, aus einer Idee etwas Eigenes zu machen. Music Forge bildet den ersten Schwerpunkt. Weitere kreative und digitale Leistungen finden unter derselben Marke Platz – mit einem klaren Profil statt beliebiger Versprechen.</p><dl className="values"><div><dt>Klarheit.</dt><dd>Ein verständliches Konzept vor der Umsetzung.</dd></div><div><dt>Sorgfalt.</dt><dd>Die Details sind Teil des Ganzen.</dd></div><div><dt>Ehrlichkeit.</dt><dd>Nur zeigen und zusagen, was tatsächlich da ist.</dd></div></dl></div></div>
    </section>
  );
}
