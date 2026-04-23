"use client";

import { easeOut } from "@/lib/animations";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

const fasilitas = [
  { label: "Gedung Milik Sendiri", note: null, image: "/school.jpg" },
  { label: "Masjid yang Nyaman", note: null, image: "/school2.jpg" },
  {
    label: "Kelas Representatif",
    note: "Maks. 15 siswa/kelas",
    image: "/school.jpg",
  },
  {
    label: "Laboratorium IPA",
    note: "Dalam tahap penyelesaian",
    image: "/school2.jpg",
  },
  {
    label: "Laboratorium Komputer",
    note: "Dalam tahap penyelesaian",
    image: "/school.jpg",
  },
  { label: "Asrama Putra & Putri", note: null, image: "/school2.jpg" },
  { label: "Halaman Bermain", note: null, image: "/school.jpg" },
  { label: "Lapangan Olahraga", note: null, image: "/school2.jpg" },
  { label: "Kantin", note: null, image: "/school.jpg" },
  { label: "Gazebo / Saung", note: null, image: "/school2.jpg" },
];

export function FasilitasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const active = fasilitas[activeIndex];

  return (
    <section id="fasilitas">
      <div className="mx-auto" ref={ref}>
        {/* Full-width image with absolute tab list */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          className="relative h-260 overflow-hidden bg-black"
        >
          {/* Background image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="absolute inset-0"
            >
              <Image
                src={active.image}
                alt={active.label}
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-[oklch(0.18_0.06_145/0.95)] via-[oklch(0.18_0.06_145/0.75)] to-[oklch(0.18_0.06_145/0.45)]"
          />

          {/* Vertical tab list — absolute left */}
          <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-7xl py-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mb-14"
            >
              <span className="text-sm font-semibold tracking-widest text-white uppercase">
                Sarana &amp; Prasarana
              </span>
              <h2 className="font-heading mt-3 text-3xl font-medium text-white sm:text-5xl">
                Fasilitas
              </h2>
            </motion.div>

            <div className="flex h-full w-100 flex-col gap-8 overflow-y-auto">
              {fasilitas.map((f, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={[
                      "group relative flex w-full flex-col items-start px-4 text-left transition-colors duration-200",
                      "before:absolute before:top-0 before:left-0 before:h-full before:w-[3px] before:transition-all before:duration-300",
                      isActive
                        ? "before:bg-white"
                        : "before:bg-transparent hover:text-white",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "text-3xl transition-colors duration-200",
                        isActive
                          ? "text-white"
                          : "text-white/50 group-hover:text-white/80",
                      ].join(" ")}
                    >
                      {f.label}
                    </span>
                    {f.note && (
                      <span className="mt-0.5 text-sm text-white/35">
                        {f.note}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
