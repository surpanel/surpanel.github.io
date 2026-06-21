import type { Dict } from "../lib/i18n";

const STEP_ICONS = [
  // Telegram icon
  <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z"/>
  </svg>,
  // Credit card / plan icon
  <svg key="p" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>,
  // Globe / connect icon
  <svg key="c" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
];

const STEP_COLORS = ["#a78bfa", "#22d3ee", "#34d399"];

interface Props {
  dict: Dict;
  isRTL: boolean;
}

export default function HowItWorksSection({ dict, isRTL }: Props) {
  const h = dict.howItWorks;

  return (
    <section
      id="how-it-works"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent, rgba(6,182,212,0.03) 50%, transparent)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "80px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(52,211,153,0.1)",
              border: "1px solid rgba(52,211,153,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6ee7b7",
              marginBottom: "16px",
            }}
          >
            How It Works
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {h.title}
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            {h.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "flex",
            gap: "0",
            alignItems: "flex-start",
            flexDirection: isRTL ? "row-reverse" : "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {h.steps.map((step, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 220px",
                maxWidth: "320px",
                position: "relative",
                padding: "0 16px",
                textAlign: "center",
              }}
              className={`animate-on-scroll delay-${(i + 1) * 200}`}
            >
              {/* Connector line (not for last item) */}
              {i < h.steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "34px",
                    width: "calc(100% - 68px)",
                    height: "1px",
                    background: `linear-gradient(${isRTL ? "270deg" : "90deg"}, ${STEP_COLORS[i]}, ${STEP_COLORS[i + 1]})`,
                    opacity: 0.4,
                    left: isRTL ? "auto" : "calc(50% + 34px)",
                    right: isRTL ? "calc(50% + 34px)" : "auto",
                  }}
                  className="step-line-hide-mobile"
                />
              )}

              {/* Step number + icon */}
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${STEP_COLORS[i]}22, ${STEP_COLORS[i]}11)`,
                  border: `2px solid ${STEP_COLORS[i]}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  position: "relative",
                  color: STEP_COLORS[i],
                  boxShadow: `0 0 30px ${STEP_COLORS[i]}22`,
                }}
              >
                {STEP_ICONS[i]}
                <div
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: isRTL ? "auto" : "-8px",
                    left: isRTL ? "-8px" : "auto",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: STEP_COLORS[i],
                    color: "#000",
                    fontSize: "11px",
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i + 1}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  marginBottom: "10px",
                  color: "#f1f5f9",
                  direction: isRTL ? "rtl" : "ltr",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                  direction: isRTL ? "rtl" : "ltr",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginTop: "60px" }}
        >
          <a
            href="https://t.me/survpnbot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "16px", padding: "16px 32px" }}
          >
            <span className="flex items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: "middle", marginInlineEnd: "8px" }}>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z"/>
              </svg>
              @survpnbot
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .step-line-hide-mobile { display: none; }
        }
      `}</style>
    </section>
  );
}
