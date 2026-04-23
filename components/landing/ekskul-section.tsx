"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import type { Variants } from "motion/react";
import { easeOut, staggerContainer } from "@/lib/animations";

const ekskul = [
  { label: "Panahan", icon: "🏹" },
  { label: "Bela Diri", icon: "🥋" },
  { label: "Futsal", icon: "⚽" },
  { label: "Tenis Meja", icon: "🏓" },
  { label: "Ilmu Kemasyarakatan", icon: "🤝" },
  { label: "Nasyid / Hadrah", icon: "🎵" },
  { label: "Tilawah Mujawwad", icon: "📖" },
  { label: "Public Speaking / Muhadharah", icon: "🎤" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function EkskulSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ekstrakurikuler" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Kegiatan & Minat
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Ekstrakurikuler
          </h2>
          <p className="mt-4 text-muted-foreground">
            Berbagai kegiatan untuk mengembangkan bakat dan potensi santri
            secara menyeluruh.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3"
        >
          {ekskul.map((e, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group flex items-center gap-2.5  border border-border bg-[oklch(0.97_0.02_145)] px-5 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm cursor-default"
            >
              <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                {e.icon}
              </span>
              <span className="text-sm font-medium text-foreground">
                {e.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
