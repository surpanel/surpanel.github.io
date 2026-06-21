import type { Dict } from "../lib/i18n";

const FEATURE_ICONS = [
  // AES-256 – padlock
  <svg key="lock" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>,
  // ChaCha20 – zap
  <svg key="zap" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  // No-Logs – eye-off
  <svg key="eye" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>,
  // Perfect Forward Secrecy – rotate
  <svg key="refresh" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>,
  // DNS Protection – shield
  <svg key="shield" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>,
  // Open Source – code
  <svg key="code" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>,
];

const COLORS = ["#a78bfa", "#22d3ee", "#f472b6", "#34d399", "#fb923c", "#818cf8"];

const FLOW_ICONS = ["📱", "🔐", "🛡️", "🌍"];
const FLOW_COLORS = ["#a78bfa", "#22d3ee", "#34d399", "#06b6d4"];

interface Props {
  dict: Dict;
  isRTL: boolean;
}

export default function EncryptionSection({ dict, isRTL }: Props) {
  const e = dict.encryption;
  const steps = [e.step1, e.step2, e.step3, e.step4];

  return (
    <section
      id="privacy"
      style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent, rgba(52,211,153,0.04) 50%, transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(52,211,153,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* ── Header ── */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(52,211,153,0.1)",
              border: "1px solid rgba(52,211,153,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6ee7b7",
              marginBottom: "20px",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            {e.badge}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {e.title}
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.05rem",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            {e.subtitle}
          </p>
        </div>

        {/* ── Encryption flow diagram ── */}
        <div
          className="animate-on-scroll"
          style={{
            marginBottom: "72px",
            padding: "36px 24px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "24px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="enc-flow"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: isRTL ? "row-reverse" : "row",
              flexWrap: "wrap",
              gap: "0",
            }}
          >
            {steps.map((label, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: isRTL ? "row-reverse" : "row",
                }}
              >
                {/* Step node */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    padding: "0 12px",
                    minWidth: "90px",
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: `${FLOW_COLORS[i]}18`,
                      border: `2px solid ${FLOW_COLORS[i]}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      boxShadow: `0 0 32px ${FLOW_COLORS[i]}20`,
                      position: "relative",
                    }}
                  >
                    {FLOW_ICONS[i]}
                    {/* Step number badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-4px",
                        right: isRTL ? "auto" : "-4px",
                        left: isRTL ? "-4px" : "auto",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: FLOW_COLORS[i],
                        color: "#000",
                        fontSize: "10px",
                        fontWeight: 900,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#94a3b8",
                      textAlign: "center",
                      lineHeight: 1.3,
                      direction: isRTL ? "rtl" : "ltr",
                    }}
                  >
                    {label}
                  </span>
                </div>

                {/* Animated connector */}
                {i < steps.length - 1 && (
                  <div
                    className="enc-connector"
                    style={{
                      width: "80px",
                      height: "2px",
                      position: "relative",
                      overflow: "hidden",
                      background: `linear-gradient(${isRTL ? "270deg" : "90deg"}, ${FLOW_COLORS[i]}50, ${FLOW_COLORS[i + 1]}50)`,
                      borderRadius: "1px",
                      flexShrink: 0,
                    }}
                  >
                    {/* Travelling light pulse */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "40%",
                        height: "100%",
                        background: `linear-gradient(${isRTL ? "270deg" : "90deg"}, transparent, rgba(255,255,255,0.9), transparent)`,
                        animation: `encFlow 1.8s ease-in-out infinite`,
                        animationDelay: `${i * 0.45}s`,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Feature cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {e.items.map((item, i) => (
            <div
              key={i}
              className={`glass-card animate-on-scroll delay-${(i % 3 + 1) * 100}`}
              style={{
                padding: "28px",
                direction: isRTL ? "rtl" : "ltr",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: `${COLORS[i % COLORS.length]}18`,
                  border: `1px solid ${COLORS[i % COLORS.length]}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS[i % COLORS.length],
                  marginBottom: "18px",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {FEATURE_ICONS[i % FEATURE_ICONS.length]}
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  lineHeight: 1.75,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Trust bar ── */}
        <div
          className="animate-on-scroll"
          style={{
            marginTop: "56px",
            padding: "24px 32px",
            background:
              "linear-gradient(135deg, rgba(52,211,153,0.08), rgba(6,182,212,0.06))",
            border: "1px solid rgba(52,211,153,0.18)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            direction: isRTL ? "rtl" : "ltr",
          }}
        >
          {[
            { icon: "🔐", text: "AES-256 + ChaCha20" },
            { icon: "📋", text: "Zero Logs" },
            { icon: "🔄", text: "PFS" },
            { icon: "🛡️", text: "DNS Protected" },
            { icon: "✅", text: "Open Source" },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#64748b",
              }}
            >
              <span style={{ fontSize: "16px" }}>{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes encFlow {
          0%   { transform: translateX(-150%); }
          100% { transform: translateX(350%); }
        }
        @media (max-width: 600px) {
          .enc-flow { flex-direction: column !important; }
          .enc-connector { width: 2px !important; height: 48px !important; margin: 0; }
          @keyframes encFlow {
            0%   { transform: translateY(-150%); }
            100% { transform: translateY(350%); }
          }
        }
      `}</style>
    </section>
  );
}
