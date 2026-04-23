import { EkskulSection } from "@/components/landing/ekskul-section";
import { FasilitasSection } from "@/components/landing/fasilitas-section";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";
import { CtaSection } from "@/components/landing/cta-section";
import { NewsSection } from "@/components/landing/news-section";
import { PengayaanSection } from "@/components/landing/pengayaan-section";
import { ProgramSection } from "@/components/landing/program-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgramSection />
      <FasilitasSection />
      <EkskulSection />
      <PengayaanSection />
      <NewsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
