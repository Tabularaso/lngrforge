# LNGR-Forge · Build 0.3

Eine kreative und technische Dachmarke. Music Forge bildet den ersten vermarkteten Schwerpunkt; Engineering & Digital Creation bleibt ein klar gekennzeichnetes Entwicklungsfeld.

## Lokal prüfen

```sh
npm ci --ignore-scripts
npm run lint
npx tsc --noEmit
npm run build
npm run start -- --hostname 127.0.0.1 --port 3103
```

Node.js 20.9+ und npm verwenden. Bestehender Stack: Next.js 16, React 19, TypeScript und Tailwind 4. Keine neuen Abhängigkeiten. `next/font` lädt Geist während des ersten Builds; anschließend werden Schriftdateien selbst gehostet.

## Inhalte pflegen

- `lib/site.ts`: kanonische Domain, Metadaten, Navigation, optional verifizierte Kontaktadresse und freigegebene Musikdaten.
- `components/sections/`: eigenständige Bereiche; weitere Markenfelder können ohne zweite Website ergänzt werden.
- Hörproben erst nach Rechtefreigabe unter `public/audio/` ablegen und mit `rightsCleared: true` eintragen. Ohne Freigaben erscheinen weder Player noch erfundene Beispiele.
- Kontakt ist bewusst ein transparenter Vorbereitungsbereich, kein funktionsloses Formular.
- `/impressum` und `/datenschutz` sind ausdrücklich unvollständige, nicht indexierbare Platzhalter. Vor einer Veröffentlichung müssen echte Geschäftsdaten und passende Rechtstexte vorliegen.

[Umsetzung und Prüfnachweise](docs/BUILD-0.3.md) · [Gestaltungsregeln](docs/STYLEGUIDE.md)

Keine Veröffentlichung oder automatische Zusammenführung vorgesehen.
