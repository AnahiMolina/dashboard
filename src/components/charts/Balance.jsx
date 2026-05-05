import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from "recharts"
import { PALETTE, axisStyle, DATA_BALANCE } from "../../data/data.js"
import TooltipArctic from "../ui/Tooltip.jsx"

export default function ChartBalance({ data = DATA_BALANCE, height = 340 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 24 }}>
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
        <Area type="monotone" dataKey="pct_sink" name="Sumidero (absorbe CO₂)"
              stackId="1" stroke={PALETTE.sink} fill="url(#gradSink)" />
        <Area type="monotone" dataKey="pct_source" name="Fuente (emite CO₂)"
              stackId="1" stroke={PALETTE.source} fill="url(#gradSource)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}