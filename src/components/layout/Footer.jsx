import { PALETTE } from "../../data/data.js";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${PALETTE.grid}`, padding: "24px 32px", textAlign: "center", color: "#475569", fontSize: 12 }}>
      Datos: ABCFlux v2 · NASA ABoVE · ORNL DAAC · DOI: 10.3334/ORNLDAAC/2448
    </footer>
  )
}