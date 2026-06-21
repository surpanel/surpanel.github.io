import type { Dict } from "../lib/i18n";

const BADGE_MAP: Record<string, string> = {
  Recommended: "badge-recommended",
  Fastest: "badge-fastest",
  Efficient: "badge-efficient",
  Reliable: "badge-reliable",
  Classic: "badge-classic",
  // fa
  "پیشنهادی": "badge-recommended",
  "سریع‌ترین": "badge-fastest",
  "کارآمد": "badge-efficient",
  "مطمئن": "badge-reliable",
  "کلاسیک": "badge-classic",
  // ar
  "موصى به": "badge-recommended",
  "الأسرع": "badge-fastest",
  "كفاءة عالية": "badge-efficient",
  "موثوق": "badge-reliable",
  "كلاسيكي": "badge-classic",
  // zh
  "推荐": "badge-recommended",
  "最快": "badge-fastest",
  "高效": "badge-efficient",
  "可靠": "badge-reliable",
  "经典": "badge-classic",
  // ru
  "Рекомендуется": "badge-recommended",
  "Самый быстрый": "badge-fastest",
  "Эффективный": "badge-efficient",
  "Надёжный": "badge-reliable",
  "Классика": "badge-classic",
  // es
  "Recomendado": "badge-recommended",
  "Más Rápido": "badge-fastest",
  "Eficiente": "badge-efficient",
  "Confiable": "badge-reliable",
  "Clásico": "badge-classic",
  // ur
  "تجویز کردہ": "badge-recommended",
  "سب سے تیز": "badge-fastest",
  "موثر": "badge-efficient",
  "قابل بھروسہ": "badge-reliable",
  "کلاسک": "badge-classic",
  // uk
  "Рекомендовано": "badge-recommended",
  "Найшвидший": "badge-fastest",
  "Ефективний": "badge-efficient",
  "Надійний": "badge-reliable",
  "Класика": "badge-classic",
};

const PROTOCOL_ICONS = ["🔷", "⚡", "🔹", "🔶", "🌑"];

interface Props {
  dict: Dict;
  isRTL: boolean;
}

export default function ProtocolsSection({ dict, isRTL }: Props) {
  const p = dict.protocols;

  return (
    <section
      id="protocols"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#22d3ee",
              marginBottom: "16px",
            }}
          >
            Protocols
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {p.title}
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            {p.subtitle}
          </p>
        </div>

        {/* Protocol cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {p.items.map((item, i) => (
            <div
              key={i}
              className={`glass-card animate-on-scroll-scale delay-${(i + 1) * 100}`}
              style={{ padding: "24px", direction: isRTL ? "rtl" : "ltr" }}
            >
              <div style={{ marginBottom: "12px" }}>
                <span style={{ fontSize: "28px" }}>{PROTOCOL_ICONS[i]}</span>
              </div>
              <div
                className={`protocol-badge ${BADGE_MAP[item.badge] ?? "badge-recommended"}`}
                style={{ marginBottom: "12px", display: "inline-block" }}
              >
                {item.badge}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px", color: "#f1f5f9" }}>
                {item.name}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Compatibility note */}
        <div
          className="animate-on-scroll"
          style={{
            marginTop: "48px",
            textAlign: "center",
            padding: "24px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
          }}
        >
          <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.7 }}>
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>Compatible with: </span>
            V2rayNG · Clash · Streisand · NekoBox · Hiddify · Shadowrocket · Quantumult · Stash
          </p>
        </div>
      </div>
    </section>
  );
}
