"use client";

import { useEffect } from "react";
import { SUPPORTED_LANGS, DEFAULT_LANG } from "../lib/i18n";

export default function RootPage() {
  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    const target = SUPPORTED_LANGS.includes(browserLang as never)
      ? browserLang
      : DEFAULT_LANG;
    window.location.replace(`/${target}/`);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100svh",
        background: "#030310",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </div>
        <p style={{ color: "#475569", fontSize: "14px", fontFamily: "system-ui, sans-serif" }}>
          SUR VPN
        </p>
      </div>
    </div>
  );
}
