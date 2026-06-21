import type { Dict } from "../lib/i18n";

const en: Dict = {
  meta: {
    title: "SUR VPN — Break Free from Censorship",
    description:
      "Ultra-fast V2Ray Reality, WireGuard VPN for Iran, Russia, China & beyond. Military-grade encryption. Connect via Telegram bot.",
  },
  nav: {
    features: "Features",
    protocols: "Protocols",
    howItWorks: "How It Works",
    privacy: "Privacy",
    faq: "FAQ",
    getStarted: "Get Started",
  },
  hero: {
    badge: "🌐 Freedom for Everyone",
    title: "Break Through\nCensorship Freely",
    subtitle:
      "Ultra-fast VPN with V2Ray Reality, WireGuard & advanced protocols. Connect to a free internet in seconds — via our Telegram bot.",
    cta1: "Start on Telegram",
    cta2: "Learn More",
    stat1Label: "Active Users",
    stat1Value: "50K+",
    stat2Label: "Uptime",
    stat2Value: "99.9%",
    stat3Label: "Avg Speed",
    stat3Value: "1 Gbps",
  },
  features: {
    title: "Why Choose SUR VPN?",
    subtitle: "Built for people who live in restricted regions — fast, private, and reliable.",
    items: [
      { icon: "⚡", title: "Blazing Fast", desc: "High-performance servers optimized for speed. Stream, game, and browse without lag." },
      { icon: "🔒", title: "Military Encryption", desc: "AES-256 & ChaCha20 encryption keeps your data private from ISPs and governments." },
      { icon: "🤖", title: "Telegram Bot Setup", desc: "Get your VPN config in seconds — no technical knowledge required. Just chat with our bot." },
      { icon: "🔗", title: "Multi-Protocol", desc: "V2Ray Reality, WireGuard, VLESS, VMess & Shadowsocks — always the best route available." },
      { icon: "💼", title: "Reseller Program", desc: "Start your own VPN business. White-label plans with full support and competitive margins." },
      { icon: "💬", title: "24/7 Support", desc: "Real human support via Telegram. We're always here when you need us." },
    ],
  },
  protocols: {
    title: "Powered by Top Protocols",
    subtitle: "We support the most advanced anti-censorship protocols available today.",
    items: [
      { name: "V2Ray Reality", desc: "Mimics real HTTPS traffic, virtually undetectable by deep packet inspection.", badge: "Recommended" },
      { name: "WireGuard", desc: "Modern, ultra-fast VPN protocol with minimal overhead and strong security.", badge: "Fastest" },
      { name: "VLESS", desc: "Lightweight, high-performance protocol with low resource usage.", badge: "Efficient" },
      { name: "VMess", desc: "Versatile and secure protocol with strong obfuscation capabilities.", badge: "Reliable" },
      { name: "Shadowsocks", desc: "Battle-tested proxy protocol, widely used to bypass censorship.", badge: "Classic" },
    ],
  },
  howItWorks: {
    title: "Connect in 3 Simple Steps",
    subtitle: "No tech expertise needed. Be browsing freely in under a minute.",
    steps: [
      { title: "Open Our Bot", desc: "Find @survpnbot on Telegram and press Start." },
      { title: "Pick a Plan", desc: "Choose from daily, monthly, or reseller plans that fit your needs." },
      { title: "Connect & Browse", desc: "Import your config into any V2Ray or WireGuard app and enjoy freedom." },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about SUR VPN.",
    items: [
      {
        q: "What is SUR VPN?",
        a: "SUR VPN is a premium VPN service designed to bypass censorship in Iran, Russia, China, and other restricted regions. We provide secure, fast connections via our Telegram bot.",
      },
      {
        q: "Which countries does it work in?",
        a: "SUR VPN works in Iran, Russia, China, and any other country with internet restrictions. Our advanced protocols are designed to bypass even the most sophisticated censorship systems.",
      },
      {
        q: "What protocols do you support?",
        a: "We support V2Ray Reality, WireGuard, VLESS, VMess, and Shadowsocks. Our bot automatically assigns the best protocol for your region.",
      },
      {
        q: "How do I set up SUR VPN?",
        a: "Start a chat with @survpnbot on Telegram, choose a plan, and receive your configuration. Import it into any compatible VPN client (V2rayNG, Clash, Streisand, etc.) and you're done.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes! We offer a free trial so you can test our service before committing. Contact @survpnbot on Telegram to claim yours.",
      },
      {
        q: "Can I become a reseller?",
        a: "Absolutely. Our reseller program gives you access to competitive pricing, white-label configs, and dedicated support. Contact us on Telegram to get started.",
      },
    ],
  },
  encryption: {
    badge: "Military-Grade Privacy",
    title: "Your Data, Always Encrypted",
    subtitle:
      "Every connection is protected end-to-end with the strongest encryption standards used by military and financial institutions worldwide.",
    step1: "Your Device",
    step2: "AES-256 Encrypt",
    step3: "Secure Tunnel",
    step4: "Free Internet",
    items: [
      {
        title: "AES-256-GCM",
        desc: "The gold standard cipher — 256-bit keys impossible to brute-force. The same standard trusted by banks, governments, and the US military.",
      },
      {
        title: "ChaCha20-Poly1305",
        desc: "Ultra-fast stream cipher powering WireGuard — optimized for mobile devices, delivering blazing speed without sacrificing security.",
      },
      {
        title: "Strict No-Logs Policy",
        desc: "We never store IP addresses, connection timestamps, DNS queries, or browsing history. Zero data to hand over — ever.",
      },
      {
        title: "Perfect Forward Secrecy",
        desc: "Fresh encryption keys for every session. Even if one key is compromised, all past and future sessions remain completely secure.",
      },
      {
        title: "DNS Leak Protection",
        desc: "All DNS queries route through our encrypted tunnel. Your ISP sees only encrypted noise — never the sites you visit.",
      },
      {
        title: "Open-Source Protocols",
        desc: "V2Ray, WireGuard, and Shadowsocks are publicly audited by the global security community. No hidden backdoors, ever.",
      },
    ],
  },
  footer: {
    tagline: "Your gateway to a free and open internet.",
    telegramLabel: "Telegram Bot",
    websiteLabel: "Website",
    copyright: "© 2025 SUR VPN. All rights reserved.",
    resellerTitle: "Reseller Program",
    resellerDesc: "Earn with us. Contact on Telegram.",
  },
};

export default en;
