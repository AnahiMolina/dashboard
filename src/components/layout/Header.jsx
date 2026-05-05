import { PALETTE } from "../../data/data.js";

export default function Header() {
  return (
    <header style={{ padding: "48px 32px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <p style={{ color: PALETTE.accent, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
        NASA · ABCFlux v2 · 1984–2024
      </p>
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
        El Ártico que respira al revés
      </h1>
      <p style={{ color: "#94a3b8", marginTop: 12, maxWidth: 640, lineHeight: 1.6 }}>
        40 años de mediciones en campo revelan cómo el permafrost en deshielo
        está convirtiendo la región ártico-boreal de sumidero a fuente de carbono.
      </p>
    </header>
  )
}