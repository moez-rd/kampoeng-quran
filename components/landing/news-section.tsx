"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import Image from "next/image"
import { easeOut } from "@/lib/animations"

const news = [
  {
    slug: "penerimaan-santri-baru-2025",
    category: "Pengumuman",
    date: "15 April 2025",
    title: "Penerimaan Santri Baru Tahun Ajaran 2025/2026 Telah Dibuka",
    excerpt:
      "Kampoeng Qur'an IBS membuka pendaftaran santri baru untuk jenjang MTs, MA, dan Program Mulazamah Tahfizh Intensif. Segera daftar sebelum kuota penuh.",
    image: "/hehe.jpg",
  },
  {
    slug: "wisuda-tahfizh-2025",
    category: "Kegiatan",
    date: "3 Maret 2025",
    title: "Wisuda Tahfizh 30 Juz Angkatan ke-7 Berlangsung Khidmat",
    excerpt:
      "Sebanyak 24 santri berhasil mengkhatamkan hafalan 30 juz pada acara Wisuda Tahfizh yang dihadiri orang tua dan tamu undangan dari berbagai daerah.",
    image: "/hehe.jpg",
  },
  {
    slug: "juara-olimpiade-sains-2025",
    category: "Prestasi",
    date: "18 Februari 2025",
    title: "Santri Kampoeng Qur'an Raih Juara 1 Olimpiade Sains Nasional",
    excerpt:
      "Tim santri dari jenjang MA berhasil meraih medali emas pada Olimpiade Sains Nasional bidang Biologi, membuktikan keseimbangan antara ilmu agama dan sains.",
    image: "/hehe.jpg",
  },
]

const categoryColors: Record<string, string> = {
  Pengumuman: "bg-blue-100 text-blue-700",
  Kegiatan: "bg-emerald-100 text-emerald-700",
  Prestasi: "bg-amber-100 text-amber-700",
}

export function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="berita" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-14 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left"
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Terkini dari Kami
            </span>
            <h2 className="font-heading text-foreground mt-3 text-3xl font-medium sm:text-5xl">
              Berita &amp; Kegiatan
            </h2>
          </div>
          <a
            href="/berita"
            className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70 sm:mt-0"
          >
            Lihat semua berita
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: easeOut }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${categoryColors[item.category] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-muted-foreground text-xs">{item.date}</span>
                </div>

                <h3 className="font-heading text-foreground mb-2 text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-5 flex-1 text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                <a
                  href={`/berita/${item.slug}`}
                  className="text-primary inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                >
                  Baca selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
