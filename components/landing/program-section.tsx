"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

import { easeOut } from "@/lib/animations";
import Image from "next/image";

const tabs = [
  {
    value: "mts",
    label: "MTs",
    fullLabel: "MTs Kampoeng Qur'an IBS",
    badge: "Akreditasi A",
    description:
      "Madrasah Tsanawiyah setara SMP dengan kurikulum terpadu, memadukan pendidikan formal nasional dengan nilai-nilai Al-Qur'an dan ilmu agama Islam.",
  },
  {
    value: "ma",
    label: "MA",
    fullLabel: "MA Kampoeng Qur'an IBS",
    badge: null,
    description:
      "Madrasah Aliyah setara SMA dengan penekanan pada ilmu syar'i dan sains. Mempersiapkan santri untuk jenjang perguruan tinggi maupun dunia kerja.",
  },
  {
    value: "tahfizh",
    label: "Mulazamah",
    fullLabel: "Mulazamah/Tahfizh Intensif",
    badge: "Program Khusus",
    description:
      "Program intensif khusus untuk penghafal Al-Qur'an. Santri mendapatkan bimbingan langsung dari guru hafizh berpengalaman hingga khatam 30 juz.",
  },
];

const unggulan = [
  { label: "Tahsin Al-Qur'an", icon: "📖" },
  { label: "Tahfizh 30 Juz", icon: "🌙" },
  { label: "Pengembangan Karakter", icon: "⭐" },
  { label: "STEAM Curriculum", icon: "🔬" },
  { label: "Bahasa Arab & Inggris", icon: "🌐" },
  { label: "Ekstrakurikuler Minat & Bakat", icon: "🎯" },
];

export function ProgramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("mts");

  return (
    <section id="program-pendidikan" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-12 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Apa yang Kami Tawarkan
          </span>
          <h2 className="font-heading text-foreground mt-3 text-3xl font-medium sm:text-5xl">
            Program Pendidikan
          </h2>
          {/* <p className="text-muted-foreground mt-4 text-2xl">
            Tiga jenjang pendidikan formal yang terintegrasi dengan nilai-nilai
            Al-Qur'an.
          </p> */}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        >
          {/* Tab buttons */}
          <div className="mb-10 flex justify-center">
            <div className="border-border flex gap-0 border-b">
              {tabs.map((t) => {
                const isActive = activeTab === t.value;
                return (
                  <button
                    key={t.value}
                    onClick={() => setActiveTab(t.value)}
                    className={[
                      "relative px-10 py-3 text-2xl font-medium transition-colors duration-200",
                      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300",
                      isActive
                        ? "text-primary after:bg-primary after:w-full"
                        : "text-muted-foreground hover:text-foreground hover:after:bg-border after:w-0 hover:after:w-full",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content */}
          <div className="relative min-h-48 lg:min-h-36">
            <AnimatePresence mode="wait">
              {tabs
                .filter((t) => t.value === activeTab)
                .map((t) => (
                  <motion.div
                    key={t.value}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="absolute inset-0 grid gap-10 lg:grid-cols-3 lg:items-start"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-foreground text-5xl font-medium text-balance">
                        {t.fullLabel}
                      </h3>
                      {t.badge && (
                        <span className="bg-primary px-3 py-1 text-xs font-semibold text-balance text-white">
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground col-span-2 text-2xl/9">
                      {t.description}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Program Unggulan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
          className="mt-40"
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col">
              <Image
                alt=""
                src="/hehe.jpg"
                width={400}
                height={400}
                className="h-160 w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-heading text-foreground mb-8 text-3xl font-medium">
                Program Unggulan
              </h3>
              <div className="grid divide-y">
                {unggulan.map((u, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.07,
                      ease: easeOut,
                    }}
                    className="flex items-center gap-4 py-6"
                  >
                    <span className="text-muted-foreground text-xl">
                      {u.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
