import { EkskulSection } from "@/components/landing/ekskul-section";
import { FasilitasSection } from "@/components/landing/fasilitas-section";
import { HeroSection } from "@/components/landing/hero-section";
import { CtaSection } from "@/components/landing/cta-section";
import { NewsSection } from "@/components/landing/news-section";
import { PengayaanSection } from "@/components/landing/pengayaan-section";
import { ProgramSection } from "@/components/landing/program-section";
import {
  client,
  heroSettingsQuery,
  programPendidikanQuery,
  programUnggulanQuery,
  programUnggulanImageQuery,
  fasilitasQuery,
  ekstrakurikulerQuery,
  ekskulImageQuery,
  pengayaanMateriQuery,
  beritaKegiatanQuery,
} from "@/lib/sanity";

// Set revalidation time (in seconds) to enable ISR
export const revalidate = 60;

export default async function Home() {
  const [
    hero,
    programs,
    unggulan,
    unggulanImage,
    fasilitas,
    ekskul,
    ekskulImage,
    pengayaan,
    news,
  ] = await Promise.all([
    client.fetch(heroSettingsQuery),
    client.fetch(programPendidikanQuery),
    client.fetch(programUnggulanQuery),
    client.fetch(programUnggulanImageQuery),
    client.fetch(fasilitasQuery),
    client.fetch(ekstrakurikulerQuery),
    client.fetch(ekskulImageQuery),
    client.fetch(pengayaanMateriQuery),
    client.fetch(beritaKegiatanQuery),
  ]);

  return (
    <>
      <HeroSection slides={hero?.images ?? []} />
      <ProgramSection
        programs={programs ?? []}
        unggulan={unggulan ?? []}
        unggulanImage={unggulanImage}
      />
      <FasilitasSection items={fasilitas ?? []} />
      <EkskulSection items={ekskul ?? []} ekskulImage={ekskulImage} />
      <PengayaanSection items={pengayaan ?? []} />
      <NewsSection items={news ?? []} />
      <CtaSection />
    </>
  );
}
