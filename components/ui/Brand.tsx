export default function Brand({ large = false }: { large?: boolean }) {
  return (
    <span className={`brand${large ? " brand--large" : ""}`}>
      <svg viewBox="0 0 32 36" fill="none" aria-hidden="true">
        <path d="M3 3h26v8H11v6h14v8H11v8H3V3Z" fill="currentColor" />
        <path d="m24 29 5-5v9h-9l4-4Z" fill="currentColor" />
      </svg>
      <span>LNGR<span className="brand-divider">/</span>FORGE<span className="brand-dot">.</span></span>
    </span>
  );
}
