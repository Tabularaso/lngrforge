import { ImageResponse } from "next/og";
export const alt = "LNGR-Forge – Kreativität trifft Engineering. Music Forge und Digital Creation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ display:"flex", width:"100%", height:"100%", background:"#090909", color:"#f0eee7", padding:72, flexDirection:"column", justifyContent:"space-between", borderLeft:"18px solid #ff7300" }}><div style={{display:"flex",fontSize:30,letterSpacing:3}}>LNGR / FORGE</div><div style={{display:"flex",flexDirection:"column",fontSize:88,fontWeight:700,lineHeight:1.05}}><span>Ideen verdienen</span><span>eine eigene <span style={{color:"#ff7300"}}>Form.</span></span></div><div style={{display:"flex",fontSize:23,color:"#b6b5ad",justifyContent:"space-between"}}><span>KREATIVITÄT TRIFFT ENGINEERING</span><span>MUSIC · DESIGN · TECHNOLOGY</span></div></div>,size);
}
