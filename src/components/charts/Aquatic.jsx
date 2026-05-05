import {LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip, Legend, ReferenceLine, 
  ResponsiveContainer} from "recharts"
import { PALETTE, axisStyle, DATA_AQUATIC} from "../../data/data.js";
import TooltipArctic from "../ui/Tooltip.jsx"

export default function ChartAquatic({ data = DATA_AQUATIC, height = 300 }) {
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
          type="monotone" dataKey="Lentico" name="Lentic (lagos)"
          stroke={PALETTE.boreal} strokeWidth={2}
          dot={{ r: 3, fill: PALETTE.boreal }} connectNulls activeDot={{ r: 5 }}
        />
        <Line
          type="monotone" dataKey="Lotico" name="Lotic (ríos/arroyos)"
          stroke={PALETTE.temperate} strokeWidth={2}
          dot={{ r: 3, fill: PALETTE.temperate }} connectNulls activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}