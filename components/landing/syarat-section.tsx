"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import type { Variants } from "motion/react";
import { easeOut, staggerContainerFast } from "@/lib/animations";

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

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function SyaratSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="syarat-pendaftaran"
      className="bg-[oklch(0.97_0.03_145)] py-24 px-6"
    >
      <div className="mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Persyaratan
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Syarat Pendaftaran
          </h2>
          <p className="mt-4 text-muted-foreground">
            Siapkan dokumen-dokumen berikut sebelum mendaftar.
          </p>
        </motion.div>

        <motion.ol
          variants={staggerContainerFast}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-3"
        >
          {syarat.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              <span className="flex size-8 shrink-0 items-center justify-center  bg-primary/10 text-sm font-bold text-primary">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
