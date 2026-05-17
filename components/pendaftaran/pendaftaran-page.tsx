"use client";

import { buttonVariants } from "@/components/ui/button";
import { formatTanggalSingkat } from "@/lib/format";

export interface PendaftaranInfo {
  tahunAjaran?: string;
  registrationLink?: string;
  jadwalPendaftaran?: Array<{
    gelombang: string;
    tanggalMulai: string;
    tanggalBerakhir: string;
    metodePendaftaran?: string;
    tanggalTesSeleksi: string;
    tanggalPengumuman: string;
  }>;
  jadwalDaftarUlang?: Array<{
    gelombang: string;
    tanggalMulai: string;
    tanggalBerakhir: string;
  }>;
  waktuMasuk?: string;
  syaratPendaftaran?: string[];
}

const waveColors = [
  { color: "bg-primary", badgeColor: "bg-primary/10 text-primary" },
  { color: "bg-[oklch(0.55_0.13_175)]", badgeColor: "bg-[oklch(0.55_0.13_175/0.1)] text-[oklch(0.40_0.13_175)]" },
  { color: "bg-[oklch(0.58_0.11_198)]", badgeColor: "bg-[oklch(0.58_0.11_198/0.1)] text-[oklch(0.40_0.11_198)]" }
];

export function PendaftaranPage({ info }: { info: PendaftaranInfo | null }) {
  const jadwal = info?.jadwalPendaftaran || [];
  const daftarUlang = info?.jadwalDaftarUlang || [];
  const syarat = info?.syaratPendaftaran || [];

  return (
    <div className="space-y-20 bg-white">
      <section className="bg-primary border-primary/30 border-b px-6 pt-32 pb-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            Penerimaan Santri Baru {info?.tahunAjaran && `T.A ${info.tahunAjaran}`}
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
            {jadwal.map((wave, i) => {
              const theme = waveColors[i % waveColors.length];
              return (
                <div
                  key={i}
                  className="border-border relative overflow-hidden rounded-2xl border bg-white shadow-sm"
                >
                  <div className={`${theme.color} h-1.5 w-full`} />
                  <div className="p-6">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${theme.badgeColor}`}
                    >
                      {wave.gelombang}
                    </span>
                    <dl className="mt-4 flex flex-col gap-4">
                      <div>
                        <dt className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                          Pendaftaran {wave.metodePendaftaran ? `(${wave.metodePendaftaran})` : ""}
                        </dt>
                        <dd className="text-foreground mt-0.5 text-sm font-medium">
                          {formatTanggalSingkat(wave.tanggalMulai)} – {formatTanggalSingkat(wave.tanggalBerakhir)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                          Tes
                        </dt>
                        <dd className="text-foreground mt-0.5 text-sm font-medium">
                          {formatTanggalSingkat(wave.tanggalTesSeleksi)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                          Pengumuman
                        </dt>
                        <dd className="text-foreground mt-0.5 text-sm font-medium">
                          {formatTanggalSingkat(wave.tanggalPengumuman)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-primary/20 bg-primary/5 mt-8 rounded-2xl border p-6">
            <h3 className="font-heading text-foreground mb-5 text-lg font-semibold">
              Daftar Ulang
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              {daftarUlang.map((du, i) => (
                <div key={i}>
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {du.gelombang}
                  </p>
                  <p className="text-foreground mt-1 text-sm font-medium">
                    {formatTanggalSingkat(du.tanggalMulai)} – {formatTanggalSingkat(du.tanggalBerakhir)}
                  </p>
                </div>
              ))}
              {info?.waktuMasuk && (
                <div>
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Masuk Santri Baru
                  </p>
                  <p className="text-foreground mt-1 text-sm font-medium">
                    {formatTanggalSingkat(info.waktuMasuk)}
                  </p>
                </div>
              )}
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
                <span className="text-foreground text-sm">{item}</span>
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
            {info?.registrationLink && (
              <a
                href={info.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({ size: "lg", variant: "secondary" })} mt-6`}
              >
                Isi Formulir Pendaftaran
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
