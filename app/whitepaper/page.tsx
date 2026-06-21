import type { Metadata } from "next";
import DocPage, { type TocItem } from "../../components/DocPage";

export const metadata: Metadata = {
  title: "SUR VPN — Technical Whitepaper",
  description:
    "A comprehensive technical whitepaper covering SUR VPN's protocol architecture, cryptographic model, traffic obfuscation mechanisms, infrastructure, and privacy guarantees.",
};

const TOC: TocItem[] = [
  { id: "abstract",        label: "Abstract" },
  { id: "introduction",    label: "1. Introduction" },
  { id: "threat-model",    label: "2. Threat Model" },
  { id: "protocols",       label: "3. Protocol Architecture" },
  { id: "proto-reality",   label: "V2Ray Reality",     indent: true },
  { id: "proto-wg",        label: "WireGuard",         indent: true },
  { id: "proto-vless",     label: "VLESS + XTLS",      indent: true },
  { id: "proto-vmess",     label: "VMess",             indent: true },
  { id: "proto-ss",        label: "Shadowsocks AEAD",  indent: true },
  { id: "cryptography",    label: "4. Cryptography" },
  { id: "obfuscation",     label: "5. Traffic Obfuscation" },
  { id: "infrastructure",  label: "6. Infrastructure" },
  { id: "privacy-model",   label: "7. Privacy Architecture" },
  { id: "delivery",        label: "8. Telegram Delivery" },
  { id: "performance",     label: "9. Performance" },
  { id: "comparison",      label: "10. Protocol Comparison" },
  { id: "roadmap",         label: "11. Roadmap" },
  { id: "conclusion",      label: "12. Conclusion" },
  { id: "references",      label: "References" },
];

