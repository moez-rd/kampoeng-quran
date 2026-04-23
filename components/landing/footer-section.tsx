"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const contacts = [
  {
    name: "Usth. Anisah Muthmainnah, S.Ak.",
    phone: "6289532020180",
    display: "0895-3202-0180",
  },
  {
    name: "Ust. Fatoni Syakir, S.Sos.",
    phone: "6283803780477",
    display: "0838-0378-0477",
  },
  {
    name: "Usth. Rahmi Ramadona, S.Ag.",
    phone: "6283876467579",
    display: "0838-7646-7579",
  },
];

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer id="kontak" className="bg-[oklch(0.18_0.04_145)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20" ref={ref}>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Branding & Alamat */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Kampoeng Qur&apos;an
            </h2>
            <p className="text-sm text-white/60">Islamic Boarding School</p>
            <p className="text-sm text-white/60">
              Pondok Pesantren Kampoeng Qur'an Ancol Tanjung Atap
            </p>

            <div className="mt-6 flex items-start gap-3">
              <address className="max-w-sm text-sm leading-relaxed text-white/80 not-italic">
                Jl. Inpres Dusun 1, Desa Tanjung Atap, Kec. Tanjung Batu, Kab.
                Ogan Ilir, Sumatera Selatan
              </address>
            </div>

            <div className="mt-8 flex flex-col text-xs tracking-wider text-white/40">
              <p>SK Dirjen Kemenag RI Tahun 2022 No. 5100160022</p>
              <p>Di bawah naungan Yayasan Kampoeng Qur'an Ancol Tanjung Atap</p>
              <p>SK Kemenkumham No. AHU-0011668.AH.01.04 Tahun 2022</p>
            </div>
          </motion.div>

          {/* Contact Person */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="font-heading mb-6 text-lg font-semibold text-white">
              Contact Person
            </h3>
            <ul className="flex flex-col divide-y divide-white/25">
              {contacts.map((c, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-4 px-4 py-2"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{c.name}</p>
                    <p className="mt-0.5 text-sm text-white/60">{c.display}</p>
                  </div>
                  <a
                    id={`whatsapp-contact-${i + 1}`}
                    href={`https://wa.me/${c.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1.5 bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/40"
        >
          © {new Date().getFullYear()} Kampoeng Qur'an IBS — Pondok Pesantren
          Kampoeng Qur'an Ancol Tanjung Atap. Semua hak dilindungi.
        </motion.div>
      </div>
    </footer>
  );
}
