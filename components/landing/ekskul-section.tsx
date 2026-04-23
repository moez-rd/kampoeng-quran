"use client";

import { easeOut, staggerContainer } from "@/lib/animations";
import { CircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const ekskul = [
  { label: "Panahan", icon: "🏹" },
  { label: "Bela Diri", icon: "🥋" },
  { label: "Futsal", icon: "⚽" },
  { label: "Tenis Meja", icon: "🏓" },
  { label: "Ilmu Kemasyarakatan", icon: "🤝" },
  { label: "Nasyid/Hadrah", icon: "🎵" },
  { label: "Tilawah Mujawwad", icon: "📖" },
  { label: "Public Speaking/Muhadharah", icon: "🎤" },
];

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export function EkskulSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ekstrakurikuler">
      <div className="mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="relative h-180 overflow-hidden bg-black"
        >
          {/* Background image */}
          <Image
            src="/school2.jpg"
            alt="Ekstrakurikuler Kampoeng Qur'an"
            fill
            className="object-cover object-center"
          />

          {/* Dark green overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-[oklch(0.15_0.12_145/0.98)] via-[oklch(0.15_0.12_145/0.90)] to-[oklch(0.15_0.12_145/0.75)]"
          />

          {/* Content layer */}
          <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-7xl px-6 py-20 lg:px-10">
            <div className="flex h-full flex-col justify-between gap-20 lg:flex-row lg:items-center">
              {/* Left — heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOut }}
                className="shrink-0"
              >
                <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
                  Kegiatan &amp; Minat
                </span>
                <h2 className="font-heading mt-3 text-3xl font-medium text-white sm:text-5xl">
                  Ekstrakurikuler
                </h2>
                <p className="mt-4 max-w-xs text-base text-white/50">
                  Berbagai kegiatan untuk mengembangkan bakat dan potensi santri
                  secara menyeluruh.
                </p>
              </motion.div>

              {/* Right — chip list */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap items-center gap-x-6 gap-y-4"
              >
                {ekskul.map((e, i) => (
                  <motion.div
                    key={i}
                    variants={chipVariants}
                    className="flex items-center gap-6"
                  >
                    <span className="text-2xl font-light text-white">
                      {e.label}
                    </span>
                    {i < ekskul.length - 1 && (
                      <HugeiconsIcon
                        icon={CircleIcon}
                        size={14}
                        strokeWidth={2}
                        className="shrink-0 text-white/70"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
