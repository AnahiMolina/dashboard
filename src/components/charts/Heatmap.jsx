import { PALETTE, DATA_HEATMAP_LONG, neeToColor} from "../../data/data.js"

export default function ChartHeatmap({ data = DATA_HEATMAP_LONG }) {
  const biomes  = ["Bosque Boreal", "Tundra", "Templado"];
  const months  = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  const cellW   = 64, cellH = 48, paddingL = 88, paddingT = 32;
  const svgW    = paddingL + months.length * cellW + 20;
  const svgH    = paddingT + biomes.length * cellH + 20;

  const lookup = {};
  data.forEach(d => { lookup[`${d.biome}-${d.month}`] = d.nee; });

  return (
    <svg width="100%" viewBox={`0 0 ${svgW} ${svgH}`}
         style={{ fontFamily: "sans-serif" }}>
      {months.map((m, i) => (
        <text key={m}
          x={paddingL + i * cellW + cellW / 2} y={paddingT - 8}
          textAnchor="middle" fill={PALETTE.text} fontSize={11}>
          {m}
        </text>
      ))}
      {biomes.map((b, j) => (
        <text key={b}
          x={paddingL - 8} y={paddingT + j * cellH + cellH / 2 + 4}
          textAnchor="end" fill={PALETTE.text} fontSize={11}>
          {b}
        </text>
      ))}
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
  )
}