// =============================================================================
// arctic-charts-data.js
// Datos y componentes Recharts para el dashboard "El Ártico que respira al revés"
// Stack: Vite + React + Recharts + shadcn/ui + Tailwind
//
// USO: importa los componentes que necesites en tus páginas/secciones.
// Los datos están hardcodeados desde el EDA en R (medianas, flag == "0").
// Cuando tengas los CSV procesados, reemplaza DATA_* con fetch/import.
// =============================================================================

// ─────────────────────────────────────────────────────────────────────────────
// PALETA (mismos valores que el R — cámbiala aquí para sincronizar ambos)
// ─────────────────────────────────────────────────────────────────────────────
export const PALETTE = {
  source:    "#C94B2C",  // Emisión / fuente
  sink:      "#1F6B5C",  // Absorción / sumidero
  boreal:    "#2A6496",  // Bosque boreal
  tundra:    "#5BA3A0",  // Tundra
  temperate: "#B07D3A",  // Templado
  accent:    "#7EC8C8",  // Highlight
  grid:      "#1A3045",
  text:      "#C8D8E4",
  bg:        "#0B1C26",
};


// ─────────────────────────────────────────────────────────────────────────────
// DATOS — Sección 1: Balance fuente vs sumidero anual
// Variables: nee, year | Fuente: abcflux_terrestrial_clean.csv (flag == "0")
// ─────────────────────────────────────────────────────────────────────────────
export const DATA_BALANCE = [
  { year: 2000, pct_source: 60.8, pct_sink: 39.2, nee_median: 4.078,  n: 125 },
  { year: 2001, pct_source: 66.9, pct_sink: 33.1, nee_median: 5.492,  n: 175 },
  { year: 2002, pct_source: 57.7, pct_sink: 42.3, nee_median: 2.825,  n: 246 },
  { year: 2003, pct_source: 52.7, pct_sink: 47.3, nee_median: 1.636,  n: 332 },
  { year: 2004, pct_source: 53.2, pct_sink: 46.8, nee_median: 1.275,  n: 479 },
  { year: 2005, pct_source: 52.8, pct_sink: 47.2, nee_median: 1.021,  n: 468 },
  { year: 2006, pct_source: 55.0, pct_sink: 45.0, nee_median: 2.128,  n: 409 },
  { year: 2007, pct_source: 47.7, pct_sink: 52.3, nee_median: -1.577, n: 438 },
  { year: 2008, pct_source: 52.5, pct_sink: 47.5, nee_median: 1.274,  n: 463 },
  { year: 2009, pct_source: 53.8, pct_sink: 46.2, nee_median: 1.680,  n: 359 },
  { year: 2010, pct_source: 55.8, pct_sink: 44.2, nee_median: 2.073,  n: 330 },
  { year: 2011, pct_source: 55.7, pct_sink: 44.3, nee_median: 2.587,  n: 357 },
  { year: 2012, pct_source: 59.1, pct_sink: 40.9, nee_median: 2.624,  n: 557 },
  { year: 2013, pct_source: 51.7, pct_sink: 48.3, nee_median: 0.700,  n: 673 },
  { year: 2014, pct_source: 50.6, pct_sink: 49.4, nee_median: 0.103,  n: 745 },
  { year: 2015, pct_source: 58.1, pct_sink: 41.9, nee_median: 1.848,  n: 663 },
  { year: 2016, pct_source: 59.9, pct_sink: 40.1, nee_median: 2.844,  n: 613 },
  { year: 2017, pct_source: 55.9, pct_sink: 44.1, nee_median: 1.662,  n: 726 },
  { year: 2018, pct_source: 59.8, pct_sink: 40.2, nee_median: 2.922,  n: 674 },
  { year: 2019, pct_source: 57.2, pct_sink: 42.8, nee_median: 2.745,  n: 720 },
  { year: 2020, pct_source: 64.3, pct_sink: 35.7, nee_median: 4.412,  n: 695 },
  { year: 2021, pct_source: 68.4, pct_sink: 31.6, nee_median: 3.032,  n: 728 },
  { year: 2022, pct_source: 65.1, pct_sink: 34.9, nee_median: 2.250,  n: 661 },
  { year: 2023, pct_source: 60.3, pct_sink: 39.7, nee_median: 3.201,  n: 287 },
  { year: 2024, pct_source: 70.8, pct_sink: 29.2, nee_median: 2.344,  n:  48 },
];

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — Sección 2a: Heatmap estacional NEE por bioma × mes
// Variables: nee, biome, month
// ─────────────────────────────────────────────────────────────────────────────
const MONTHS = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

