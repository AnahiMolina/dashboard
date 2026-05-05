import { useEffect, useState } from "react"

export default function KPICard({ valor, label, delay = 0 }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100 + delay);
        return () => clearTimeout(timer);
    }, [delay]);


    return (
        <div style={{
            background: "#0F2030",
            border: "1px solid #1A3045",
            borderRadius: 12,
            padding: "20px 28px",
            flex: "1 1 180px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
            <p style={{ fontSize: "2rem", fontWeight: 800, color: "#C94B2C", margin: 0 }}>
                {valor}
            </p>
            <p style={{ fontSize: 12, color: "#94a3b8", margin: "4px 0 0" }}>
                {label}
            </p>
        </div>
    );
}