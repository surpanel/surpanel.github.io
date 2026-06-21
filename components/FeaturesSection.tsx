import type { Dict } from "../lib/i18n";

interface Props {
  dict: Dict;
  isRTL: boolean;
}

export default function FeaturesSection({ dict, isRTL }: Props) {
  const f = dict.features;

  return (
    <section
      id="features"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a78bfa",
              marginBottom: "16px",
            }}
          >
            Features
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {f.title}
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            {f.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {f.items.map((item, i) => (
            <div
              key={i}
              className={`glass-card animate-on-scroll delay-${(i % 6 + 1) * 100}`}
              style={{
                padding: "28px",
                direction: isRTL ? "rtl" : "ltr",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "16px",
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: "#f1f5f9" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
