import { ChartBalance, ChartHeatmap, ChartGPPReco, ChartBAWLD, ChartAquatic, PALETTE }
  from "../data/data.jsx";

export default function App() {
  return (
    <div style={{ background: PALETTE.bg, minHeight: "100vh", color: PALETTE.text, fontFamily: "sans-serif" }}>
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

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 64px" }}>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16 }}>
            El gran giro: de sumidero a fuente
          </h2>
          <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
            {[
              { valor: "70.8%", label: "de mediciones con emisión neta en 2024" },
              { valor: "7 de 10", label: "sitios árticos emiten más de lo que absorben" },
              { valor: "337", label: "sitios de campo · 11 países · 1984–2024" },
            ].map(({ valor, label }) => (
              <div key={valor} style={{
                background: "#0F2030", border: "1px solid #1A3045",
                borderRadius: 12, padding: "20px 28px", flex: "1 1 180px"
              }}>
                <p style={{ fontSize: "2rem", fontWeight: 800, color: "#C94B2C", margin: 0 }}>{valor}</p>
                <p style={{ fontSize: 12, color: "#94a3b8", margin: "4px 0 0" }}>{label}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 24 }}>
            En 2024, el 70.8% de las mediciones mensuales registraron emisión neta de CO₂.
          </p>
          <ChartBalance height={360} />
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 24 }}>
            ¿Cuándo absorbe y cuándo emite?
          </h2>
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8, color: PALETTE.accent }}>
              Patrón estacional del NEE por bioma (g C m⁻² mes⁻¹)
            </h3>
            <p style={{ color: "#94a3b8", fontSize: 12, marginBottom: 16 }}>
              Verde = absorción neta (sumidero) · Rojo = emisión neta (fuente)
            </p>
            <ChartHeatmap />
          </div>
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 4, color: PALETTE.accent }}>
              Fotosíntesis vs Respiración del ecosistema (anual)
            </h3>
            <p style={{ color: "#64748b", fontSize: 11, marginBottom: 16, fontStyle: "italic" }}>
              * El valor de 2024 corresponde a datos parciales (enero–marzo). La caída no refleja una tendencia real.
            </p>
            <ChartGPPReco height={300} />
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
            ¿Qué ecosistemas emiten más?
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 24 }}>
            NEE mediano por tipo de ecosistema BAWLD. Positivo = fuente de CO₂, negativo = sumidero.
          </p>
          <ChartBAWLD height={320} />
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
            Ecosistemas acuáticos: ríos y lagos también emiten
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 8 }}>
            CO₂ mediano mensual en cuerpos de agua árticos. Lótico = ríos, léntico = lagos.
          </p>
          <p style={{ color: "#64748b", fontSize: 11, marginBottom: 24, fontStyle: "italic" }}>
            * El pico de ríos en 2009 (338 g C m⁻²) corresponde a mediciones en ríos siberianos con alta descarga orgánica. La escala refleja valores reales del dataset.
          </p>
          <ChartAquatic height={300} />
        </section>

      </main>

      <footer style={{ borderTop: `1px solid ${PALETTE.grid}`, padding: "24px 32px", textAlign: "center", color: "#475569", fontSize: 12 }}>
        Datos: ABCFlux v2 · NASA ABoVE · ORNL DAAC · DOI: 10.3334/ORNLDAAC/2448
      </footer>
    </div>
  )
}