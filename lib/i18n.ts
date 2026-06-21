export interface Dict {
  meta: { title: string; description: string };
  nav: {
    features: string;
    protocols: string;
    howItWorks: string;
    privacy: string;
    faq: string;
    getStarted: string;
  };
  encryption: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    items: Array<{ title: string; desc: string }>;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{ icon: string; title: string; desc: string }>;
  };
  protocols: {
    title: string;
    subtitle: string;
    items: Array<{ name: string; desc: string; badge: string }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; desc: string }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: {
    tagline: string;
    telegramLabel: string;
    websiteLabel: string;
    copyright: string;
    resellerTitle: string;
    resellerDesc: string;
  };
}

export type LangCode = "en" | "fa" | "ar" | "zh" | "ru" | "es" | "ur" | "uk";

export const LANGUAGES: Array<{
  code: LangCode;
  name: string;
  localName: string;
  flag: string;
  dir: "ltr" | "rtl";
  font: string;
}> = [
  { code: "en", name: "English", localName: "English", flag: "🇬🇧", dir: "ltr", font: "inter" },
  { code: "fa", name: "Persian", localName: "فارسی", flag: "🇮🇷", dir: "rtl", font: "vazirmatn" },
  { code: "ar", name: "Arabic", localName: "العربية", flag: "🇸🇦", dir: "rtl", font: "vazirmatn" },
  { code: "zh", name: "Chinese", localName: "中文", flag: "🇨🇳", dir: "ltr", font: "noto-sans-sc" },
  { code: "ru", name: "Russian", localName: "Русский", flag: "🇷🇺", dir: "ltr", font: "inter" },
  { code: "es", name: "Spanish", localName: "Español", flag: "🇪🇸", dir: "ltr", font: "inter" },
  { code: "ur", name: "Urdu", localName: "اردو", flag: "🇵🇰", dir: "rtl", font: "vazirmatn" },
  { code: "uk", name: "Ukrainian", localName: "Українська", flag: "🇺🇦", dir: "ltr", font: "inter" },
];

export const SUPPORTED_LANGS = LANGUAGES.map((l) => l.code);
export const DEFAULT_LANG: LangCode = "en";

export function getLang(code: string): (typeof LANGUAGES)[number] {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
}

export function isRTL(code: string): boolean {
  return getLang(code).dir === "rtl";
}

const dictCache: Partial<Record<LangCode, Dict>> = {};

export async function getDictionary(lang: LangCode): Promise<Dict> {
  if (dictCache[lang]) return dictCache[lang]!;
  const mod = await import(`../dictionaries/${lang}`);
  dictCache[lang] = mod.default as Dict;
  return dictCache[lang]!;
}
