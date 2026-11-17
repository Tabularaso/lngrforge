# Build 0.3 – Umsetzung und Abnahme

Stand: 17.11.2026. Branch `build/0.3-brand-foundation`, Ausgangspunkt `b40d389f6e43ad9a2be88c047f59e4adb19b5574`. Remote-main vor Bearbeitung und nach Implementierung identisch. Eigenständiger Clone; Poe und andere Projekte unberührt.

## Umsetzung

Marken-Hero mit selbst erstelltem SVG-F, zwei Leistungsfelder, prominenter Music-Forge-Bereich, dekorative Vinylgrafik und vorbereitetes Hörproben-Datenmodell. Prozess/Einblicke, Studiohaltung, Kontaktvorbereitung und Footer sind vollständig ausgearbeitet. Keine erfundenen Kundenprojekte, Bewertungen, Biografien, Preise oder Audiodateien.

Navigation mit gültigen Abschnittszielen, mobilem Disclosure, `aria-expanded`, `aria-controls`, Escape/Fokusrückgabe, Schließen bei Linkwahl, Außenklick und Desktop-Wechsel. Skip-Link, semantische Überschriften, `lang=de`, Fokusmarkierung und reduzierte Bewegung. Einheitliche Geist-Typografie statt Arial-Override.

Markenmetadaten, Canonical auf die bestehende Domain, Social-Vorschaubild (1200×630, lokal erzeugt), SVG-Icon, robots.txt und Sitemap. Rechtliche Platzhalter sind noindex und aus der Sitemap ausgeschlossen.

## Tatsächlich geprüft

| Prüfung | Ergebnis |
|---|---|
| `npm run build` | PASS – alle acht App-Routen statisch erzeugt |
| `npm run lint` | PASS – keine Fehler oder Warnungen |
| TypeScript `tsc --noEmit` | PASS |
| Browser 1440×1000, 1024×900, 390×844, 320×800 | PASS – kein horizontaler Überlauf |
| Desktop/Music-Forge-Einstieg | PASS – Ziel vorhanden, Marken- und Music-Flächen visuell geprüft |
| Mobile Enter/Öffnen, Escape/Schließen/Fokus | PASS |
| Mobile Kontaktlink schließt Menü | PASS |
| Wechsel mit geöffnetem Menü auf Desktop | PASS – Zustand geschlossen |
| Skip-Link per Enter | PASS – Fokus auf `main` |
| Impressum/Datenschutz und Rückkehr | PASS – Inhalte sichtbar und noindex vorhanden |
| Alle internen Abschnittsziele | PASS – kein fehlendes Ziel, genau eine H1 |
| Browserkonsole während der Bedienung | PASS – keine Warnungen/Fehler erfasst |

Screenshots: [Desktop](screenshots/build-0.3-desktop.jpg), [Mobil](screenshots/build-0.3-mobile.jpg), [Desktop-Hero](screenshots/build-0.3-desktop-hero.jpg), [Mobile-Hero](screenshots/build-0.3-mobile-hero.jpg). Browser-Prüfung gegen den lokalen Produktionsserver, kein Deployment. Externe Screenreader, reale iOS-/Android-Geräte und Lighthouse wurden nicht geprüft. Reduced-motion ist als CSS-Regel implementiert; eine Betriebssystem-Umschaltung wurde nicht durchgeführt.

## Grenzen und Build 0.4

Keine verifizierte Geschäftskontaktadresse im Projekt: Kontaktaufnahme und Buchung sind noch nicht aktiv. Rechtstexte fehlen. Keine freigegebenen Hörproben: Audio-Wiedergabe ist vorbereitet, aber ohne echte Dateien nicht abgenommen. Vor Veröffentlichung müssen diese Inhalte ergänzt und geprüft werden.

Build 0.4: drei bis sechs tatsächlich freigegebene Songs mit Rechte-/Einwilligungsnachweisen, echte Titel/Genres und kurzen Entstehungsgeschichten einpflegen; mobile native Audio-Bedienung testen. Leistungsumfang, Korrekturrunden und Nutzungsrechte verbindlich definieren. Erst mit verifizierten Geschäftsdaten einen echten Kontaktweg und geprüfte Rechtstexte ergänzen. Keine Preis- oder Lieferzeitversprechen ohne Betreiberentscheidung. Dachmarkenstruktur beibehalten.

## Geänderte Dateien

Dateiliste siehe nachfolgender Abschnitt; sämtliche Änderungen gehören nur zu diesem Website-Branch. Paketdateien und Lockfile unverändert.

- `README.md`
- `app/datenschutz/page.tsx`
- `app/globals.css`
- `app/icon.svg`
- `app/impressum/page.tsx`
- `app/layout.tsx`
- `app/opengraph-image.tsx`
- `app/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `components/layout/Footer.tsx`
- `components/layout/LegalPage.tsx`
- `components/layout/Navbar.tsx`
- `components/sections/About.tsx`
- `components/sections/Contact.tsx`
- `components/sections/ForgeArtwork.tsx`
- `components/sections/Hero.tsx`
- `components/sections/MusicForge.tsx`
- `components/sections/Projects.tsx`
- `components/sections/Services.tsx`
- `components/ui/Arrow.tsx`
- `components/ui/Brand.tsx`
- `components/ui/SectionTitle.tsx`
- `docs/BUILD-0.3.md`
- `docs/STYLEGUIDE.md`
- `docs/screenshots/build-0.3-desktop-hero.jpg`
- `docs/screenshots/build-0.3-desktop.jpg`
- `docs/screenshots/build-0.3-mobile-hero.jpg`
- `docs/screenshots/build-0.3-mobile.jpg`
- `lib/site.ts`

HTTP-Prüfung: `/impressum`, `/datenschutz`, `/robots.txt`, `/sitemap.xml`, `/icon.svg` und `/opengraph-image` liefern HTTP 200; Canonical, deutsche Sprache, OG/Twitter und noindex wurden zusätzlich am ausgelieferten HTML geprüft. Die erste Prüfassertion erwartete eine abschließende URL-Schrägstrichdarstellung; nach URL-Normalisierung bestanden die unveränderten Metadaten.
