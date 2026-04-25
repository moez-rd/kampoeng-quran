"use client";

import { easeOut, staggerContainer } from "@/lib/animations";
import {
  AlphabetArabicIcon,
  Bus03Icon,
  MentoringIcon,
  MessageMultiple01Icon,
  Quran01Icon,
  TextIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Variants } from "motion/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type SunnahItem = {
  label: string;
};

type PengayaanItem = {
  icon: IconSvgElement;
  label: string;
  note?: string;
  children?: SunnahItem[][];
};

const pengayaan: PengayaanItem[] = [
  { icon: Bus03Icon, label: "Kunjungan edukatif / rihlah", note: "2× setahun" },
  { icon: TextIcon, label: "English Day" },
  { icon: AlphabetArabicIcon, label: "Arabic Day" },
  { icon: MessageMultiple01Icon, label: "Daily Conversation" },
  { icon: MentoringIcon, label: "Mentoring pekanan (BPI)" },
  {
    icon: Quran01Icon,
    label: "Pembiasaan sunnah",
    children: [
      [
        { label: "Salat berjamaah" },
        { label: "Qiyamul lail" },
        { label: "Salat sunnah rawatib" },
        { label: "Puasa sunnah" },
        { label: "Tilawah surat-surat munjiyat" },
        { label: "Amalan sunnah lainnya" },
      ],
    ],
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export function PengayaanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pengayaan-materi"
      className="relative overflow-hidden bg-linear-to-b px-6 py-28"
    >
      <div
        aria-hidden
        className="bg-primary/8 pointer-events-none absolute -top-32 left-1/2 h-120 w-120 -translate-x-1/2 rounded-full blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-12 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Lebih dari Sekadar Belajar
          </span>
          <h2 className="font-heading text-foreground mt-3 text-3xl font-medium sm:text-5xl">
            Pengayaan Materi
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Program penunjang untuk membangun karakter, kecakapan bahasa, dan
            ketaatan ibadah.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col divide-y"
          >
            {pengayaan.map((item, i) => (
              <motion.li key={i} variants={itemVariants}>
                <div className="flex items-center gap-4">
                  <span className="bg-primary/10 text-primary my-4 flex size-20 shrink-0 items-center justify-center">
                    <HugeiconsIcon
                      icon={item.icon}
                      size={32}
                      strokeWidth={1.8}
                    />
                  </span>
                  <div>
                    <p className="text-foreground text-lg font-medium md:text-xl">
                      {item.label}
                    </p>
                    {item.note && (
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.note}
                      </p>
                    )}
                    {item.children && (
                      <div className="flex flex-wrap gap-x-2 text-xs md:text-sm">
                        {item.children.flat().map((child, childIndex) => (
                          <span
                            key={childIndex}
                            className="flex items-center gap-2"
                          >
                            {childIndex > 0 && (
                              <span className="text-muted-foreground/60">
                                /
                              </span>
                            )}
                            <span>{child.label}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
