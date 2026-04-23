"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import type { Variants } from "motion/react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import {
  easeOut,
  staggerContainerFast,
  staggerContainerSlow,
} from "@/lib/animations";

// ─── Data ────────────────────────────────────────────────────────────────────

const waves = [
  {
    label: "Gelombang 1",
    color: "bg-primary",
    badgeColor: "bg-primary/10 text-primary",
    rows: [
      {
        key: "Pendaftaran",
        value: "25 Oktober 2025 – 24 Januari 2026",
        note: "Online / Offline",
      },
      { key: "Tes Seleksi", value: "Ahad, 25 Januari 2026" },
      { key: "Pengumuman", value: "Ahad, 1 Februari 2026" },
    ],
  },
  {
    label: "Gelombang 2",
    color: "bg-[oklch(0.55_0.13_175)]",
    badgeColor: "bg-[oklch(0.55_0.13_175/0.1)] text-[oklch(0.40_0.13_175)]",
    rows: [
      { key: "Pendaftaran", value: "27 Januari – 25 April 2026" },
      { key: "Tes Seleksi", value: "Ahad, 27 April 2026" },
      { key: "Pengumuman", value: "Ahad, 3 Mei 2026" },
    ],
  },
  {
    label: "Gelombang 3",
    color: "bg-[oklch(0.58_0.11_198)]",
    badgeColor: "bg-[oklch(0.58_0.11_198/0.1)] text-[oklch(0.40_0.11_198)]",
    rows: [
      { key: "Pendaftaran", value: "29 April – 3 Juli 2026" },
      { key: "Tes Seleksi", value: "Ahad, 5 Juli 2026" },
      { key: "Pengumuman", value: "Selasa, 7 Juli 2026" },
    ],
  },
];

const syarat = [
  { label: "Membayar biaya pendaftaran" },
  { label: "Mengisi formulir pendaftaran" },
  { label: "Fotokopi kartu keluarga" },
  { label: "Fotokopi akta kelahiran" },
  { label: "Surat keterangan sehat jasmani" },
  { label: "Pas foto 3×4 & 4×6 @5 lembar (MTs/MA)" },
  { label: "Fotokopi surat keterangan NISN" },
  { label: "Fotokopi rapor SD kelas 5–6 (calon MTs)" },
  { label: "Fotokopi rapor SMP/MTs kelas 8–9 (calon MA)" },
];

const steps = [
  {
    step: "01",
    title: "Ambil Formulir",
    desc: "Datang langsung ke sekretariat atau unduh formulir secara online melalui website ini.",
  },
  {
    step: "02",
    title: "Lengkapi Berkas",
    desc: "Siapkan seluruh dokumen persyaratan dan isi formulir pendaftaran dengan lengkap dan benar.",
  },
  {
    step: "03",
    title: "Serahkan Berkas",
    desc: "Kumpulkan berkas ke panitia pendaftaran secara langsung atau kirim via pos/kurir.",
  },
  {
    step: "04",
    title: "Ikuti Tes Seleksi",
    desc: "Calon santri mengikuti tes baca Al-Qur'an, wawancara, dan tes akademik dasar.",
  },
  {
    step: "05",
    title: "Pengumuman",
    desc: "Hasil seleksi diumumkan sesuai jadwal gelombang masing-masing.",
  },
  {
    step: "06",
    title: "Daftar Ulang",
    desc: "Santri yang diterima wajib melakukan daftar ulang sebelum batas waktu yang ditentukan.",
  },
];

const programs = [
  {
    title: "MTs Kampoeng Qur'an IBS",
    jenjang: "Setara SMP",
    badge: "Akreditasi A",
    desc: "Madrasah Tsanawiyah dengan kurikulum terpadu, memadukan pendidikan formal nasional dengan nilai-nilai Al-Qur'an.",
    syaratKhusus: "Lulusan SD/MI sederajat",
  },
  {
    title: "MA Kampoeng Qur'an IBS",
    jenjang: "Setara SMA",
    badge: null,
    desc: "Madrasah Aliyah dengan penekanan pada ilmu syar'i dan sains. Mempersiapkan santri untuk jenjang perguruan tinggi.",
    syaratKhusus: "Lulusan SMP/MTs sederajat",
  },
  {
    title: "Mulazamah / Tahfizh Intensif",
    jenjang: "Program Khusus",
    badge: "Program Khusus",
    desc: "Program intensif untuk penghafal Al-Qur'an dengan bimbingan langsung dari guru hafizh berpengalaman hingga khatam 30 juz.",
    syaratKhusus: "Telah menghafal minimal 1 juz",
  },
];

