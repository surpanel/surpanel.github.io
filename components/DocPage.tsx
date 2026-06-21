"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export interface TocItem {
  id: string;
  label: string;
  indent?: boolean;
}

interface Props {
  title: string;
  subtitle: string;
  meta: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

export default function DocPage({ title, subtitle, meta, tocItems, children }: Props) {
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? (scrollTop / docH) * 100 : 0);
      setShowTop(scrollTop > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <div style={{ minHeight: "100vh", background: "#030310", color: "#f1f5f9", fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Reading progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 200, background: "rgba(255,255,255,0.05)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #7c3aed, #06b6d4)", transition: "width 0.15s ease" }} />
      </div>

      {/* Header */}
      <header style={{
        position: "sticky", top: "3px", zIndex: 100,
        background: "rgba(3,3,16,0.92)", backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 24px", height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/en/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "linear-gradient(135deg, #7c3aed, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.9"/>
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: "16px", color: "#f1f5f9", letterSpacing: "-0.02em" }}>
            SUR <span style={{ color: "#a78bfa" }}>VPN</span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/en/"
            style={{ color: "#64748b", textDecoration: "none", fontSize: "13px", fontWeight: 500, display: "flex", alignItems: "center", gap: "5px", transition: "color 0.2s" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </Link>
          <button
            onClick={() => window.print()}
            style={{ padding: "6px 14px", background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: "8px", color: "#a78bfa", fontSize: "13px", cursor: "pointer", fontWeight: 600 }}
          >
            Save PDF
          </button>
        </div>
      </header>

      {/* Body */}
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "56px", alignItems: "flex-start" }}>

        {/* TOC Sidebar */}
        <aside className="doc-toc" style={{ width: "220px", flexShrink: 0, position: "sticky", top: "80px", maxHeight: "calc(100vh - 100px)", overflowY: "auto", paddingTop: "48px", paddingBottom: "48px", scrollbarWidth: "none" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#334155", marginBottom: "14px" }}>
            Contents
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {tocItems.map(({ id, label, indent }) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  color: activeId === id ? "#a78bfa" : "#475569",
                  textDecoration: "none",
                  fontSize: "12.5px",
                  lineHeight: 1.5,
                  padding: "5px 10px",
                  paddingLeft: indent ? "18px" : "10px",
                  borderRadius: "6px",
                  borderLeft: `2px solid ${activeId === id ? "#7c3aed" : "transparent"}`,
                  background: activeId === id ? "rgba(124,58,237,0.08)" : "transparent",
                  transition: "all 0.2s ease",
                  fontWeight: activeId === id ? 600 : 400,
                  display: "block",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="doc-content" style={{ flex: 1, minWidth: 0, paddingTop: "48px", paddingBottom: "100px" }}>
          <div style={{ marginBottom: "52px", paddingBottom: "36px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ fontSize: "12px", color: "#334155", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "14px" }}>
              {meta}
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "16px" }}>
              {title}
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#64748b", lineHeight: 1.75, maxWidth: "580px" }}>
              {subtitle}
            </p>
          </div>
          {children}
        </main>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed", bottom: "32px", right: "32px",
          width: "44px", height: "44px", borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          border: "none", color: "white", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 100, boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
          opacity: showTop ? 1 : 0, pointerEvents: showTop ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 14V4M4 9l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`
        .doc-toc { display: none; }
        @media (min-width: 900px) { .doc-toc { display: block; } }
        .doc-toc::-webkit-scrollbar { display: none; }
        .doc-section { scroll-margin-top: 84px; }
        .doc-content h2 {
          font-size: 1.55rem; font-weight: 800; letter-spacing: -0.02em;
          margin-top: 2.8em; margin-bottom: 0.6em; color: #f1f5f9;
          padding-bottom: 0.4em; border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .doc-content h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.8em; margin-bottom: 0.5em; color: #e2e8f0; }
        .doc-content h4 { font-size: 0.95rem; font-weight: 700; margin-top: 1.4em; margin-bottom: 0.4em; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }
        .doc-content p { color: #94a3b8; line-height: 1.85; margin-bottom: 1.1em; font-size: 0.96rem; }
        .doc-content ul, .doc-content ol { color: #94a3b8; line-height: 1.85; margin-bottom: 1.2em; padding-left: 1.4em; }
        .doc-content li { margin-bottom: 0.35em; font-size: 0.96rem; }
        .doc-content strong { color: #cbd5e1; font-weight: 600; }
        .doc-content code {
          font-family: "SF Mono", "Cascadia Code", "Fira Code", monospace;
          background: rgba(124,58,237,0.12); border: 1px solid rgba(124,58,237,0.2);
          border-radius: 4px; padding: 1px 6px; font-size: 0.86em; color: #a78bfa;
        }
        .doc-content pre {
          background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 20px 24px; overflow-x: auto; margin: 1.5em 0;
          font-family: "SF Mono", "Cascadia Code", "Fira Code", monospace;
          font-size: 0.875rem; line-height: 1.75; color: #94a3b8;
        }
        .doc-content table { width: 100%; border-collapse: collapse; margin: 1.5em 0; font-size: 0.9rem; overflow-x: auto; display: block; }
        .doc-content th { text-align: left; padding: 10px 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #f1f5f9; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.07em; text-transform: uppercase; white-space: nowrap; }
        .doc-content td { padding: 10px 16px; border: 1px solid rgba(255,255,255,0.06); color: #94a3b8; vertical-align: top; }
        .doc-content tr:hover td { background: rgba(255,255,255,0.02); }
        .doc-callout { background: rgba(124,58,237,0.08); border-left: 3px solid #7c3aed; border-radius: 0 10px 10px 0; padding: 14px 20px; margin: 1.4em 0; }
        .doc-callout.green { background: rgba(52,211,153,0.07); border-left-color: #34d399; }
        .doc-callout.yellow { background: rgba(251,191,36,0.07); border-left-color: #fbbf24; }
        .doc-callout p { margin-bottom: 0; }
        @media print {
          .doc-toc, header button { display: none !important; }
          .doc-content h2 { border-bottom: 1px solid #ccc; color: #000 !important; }
          .doc-content p, .doc-content li, .doc-content td { color: #333 !important; }
        }
      `}</style>
    </div>
  );
}