// Formato plano para Recharts (una fila por bioma, cols = meses)
export const DATA_HEATMAP = [
  {
    biome: "Boreal",
    Ene: 10.43, Feb: 8.07,  Mar: 7.25,  Abr: 2.00,  May: -17.71, Jun: -37.81,
    Jul: -32.73, Ago: -14.04, Sep: 3.54, Oct: 16.28, Nov: 15.49,  Dic: 12.45,
  },
  {
    biome: "Tundra",
    Ene: 4.27,  Feb: 3.39,  Mar: 2.27,  Abr: 1.82,  May: 2.67,  Jun: -14.63,
    Jul: -37.13, Ago: -17.91, Sep: 9.28, Oct: 9.79,  Nov: 7.34,  Dic: 5.92,
  },
  {
    biome: "Temperate",
    Ene: 16.25, Feb: 10.11, Mar: 0.91,  Abr: -8.62, May: -23.27, Jun: -51.40,
    Jul: -38.48, Ago: -48.45, Sep: -25.77, Oct: 3.62, Nov: 10.87, Dic: 14.31,
  },
];

// Versión larga para heatmap custom con celdas
export const DATA_HEATMAP_LONG = DATA_HEATMAP.flatMap(row =>
  MONTHS.map((mes, i) => ({
    biome: row.biome,
    month: i + 1,
    mes,
    nee: row[mes],
  }))
);

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — Sección 2b: GPP vs Reco anual
// Variables: gpp, reco, year
// ─────────────────────────────────────────────────────────────────────────────
export const DATA_GPP_RECO = [
  { year: 2000, gpp: 20.40, reco: 34.21 },
  { year: 2001, gpp: 19.09, reco: 27.02 },
  { year: 2002, gpp: 16.39, reco: 27.04 },
  { year: 2003, gpp: 26.40, reco: 24.05 },
  { year: 2004, gpp: 19.67, reco: 22.96 },
  { year: 2005, gpp: 26.87, reco: 28.62 },
  { year: 2006, gpp: 27.21, reco: 24.90 },
  { year: 2007, gpp: 38.49, reco: 32.81 },
  { year: 2008, gpp: 26.30, reco: 29.32 },
  { year: 2009, gpp: 17.70, reco: 25.96 },
  { year: 2010, gpp: 25.09, reco: 29.90 },
  { year: 2011, gpp: 20.61, reco: 27.04 },
  { year: 2012, gpp: 31.74, reco: 29.14 },
  { year: 2013, gpp: 26.81, reco: 29.55 },
  { year: 2014, gpp: 23.45, reco: 24.86 },
  { year: 2015, gpp: 25.63, reco: 31.40 },
  { year: 2016, gpp: 17.51, reco: 28.78 },
  { year: 2017, gpp: 32.30, reco: 35.85 },
  { year: 2018, gpp: 29.44, reco: 34.59 },
  { year: 2019, gpp: 35.90, reco: 40.22 },
  { year: 2020, gpp: 19.92, reco: 35.24 },
  { year: 2021, gpp: 18.65, reco: 34.23 },
  { year: 2022, gpp: 42.14, reco: 40.80 },
  { year: 2023, gpp: 48.18, reco: 46.24 },
  { year: 2024, gpp:  1.08, reco: 19.28 },
].map(d => ({ ...d, balance: parseFloat((d.reco - d.gpp).toFixed(2)) }));

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — Sección 3: NEE por ecosistema BAWLD
// Variables: bawld_class, nee | Solo ecosistemas con ≥30 obs, flag == "0"
// ─────────────────────────────────────────────────────────────────────────────
export const DATA_BAWLD = [
  { ecosystem: "Permafrost Bog", nee_median: -4.98, pct_source: 43.8, n: 532  },
  { ecosystem: "Bog",            nee_median: -2.29, pct_source: 44.2, n: 1576 },
  { ecosystem: "Dry Tundra",     nee_median:  0.91, pct_source: 57.1, n: 1591 },
  { ecosystem: "Wet Tundra",     nee_median:  2.07, pct_source: 60.6, n: 1756 },
  { ecosystem: "Moist Tundra",   nee_median:  3.00, pct_source: 59.0, n: 485  },
  { ecosystem: "Fen",            nee_median:  3.23, pct_source: 63.1, n: 1348 },
  { ecosystem: "Boreal Forest",  nee_median:  5.93, pct_source: 60.7, n: 5055 },
];

