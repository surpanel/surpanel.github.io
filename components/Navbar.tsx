"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { isRTL, type Dict, type LangCode } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

interface Props {
  dict: Dict;
  lang: LangCode;
}

export default function Navbar({ dict, lang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rtl = isRTL(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: dict.nav.features, href: "#features" },
    { label: dict.nav.protocols, href: "#protocols" },
    { label: dict.nav.privacy, href: "#privacy" },
    { label: dict.nav.howItWorks, href: "#how-it-works" },
    { label: dict.nav.faq, href: "#faq" },
  ];

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ── Navbar bar ── */}
      <nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        style={{ zIndex: 200 }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            direction: rtl ? "rtl" : "ltr",
          }}
        >
          {/* Logo */}
          <Link
            href={`/${lang}/`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: "18px",
                color: "#f1f5f9",
                letterSpacing: "-0.02em",
              }}
            >
              SUR <span style={{ color: "#a78bfa" }}>VPN</span>
            </span>
          </Link>

          {/* Desktop center links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            <LanguageSwitcher current={lang} />

            {/* Desktop CTA */}
            <a
              href="https://t.me/survpnbot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden md:inline-flex"
              style={{
                padding: "9px 18px",
                fontSize: "14px",
                borderRadius: "10px",
                textDecoration: "none",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                {dict.nav.getStarted}
              </span>
            </a>

            {/* Hamburger – mobile only */}
            <button
              className="flex md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "40px",
                height: "40px",
                background: mobileOpen
                  ? "rgba(124,58,237,0.15)"
                  : "transparent",
                border: "1px solid",
                borderColor: mobileOpen
                  ? "rgba(124,58,237,0.3)"
                  : "transparent",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "background 0.25s ease, border-color 0.25s ease",
                padding: 0,
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  background: "#f1f5f9",
                  borderRadius: "2px",
                  display: "block",
                  transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                  transform: mobileOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  background: "#f1f5f9",
                  borderRadius: "2px",
                  display: "block",
                  transition: "opacity 0.2s ease, transform 0.3s ease",
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  background: "#f1f5f9",
                  borderRadius: "2px",
                  display: "block",
                  transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                  transform: mobileOpen
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 198,
          background: "rgba(2,2,14,0.7)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Mobile slide-down drawer ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 199,
          paddingTop: "64px",
          transform: mobileOpen ? "translateY(0)" : "translateY(-105%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "rgba(5,5,18,0.98)",
          borderBottom: "1px solid rgba(124,58,237,0.2)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            padding: "12px 20px 28px",
            direction: rtl ? "rtl" : "ltr",
          }}
        >
          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "20px",
            }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  padding: "14px 16px",
                  borderRadius: "12px",
                  transition:
                    "color 0.2s ease, background 0.2s ease, transform 0.2s ease",
                  animationDelay: `${i * 40}ms`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#f1f5f9";
                  el.style.background = "rgba(124,58,237,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#cbd5e1";
                  el.style.background = "transparent";
                }}
              >
                <span>{link.label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    opacity: 0.4,
                    transform: rtl ? "rotate(180deg)" : "none",
                  }}
                >
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
              marginBottom: "20px",
            }}
          />

          {/* Full-width CTA */}
          <a
            href="https://t.me/survpnbot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={close}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "16px",
              width: "100%",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <span
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
              </svg>
              {dict.nav.getStarted}
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .nav-link {
          padding: 7px 14px;
          border-radius: 8px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
          display: inline-block;
        }
        .nav-link:hover {
          color: #f1f5f9;
          background: rgba(255,255,255,0.05);
        }
      `}</style>
    </>
  );
}
