import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
export const metadata: Metadata = { title: "Datenschutz – in Vorbereitung", description: "Status der noch zu erstellenden Datenschutzhinweise für LNGR-Forge.", alternates: { canonical: "/datenschutz" }, robots: { index: false, follow: true } };
export default function Datenschutz() {
  return <LegalPage title="Datenschutz"><h2>Datenschutzhinweise werden vorbereitet.</h2><p>Diese Seite ist noch keine vollständige Datenschutzerklärung. Verantwortliche Stelle, Hosting und die tatsächlich eingesetzten Verarbeitungen müssen vor dem kommerziellen Betrieb dokumentiert und rechtlich geprüft werden.</p><p>In diesem Entwicklungsstand gibt es kein Anfrageformular, keine Zahlungsintegration und keine eingebetteten Audio-Drittanbieter.</p><p>Aus diesen Angaben folgt keine Zusicherung, dass beim technischen Betrieb der Website keine personenbezogenen Daten verarbeitet werden.</p></LegalPage>;
}
