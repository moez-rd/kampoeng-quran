"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import type { Variants } from "motion/react"
import { easeOut, staggerContainer } from "@/lib/animations"

const pengayaan = [
  { icon: "🚌", label: "Kunjungan edukatif / rihlah", note: "2× setahun" },
  { icon: "🇬🇧", label: "English Day" },
  { icon: "🇸🇦", label: "Arabic Day" },
  { icon: "💬", label: "Daily Conversation" },
  { icon: "👥", label: "Mentoring pekanan (BPI)" },
]

const sunnah = [
  { icon: "🕌", label: "Salat berjamaah" },
  { icon: "🌙", label: "Qiyamul lail" },
  { icon: "📿", label: "Salat sunnah rawatib" },
  { icon: "🤲", label: "Puasa sunnah" },
  { icon: "📖", label: "Tilawah surat-surat munjiyat" },
  { icon: "⭐", label: "Amalan sunnah lainnya" },
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

export function PengayaanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="pengayaan-materi" className="bg-[oklch(0.97_0.03_145)] py-24 px-6">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Lebih dari Sekadar Belajar
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Pengayaan Materi
          </h2>
          <p className="mt-4 text-muted-foreground">
            Program penunjang untuk membangun karakter, kecakapan bahasa, dan ketaatan ibadah.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Kegiatan Pengayaan */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOut }}
              className="font-heading mb-6 text-xl font-semibold text-foreground"
            >
              Kegiatan Pengayaan
            </motion.h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-3"
            >
              {pengayaan.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    {item.note && (
                      <p className="text-xs text-muted-foreground">{item.note}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Pembiasaan Sunnah */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOut }}
              className="font-heading mb-6 text-xl font-semibold text-foreground"
            >
              Pembiasaan Sunnah
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-sm text-muted-foreground"
            >
              Ibadah, akhlak, dan zikir harian
            </motion.p>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-3"
            >
              {sunnah.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl">
                    {item.icon}
                  </span>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
