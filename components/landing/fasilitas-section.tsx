"use client";

import { easeOut } from "@/lib/animations";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

const fasilitas = [
  { label: "Gedung Milik Sendiri", note: null, image: "/img/image-1.jpg" },
  { label: "Masjid yang Nyaman", note: null, image: "/img/image-2.jpg" },
  {
    label: "Kelas Representatif",
    note: "Maks. 15 siswa/kelas",
    image: "/img/image-3.jpg",
  },
  {
    label: "Laboratorium IPA",
    note: "Dalam tahap penyelesaian",
    image: "/img/image-4.jpg",
  },
  {
    label: "Laboratorium Komputer",
    note: "Dalam tahap penyelesaian",
    image: "/img/image-5.jpg",
  },
  { label: "Asrama Putra & Putri", note: null, image: "/img/image-6.jpg" },
  { label: "Halaman Bermain", note: null, image: "/img/image-7.jpg" },
  { label: "Lapangan Olahraga", note: null, image: "/img/image-8.jpg" },
  { label: "Kantin", note: null, image: "/img/image-9.jpg" },
  { label: "Gazebo / Saung", note: null, image: "/img/image-10.jpg" },
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
          className="relative h-200 overflow-hidden bg-black md:h-260"
        >
          {/* Background image */}
          <AnimatePresence mode="wait" initial={false}>
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
          <div className="absolute inset-x-0 top-0 mx-auto h-full max-w-7xl px-6 py-20">
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

            <div className="flex h-full w-100 flex-col gap-4 overflow-y-auto md:gap-8">
              {fasilitas.map((f, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={[
                      "group relative flex w-full flex-col items-start px-4 text-left transition-colors duration-200",
                      "before:absolute before:top-0 before:left-0 before:h-full before:w-0.75 before:transition-all before:duration-300",
                      isActive
                        ? "before:bg-white"
                        : "before:bg-transparent hover:text-white",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "text-xl transition-colors duration-200 md:text-3xl",
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
