import { PALETTE } from "../../data/data";

export default function TooltipArctic({ active, payload, label, unit = "" }) {
    if (!active || !payload?.length) return null;
    return (
        <div style={{background: "#0F2030", border: "1px solid #1A3045", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: PALETTE.text,}}>
            <p style={{ margin: 0, fontWeight: 600, color: "#fff" }}>{label}</p>
            {payload.map((p, i) => (
                <p key={i} style={{ margin: "2px 0", color: p.color }}>
                    {p.name}: <strong>{p.value}{unit}</strong>
                </p>
            ))}
        </div>
    )
}