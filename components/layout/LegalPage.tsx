import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Arrow from "@/components/ui/Arrow";
export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <><Navbar /><main id="main" className="legal-page container" tabIndex={-1}><p className="eyebrow">TRANSPARENZ / ENTWICKLUNGSSTAND</p><h1>{title}</h1><div className="legal-notice"><span className="status-tag">In Vorbereitung</span>{children}</div><Link className="text-link" href="/">Zur Startseite <Arrow /></Link></main><Footer /></>;
}