// ─── Variants ────────────────────────────────────────────────────────────────

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
};

// ─── Section components ───────────────────────────────────────────────────────

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <span className="text-primary text-sm font-semibold tracking-widest uppercase">
        {eyebrow}
      </span>
      <h2 className="font-heading text-foreground mt-3 text-3xl font-medium sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-base">{subtitle}</p>
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function PendaftaranPage() {
  const jadwalRef = useRef(null);
  const stepsRef = useRef(null);
  const syaratRef = useRef(null);
  const programRef = useRef(null);
  const kontakRef = useRef(null);

  const jadwalInView = useInView(jadwalRef, { once: true, margin: "-80px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  const syaratInView = useInView(syaratRef, { once: true, margin: "-80px" });
  const programInView = useInView(programRef, { once: true, margin: "-80px" });
  const kontakInView = useInView(kontakRef, { once: true, margin: "-80px" });

  return (
    <div className="flex min-h-screen flex-col">
      {/* ── Fixed Navbar ── */}
      <header className="fixed top-0 z-50 w-full">
        <Navbar alwaysOpaque />
      </header>

      {/* ── Hero banner ── */}
      <section className="relative flex h-72 items-end overflow-hidden bg-[oklch(0.18_0.06_145)] pt-16 sm:h-80">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.35_0.12_145/0.4)_0%,transparent_60%)]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <p className="text-primary mb-2 text-sm font-semibold tracking-widest uppercase">
              Tahun Ajaran 2026/2027
            </p>
            <h1 className="font-heading text-4xl font-medium text-white sm:text-5xl">
              Pendaftaran Santri Baru
            </h1>
            <p className="mt-3 text-lg text-white/70">
              Pondok Pesantren Kampoeng Qur&apos;an IBS — Ancol Tanjung Atap,
              Ogan Ilir
            </p>
          </motion.div>
        </div>

        {/* Breadcrumb */}
        <div className="absolute right-0 bottom-4 left-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <nav className="flex items-center gap-2 text-xs text-white/50">
              <Link href="/" className="transition-colors hover:text-white/80">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-white/80">Pendaftaran</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ── Program ── */}
      <section className="bg-[oklch(0.97_0.03_145)] px-6 py-20">
        <div className="mx-auto max-w-7xl" ref={programRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={programInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <SectionHeading
              eyebrow="Pilih Jenjang"
              title="Program yang Tersedia"
              subtitle="Tersedia tiga program pendidikan unggulan yang dapat Anda pilih sesuai kebutuhan."
            />
          </motion.div>
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate={programInView ? "visible" : "hidden"}
            className="grid gap-6 sm:grid-cols-3"
          >
            {programs.map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border-border flex flex-col rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      {p.jenjang}
                    </p>
                    <h3 className="font-heading text-foreground mt-1 text-lg leading-snug font-semibold">
                      {p.title}
                    </h3>
                  </div>
                  {p.badge && (
                    <span className="bg-primary/10 text-primary shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                  {p.desc}
                </p>
                <div className="border-border border-t pt-4">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Syarat Utama
                  </p>
                  <p className="text-foreground mt-1 text-sm font-medium">
                    {p.syaratKhusus}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Jadwal ── */}
      <section id="jadwal-pendaftaran" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl" ref={jadwalRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={jadwalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <SectionHeading
              eyebrow="Informasi Penting"
              title="Jadwal Pendaftaran"
              subtitle="Penerimaan Peserta Didik / Santri Baru T.A 2026/2027"
            />
          </motion.div>

          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate={jadwalInView ? "visible" : "hidden"}
            className="grid gap-6 sm:grid-cols-3"
          >
            {waves.map((wave, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border-border relative overflow-hidden rounded-2xl border bg-white shadow-sm"
              >
                <div className={`${wave.color} h-1.5 w-full`} />
                <div className="p-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${wave.badgeColor}`}
                  >
                    {wave.label}
                  </span>
                  <dl className="mt-4 flex flex-col gap-4">
                    {wave.rows.map((row, j) => (
                      <div key={j}>
                        <dt className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                          {row.key}
                        </dt>
                        <dd className="text-foreground mt-0.5 text-sm font-medium">
                          {row.value}
                        </dd>
                        {row.note && (
                          <dd className="text-muted-foreground text-xs">
                            {row.note}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Daftar ulang box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={jadwalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
            className="border-primary/20 bg-primary/5 mt-8 rounded-2xl border p-6"
          >
            <h3 className="font-heading text-foreground mb-5 text-lg font-semibold">
              Daftar Ulang &amp; Masuk Santri Baru
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Daftar Ulang Gel. 1 &amp; 2
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  1 Maret 2026 – 1 Juli 2026
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Daftar Ulang Gel. 3
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  7 Juli 2026 – 12 Juli 2026
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Masuk Santri Baru
                </p>
                <p className="text-primary mt-1 text-sm font-bold">
                  Ahad, 12 Juli 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Alur Pendaftaran ── */}
      <section className="bg-[oklch(0.97_0.03_145)] px-6 py-20">
        <div className="mx-auto max-w-7xl" ref={stepsRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <SectionHeading
              eyebrow="Cara Mendaftar"
              title="Alur Pendaftaran"
              subtitle="Ikuti langkah-langkah berikut untuk menyelesaikan proses pendaftaran."
            />
          </motion.div>
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border-border flex gap-5 rounded-2xl border bg-white p-6 shadow-sm"
              >
                <span className="text-primary/30 font-heading mt-0.5 shrink-0 text-3xl leading-none font-bold">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-heading text-foreground text-base font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Syarat ── */}
      <section id="syarat-pendaftaran" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl" ref={syaratRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={syaratInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <SectionHeading
              eyebrow="Persyaratan"
              title="Syarat Pendaftaran"
              subtitle="Siapkan dokumen-dokumen berikut sebelum mendaftar."
            />
          </motion.div>
          <motion.ol
            variants={staggerContainerFast}
            initial="hidden"
            animate={syaratInView ? "visible" : "hidden"}
            className="flex flex-col gap-3"
          >
            {syarat.map((item, i) => (
              <motion.li
                key={i}
                variants={slideInLeft}
                className="border-border hover:border-primary/20 flex items-center gap-4 rounded-2xl border bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-foreground text-sm font-medium">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── Kontak & CTA ── */}
      <section id="kontak" className="bg-[oklch(0.18_0.06_145)] px-6 py-20">
        <div className="mx-auto max-w-7xl" ref={kontakRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={kontakInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: easeOut }}
            className="grid gap-12 lg:grid-cols-2"
          >
            {/* Info kontak */}
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Hubungi Kami
              </span>
              <h2 className="font-heading mt-3 text-3xl font-medium text-white sm:text-4xl">
                Ada Pertanyaan?
              </h2>
              <p className="mt-4 text-white/60">
                Panitia penerimaan santri baru siap membantu Anda. Jangan ragu
                untuk menghubungi kami.
              </p>
              <dl className="mt-8 flex flex-col gap-6">
                {[
                  {
                    label: "Sekretariat",
                    value:
                      "Jl. Raya Ancol, Tanjung Atap, Ogan Ilir, Sumatera Selatan",
                  },
                  { label: "WhatsApp", value: "+62 812-XXXX-XXXX" },
                  { label: "Email", value: "info@kampoengquran.ac.id" },
                  {
                    label: "Jam Layanan",
                    value: "Senin – Sabtu, 08.00 – 16.00 WIB",
                  },
                ].map((c) => (
                  <div key={c.label}>
                    <dt className="text-xs font-semibold tracking-wide text-white/40 uppercase">
                      {c.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-white/80">
                      {c.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA card */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <span className="mb-4 inline-block size-2 animate-pulse rounded-full bg-green-400" />
                <h3 className="font-heading text-2xl font-semibold text-white">
                  Pendaftaran Gelombang 2 Masih Dibuka
                </h3>
                <p className="mt-3 text-sm text-white/60">
                  Segera daftarkan putra/putri Anda sebelum 25 April 2026. Kuota
                  terbatas.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/628120000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-colors"
                  >
                    Hubungi via WhatsApp
                  </a>
                  <a
                    href="#jadwal-pendaftaran"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Lihat Jadwal
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-[oklch(0.14_0.05_145)] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-white/30 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Kampoeng Qur&apos;an IBS. Semua hak
            dilindungi.
          </p>
          <Link href="/" className="transition-colors hover:text-white/60">
            ← Kembali ke Beranda
          </Link>
        </div>
      </footer>
    </div>
  );
}
