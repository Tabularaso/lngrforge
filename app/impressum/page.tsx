import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
export const metadata: Metadata = { title: "Impressum – in Vorbereitung", description: "Status der noch fehlenden Anbieterangaben für LNGR-Forge.", alternates: { canonical: "/impressum" }, robots: { index: false, follow: true } };
export default function Impressum() {
  return <LegalPage title="Impressum"><h2>Anbieterangaben noch nicht vollständig.</h2><p>Für diesen Entwicklungsstand liegen noch keine vollständig verifizierten Geschäftsdaten vor. Deshalb werden hier keine Namen, Anschriften oder Registrierungsangaben ergänzt.</p><p>Diese Seite ist kein vollständiges Impressum. Die erforderlichen Angaben müssen vor dem kommerziellen Betrieb ergänzt und geprüft werden.</p><p>Aktuell können über diese Website keine Bestellungen aufgegeben werden.</p></LegalPage>;
}
