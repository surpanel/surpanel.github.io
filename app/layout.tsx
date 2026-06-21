import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUR VPN — Break Free from Censorship",
  description:
    "Ultra-fast V2Ray Reality, WireGuard VPN for Iran, Russia, China & beyond. Military-grade encryption. Connect via Telegram bot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
