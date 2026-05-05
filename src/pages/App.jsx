import { PALETTE } from "../data/data.js";
import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx";
import KPICard from "../components/ui/KPICard.jsx";
import SectionHeader from "../components/ui/SHeader.jsx";
import ChartBalance from "../components/charts/Balance.jsx";
import ChartHeatmap from "../components/charts/Heatmap.jsx";
import ChartGPPReco from "../components/charts/GPPReco.jsx";
import ChartBAWLD from "../components/charts/BAWLD.jsx";
import ChartAquatic from "../components/charts/Aquatic.jsx";

const KPIs = [
  { valor: "70.8%", label: "de mediciones con emisión neta en 2024" },
  { valor: "7 de 10", label: "sitios árticos emiten más de lo que absorben" },
  { valor: "337", label: "sitios de campo · 11 países · 1984–2024" },
];

export default function App() {
  return (
    <div style={{ background: PALETTE.bg, minHeight: "100vh", color: PALETTE.text, fontFamily: "sans-serif" }}>
      <Header />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 64px" }}>

        <section style={{ marginBottom: 64 }}>
          <SectionHeader titulo="El gran giro: de sumidero a fuente" />
          <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
            {KPIs.map((k, i) => (<KPICard key={k.valor} {...k} delay={i * 150} />))}
          </div>
          <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 24 }}>
            En 2024, el 70.8% de las mediciones mensuales registraron emisión neta de CO₂.
          </p>
          <ChartBalance height={360} />
        </section>

        <section style={{ marginBottom: 64 }}>
          <SectionHeader titulo="¿Cuándo absorbe y cuándo emite?" />
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
            <SectionHeader
              titulo="Fotosíntesis vs Respiración del ecosistema (anual)"
              nota="* Cuando la respiración (rojo) supera la fotosíntesis (verde), el ecosistema emite más CO₂ del que absorbe."
            />
            <ChartGPPReco height={300} />
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <SectionHeader
            titulo="¿Qué ecosistemas emiten más?"
            descripcion="NEE mediano por tipo de ecosistema BAWLD. Positivo = fuente de CO₂, negativo = sumidero."
          />
          <ChartBAWLD height={320} />
        </section>

        <section style={{ marginBottom: 64 }}>
          <SectionHeader
            titulo="Ecosistemas acuáticos: ríos y lagos también emiten"
            descripcion="CO₂ mediano mensual en cuerpos de agua árticos. Lótico = ríos, léntico = lagos."
            nota="* El pico de ríos en 2009 (338 g C m⁻²) corresponde a mediciones en ríos siberianos con alta descarga orgánica."
          />
          <ChartAquatic height={300} />
        </section>

      </main>
      <Footer />
    </div>
  );
}