"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LANGUAGES, type LangCode } from "../lib/i18n";

interface Props {
  current: LangCode;
}

export default function LanguageSwitcher({ current }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentLang = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch language"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 12px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "10px",
          color: "#f1f5f9",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500,
          transition: "background 0.2s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")
        }
      >
        <span style={{ fontSize: "18px" }}>{currentLang.flag}</span>
        <span className="hidden md:inline" style={{ fontSize: "14px" }}>{currentLang.localName}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            opacity: 0.6,
          }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown">
          {LANGUAGES.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}/`}
              onClick={() => setOpen(false)}
              className={`lang-option ${lang.code === current ? "active" : ""}`}
            >
              <span style={{ fontSize: "18px" }}>{lang.flag}</span>
              <span>{lang.localName}</span>
              {lang.code === current && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{ marginInlineStart: "auto", opacity: 0.8 }}
                >
                  <path d="M2 7l4 4 6-6" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
