import {LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip, Legend, ReferenceLine, 
  ResponsiveContainer} from "recharts"

import TooltipArctic from "../ui/Tooltip.jsx"
import { PALETTE, axisStyle, DATA_GPP_RECO} from "../../data/data.js"

export default function ChartGPPReco({ data = DATA_GPP_RECO, height = 320 }) {
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
  )
}