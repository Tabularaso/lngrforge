export default function ForgeArtwork() {
  return (
    <div className="forge-art" aria-hidden="true">
      <div className="art-coordinate art-coordinate--top mono">KONZEPT / FORM / WIRKUNG</div>
      <svg className="forge-object" viewBox="0 0 600 560" fill="none">
        <defs>
          <linearGradient id="metal" x1="150" y1="100" x2="450" y2="420" gradientUnits="userSpaceOnUse"><stop stopColor="#a4a4a0" /><stop offset=".35" stopColor="#353733" /><stop offset="1" stopColor="#10120f" /></linearGradient>
          <linearGradient id="forge" x1="170" y1="130" x2="450" y2="370" gradientUnits="userSpaceOnUse"><stop stopColor="#ffb55c" /><stop offset=".45" stopColor="#ff7300" /><stop offset="1" stopColor="#b43e00" /></linearGradient>
          <linearGradient id="side" x1="220" y1="150" x2="350" y2="460" gradientUnits="userSpaceOnUse"><stop stopColor="#843600" /><stop offset="1" stopColor="#301b0e" /></linearGradient>
        </defs>
        <g stroke="#fff" strokeOpacity=".1">
          <path d="m70 390 230-133 230 133-230 133L70 390Z" />
          <path d="m70 390 230-133 230 133M300 257v266M70 280l230 133 230-133M70 170l230 133 230-133" strokeDasharray="3 7" />
          <path d="M70 390V170l230-133 230 133v220M300 37v220" />
        </g>
        <g className="forge-solid">
          <path d="m145 194 84-49v286l-84 49V194Z" fill="url(#metal)" stroke="#9b9f92" strokeOpacity=".35" />
          <path d="m229 145 60 35v286l-60-35V145Z" fill="#161a15" stroke="#737a69" strokeOpacity=".2" />
          <path d="m145 194 60 35 84-49-60-35-84 49Z" fill="#6d7467" />
          <path d="m205 229 209-121 59 34-209 121-59-34Z" fill="url(#forge)" />
          <path d="m205 229 59 34v66l-59-34v-66Z" fill="#b54400" />
          <path d="m264 263 209-121v66L264 329v-66Z" fill="url(#side)" stroke="#f77b24" strokeOpacity=".4" />
          <path d="m205 331 143-83 59 34-143 83-59-34Z" fill="url(#forge)" />
          <path d="m205 331 59 34v59l-59-34v-59Z" fill="#9e3b00" />
          <path d="m264 365 143-83v59l-143 83v-59Z" fill="url(#side)" stroke="#f77b24" strokeOpacity=".3" />
          <path d="m205 229 209-121M205 331l143-83" stroke="#ffd1a3" strokeWidth="1.5" />
        </g>
        <g stroke="#ff7300" strokeOpacity=".55"><path d="M60 100h25m-12-12v25M502 447h25m-12-12v25" /><path d="M100 495h65m275-420h65" /></g>
        <circle cx="300" cy="390" r="192" stroke="#ff7300" strokeOpacity=".12" strokeDasharray="2 10" transform="rotate(-30 300 390)" />
      </svg>
      <div className="art-caption"><span className="art-cross" /><span className="mono">EINE IDEE. VIELE MÖGLICHKEITEN.</span><span className="mono">F/03</span></div>
    </div>
  );
}