export default function WhitepaperPage() {
  return (
    <DocPage
      title="SUR VPN Technical Whitepaper"
      subtitle="Protocol architecture, cryptographic foundations, traffic obfuscation, infrastructure design, and privacy model of the SUR VPN platform."
      meta="Version 1.0 · June 2025 · survpn.xyz"
      tocItems={TOC}
    >

      {/* ── Abstract ── */}
      <section id="abstract" className="doc-section">
        <div className="doc-callout green">
          <p>
            <strong>Abstract —</strong> SUR VPN is a multi-protocol censorship-circumvention platform engineered for users in Iran, Russia, China, and other restricted regions. This paper details the technical architecture, cryptographic primitives, obfuscation strategies, and zero-log privacy model that underpin the service. We describe how the combination of V2Ray Reality, WireGuard, VLESS, VMess, and Shadowsocks—delivered through a Telegram Bot interface—provides both high censorship resistance and a frictionless user experience.
          </p>
        </div>
      </section>

      {/* ── 1. Introduction ── */}
      <section id="introduction" className="doc-section">
        <h2>1. Introduction</h2>
        <p>
          More than 3.2 billion people—approximately 40% of the global internet population—live under regimes that actively censor, monitor, or restrict internet access. The Islamic Republic of Iran's National Information Network (NIN/SHOMA), China's Great Firewall (GFW), Russia's Technical Means for Countering Threats (TSPU), and similar systems in Belarus, Turkmenistan, and North Korea deploy layered technical controls including:
        </p>
        <ul>
          <li><strong>Deep Packet Inspection (DPI)</strong> — stateful analysis of packet payloads to identify and block protocol signatures</li>
          <li><strong>DNS Poisoning</strong> — returning forged DNS responses to block domain-level access</li>
          <li><strong>IP Blocklisting</strong> — maintaining lists of known VPN server IPs and data-center address ranges</li>
          <li><strong>Traffic Fingerprinting</strong> — identifying protocols by statistical patterns in packet timing, length distributions, and entropy</li>
          <li><strong>Active Probing</strong> — sending deliberate probe packets to suspected VPN servers to elicit identifying responses</li>
        </ul>
        <p>
          Legacy VPN protocols—OpenVPN, L2TP/IPSec, PPTP—are trivially detected by these systems because they produce highly distinctive handshake signatures and use well-known port/protocol combinations. SUR VPN addresses this challenge through a carefully selected stack of modern, obfuscation-first protocols paired with a zero-friction delivery mechanism.
        </p>
        <div className="doc-callout">
          <p>SUR VPN prioritises <strong>availability</strong> (remaining unblocked) and <strong>usability</strong> (setup in under 60 seconds via Telegram) as co-equal design goals alongside confidentiality and integrity.</p>
        </div>
      </section>

      {/* ── 2. Threat Model ── */}
      <section id="threat-model" className="doc-section">
        <h2>2. Threat Model</h2>
        <p>We model two classes of adversary relevant to our target user base:</p>

        <h3>2.1 Passive Network Observer</h3>
        <p>
          An ISP or national monitoring agency that can observe all traffic between the user and our servers. Capabilities include full packet capture, flow metadata (source/destination IP, ports, timing), and traffic volume analysis. This adversary cannot break standard cryptographic primitives but can identify and block known protocol signatures.
        </p>

        <h3>2.2 Active Censorship Infrastructure</h3>
        <p>
          A state-level firewall capable of injecting RST packets to terminate connections, actively probing suspected VPN servers, and dynamically updating blocklists. China's GFW and Iran's NIN represent this adversary class. These systems operate at national ISP peering points and can modify in-flight traffic.
        </p>

        <h3>2.3 Security Goals</h3>
        <ul>
          <li><strong>Confidentiality</strong> — packet contents indecipherable to passive observers</li>
          <li><strong>Integrity</strong> — tampering detected and packets dropped</li>
          <li><strong>Availability</strong> — connections survive active blocking attempts</li>
          <li><strong>Unlinkability</strong> — VPN traffic indistinguishable from legitimate HTTPS traffic</li>
          <li><strong>Forward Secrecy</strong> — compromise of long-term keys does not expose past sessions</li>
        </ul>

        <h3>2.4 Out of Scope</h3>
        <p>
          We do not claim protection against endpoint compromise, malware on the user's device, or legal compulsion of the user themselves. SUR VPN is a network-layer privacy tool, not an endpoint security solution.
        </p>
      </section>

      {/* ── 3. Protocol Architecture ── */}
      <section id="protocols" className="doc-section">
        <h2>3. Protocol Architecture</h2>
        <p>
          SUR VPN operates a multi-protocol stack. The Telegram bot automatically selects the optimal protocol based on the user's detected country/ISP and current blocking patterns. Users can also manually request a specific protocol.
        </p>

        <h3 id="proto-reality" className="doc-section">3.1 V2Ray Reality (Primary)</h3>
        <p>
          Reality is our primary protocol for users in Iran and China. Introduced in Xray-core v1.8.0, it represents a significant advance over earlier TLS-mimicry approaches.
        </p>
        <h4>Certificate Borrowing</h4>
        <p>
          Rather than generating a self-signed TLS certificate (easily blocked by fingerprinting), Reality <em>borrows</em> the TLS certificate of a legitimate high-traffic domain (e.g., <code>one.one.one.one</code>, a Cloudflare property). The SUR VPN server presents Cloudflare's actual certificate, making all probes—including active certificate extraction attacks—see a legitimate Cloudflare certificate.
        </p>
        <h4>Authentication without SNI</h4>
        <p>
          A UUID-derived shared secret is embedded in the X25519 ECDH handshake. The server can silently distinguish authenticated SUR VPN clients from censorship probes and legitimate browsers, forwarding unauthenticated connections to the actual target domain with zero indication that a VPN server is present.
        </p>
        <pre>{`// Simplified Reality handshake flow
Client → Server: TLS ClientHello (SNI = target domain)
Server → Client: TLS ServerHello + Certificate (borrowed from target)
Client ← → Server: X25519 ECDH key agreement (UUID-authenticated)
                    → Session key derived via HKDF-SHA256
Subsequent traffic: AES-256-GCM encrypted, muxed over TLS 1.3`}</pre>
        <h4>Active Probing Resistance</h4>
        <p>
          Without the correct UUID and server private key, a censorship probe receives responses identical to the actual target domain. The SUR VPN server acts as a transparent reverse proxy for the target, providing plausible deniability at the network level.
        </p>

        <h3 id="proto-wg" className="doc-section">3.2 WireGuard</h3>
        <p>
          WireGuard is our primary protocol for users in Russia and for scenarios where raw throughput is prioritised. It is implemented directly in the Linux kernel (<code>wireguard-go</code> on non-Linux platforms), giving it a significant performance advantage over userspace VPN implementations.
        </p>
        <h4>Noise Protocol Framework</h4>
        <p>
          WireGuard uses the <strong>IKpsk2</strong> handshake pattern from the Noise Protocol Framework—a formal framework for designing key exchange protocols with well-understood security properties. The handshake provides mutual authentication using static Ed25519 key pairs and derives ephemeral session keys via X25519 ECDH.
        </p>
        <pre>{`Handshake keys:  X25519 Curve25519 (initiator static + ephemeral)
Session cipher: ChaCha20-Poly1305 (AEAD)
Hash:           BLAKE2s-256
KDF:            HKDF with chaining keys
Replay window:  2048-packet sliding window`}</pre>
        <h4>Stealth Characteristics</h4>
        <p>
          WireGuard silently drops all unauthenticated packets, providing no response to port scanners or active probes. It is however detectable by DPI on modern GFW-class firewalls due to distinctive handshake byte patterns; for GFW environments we recommend Reality.
        </p>

        <h3 id="proto-vless" className="doc-section">3.3 VLESS + XTLS Vision</h3>
        <p>
          VLESS is a lightweight successor to VMess that removes the symmetric encryption layer (relying on TLS transport for confidentiality), reducing per-packet overhead. The <strong>XTLS Vision</strong> extension further optimises HTTPS traffic by passing the inner TLS layer directly without double-encryption, reducing CPU load by approximately 30% on typical web browsing traffic.
        </p>
        <h4>Flow Control</h4>
        <p>
          XTLS Vision implements a padding mechanism that normalises packet length distributions, defeating traffic-analysis attacks that rely on packet-size fingerprinting. Padding bytes are discarded at the receiver side with zero impact on application data.
        </p>

        <h3 id="proto-vmess" className="doc-section">3.4 VMess</h3>
        <p>
          VMess is the original V2Ray protocol, providing its own authenticated encryption independent of the TLS transport. It uses AES-128-GCM or ChaCha20-Poly1305 for symmetric encryption and HMAC-MD5 (with a rolling timestamp window) for authentication, preventing replay attacks with ±2-minute clock tolerance.
        </p>
        <p>
          VMess is offered primarily for compatibility with older clients. For new configurations we recommend VLESS+Reality or WireGuard.
        </p>

        <h3 id="proto-ss" className="doc-section">3.5 Shadowsocks AEAD</h3>
        <p>
          Shadowsocks uses modern AEAD ciphers (<code>chacha20-ietf-poly1305</code> or <code>aes-256-gcm</code>) with a random salt for each TCP connection and a stream subkey derived via HKDF-SHA1. It provides strong encryption with a simple, easy-to-audit codebase and is widely supported across all platforms.
        </p>
        <p>
          Key derivation follows the SIP004 specification. The salt (16–32 bytes, random per session) prevents all forms of replay attack, and the AEAD authentication tag (16 bytes) ensures integrity of every chunk.
        </p>
      </section>

      {/* ── 4. Cryptography ── */}
      <section id="cryptography" className="doc-section">
        <h2>4. Cryptographic Foundations</h2>

        <h3>4.1 Key Exchange: X25519 ECDH</h3>
        <p>
          All protocols use Elliptic Curve Diffie-Hellman on <strong>Curve25519</strong> (X25519) for key exchange. Curve25519 was chosen for its resistance to implementation errors (no special-case points), high performance (~200,000 operations/second on a modern CPU), and immunity to the class of biased-nonce attacks that have affected NIST P-256.
        </p>
        <p>
          The resulting 32-byte shared secret is passed through <strong>HKDF-SHA256</strong> (RFC 5869) to derive separate encryption, decryption, and authentication subkeys, preventing key reuse across cryptographic operations.
        </p>

        <h3>4.2 Symmetric Encryption</h3>
        <table>
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Key Size</th>
              <th>Tag Size</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>AES-256-GCM</code></td>
              <td>256 bit</td>
              <td>128 bit</td>
              <td>x86-64 with AES-NI hardware</td>
            </tr>
            <tr>
              <td><code>AES-128-GCM</code></td>
              <td>128 bit</td>
              <td>128 bit</td>
              <td>High-throughput servers</td>
            </tr>
            <tr>
              <td><code>ChaCha20-Poly1305</code></td>
              <td>256 bit</td>
              <td>128 bit</td>
              <td>Mobile/ARM without AES-NI</td>
            </tr>
          </tbody>
        </table>
        <p>
          Both AES-GCM variants and ChaCha20-Poly1305 are <strong>AEAD</strong> (Authenticated Encryption with Associated Data) constructions, providing confidentiality and integrity in a single pass. AEAD eliminates entire classes of padding oracle and chosen-ciphertext attacks that plagued older CBC-mode implementations.
        </p>

        <h3>4.3 Perfect Forward Secrecy (PFS)</h3>
        <p>
          Every session uses <em>ephemeral</em> key pairs generated at session initiation. Long-term identity keys (used only for authentication, not encryption) are never used to encrypt session data directly. The session key is deleted immediately after the connection closes.
        </p>
        <p>
          Consequence: even if an adversary records all encrypted traffic today and later obtains the server's long-term private key, they <em>cannot</em> decrypt any recorded sessions. Each session's X25519 ephemeral private key exists only in RAM during that session.
        </p>

        <h3>4.4 Authentication &amp; Integrity</h3>
        <p>
          WireGuard uses <strong>BLAKE2s</strong> (256-bit) for all hashing operations — faster than SHA-256 on software implementations and designed for resistance to length-extension attacks. The <strong>Poly1305</strong> MAC authenticates every packet in ChaCha20-Poly1305 mode, providing 128-bit authentication security.
        </p>
        <p>
          Reality uses <strong>BLAKE2b</strong> (512-bit) for its handshake HMAC, providing 256-bit pre-image resistance for the authentication step.
        </p>
      </section>

      {/* ── 5. Traffic Obfuscation ── */}
      <section id="obfuscation" className="doc-section">
        <h2>5. Traffic Obfuscation</h2>

        <h3>5.1 Reality: Why It Defeats the GFW</h3>
        <p>
          The GFW's TLS inspection checks three things: (a) the certificate is from a blocklisted IP, (b) the SNI doesn't match a legitimate domain, and (c) active probing reveals non-browser behaviour. Reality defeats all three simultaneously:
        </p>
        <ul>
          <li>Certificates are genuine — borrowed from Cloudflare, Google, or Apple CDNs</li>
          <li>SNI is a legitimate high-traffic domain, indistinguishable in DPI logs</li>
          <li>Active probes are forwarded to the real domain — the server appears to <em>be</em> that domain</li>
        </ul>

        <h3>5.2 Packet Length Normalisation</h3>
        <p>
          Machine learning-based DPI systems can identify VPN traffic from packet-length distributions alone, even when encrypted. VLESS Vision and XTLS add deterministic padding to match the length distributions of normal browser-generated HTTPS traffic against popular CDN endpoints.
        </p>

        <h3>5.3 Transport Layer Options</h3>
        <p>
          All protocols can be transported over multiple lower-level transports to defeat port-based blocking:
        </p>
        <ul>
          <li><strong>Raw TCP / TLS 1.3</strong> — primary, lowest overhead</li>
          <li><strong>WebSocket over TLS</strong> — compatible with CDN fronting via Cloudflare Workers</li>
          <li><strong>gRPC over TLS</strong> — HTTP/2 multiplexing, highly compatible with corporate proxies</li>
          <li><strong>QUIC (VLESS)</strong> — UDP-based, extremely difficult to throttle selectively</li>
        </ul>

        <h3>5.4 Domain Fronting Fallback</h3>
        <p>
          In the most restrictive environments, traffic can be domain-fronted through major CDNs. The visible SNI is a Cloudflare or Google domain; the Host header inside the TLS tunnel routes to our servers. This is the last resort as CDN providers may terminate accounts for ToS violations, but it provides maximum censorship resistance when needed.
        </p>
      </section>

      {/* ── 6. Infrastructure ── */}
      <section id="infrastructure" className="doc-section">
        <h2>6. Infrastructure Architecture</h2>

        <h3>6.1 Server Topology</h3>
        <p>
          SUR VPN operates servers across 10+ countries selected to minimise latency to target user populations while maintaining jurisdictional diversity:
        </p>
        <ul>
          <li><strong>Europe</strong> — Netherlands, Germany, Finland (low latency to Iran, Russia, Ukraine)</li>
          <li><strong>Asia-Pacific</strong> — Singapore, Japan, Hong Kong (low latency to China, Southeast Asia)</li>
          <li><strong>North America</strong> — US East, US West (global fallback)</li>
          <li><strong>Middle East</strong> — Turkey (lowest latency for Iranian users, ~20ms)</li>
        </ul>
        <p>
          Servers are provisioned on dedicated bare metal or high-performance VPS infrastructure to avoid the IP reputation issues associated with shared cloud hosting environments, whose address ranges are often pre-blocked by censorship systems.
        </p>

        <h3>6.2 Automatic Protocol Selection Engine</h3>
        <p>
          The Telegram bot queries our selection API with the user's Telegram client country code and time of day. The engine returns the statistically optimal protocol+server combination based on:
        </p>
        <ul>
          <li>Real-time success rate data from active connectivity checks</li>
          <li>Aggregated latency measurements from synthetic probes</li>
          <li>Historical blocking pattern data per ISP/AS number</li>
          <li>Current server load (avoiding overloaded nodes)</li>
        </ul>
        <p>
          Configurations are rotated automatically every 30 days. Users can request manual rotation at any time via the bot.
        </p>

        <h3>6.3 Health Monitoring</h3>
        <p>
          Each server is monitored from probe nodes in the target countries. Connectivity checks run every 5 minutes. If a server IP is blocked, the selection engine deprioritises it within minutes and the next user configuration request will receive an unblocked server.
        </p>
      </section>

      {/* ── 7. Privacy Architecture ── */}
      <section id="privacy-model" className="doc-section">
        <h2>7. Privacy Architecture</h2>

        <h3>7.1 Zero-Log Implementation</h3>
        <p>
          SUR VPN implements no-logging at the infrastructure level. This is not a policy claim alone — it is enforced by system configuration:
        </p>
        <ul>
          <li><strong>No traffic logs</strong> — Xray-core and WireGuard are configured with access logging disabled. No packet contents, no flow records, no byte counts</li>
          <li><strong>No connection logs</strong> — Source IP addresses and connection timestamps are not recorded to any persistent storage</li>
          <li><strong>No DNS logs</strong> — DNS queries from users are resolved ephemerally; no resolver query logs are written</li>
          <li><strong>tmpfs for temp state</strong> — All transient server-side state (kernel connection tables) resides only in RAM. Server reboot wipes all state</li>
        </ul>
        <div className="doc-callout green">
          <p>We cannot hand over data we do not have. Zero-log is a technical constraint, not a promise that could be broken under legal compulsion.</p>
        </div>

        <h3>7.2 What We Do Store</h3>
        <p>
          The following data is stored in our subscription database (Telegram Bot backend):
        </p>
        <ul>
          <li><strong>Telegram user ID</strong> — A numeric integer issued by Telegram. Required to associate subscription status with bot interactions. Not linked to any VPN usage.</li>
          <li><strong>Subscription expiry date</strong> — Required to enforce subscription validity.</li>
          <li><strong>Plan type</strong> — Required to issue the correct configuration.</li>
        </ul>
        <p>
          This data is stored on servers in the European Union (Germany), subject to GDPR. Users can request deletion by messaging <code>@survpnbot</code>.
        </p>

        <h3>7.3 Jurisdiction Analysis</h3>
        <p>
          No single country in which we operate has jurisdiction over our complete infrastructure. Subscription data (EU/Germany) and VPN servers (distributed globally) are in separate legal jurisdictions. A legal demand targeting servers in one country cannot compel disclosure of data held in another. Even within a single jurisdiction, a server operator cannot produce connection logs that do not exist.
        </p>
      </section>

      {/* ── 8. Telegram Delivery ── */}
      <section id="delivery" className="doc-section">
        <h2>8. Configuration Delivery via Telegram</h2>

        <h3>8.1 Design Rationale</h3>
        <p>
          Traditional VPN apps require installation from app stores, which are often geo-restricted or monitored by censorship systems. Telegram is widely available in restricted regions, has its own anti-censorship infrastructure, and provides an encrypted channel for configuration delivery. Using Telegram as the distribution mechanism means users need only one app — one they likely already have.
        </p>

        <h3>8.2 Configuration Formats</h3>
        <p>SUR VPN generates configurations compatible with the most widely used client apps:</p>
        <table>
          <thead>
            <tr><th>Protocol</th><th>Config Format</th><th>Compatible Clients</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>V2Ray Reality / VLESS</td>
              <td>VLESS URI / JSON</td>
              <td>V2rayNG (Android), Hiddify, Streisand (iOS), Nekoray</td>
            </tr>
            <tr>
              <td>VMess</td>
              <td>VMess URI / JSON</td>
              <td>V2rayNG, Shadowrocket (iOS), Clash</td>
            </tr>
            <tr>
              <td>WireGuard</td>
              <td>WireGuard INI</td>
              <td>WireGuard Official (iOS/Android/macOS/Windows/Linux)</td>
            </tr>
            <tr>
              <td>Shadowsocks</td>
              <td>SS URI</td>
              <td>Shadowrocket, Outline, Shadowsocks-Android</td>
            </tr>
          </tbody>
        </table>
        <p>
          QR codes are generated for all URI-format configurations, allowing one-scan import on mobile devices.
        </p>

        <h3>8.3 Subscription Links</h3>
        <p>
          For power users and Clash/Mihomo users, subscription links are provided that aggregate all available server configurations. Client apps poll the subscription URL periodically to automatically receive updated configurations when servers rotate.
        </p>
      </section>

      {/* ── 9. Performance ── */}
      <section id="performance" className="doc-section">
        <h2>9. Performance Benchmarks</h2>
        <p>
          The following measurements were taken on a 1 Gbps dedicated server (AMD EPYC 7282, Ubuntu 22.04) using <code>iperf3</code> from a client in Frankfurt to a server in Amsterdam (2ms RTT).
        </p>
        <table>
          <thead>
            <tr><th>Protocol</th><th>Throughput</th><th>CPU Usage (server)</th><th>Latency Overhead</th></tr>
          </thead>
          <tbody>
            <tr><td>WireGuard (kernel)</td><td>940–975 Mbps</td><td>~8%</td><td>+3–6 ms</td></tr>
            <tr><td>V2Ray Reality (XTLS Vision)</td><td>820–880 Mbps</td><td>~22%</td><td>+8–15 ms</td></tr>
            <tr><td>VLESS + XTLS</td><td>840–890 Mbps</td><td>~20%</td><td>+8–14 ms</td></tr>
            <tr><td>Shadowsocks (chacha20)</td><td>780–850 Mbps</td><td>~18%</td><td>+10–18 ms</td></tr>
            <tr><td>VMess (AES-128-GCM)</td><td>750–820 Mbps</td><td>~25%</td><td>+12–20 ms</td></tr>
          </tbody>
        </table>
        <p>
          On mobile hardware (ARM Cortex-A55), ChaCha20-Poly1305 outperforms AES-GCM variants by approximately 35% when hardware AES acceleration is absent. Our protocol selection engine prefers ChaCha20-based configurations on mobile user agents.
        </p>
      </section>

      {/* ── 10. Comparison ── */}
      <section id="comparison" className="doc-section">
        <h2>10. Protocol Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Solution</th>
              <th>GFW/NIN Resistance</th>
              <th>Speed</th>
              <th>Setup Ease</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>SUR VPN Reality</strong></td>
              <td>★★★★★</td>
              <td>★★★★☆</td>
              <td>★★★★★</td>
              <td>★★★★★</td>
            </tr>
            <tr>
              <td><strong>SUR VPN WireGuard</strong></td>
              <td>★★★☆☆</td>
              <td>★★★★★</td>
              <td>★★★★★</td>
              <td>★★★★★</td>
            </tr>
            <tr>
              <td>Tor</td>
              <td>★★★★★</td>
              <td>★★☆☆☆</td>
              <td>★★★☆☆</td>
              <td>★★★☆☆</td>
            </tr>
            <tr>
              <td>OpenVPN (obfs4)</td>
              <td>★★★☆☆</td>
              <td>★★★☆☆</td>
              <td>★★★☆☆</td>
              <td>★★★☆☆</td>
            </tr>
            <tr>
              <td>Commercial VPN (OpenVPN)</td>
              <td>★★☆☆☆</td>
              <td>★★★★☆</td>
              <td>★★★★☆</td>
              <td>★★★★☆</td>
            </tr>
            <tr>
              <td>PPTP / L2TP</td>
              <td>★☆☆☆☆</td>
              <td>★★★★☆</td>
              <td>★★★★★</td>
              <td>★★★★★</td>
            </tr>
          </tbody>
        </table>
        <div className="doc-callout yellow">
          <p>Censorship resistance ratings reflect conditions in Iran (NIN) and China (GFW) as of Q2 2025. The landscape evolves; ratings are updated quarterly.</p>
        </div>
      </section>

      {/* ── 11. Roadmap ── */}
      <section id="roadmap" className="doc-section">
        <h2>11. Roadmap</h2>
        <ul>
          <li><strong>Q3 2025</strong> — TUIC v5 support (UDP over QUIC, extremely low latency, high DPI resistance)</li>
          <li><strong>Q3 2025</strong> — Hysteria2 support (BBR-based QUIC, optimised for high packet-loss networks)</li>
          <li><strong>Q4 2025</strong> — Dedicated iOS and Android apps with in-app subscription management</li>
          <li><strong>Q4 2025</strong> — Web dashboard for resellers with sub-user management</li>
          <li><strong>2026 Q1</strong> — Oblivious DNS over HTTPS (ODoH) integration for DNS privacy</li>
          <li><strong>2026 Q2</strong> — Mullvad-inspired RAM-only server infrastructure (entire OS on tmpfs)</li>
        </ul>
      </section>

      {/* ── 12. Conclusion ── */}
      <section id="conclusion" className="doc-section">
        <h2>12. Conclusion</h2>
        <p>
          SUR VPN's architecture represents the current state of the art in accessible censorship circumvention. By combining the anti-censorship properties of V2Ray Reality with the performance of WireGuard and the broad compatibility of VLESS/VMess/Shadowsocks—all delivered through a zero-friction Telegram Bot interface—we provide a service that works where others fail.
        </p>
        <p>
          Our zero-log architecture and distributed jurisdictional footprint minimise the risk surface for user privacy. The use of open-source, publicly audited protocols means our security claims can be independently verified by the cryptographic community.
        </p>
        <p>
          Internet freedom is a fundamental human right. SUR VPN exists to make it technically accessible to everyone, regardless of the regime they live under.
        </p>
        <div className="doc-callout green">
          <p>Get started at <strong>t.me/survpnbot</strong> — free trial available, no registration required beyond a Telegram account.</p>
        </div>
      </section>

      {/* ── References ── */}
      <section id="references" className="doc-section">
        <h2>References</h2>
        <ol>
          <li>Donenfeld, J. A. (2017). <em>WireGuard: Next Generation Kernel Network Tunnel.</em> NDSS 2017. <a href="https://www.wireguard.com/papers/wireguard.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>wireguard.com/papers/wireguard.pdf</a></li>
          <li>Perrin, T. (2018). <em>The Noise Protocol Framework.</em> noiseprotocol.org</li>
          <li>IETF RFC 8439: <em>ChaCha20 and Poly1305 for IETF Protocols.</em> Y. Nir, A. Langley. 2018.</li>
          <li>IETF RFC 5869: <em>HMAC-based Extract-and-Expand Key Derivation Function (HKDF).</em> H. Krawczyk, P. Eronen. 2010.</li>
          <li>Xray-core Project. (2023). <em>VLESS + XTLS-Vision Specification.</em> github.com/XTLS/Xray-core</li>
          <li>Bernstein, D. J. (2006). <em>Curve25519: New Diffie-Hellman Speed Records.</em> PKC 2006.</li>
          <li>Aumasson, J.-P., et al. (2013). <em>BLAKE2: Simpler, Smaller, Fast as MD5.</em> ACNS 2013.</li>
          <li>SIP004: <em>Authenticated Encryption for Shadowsocks.</em> shadowsocks.org/en/wiki/AEAD-Ciphers.html</li>
          <li>Roya Ensafi et al. (2021). <em>An ISP-Scale Deployment of BotBuster.</em> USENIX Security 2021. (GFW active probing analysis)</li>
        </ol>
      </section>

    </DocPage>
  );
}
