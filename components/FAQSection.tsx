"use client";

import { useState, useRef, useEffect } from "react";
import type { Dict } from "../lib/i18n";

interface FAQItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  isRTL: boolean;
  index: number;
}

function FAQItem({ q, a, isOpen, onToggle, isRTL, index }: FAQItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setBodyHeight(bodyRef.current.scrollHeight);
    }
  }, [a]);

  return (
    <div
      className="animate-on-scroll"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        onClick={onToggle}
        style={{
          background: isOpen ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.025)",
          border: `1px solid ${isOpen ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isOpen ? "0 8px 32px rgba(124,58,237,0.12)" : "none",
        }}
      >
        {/* Question row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "20px 24px",
            direction: isRTL ? "rtl" : "ltr",
            userSelect: "none",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: 1.55,
              color: isOpen ? "#f1f5f9" : "#cbd5e1",
              transition: "color 0.3s ease",
              flex: 1,
            }}
          >
            {q}
          </span>

          {/* Toggle icon */}
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: isOpen
                ? "rgba(124,58,237,0.35)"
                : "rgba(124,58,237,0.12)",
              color: "#a78bfa",
              transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s ease",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2v10M2 7h10"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Animated answer container */}
        <div
          style={{
            height: isOpen ? `${bodyHeight}px` : "0px",
            overflow: "hidden",
            transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            ref={bodyRef}
            style={{
              padding: "0 24px 22px",
              color: "#94a3b8",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  dict: Dict;
  isRTL: boolean;
}

export default function FAQSection({ dict, isRTL }: Props) {
  const f = dict.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        padding: "100px 24px",
        position: "relative",
        background:
          "linear-gradient(180deg, transparent, rgba(124,58,237,0.04) 50%, transparent)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(236,72,153,0.1)",
              border: "1px solid rgba(236,72,153,0.25)",
              borderRadius: "100px",
              padding: "5px 16px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#f472b6",
              marginBottom: "16px",
            }}
          >
            FAQ
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              marginBottom: "14px",
              letterSpacing: "-0.02em",
            }}
          >
            {f.title}
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            {f.subtitle}
          </p>
        </div>

        {/* Accordion items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {f.items.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              q={item.q}
              a={item.a}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="animate-on-scroll"
          style={{
            marginTop: "48px",
            padding: "32px",
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.06))",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "20px",
            textAlign: "center",
            direction: isRTL ? "rtl" : "ltr",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              marginBottom: "20px",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            {isRTL ? "سوال دیگری دارید؟ " : "Still have questions? "}
            <span style={{ color: "#a78bfa" }}>
              {isRTL
                ? "در تلگرام با ما چت کنید."
                : "Chat with us on Telegram."}
            </span>
          </p>
          <a
            href="https://t.me/survpnbot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
              </svg>
              @survpnbot
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
