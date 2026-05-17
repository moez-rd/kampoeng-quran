"use client";

import { easeOut, staggerContainer } from "@/lib/animations";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Variants } from "motion/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface PengayaanSectionProps {
  items: Array<{ _id: string; name: string; description?: string }>;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export function PengayaanSection({ items }: PengayaanSectionProps) {
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
            className="flex flex-col divide-y divide-black/10"
          >
            {items?.map((item, i) => (
              <motion.li
                key={item._id}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <div className="flex items-center gap-4 py-4">
                  <span className="bg-primary/10 text-primary flex size-14 shrink-0 items-center justify-center rounded-full">
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      size={28}
                      strokeWidth={1.8}
                    />
                  </span>
                  <div>
                    <p className="text-foreground text-lg font-medium md:text-xl">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.description}
                      </p>
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
