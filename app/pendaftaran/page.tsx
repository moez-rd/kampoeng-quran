import type { Metadata } from "next";
import { PendaftaranPage } from "@/components/pendaftaran/pendaftaran-page";

export const metadata: Metadata = {
  title: "Pendaftaran Santri Baru — Kampoeng Qur'an IBS",
  description:
    "Informasi lengkap pendaftaran santri baru Kampoeng Qur'an Islamic Boarding School T.A 2026/2027. Jadwal, syarat, biaya, dan cara mendaftar untuk jenjang MTs, MA, dan Tahfizh Intensif.",
};

export default function Page() {
  return <PendaftaranPage />;
}
