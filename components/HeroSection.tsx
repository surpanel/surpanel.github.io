"use client";

import type { Dict } from "../lib/i18n";

interface Props {
  dict: Dict;
  isRTL: boolean;
}

export default function HeroSection({ dict, isRTL }: Props) {
  const h = dict.hero;
  const titleLines = h.title.split("\n");

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div className="hero-bg grid-overlay">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* Content */}
      <div
        className={isRTL ? "flex flex-col md:flex-row-reverse" : "flex flex-col md:flex-row"}
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
          {/* Left: text */}
          <div style={{ flex: 1, maxWidth: "620px" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(124, 58, 237, 0.12)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                borderRadius: "100px",
                padding: "6px 16px",
                marginBottom: "24px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#c4b5fd",
                animation: "fadeIn 0.6s ease forwards",
              }}
            >
              {h.badge}
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "24px",
                animation: "fadeInUp 0.7s ease 0.1s both",
                letterSpacing: "-0.03em",
              }}
            >
              {titleLines.map((line, i) => (
                <span
                  key={i}
                  style={{ display: "block" }}
                  className={i === 1 ? "gradient-text" : ""}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                color: "#94a3b8",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "520px",
                animation: "fadeInUp 0.7s ease 0.2s both",
              }}
            >
              {h.subtitle}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                animation: "fadeInUp 0.7s ease 0.3s both",
                flexDirection: isRTL ? "row-reverse" : "row",
              }}
            >
                <a
                  href="https://t.me/survpnbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary m-2"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <span className="flex items-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: "middle", marginInlineEnd: "6px" }}>
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z"/>
                    </svg>
                    {h.cta1}
                  </span>
                </a>
                <a
                  href="#features"
                  className="btn-secondary m-2"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  {h.cta2}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: isRTL ? "rotate(180deg)" : "none" }}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "32px",
                marginTop: "52px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                animation: "fadeInUp 0.7s ease 0.4s both",
                flexWrap: "wrap",
                flexDirection: isRTL ? "row-reverse" : "row",
              }}
            >
              {[
                { label: h.stat1Label, value: h.stat1Value },
                { label: h.stat2Label, value: h.stat2Value },
                { label: h.stat3Label, value: h.stat3Value },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: isRTL ? "right" : "left" }}>
                  <div
                    className="gradient-text"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500, letterSpacing: "0.02em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Globe visual */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              animation: "fadeIn 0.8s ease 0.2s both",
            }}
            className="hero-globe-wrapper"
          >
            <div className="globe-container">
              {/* Rings */}
              <div className="globe-ring globe-ring-1">
                <div className="globe-dot" />
              </div>
              <div className="globe-ring globe-ring-2">
                <div className="globe-dot globe-dot-cyan" style={{ top: "auto", bottom: "-4px" }} />
              </div>
              <div className="globe-ring globe-ring-3">
                <div className="globe-dot globe-dot-pink" style={{ top: "auto", bottom: "-4px", left: "auto", right: "50%" }} />
              </div>

              {/* Core */}
              <div className="globe-core">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.85"/>
                    <path d="M9 12l2 2 4-4" stroke="rgba(0,0,0,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Floating protocol chips */}
              <div className="floating-card floating-card-1">⚡ V2Ray Reality</div>
              <div className="floating-card floating-card-2">🔒 WireGuard</div>
              <div className="floating-card floating-card-3">🌐 VLESS</div>
            </div>
          </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "float 2s ease-in-out infinite",
          opacity: 0.4,
        }}
      >
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, #7c3aed)" }} />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 6l5 5 5-5" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-globe-wrapper { display: none; }
        }
      `}</style>
    </section>
  );
}
