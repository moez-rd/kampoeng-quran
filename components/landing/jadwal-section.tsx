"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import type { Variants } from "motion/react";
import { easeOut, staggerContainerSlow } from "@/lib/animations";

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
      { key: "Tes", value: "Ahad, 25 Januari 2026" },
      { key: "Pengumuman", value: "Ahad, 1 Februari 2026" },
    ],
  },
  {
    label: "Gelombang 2",
    color: "bg-[oklch(0.55_0.13_175)]",
    badgeColor: "bg-[oklch(0.55_0.13_175/0.1)] text-[oklch(0.40_0.13_175)]",
    rows: [
      { key: "Pendaftaran", value: "27 Januari – 25 April 2026" },
      { key: "Tes", value: "Ahad, 27 April 2026" },
      { key: "Pengumuman", value: "Ahad, 3 Mei 2026" },
    ],
  },
  {
    label: "Gelombang 3",
    color: "bg-[oklch(0.58_0.11_198)]",
    badgeColor: "bg-[oklch(0.58_0.11_198/0.1)] text-[oklch(0.40_0.11_198)]",
    rows: [
      { key: "Pendaftaran", value: "29 April – 3 Juli 2026" },
      { key: "Tes", value: "Ahad, 5 Juli 2026" },
      { key: "Pengumuman", value: "Selasa, 7 Juli 2026" },
    ],
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function JadwalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="jadwal-pendaftaran" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Informasi Penting
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Jadwal Pendaftaran
          </h2>
          <p className="mt-4 text-muted-foreground">
            Penerimaan Peserta Didik / Santri Baru T.A 2026/2027
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-3"
        >
          {waves.map((wave, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
            >
              <div className={`${wave.color} h-1.5 w-full`} />
              <div className="p-6">
                <span
                  className={`inline-block  px-3 py-1 text-xs font-bold ${wave.badgeColor}`}
                >
                  {wave.label}
                </span>
                <dl className="mt-4 flex flex-col gap-3">
                  {wave.rows.map((row, j) => (
                    <div key={j} className="flex flex-col gap-0.5">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {row.key}
                      </dt>
                      <dd className="text-sm font-medium text-foreground">
                        {row.value}
                      </dd>
                      {row.note && (
                        <dd className="text-xs text-muted-foreground">
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

        {/* Daftar Ulang & Masuk */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
          className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6"
        >
          <h3 className="font-heading mb-4 text-lg font-semibold text-foreground">
            Daftar Ulang & Masuk Santri Baru
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Daftar Ulang Gel. 1 & 2
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                1 Maret 2026 – 1 Juli 2026
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Daftar Ulang Gel. 3
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                7 Juli 2026 – 12 Juli 2026
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Masuk Santri Baru
              </p>
              <p className="mt-1 text-sm font-bold text-primary">
                Ahad, 12 Juli 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
