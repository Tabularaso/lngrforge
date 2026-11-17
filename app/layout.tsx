import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | LNGR-Forge" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "de_DE", siteName: site.name, url: "/", title: site.title, description: site.description },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#090909" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}><body><a href="#main" className="skip-link">Zum Inhalt springen</a>{children}</body></html>;
}
