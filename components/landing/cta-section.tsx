"use client";

import { easeOut } from "@/lib/animations";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import Quran from "../quran";
import RubElHizb from "../rub-el-hizb";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.97_0.03_145)] px-6 py-24">
      {/* Subtle background decorations */}
      <RubElHizb
        className="text-primary/5 pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[70%] w-auto -translate-y-1/2 md:h-[180%]"
        strokeWidth={1}
      />
      <RubElHizb
        className="text-primary/5 pointer-events-none absolute bottom-0 left-0 -z-10 h-[150%] w-auto -translate-x-1/2 translate-y-1/2 md:h-[180%]"
        strokeWidth={1}
      />
      <RubElHizb
        className="text-primary/5 pointer-events-none absolute right-0 bottom-0 -z-10 h-[150%] w-auto translate-x-1/2 translate-y-1/2 md:h-[180%]"
        strokeWidth={1}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.88_0.08_145/0.4)_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="bg-primary/5 pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full blur-3xl"
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
          <h2 className="font-heading text-foreground mt-4 text-2xl font-medium sm:text-5xl">
            Titipkan Putra/Putri Anda di Lingkungan Terbaik
          </h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-xl leading-relaxed md:text-lg">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