// ─────────────────────────────────────────────────────────────────────────────
// DATOS — Sección 4: CO₂ acuático anual por tipo de cuerpo de agua
// Variables: co2_flux, year, waterbody_type
// ─────────────────────────────────────────────────────────────────────────────
// Versión pivotada: una fila por año, cols = Lentic / Lotic
export const DATA_AQUATIC = [
  { year: 1986, Lentic: 11.78 },
  { year: 1988, Lentic:  1.99,  Lotic:  0.69 },
  { year: 1994, Lentic:  4.22 },
  { year: 1996, Lentic: 36.54 },
  { year: 1998, Lentic: 17.53 },
  { year: 1999, Lentic: 12.65 },
  { year: 2000, Lentic: 10.11 },
  { year: 2001, Lentic: 11.78,  Lotic: 74.65 },
  { year: 2003, Lentic: 10.80 },
  { year: 2004, Lentic:  8.68 },
  { year: 2005, Lentic:  6.24 },
  { year: 2006, Lentic:  6.87 },
  { year: 2007, Lentic:  8.37 },
  { year: 2008, Lentic:  7.27 },
  { year: 2009, Lentic:  3.35,  Lotic: 338.28 },
  { year: 2010, Lentic:  3.10,  Lotic:   1.98 },
  { year: 2011, Lentic:  6.98,  Lotic: 122.78 },
  { year: 2012, Lentic: 13.48,  Lotic:  54.45 },
  { year: 2013, Lentic: 16.53,  Lotic:  53.53 },
  { year: 2014, Lentic: 18.12,  Lotic:  57.70 },
  { year: 2015, Lentic: 10.66,  Lotic:  65.08 },
  { year: 2016, Lentic: 15.34,  Lotic:  88.48 },
  { year: 2017, Lentic: 12.13,  Lotic: 138.59 },
  { year: 2018, Lentic:  7.91,  Lotic:  26.04 },
  { year: 2019, Lentic:  7.87,  Lotic:  52.75 },
  { year: 2020, Lentic: 17.91,  Lotic:  44.60 },
  { year: 2021, Lentic: 16.62,  Lotic:  13.49 },
  { year: 2022, Lentic:  2.61,  Lotic:   3.68 },
  { year: 2023, Lentic:  6.59,  Lotic:  26.66 },
  { year: 2024, Lentic:  0.93,  Lotic:  22.46 },
];


// =============================================================================
// COMPONENTES RECHARTS
// Importa lo que necesites en tu JSX:
//   import { ChartBalance, ChartHeatmap, ChartGPPReco,
//            ChartBAWLD, ChartAquatic } from "./arctic-charts-data"
// =============================================================================

import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ReferenceLine, ResponsiveContainer, Cell, LabelList,
} from "recharts";

// ── Tooltip común ──────────────────────────────────────────────────────────
const TooltipArctic = ({ active, payload, label, unit = "" }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#0F2030", border: "1px solid #1A3045",
      borderRadius: 8, padding: "8px 12px", fontSize: 12, color: PALETTE.text,
    }}>
      <p style={{ margin: 0, fontWeight: 600, color: "#fff" }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ margin: "2px 0", color: p.color }}>
          {p.name}: <strong>{p.value}{unit}</strong>
        </p>
      ))}
    </div>
  );
};

// ── Estilos de ejes compartidos ─────────────────────────────────────────────
const axisStyle = { fill: PALETTE.text, fontSize: 11 };


