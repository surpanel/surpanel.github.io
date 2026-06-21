import type { Metadata } from "next";
import DocPage, { type TocItem } from "../../components/DocPage";

export const metadata: Metadata = {
  title: "Privacy Policy — SUR VPN",
  description:
    "SUR VPN's privacy policy: what data we collect, what we never collect, how your information is protected, and your rights.",
};

const TOC: TocItem[] = [
  { id: "overview",       label: "Overview" },
  { id: "no-logs",        label: "Zero-Log Policy" },
  { id: "what-we-store",  label: "What We Store" },
  { id: "telegram-data",  label: "Telegram Data" },
  { id: "payment",        label: "Payments" },
  { id: "third-parties",  label: "Third Parties" },
  { id: "jurisdiction",   label: "Jurisdiction" },
  { id: "your-rights",    label: "Your Rights" },
  { id: "cookies",        label: "Cookies & Analytics" },
  { id: "children",       label: "Children" },
  { id: "changes",        label: "Policy Changes" },
  { id: "contact",        label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <DocPage
      title="Privacy Policy"
      subtitle="SUR VPN is built on a strict no-logs principle. This policy explains exactly what we collect, what we never collect, and how we protect your privacy."
      meta="Effective June 1, 2025 · survpn.xyz"
      tocItems={TOC}
    >

      {/* Overview */}
      <section id="overview" className="doc-section">
        <div className="doc-callout green">
          <p>
            <strong>Short version:</strong> We do not log your VPN traffic, your IP address, or your browsing activity. We store only your Telegram user ID and subscription status. We cannot sell, share, or hand over VPN usage data because we never had it.
          </p>
        </div>
        <p>
          This Privacy Policy applies to all services provided by SUR VPN, including the VPN service, the Telegram Bot (<code>@survpnbot</code>), and the website at <code>survpn.xyz</code>.
        </p>
        <p>
          By using SUR VPN you agree to this policy. If you disagree, please discontinue use of the service.
        </p>
      </section>

      {/* Zero-Log Policy */}
      <section id="no-logs" className="doc-section">
        <h2>Zero-Log Policy</h2>
        <p>
          SUR VPN operates under a strict zero-log policy. Our VPN servers are configured to <strong>never record</strong>:
        </p>
        <ul>
          <li>Your real IP address before, during, or after connecting</li>
          <li>The websites, apps, or services you access through the VPN</li>
          <li>Contents of any network traffic</li>
          <li>DNS queries made through the VPN</li>
          <li>Connection timestamps (when you connect or disconnect)</li>
          <li>Session duration or data volume transferred</li>
          <li>Assigned VPN IP addresses</li>
        </ul>
        <div className="doc-callout">
          <p>
            This is enforced at the infrastructure level, not just by policy. Xray-core and WireGuard are deployed with <code>log.access = "none"</code> and equivalent settings. No database receives connection records. A court order cannot compel us to produce records that don't exist.
          </p>
        </div>
      </section>

      {/* What We Store */}
      <section id="what-we-store" className="doc-section">
        <h2>What We Do Store</h2>
        <p>Our subscription management database stores:</p>
        <table>
          <thead>
            <tr><th>Data</th><th>Why</th><th>Retention</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Telegram User ID (numeric integer)</td>
              <td>Associate subscription with your Telegram account</td>
              <td>Until account deletion request</td>
            </tr>
            <tr>
              <td>Subscription expiry date</td>
              <td>Determine if your plan is active</td>
              <td>30 days after expiry, then deleted</td>
            </tr>
            <tr>
              <td>Plan type (e.g., Monthly, Annual)</td>
              <td>Generate the correct configuration</td>
              <td>Same as above</td>
            </tr>
          </tbody>
        </table>
        <p>
          The Telegram User ID is an opaque integer. It is not your phone number, username, name, or any personally identifying string. It is used solely to associate your subscription status with bot interactions.
        </p>
        <p>
          This data is stored on servers hosted in Germany, subject to EU GDPR protections.
        </p>
      </section>

      {/* Telegram Data */}
      <section id="telegram-data" className="doc-section">
        <h2>Telegram Data</h2>
        <p>
          SUR VPN is distributed exclusively through the Telegram Bot <code>@survpnbot</code>. When you interact with the bot, Telegram's servers route your messages. We receive only:
        </p>
        <ul>
          <li>Your Telegram User ID (the numeric integer described above)</li>
          <li>The text of messages you send to the bot (commands like <code>/start</code>, <code>/plan</code>)</li>
        </ul>
        <p>
          We do not receive your Telegram phone number, profile photo, contact list, or any other account information. Telegram's own privacy policy governs how Telegram processes your data on their end. We recommend reviewing <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>telegram.org/privacy</a>.
        </p>
        <div className="doc-callout yellow">
          <p>
            Telegram messages to our bot are not end-to-end encrypted by default (they use Telegram's server-to-client encryption). Do not send sensitive personal information through the bot beyond what is necessary to activate your subscription.
          </p>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" className="doc-section">
        <h2>Payments</h2>
        <p>
          Payment processing (where applicable) is handled by third-party payment processors. We do not store full credit card numbers, bank account details, or any payment card data on our servers. We receive only a transaction confirmation reference to associate with your subscription.
        </p>
        <p>
          Cryptocurrency payments (USDT, TON) are accepted and provide maximum financial privacy — we receive only the transaction hash, which we use to verify payment.
        </p>
      </section>

      {/* Third Parties */}
      <section id="third-parties" className="doc-section">
        <h2>Third-Party Sharing</h2>
        <p>We do not sell, rent, or trade your personal data to any third party, ever.</p>
        <p>
          We do not share your data with advertising networks, data brokers, analytics companies, or law enforcement agencies (beyond what may be legally required, and bearing in mind that VPN usage data does not exist to be shared).
        </p>
        <p>
          Our infrastructure providers (VPS hosting companies) receive network traffic in the ordinary course of operating a server, but do not receive any subscription or identification data.
        </p>
      </section>

      {/* Jurisdiction */}
      <section id="jurisdiction" className="doc-section">
        <h2>Jurisdiction</h2>
        <p>
          SUR VPN subscription data is stored in Germany (EU). Germany is subject to GDPR, which provides strong data protection guarantees and requires judicial process for any data disclosure. Germany is not part of the 5 Eyes, 9 Eyes, or 14 Eyes intelligence-sharing agreements.
        </p>
        <p>
          VPN servers are located across 10+ countries. Even if authorities in a VPN server's jurisdiction demanded data from that server, there is no connection or usage data to provide.
        </p>
        <p>
          Subscription data (Telegram User ID + subscription status) held in Germany is subject to German and EU data protection law. A valid German court order could theoretically compel disclosure of this data. That data cannot be linked to any VPN activity.
        </p>
      </section>

      {/* Your Rights */}
      <section id="your-rights" className="doc-section">
        <h2>Your Rights</h2>
        <p>Under GDPR and applicable law, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> — Request a copy of the data we hold about you</li>
          <li><strong>Deletion</strong> — Request deletion of your data ("right to be forgotten")</li>
          <li><strong>Correction</strong> — Request correction of inaccurate data</li>
          <li><strong>Portability</strong> — Receive your data in a machine-readable format</li>
          <li><strong>Object</strong> — Object to processing of your data</li>
        </ul>
        <p>
          To exercise any of these rights, message <code>@survpnbot</code> on Telegram with the command <code>/delete</code> for deletion, or contact us at the address below for other requests. We will respond within 30 days.
        </p>
        <div className="doc-callout green">
          <p>Deleting your account removes all data we hold. Your Telegram User ID, subscription record, and any bot message history on our side are permanently erased.</p>
        </div>
      </section>

      {/* Cookies */}
      <section id="cookies" className="doc-section">
        <h2>Cookies &amp; Website Analytics</h2>
        <p>
          The SUR VPN website (<code>survpn.xyz</code>) is a static site. We do not use tracking cookies, advertising pixels, or third-party analytics scripts.
        </p>
        <p>
          Our web server may record access logs (IP address, page requested, timestamp) in the ordinary course of server operation. These logs are rotated and deleted within 7 days and are not linked to VPN subscription records.
        </p>
      </section>

      {/* Children */}
      <section id="children" className="doc-section">
        <h2>Children</h2>
        <p>
          SUR VPN is not directed to children under 13 years of age. We do not knowingly collect personal data from children under 13. If you believe a child has provided us personal information, contact us and we will delete it immediately.
        </p>
      </section>

      {/* Changes */}
      <section id="changes" className="doc-section">
        <h2>Policy Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we update the "Effective" date at the top of this page and announce significant changes via the Telegram channel <code>@survpn</code>.
        </p>
        <p>
          Continued use of the service after changes are posted constitutes acceptance of the updated policy.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="doc-section">
        <h2>Contact</h2>
        <p>For privacy-related questions, data requests, or complaints:</p>
        <ul>
          <li><strong>Telegram:</strong> <code>@survpnbot</code> (type <code>/support</code>)</li>
          <li><strong>Website:</strong> <code>survpn.xyz</code></li>
        </ul>
      </section>

    </DocPage>
  );
}
