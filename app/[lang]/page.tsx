import { SUPPORTED_LANGS, getDictionary, isRTL, type LangCode } from "../../lib/i18n";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import ProtocolsSection from "../../components/ProtocolsSection";
import HowItWorksSection from "../../components/HowItWorksSection";
import EncryptionSection from "../../components/EncryptionSection";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";
import ScrollAnimationInit from "./ScrollAnimationInit";

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: LangCode = SUPPORTED_LANGS.includes(lang as LangCode)
    ? (lang as LangCode)
    : "en";
  const dict = await getDictionary(validLang);
  const rtl = isRTL(validLang);

  return (
    <main>
      <ScrollAnimationInit />
      <Navbar dict={dict} lang={validLang} />
      <HeroSection dict={dict} isRTL={rtl} />
      <div className="section-divider" />
      <FeaturesSection dict={dict} isRTL={rtl} />
      <div className="section-divider" />
      <ProtocolsSection dict={dict} isRTL={rtl} />
      <div className="section-divider" />
      <EncryptionSection dict={dict} isRTL={rtl} />
      <div className="section-divider" />
      <HowItWorksSection dict={dict} isRTL={rtl} />
      <div className="section-divider" />
      <FAQSection dict={dict} isRTL={rtl} />
      <Footer dict={dict} lang={validLang} isRTL={rtl} />
    </main>
  );
}
