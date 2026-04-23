"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, easeOut, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const slides = ["/school.jpg", "/school2.jpg"];

const navLinks = [{ href: "/", label: "Beranda" }];

export function HeroSection() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setResetKey((k) => k + 1); // reset the auto-play timer
  }, []);

  const handleNext = useCallback(() => {
    next();
    setResetKey((k) => k + 1); // reset the auto-play timer
  }, [next]);

  // Auto-advance — restarts whenever resetKey changes
  useEffect(() => {
    const timer = setInterval(next, 10 * 1000);
    return () => clearInterval(timer);
  }, [next, resetKey]);

  const handleScrollToJadwal = () => {
    document
      .getElementById("jadwal-pendaftaran")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="relative flex h-200 items-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current]}
            alt={`Slide ${current + 1}`}
            fill
            priority={current === 0}
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-[oklch(0.18_0.06_145/0.90)] via-[oklch(0.18_0.06_145/0.65)] to-[oklch(0.18_0.06_145/0.45)]"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="fixed top-0 z-20 w-full text-white"
      >
        <div className="mx-10 my-4 bg-white/10 p-4">
          <nav className="flex justify-end">
            <ul className="flex items-center gap-10 tracking-wide">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={[
                        "relative pb-0.5 transition-colors duration-200",
                        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-white after:transition-all after:duration-300",
                        isActive
                          ? "font-semibold after:w-full"
                          : "after:w-0 hover:after:w-full",
                      ].join(" ")}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Button
                  id="hero-cta-tentang"
                  variant="outline"
                  size="lg"
                  className="h-12 border-white/40 bg-white/10 px-4 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                  onClick={() =>
                    document
                      .getElementById("kontak")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Penerimaan Santri
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>

      <div className="relative z-10 flex h-full w-full flex-1 flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-460 px-8 lg:px-12 2xl:px-24">
          <div className="max-w-4xl py-32">
            <motion.button
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              onClick={handleScrollToJadwal}
              className="group mb-6 inline-flex cursor-pointer items-center gap-2 border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span className="inline-block size-2 animate-pulse rounded-full bg-green-400" />
              <span>
                Penerimaan Santri Baru Tahun Ajaran 2026/2027. Daftar Sekarang
              </span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-heading text-4xl leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-8xl"
            >
              Kampoeng Qur'an
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
              className="mt-4 text-lg font-light text-green-400 sm:text-2xl"
            >
              Islamic Boarding School
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
              className="text-2xl font-light text-white/90"
            >
              Pondok Pesantren Kampoeng Qur'an Ancol Tanjung Atap
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                id="hero-cta-program"
                variant="default"
                size="lg"
                className="h-12 px-8 text-base"
                onClick={() =>
                  document
                    .getElementById("program-pendidikan")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Lihat Program
              </Button>
              <Button
                id="hero-cta-tentang"
                variant="outline"
                size="lg"
                className="h-12 border-white/40 bg-white/10 px-8 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                onClick={() =>
                  document
                    .getElementById("kontak")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Tentang Kami
              </Button>
            </motion.div>
          </div>
        </div>

        {/* ── Next button — right edge ── */}
        <button
          onClick={handleNext}
          aria-label="Foto berikutnya"
          className="absolute top-1/2 right-6 z-20 flex size-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/25 active:scale-95"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} size={26} strokeWidth={2} />
        </button>

        {/* ── Dot indicators — bottom right ── */}
        <div className="absolute right-8 bottom-20 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
