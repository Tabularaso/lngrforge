export const site = {
  name: "LNGR-Forge",
  url: "https://www.lngr-forge.de",
  title: "LNGR-Forge – Kreativität trifft Engineering",
  description:
    "Ein Studio für kreative und technische Ideen. Entdecke Music Forge für persönliche Songs sowie Engineering & Digital Creation unter einer gemeinsamen Marke.",
  // Only add independently verified business contact details here.
  contact: null as { email: string } | null,
};

export const navigation = [
  { href: "/#services", label: "Leistungen" },
  { href: "/#music", label: "Music Forge" },
  { href: "/#projects", label: "Einblicke" },
  { href: "/#about", label: "Das Studio" },
];

export type MusicSample = {
  id: string;
  title: string;
  genre: string;
  description: string;
  src: string;
  rightsCleared: boolean;
};

// Intentionally empty. Never publish invented audio or unapproved samples.
export const musicSamples: readonly MusicSample[] = [];
