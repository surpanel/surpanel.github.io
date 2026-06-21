"use client";

import Link from "next/link";
import type { Dict, LangCode } from "../lib/i18n";
import { LANGUAGES } from "../lib/i18n";

interface Props {
  dict: Dict;
  lang: LangCode;
  isRTL: boolean;
}

export default function Footer({ dict, lang, isRTL }: Props) {
  const f = dict.footer;

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          direction: isRTL ? "rtl" : "ltr",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.9"/>
                  <path d="M9 12l2 2 4-4" stroke="rgba(0,0,0,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: "20px", color: "#f1f5f9" }}>
                SUR <span style={{ color: "#a78bfa" }}>VPN</span>
              </span>
            </div>
            <p style={{ color: "#475569", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>
              {f.tagline}
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://t.me/survpnbot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8",
                  transition: "background 0.2s, color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.2)";
                  (e.currentTarget as HTMLElement).style.color = "#a78bfa";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                }}
                aria-label="Telegram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z"/>
                </svg>
              </a>
              <a
                href="https://survpn.xyz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8",
                  transition: "background 0.2s, color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.2)";
                  (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                }}
                aria-label="Website"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "16px" }}>
                Connect
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="https://t.me/survpnbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f1f5f9")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  {f.telegramLabel}
                </a>
                <a
                  href="https://survpn.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f1f5f9")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  {f.websiteLabel}
                </a>
                <a
                  href="#privacy"
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6ee7b7")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  🔒 {dict.nav.privacy}
                </a>
              </div>
            </div>

            {/* Legal / Docs column */}
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "16px" }}>
                Legal &amp; Docs
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link
                  href="/whitepaper"
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a78bfa")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  📄 Whitepaper
                </Link>
                <Link
                  href="/privacy-policy"
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  🛡️ Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#34d399")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  📋 Terms of Service
                </Link>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "16px" }}>
                {f.resellerTitle}
              </h4>
              <p style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.65, maxWidth: "160px" }}>
                {f.resellerDesc}
              </p>
            </div>

            {/* Languages */}
            <div>
              <h4 style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: "16px" }}>
                Languages
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {LANGUAGES.map((l) => (
                  <Link
                    key={l.code}
                    href={`/${l.code}/`}
                    style={{
                      color: l.code === lang ? "#a78bfa" : "#64748b",
                      textDecoration: "none",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f1f5f9")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = l.code === lang ? "#a78bfa" : "#64748b")}
                  >
                    <span>{l.flag}</span>
                    <span>{l.localName}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ color: "#334155", fontSize: "13px" }}>{f.copyright}</p>
          <p style={{ color: "#1e293b", fontSize: "12px" }}>
            survpn.xyz &nbsp;·&nbsp; t.me/survpnbot
          </p>
        </div>
      </div>
    </footer>
  );
}
