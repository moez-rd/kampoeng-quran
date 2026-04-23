"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import Link from "next/link";
import { easeOut } from "@/lib/animations";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-[oklch(0.97_0.03_145)] px-6 py-24">
      {/* Subtle background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.88_0.08_145/0.4)_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="bg-primary/5 pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Penerimaan Santri Baru 2026/2027
          </span>
          <h2 className="font-heading text-foreground mt-4 text-4xl font-medium sm:text-5xl">
            Titipkan Putra/Putri Anda di Lingkungan Terbaik
          </h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
            Bergabunglah bersama ribuan alumni Kampoeng Qur&apos;an IBS yang
            telah membuktikan keseimbangan antara ilmu agama, akademik, dan
            karakter mulia.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/pendaftaran"
              className="bg-primary hover:bg-primary/90 inline-flex h-12 items-center rounded-lg px-8 text-base font-semibold text-white transition-colors"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="/pendaftaran#jadwal-pendaftaran"
              className="text-foreground border-border hover:bg-primary/5 inline-flex h-12 items-center rounded-lg border px-8 text-base font-semibold transition-colors"
            >
              Lihat Jadwal
            </Link>
          </div>

          <p className="text-muted-foreground mt-6 text-sm">
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-green-500 align-middle" />
            Gelombang 2 masih dibuka hingga 25 April 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
