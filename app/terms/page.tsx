import type { Metadata } from "next";
import DocPage, { type TocItem } from "../../components/DocPage";

export const metadata: Metadata = {
  title: "Terms of Service — SUR VPN",
  description:
    "SUR VPN Terms of Service: acceptable use, subscription terms, prohibited activities, payment policy, and limitation of liability.",
};

const TOC: TocItem[] = [
  { id: "acceptance",     label: "Acceptance of Terms" },
  { id: "service",        label: "The Service" },
  { id: "eligibility",    label: "Eligibility" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "prohibited",     label: "Prohibited Activities" },
  { id: "subscriptions",  label: "Subscriptions & Payment" },
  { id: "refunds",        label: "Refunds" },
  { id: "termination",    label: "Termination" },
  { id: "disclaimers",    label: "Disclaimers" },
  { id: "liability",      label: "Limitation of Liability" },
  { id: "changes",        label: "Changes to Terms" },
  { id: "contact",        label: "Contact" },
];

export default function TermsPage() {
  return (
    <DocPage
      title="Terms of Service"
      subtitle="By using SUR VPN you agree to these terms. Please read them carefully — they govern your use of the service and explain your rights and responsibilities."
      meta="Effective June 1, 2025 · survpn.xyz"
      tocItems={TOC}
    >

      {/* 1. Acceptance */}
      <section id="acceptance" className="doc-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you") and SUR VPN ("we," "us," "our") governing your access to and use of the SUR VPN service, including the VPN infrastructure, Telegram Bot (<code>@survpnbot</code>), and website at <code>survpn.xyz</code> (collectively, the "Service").
        </p>
        <p>
          By accessing or using the Service — including activating a subscription through the Telegram Bot — you confirm that you have read, understood, and agree to be bound by these Terms and our <a href="/privacy-policy" style={{ color: "#a78bfa" }}>Privacy Policy</a>.
        </p>
        <p>
          If you do not agree to these Terms, you may not use the Service.
        </p>
      </section>

      {/* 2. Service */}
      <section id="service" className="doc-section">
        <h2>2. The Service</h2>
        <p>
          SUR VPN provides encrypted virtual private network (VPN) services designed to protect your internet traffic and help users in restricted regions access the open internet. The Service includes:
        </p>
        <ul>
          <li>Access to VPN servers using V2Ray Reality, WireGuard, VLESS, VMess, and Shadowsocks protocols</li>
          <li>Configuration delivery via Telegram Bot</li>
          <li>Automatic protocol and server selection</li>
          <li>Support for multiple languages and RTL scripts</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice. We do not guarantee uninterrupted availability — VPN services by nature operate in adversarial network environments.
        </p>
        <div className="doc-callout yellow">
          <p>
            SUR VPN is a tool for privacy and censorship circumvention. It is not designed to provide anonymity for illegal activities. See Section 5 (Prohibited Activities).
          </p>
        </div>
      </section>

      {/* 3. Eligibility */}
      <section id="eligibility" className="doc-section">
        <h2>3. Eligibility</h2>
        <p>You must be at least 13 years old to use the Service. By using the Service, you represent that:</p>
        <ul>
          <li>You are at least 13 years of age</li>
          <li>You have the legal capacity to enter into a binding agreement</li>
          <li>Your use of the Service complies with all laws applicable to you</li>
        </ul>
        <p>
          Users are solely responsible for determining whether the use of a VPN is legal in their jurisdiction. We are not able to provide legal advice and do not warrant that the Service is lawful in your location.
        </p>
      </section>

      {/* 4. Acceptable Use */}
      <section id="acceptable-use" className="doc-section">
        <h2>4. Acceptable Use</h2>
        <p>You may use the Service to:</p>
        <ul>
          <li>Protect your internet traffic on public Wi-Fi networks</li>
          <li>Access blocked websites, apps, and services in your region</li>
          <li>Protect your privacy from ISP monitoring and surveillance</li>
          <li>Bypass censorship of news, social media, and communication tools</li>
          <li>Secure communications while travelling</li>
        </ul>
        <p>
          You agree to use the Service only for lawful purposes and in a manner consistent with these Terms.
        </p>
      </section>

      {/* 5. Prohibited Activities */}
      <section id="prohibited" className="doc-section">
        <h2>5. Prohibited Activities</h2>
        <p>
          You must not use the Service for any of the following. Violation of this section is grounds for immediate termination without refund:
        </p>
        <ul>
          <li><strong>Illegal content</strong> — accessing, uploading, or distributing content that is illegal in your jurisdiction or ours</li>
          <li><strong>Child exploitation material</strong> — accessing or distributing any content that sexually exploits minors, in any form</li>
          <li><strong>Network attacks</strong> — conducting DDoS attacks, port scanning, hacking attempts, or any form of unauthorised network penetration</li>
          <li><strong>Spam</strong> — sending unsolicited bulk communications (email spam, SMS spam) through the Service</li>
          <li><strong>Malware distribution</strong> — distributing viruses, ransomware, spyware, or other malicious software</li>
          <li><strong>Fraud</strong> — using the Service for phishing, financial fraud, identity theft, or similar schemes</li>
          <li><strong>Resale without permission</strong> — reselling or sub-licensing access to the Service without our written permission</li>
          <li><strong>Cryptocurrency mining</strong> — using our servers for cryptocurrency mining</li>
          <li><strong>Automated abuse</strong> — running bots or scrapers that generate excessive load on our infrastructure</li>
          <li><strong>Harassment</strong> — using the Service to harass, threaten, or stalk individuals</li>
        </ul>
        <div className="doc-callout">
          <p>
            We operate a zero-log VPN — we have no ability to monitor your traffic. This list is not aspirational; it is a binding contractual obligation. Abuse reports from third parties (e.g., network abuse complaints) may be used as basis for termination.
          </p>
        </div>
      </section>

      {/* 6. Subscriptions */}
      <section id="subscriptions" className="doc-section">
        <h2>6. Subscriptions &amp; Payment</h2>
        <h3>6.1 Plans</h3>
        <p>
          SUR VPN is offered on subscription plans (monthly, quarterly, annual) as presented through the Telegram Bot at the time of purchase. Prices are subject to change; existing subscribers are grandfathered at their current rate until renewal.
        </p>
        <h3>6.2 Billing</h3>
        <p>
          Subscriptions do not auto-renew automatically. You must actively renew through the bot before expiry. Your subscription terminates at the end of the paid period if not renewed.
        </p>
        <h3>6.3 Free Trial</h3>
        <p>
          Where offered, free trials provide full access for a limited period. One free trial per Telegram account. Creating multiple accounts to exploit free trials is prohibited.
        </p>
        <h3>6.4 Reseller Accounts</h3>
        <p>
          Reseller accounts that allow sub-user distribution are available by separate agreement. Contact us via the bot for reseller pricing.
        </p>
      </section>

      {/* 7. Refunds */}
      <section id="refunds" className="doc-section">
        <h2>7. Refunds</h2>
        <p>
          Due to the nature of digital services, we offer refunds only in the following circumstances:
        </p>
        <ul>
          <li>The Service was entirely unavailable for more than 72 consecutive hours due to issues on our side, and you requested a refund within 7 days of the outage ending</li>
          <li>Technical issues we cannot resolve prevent you from using the Service at all, after good-faith troubleshooting</li>
        </ul>
        <p>
          We do not offer refunds for: change of mind, inability to access the internet for other reasons (ISP blocking the VPN — we will provide an alternative configuration), or user-side configuration errors.
        </p>
        <p>
          To request a refund, contact us via <code>@survpnbot</code> with <code>/support</code>.
        </p>
      </section>

      {/* 8. Termination */}
      <section id="termination" className="doc-section">
        <h2>8. Termination</h2>
        <p>
          <strong>By you:</strong> You may stop using the Service at any time. Deletion requests (see Privacy Policy) terminate your account and remove all stored data.
        </p>
        <p>
          <strong>By us:</strong> We may suspend or terminate your access immediately if we have reason to believe you have violated these Terms, particularly Section 5 (Prohibited Activities). In such cases, no refund will be issued.
        </p>
        <p>
          In cases of suspected abuse (e.g., receiving a DDoS abuse report linked to your configuration), we may suspend first and investigate second. We will notify you via the Telegram Bot. If the report is unfounded, access will be restored promptly.
        </p>
      </section>

      {/* 9. Disclaimers */}
      <section id="disclaimers" className="doc-section">
        <h2>9. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that:
        </p>
        <ul>
          <li>The Service will be uninterrupted, error-free, or always available</li>
          <li>The Service will bypass all censorship systems at all times (blocking environments are adversarial and change rapidly)</li>
          <li>The Service provides absolute anonymity (see our <a href="/whitepaper" style={{ color: "#a78bfa" }}>Technical Whitepaper</a> for our security model and its limits)</li>
          <li>The Service is lawful in your jurisdiction</li>
        </ul>
      </section>

      {/* 10. Liability */}
      <section id="liability" className="doc-section">
        <h2>10. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SUR VPN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE SERVICE.
        </p>
        <p>
          IN NO EVENT SHALL OUR AGGREGATE LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
        </p>
        <p>
          Some jurisdictions do not allow limitation of liability for certain types of damages; in such jurisdictions, liability is limited to the fullest extent permitted by law.
        </p>
      </section>

      {/* 11. Changes */}
      <section id="changes" className="doc-section">
        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. When material changes are made, we will update the "Effective" date at the top of this page and notify subscribers via the Telegram Bot or channel.
        </p>
        <p>
          Continued use of the Service after updated Terms are posted constitutes your acceptance of the updated Terms.
        </p>
      </section>

      {/* 12. Contact */}
      <section id="contact" className="doc-section">
        <h2>12. Contact</h2>
        <p>For questions about these Terms, or to report a violation:</p>
        <ul>
          <li><strong>Telegram:</strong> <code>@survpnbot</code> → type <code>/support</code></li>
          <li><strong>Website:</strong> <code>survpn.xyz</code></li>
        </ul>
      </section>

    </DocPage>
  );
}
