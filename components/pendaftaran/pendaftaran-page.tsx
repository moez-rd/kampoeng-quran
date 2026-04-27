"use client";

import { buttonVariants } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const waves = [
  {
    label: "Gelombang 1",
    color: "bg-primary",
    badgeColor: "bg-primary/10 text-primary",
    rows: [
      {
        key: "Pendaftaran (Online/Offline)",
        value: "25 Oktober 2025 – 24 Januari 2026",
      },
      { key: "Tes", value: "Ahad, 25 Januari 2026" },
      { key: "Pengumuman", value: "Ahad, 1 Februari 2026" },
    ],
  },
  {
    label: "Gelombang 2",
    color: "bg-[oklch(0.55_0.13_175)]",
    badgeColor: "bg-[oklch(0.55_0.13_175/0.1)] text-[oklch(0.40_0.13_175)]",
    rows: [
      { key: "Pendaftaran", value: "27 Januari 2026 – 25 April 2026" },
      { key: "Tes", value: "Ahad, 27 April 2026" },
      { key: "Pengumuman", value: "Ahad, 3 Mei 2026" },
    ],
  },
  {
    label: "Gelombang 3",
    color: "bg-[oklch(0.58_0.11_198)]",
    badgeColor: "bg-[oklch(0.58_0.11_198/0.1)] text-[oklch(0.40_0.11_198)]",
    rows: [
      { key: "Pendaftaran", value: "29 April 2026 – 3 Juli 2026" },
      { key: "Tes", value: "Ahad, 5 Juli 2026" },
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
  { label: "Pas foto 3x4 & 4x6 @5 lembar (MTs/MA)" },
  { label: "Fotokopi surat keterangan NISN" },
  { label: "Fotokopi rapor SD kelas 5–6 (calon MTs)" },
  { label: "Fotokopi rapor SMP/MTs kelas 8–9 (calon MA)" },
];

const registrationFormUrl = "https://example.com/form-pendaftaran";

// ─── Main page ────────────────────────────────────────────────────────────────

export function PendaftaranPage() {
  return (
    <div className="space-y-20 bg-white">
      <section className="bg-primary border-primary/30 border-b px-6 pt-32 pb-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            Penerimaan Santri Baru
          </p>
          <h1 className="font-heading mt-2 text-2xl font-medium text-white sm:text-3xl">
            Pendaftaran
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Informasi jadwal pendaftaran dan syarat pendaftaran.
          </p>
        </div>
      </section>

      <section id="jadwal-pendaftaran" className="px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-foreground mb-10 text-3xl font-medium sm:text-4xl">
            Jadwal Pendaftaran
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {waves.map((wave, i) => (
              <div
                key={i}
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
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>

          <div className="border-primary/20 bg-primary/5 mt-8 rounded-2xl border p-6">
            <h3 className="font-heading text-foreground mb-5 text-lg font-semibold">
              Daftar Ulang
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Gelombang 1 &amp; 2
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  1 Maret 2026 – 1 Juli 2026
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Gelombang 3
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  7 Juli 2026 – 12 Juli 2026
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Masuk Santri Baru
                </p>
                <p className="text-foreground mt-1 text-sm font-medium">
                  Ahad, 12 Juli 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="syarat-pendaftaran" className="px-6 pb-20 md:pb-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-foreground mb-10 text-3xl font-medium sm:text-4xl">
            Syarat Pendaftaran
          </h2>
          <ol className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {syarat.map((item, i) => (
              <li key={i} className="flex items-center gap-4 transition-all">
                <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-foreground text-sm">{item.label}</span>
              </li>
            ))}
          </ol>

          <div className="bg-primary mt-12 rounded-3xl p-8 text-white sm:p-10">
            <h3 className="font-heading mt-2 text-2xl font-medium sm:text-3xl">
              Daftar Santri
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              Klik tombol di bawah untuk membuka form pendaftaran online.
            </p>
            <a
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ size: "lg", variant: "secondary" })} mt-6`}
            >
              Isi Formulir Pendaftaran
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
