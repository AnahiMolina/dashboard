import { PALETTE } from "../../data/data";

export default function SectionHeader({ titulo, descripcion, nota }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4, color: "#fff" }}>
        {titulo}
      </h2>
      {descripcion && (
        <p style={{ color: "#94a3b8", fontSize: 13, margin: "4px 0 0" }}>
          {descripcion}
        </p>
      )}
      {nota && (
        <p style={{ color: "#64748b", fontSize: 11, marginTop: 6, fontStyle: "italic" }}>
          {nota}
        </p>
      )}
    </div>
  );
}