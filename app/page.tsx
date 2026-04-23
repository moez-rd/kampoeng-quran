import { HeroSection } from "@/components/landing/hero-section"
import { ProgramSection } from "@/components/landing/program-section"
import { FasilitasSection } from "@/components/landing/fasilitas-section"
import { EkskulSection } from "@/components/landing/ekskul-section"
import { PengayaanSection } from "@/components/landing/pengayaan-section"
import { JadwalSection } from "@/components/landing/jadwal-section"
import { SyaratSection } from "@/components/landing/syarat-section"
import { FooterSection } from "@/components/landing/footer-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgramSection />
      <FasilitasSection />
      <EkskulSection />
      <PengayaanSection />
      <JadwalSection />
      <SyaratSection />
      <FooterSection />
    </main>
  )
}
