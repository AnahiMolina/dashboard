import { ChartBalance, ChartHeatmap, ChartGPPReco, ChartBAWLD, ChartAquatic, PALETTE } 
  from "../data/data.jsx";



export default function App() {
  return (
    <div style={{ background: PALETTE.bg, minHeight: "100vh", color: PALETTE.text, fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
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

        {/* SECCIÓN 1 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
            El gran giro: de sumidero a fuente
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 24 }}>
            En 2024, el 70.8% de las mediciones mensuales registraron emisión neta de CO₂.
          </p>
          <ChartBalance height={360} />
        </section>

        {/* SECCIÓN 2 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 24 }}>
            ¿Cuándo absorbe y cuándo emite?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 12, color: PALETTE.accent }}>
                Patrón estacional del NEE por bioma
              </h3>
              <ChartHeatmap />
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 12, color: PALETTE.accent }}>
                Fotosíntesis vs Respiración anual
              </h3>
              <ChartGPPReco height={300} />
            </div>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
            ¿Qué ecosistemas emiten más?
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 24 }}>
            NEE mediano por tipo de ecosistema BAWLD. Positivo = fuente, negativo = sumidero.
          </p>
          <ChartBAWLD height={320} />
        </section>

        {/* SECCIÓN 4 */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>
            Ecosistemas acuáticos: ríos y lagos también emiten
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 24 }}>
            CO₂ mediano mensual en cuerpos de agua árticos. Lótico = ríos, léntico = lagos.
          </p>
          <ChartAquatic height={300} />
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${PALETTE.grid}`, padding: "24px 32px", textAlign: "center", color: "#475569", fontSize: 12 }}>
        Datos: ABCFlux v2 · NASA ABoVE · ORNL DAAC · DOI: 10.3334/ORNLDAAC/2448
      </footer>

    </div>
  )
}