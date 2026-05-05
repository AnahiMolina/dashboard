import {XAxis, YAxis, CartesianGrid,Tooltip, ReferenceLine, ResponsiveContainer, BarChart, Bar, Cell, LabelList} from "recharts"
import { PALETTE, axisStyle, DATA_BAWLD } from "../../data/data.js"
import TooltipArctic from "../ui/Tooltip.jsx"

export default function ChartBAWLD({ data = DATA_BAWLD, height = 300 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={[...data].reverse()}
        layout="vertical"
        margin={{ top: 5, right: 60, left: 100, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.grid} horizontal={false} />
        <XAxis
          type="number" tick={axisStyle}
          label={{ value: "NEE mediano (g C m⁻² mes⁻¹)", position: "insideBottom",
                   offset: -2, fill: PALETTE.text, fontSize: 11 }}
          domain={[-7, 8]}
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