// ─────────────────────────────────────────────────────────────────────────────
// SECCIÓN 1 — Área apilada: % fuente vs sumidero
// ─────────────────────────────────────────────────────────────────────────────
export function ChartBalance({ data = DATA_BALANCE, height = 340 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="gradSource" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor={PALETTE.source} stopOpacity={0.9} />
            <stop offset="95%" stopColor={PALETTE.source} stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="gradSink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor={PALETTE.sink} stopOpacity={0.9} />
            <stop offset="95%" stopColor={PALETTE.sink} stopOpacity={0.6} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.grid} />
        <XAxis dataKey="year" tick={axisStyle} />
        <YAxis tickFormatter={v => `${v}%`} tick={axisStyle} domain={[0, 100]} />
        <Tooltip content={<TooltipArctic unit="%" />} />
        <Legend wrapperStyle={{ color: PALETTE.text, fontSize: 12 }} />
        <ReferenceLine y={50} stroke="#FFFFFF40" strokeDasharray="4 4" />
        <Area
          type="monotone" dataKey="pct_sink" name="Sumidero (absorbe CO₂)" stackId="1"
          stroke={PALETTE.sink} fill="url(#gradSink)"
        />
        <Area
          type="monotone" dataKey="pct_source" name="Fuente (emite CO₂)" stackId="1"
          stroke={PALETTE.source} fill="url(#gradSource)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// SECCIÓN 2a — Heatmap estacional (SVG custom, Recharts no tiene heatmap nativo)
// ─────────────────────────────────────────────────────────────────────────────
function neeToColor(value) {
  if (value === null || value === undefined) return "#1A3045";
  const maxAbs = 55;
  const clamped = Math.max(-maxAbs, Math.min(maxAbs, value));
  if (clamped < 0) {
    // negativo → verde (sumidero)
    const t = Math.abs(clamped) / maxAbs;
    const r = Math.round(31  + (10  - 31)  * t);
    const g = Math.round(107 + (160 - 107) * t);
    const b = Math.round(92  + (120 - 92)  * t);
    return `rgb(${r},${g},${b})`;
  } else {
    // positivo → rojo (fuente)
    const t = clamped / maxAbs;
    const r = Math.round(31  + (201 - 31)  * t);
    const g = Math.round(107 + (75  - 107) * t);
    const b = Math.round(92  + (44  - 92)  * t);
    return `rgb(${r},${g},${b})`;
  }
}

export function ChartHeatmap({ data = DATA_HEATMAP_LONG }) {
  const biomes  = ["Boreal", "Tundra", "Temperate"];
  const months  = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  const cellW   = 64, cellH = 48, paddingL = 88, paddingT = 32;
  const svgW    = paddingL + months.length * cellW + 20;
  const svgH    = paddingT + biomes.length * cellH + 20;

  const lookup = {};
  data.forEach(d => { lookup[`${d.biome}-${d.month}`] = d.nee; });

  return (
    <svg width="100%" viewBox={`0 0 ${svgW} ${svgH}`}
         style={{ fontFamily: "sans-serif" }}>
      {/* Etiquetas eje X (meses) */}
      {months.map((m, i) => (
        <text key={m}
          x={paddingL + i * cellW + cellW / 2} y={paddingT - 8}
          textAnchor="middle" fill={PALETTE.text} fontSize={11}>
          {m}
        </text>
      ))}
      {/* Etiquetas eje Y (biomas) */}
      {biomes.map((b, j) => (
        <text key={b}
          x={paddingL - 8} y={paddingT + j * cellH + cellH / 2 + 4}
          textAnchor="end" fill={PALETTE.text} fontSize={11}>
          {b}
        </text>
      ))}
      {/* Celdas */}
      {biomes.map((b, j) =>
        months.map((_, i) => {
          const val = lookup[`${b}-${i + 1}`];
          const bg  = neeToColor(val);
          const tx  = Math.abs(val ?? 0) > 25 ? "#fff" : PALETTE.text;
          return (
            <g key={`${b}-${i}`}>
              <rect
                x={paddingL + i * cellW + 1} y={paddingT + j * cellH + 1}
                width={cellW - 2} height={cellH - 2}
                rx={4} fill={bg}
              />
              <text
                x={paddingL + i * cellW + cellW / 2}
                y={paddingT + j * cellH + cellH / 2 + 4}
                textAnchor="middle" fill={tx} fontSize={10} fontWeight="600">
                {val?.toFixed(1) ?? "—"}
              </text>
            </g>
          );
        })
      )}
    </svg>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// SECCIÓN 2b — GPP vs Reco (líneas + área de diferencia)
// ─────────────────────────────────────────────────────────────────────────────
export function ChartGPPReco({ data = DATA_GPP_RECO, height = 320 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.grid} />
        <XAxis dataKey="year" tick={axisStyle} />
        <YAxis tick={axisStyle} unit=" gC" />
        <Tooltip content={<TooltipArctic unit=" g C m⁻² mes⁻¹" />} />
        <Legend wrapperStyle={{ color: PALETTE.text, fontSize: 12 }} />
        <ReferenceLine y={0} stroke="#FFFFFF30" />
        <Line
          type="monotone" dataKey="gpp" name="GPP (fotosíntesis)"
          stroke={PALETTE.sink} strokeWidth={2} dot={{ r: 3, fill: PALETTE.sink }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone" dataKey="reco" name="Reco (respiración)"
          stroke={PALETTE.source} strokeWidth={2} dot={{ r: 3, fill: PALETTE.source }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// SECCIÓN 3 — Barras horizontales: NEE por ecosistema BAWLD
// ─────────────────────────────────────────────────────────────────────────────
export function ChartBAWLD({ data = DATA_BAWLD, height = 300 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={[...data].reverse()}   // más legible: positivos arriba
        layout="vertical"
        margin={{ top: 5, right: 60, left: 100, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.grid} horizontal={false} />
        <XAxis
          type="number" tick={axisStyle}
          label={{ value: "NEE mediano (g C m⁻² mes⁻¹)", position: "insideBottom",
                   offset: -2, fill: PALETTE.text, fontSize: 11 }}
          domain={["dataMin - 1", "dataMax + 1"]}
        />
        <YAxis type="category" dataKey="ecosystem" tick={{ ...axisStyle, fontSize: 11 }}
               width={96} />
        <Tooltip content={<TooltipArctic unit=" g C m⁻² mes⁻¹" />} />
        <ReferenceLine x={0} stroke="#FFFFFF50" strokeWidth={1.5} />
        <Bar dataKey="nee_median" name="NEE mediano" radius={[0, 4, 4, 0]}>
          {data.map((d, i) => (
            <Cell key={i}
              fill={d.nee_median > 0 ? PALETTE.source : PALETTE.sink}
              fillOpacity={0.88}
            />
          ))}
          <LabelList
            dataKey="pct_source"
            position="right"
            formatter={v => `${v}%↑`}
            style={{ fill: PALETTE.text, fontSize: 10 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// SECCIÓN 4 — CO₂ acuático: líneas Lentic vs Lotic
// ─────────────────────────────────────────────────────────────────────────────
export function ChartAquatic({ data = DATA_AQUATIC, height = 300 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.grid} />
        <XAxis dataKey="year" tick={axisStyle} />
        <YAxis tick={axisStyle} unit=" gC"
               label={{ value: "CO₂ mediano (g C m⁻² mes⁻¹)",
                        angle: -90, position: "insideLeft",
                        fill: PALETTE.text, fontSize: 10 }} />
        <Tooltip content={<TooltipArctic unit=" g C m⁻² mes⁻¹" />} />
        <Legend wrapperStyle={{ color: PALETTE.text, fontSize: 12 }} />
        <ReferenceLine y={0} stroke="#FFFFFF30" strokeDasharray="4 4" />
        <Line
          type="monotone" dataKey="Lentic" name="Lentic (lagos)"
          stroke={PALETTE.boreal} strokeWidth={2}
          dot={{ r: 3, fill: PALETTE.boreal }} connectNulls activeDot={{ r: 5 }}
        />
        <Line
          type="monotone" dataKey="Lotic" name="Lotic (ríos/arroyos)"
          stroke={PALETTE.temperate} strokeWidth={2}
          dot={{ r: 3, fill: PALETTE.temperate }} connectNulls activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}


// =============================================================================
// EJEMPLO DE USO EN UNA SECCIÓN DEL DASHBOARD
// =============================================================================
//
// import { ChartBalance, ChartHeatmap, ChartGPPReco, ChartBAWLD, ChartAquatic }
//   from "@/data/arctic-charts-data";
//
// export function Section1() {
//   return (
//     <section className="py-16 px-6">
//       <h2 className="text-2xl font-bold text-white mb-2">
//         El gran giro: de sumidero a fuente
//       </h2>
//       <p className="text-slate-400 mb-6 text-sm">
//         En 2024, el 70.8% de las mediciones mensuales registraron emisión neta.
//       </p>
//       <ChartBalance height={360} />
//     </section>
//   );
// }
//
// export function Section2() {
//   return (
//     <section className="py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
//       <div>
//         <h3 className="text-lg font-semibold text-white mb-4">
//           Patrón estacional del NEE
//         </h3>
//         <ChartHeatmap />
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold text-white mb-4">
//           GPP vs Respiración del ecosistema
//         </h3>
//         <ChartGPPReco />
//       </div>
//     </section>
//   );
// }
