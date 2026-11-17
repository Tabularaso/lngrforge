import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { musicSamples } from "@/lib/site";

export default function MusicForge() {
  const publishedSamples = musicSamples.filter((sample) => sample.rightsCleared && sample.src.startsWith("/audio/") && !sample.src.includes(".."));
  return (
    <section id="music" className="section music-section" tabIndex={-1} aria-labelledby="music-title">
      <div className="container">
        <SectionTitle number="02" label="MUSIC FORGE / DAS ERSTE ANGEBOTSFELD" />
        <div className="music-intro"><h2 id="music-title">Manche Geschichten<br />verdienen <span>einen Song.</span></h2><p>Für den großen Tag. Den kleinen Insider. Das Team, das zusammenhält. Persönliche Geschichten werden zu individuellen Songs – mit einem Sound, der zu ihnen passt.</p></div>
        <div className="music-feature">
          <div className="record-art" aria-hidden="true"><div className="record-disc"><div className="record-label"><span className="mono">LNGR / AUDIO</span><span>Deine<br />Geschichte.</span><i /></div></div><span className="record-caption mono">INDIVIDUELL GEDACHT. MUSIKALISCH GEFORMT.</span></div>
          <div className="music-feature-copy">
            <span className="eyebrow">KEIN ANLASS WIE JEDER ANDERE.</span><h3>So persönlich<br />wie die Idee dahinter.</h3>
            <p>Du bringst Anlass, Erinnerungen und Wünsche mit. Music Forge verbindet daraus entwickelte Texte, eine passende Klangwelt und KI-gestützte Musikproduktion zu einem individuellen Konzept.</p>
            <ul className="occasion-list"><li>Geburtstage & Hochzeiten</li><li>Freunde & persönliche Geschichten</li><li>Gaming-Communities & Teams</li><li>Unternehmen & besondere Anlässe</li></ul>
            <Link className="button button-dark" href="/#contact">Die eigene Idee vorbereiten <Arrow diagonal /></Link>
          </div>
        </div>
        <div className="genre-line"><span className="mono">VIELE STILE. DEIN CHARAKTER.</span><p>Heavy Metal <i> / </i> Country Rock <i> / </i> Dubstep <i> / </i> Industrial <i> / </i> Dein Wunschstil</p></div>
        <div className="portfolio-heading"><h3>Eine Bühne für den Sound.</h3><span className="mono">HÖRPROBEN</span></div>
        {publishedSamples.length ? <div className="sample-grid">{publishedSamples.map((sample) => <article key={sample.id} className="sample-card"><p className="eyebrow">{sample.genre}</p><h4>{sample.title}</h4><p>{sample.description}</p><audio controls preload="none" aria-label={`Hörprobe: ${sample.title}`} src={sample.src}>Dein Browser unterstützt den Audioplayer nicht.</audio></article>)}</div> : <div className="portfolio-empty"><span className="portfolio-icon" aria-hidden="true">↗</span><div><h4>Hörproben in Vorbereitung.</h4><p>Hier erscheinen ausgewählte Songs, sobald die Audiodateien und ihre Veröffentlichung freigegeben sind. Aktuell sind noch keine Hörproben veröffentlicht.</p></div><span className="mono">QUALITÄT VOR QUANTITÄT.</span></div>}
      </div>
    </section>
  );
}
