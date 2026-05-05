export default function KPICard({ valor, label }) {
    return (
        <div style={{ background: "#0F2030", border: "1px solid #1A3045", borderRadius: 12, padding: "20px 28px", flex: "1 1 180px" }}>
            <p style={{ fontSize: "2rem", fontWeight: 800, color: "#C94B2C", margin: 0 }}>
                {valor}
            </p>
            <p style={{ fontSize: 12, color: "#94a3b8", margin: "4px 0 0" }}>
                {label}
            </p>
        </div>
    )
}