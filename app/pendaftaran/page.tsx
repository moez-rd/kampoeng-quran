import type { Metadata } from "next";
import { PendaftaranPage } from "@/components/pendaftaran/pendaftaran-page";
import { client } from "@/lib/sanity";
import { pendaftaranInfoQuery } from "@/lib/sanity/queries";

// Set revalidation time (in seconds) to enable ISR
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Pendaftaran Santri Baru — Kampoeng Quran IBS",
  description:
    "Informasi lengkap pendaftaran santri baru Kampoeng Quran Islamic Boarding School T.A 2026/2027. Jadwal, syarat, biaya, dan cara mendaftar untuk jenjang MTs, MA, dan Tahfizh Intensif.",
};

export default async function Page() {
  const pendaftaranInfo = await client.fetch(pendaftaranInfoQuery);
  return <PendaftaranPage info={pendaftaranInfo} />;
}
