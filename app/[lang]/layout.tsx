import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SUPPORTED_LANGS, getLang, getDictionary, type LangCode } from "../../lib/i18n";
import HtmlDirSetter from "../../components/HtmlDirSetter";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const validLang = SUPPORTED_LANGS.includes(lang as LangCode) ? (lang as LangCode) : "en";
  const dict = await getDictionary(validLang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL("https://survpn.xyz"),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://survpn.xyz/${validLang}/`,
      siteName: "SUR VPN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    alternates: {
      canonical: `https://survpn.xyz/${validLang}/`,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://survpn.xyz/${l}/`])
      ),
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = SUPPORTED_LANGS.includes(lang as LangCode) ? (lang as LangCode) : "en";
  const langConfig = getLang(validLang);

  return (
    <div
      dir={langConfig.dir}
      lang={validLang}
      data-font={langConfig.font}
      style={{ minHeight: "100svh" }}
    >
      {/* Sets html lang/dir for SEO/accessibility on hydration */}
      <HtmlDirSetter lang={validLang} dir={langConfig.dir} fontClass={langConfig.font} />
      {children}
    </div>
  );
}
