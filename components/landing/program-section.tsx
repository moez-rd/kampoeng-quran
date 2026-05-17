"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

import { easeOut } from "@/lib/animations";
import Image from "next/image";
import RubElHizb from "../rub-el-hizb";
import Seal from "../seal";
import { urlFor } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";

interface ProgramSectionProps {
  programs: Array<{
    _id: string;
    shortName: string;
    fullName: string;
    label?: string;
    description?: string;
  }>;
  unggulan: Array<{ _id: string; name: string }>;
  unggulanImage?: { image: SanityImageSource };
}

export function ProgramSection({ programs, unggulan, unggulanImage }: ProgramSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  // Set default active tab safely based on available data
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    if (programs && programs.length > 0 && !activeTab) {
      setActiveTab(programs[0].shortName.toLowerCase());
    }
  }, [programs, activeTab]);

  return (
    <section
      id="program-pendidikan"
      className="relative isolate overflow-hidden bg-white px-6 py-24"
    >
      <RubElHizb
        className="text-primary/5 pointer-events-none absolute top-0 left-0 -z-10 h-[40%] w-auto -translate-x-1/2 -translate-y-1/2 md:h-[80%]"
        strokeWidth={0.8}
      />
      <RubElHizb
        className="text-primary/20 md:text-primary/60 pointer-events-none absolute top-0 left-0 -z-10 h-[30%] w-auto -translate-x-1/2 -translate-y-1/2 md:h-[60%]"
        strokeWidth={1.2}
      />
      <Seal
        className="text-primary/20 md:text-primary/60 pointer-events-none absolute right-0 bottom-0 -z-10 h-[30%] w-auto translate-x-1/2 translate-y-1/2 md:h-[60%]"
        strokeWidth={1.6}
      />
      <Seal
        className="text-primary/5 pointer-events-none absolute right-0 bottom-0 -z-10 h-[20%] w-auto translate-x-1/2 translate-y-1/2 md:h-[40%]"
        strokeWidth={1.2}
      />
      <div className="z-10 mx-auto max-w-7xl" ref={ref}>
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
          <h2 className="font-heading text-foreground text-3xl font-medium sm:text-5xl md:mt-3">
            Program Pendidikan
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          className="relative"
        >
          {/* Tab buttons */}
          <div className="mb-10 flex justify-center">
            <div className="border-border flex gap-0 border-b">
              {programs?.map((t) => {
                const tabValue = t.shortName.toLowerCase();
                const isActive = activeTab === tabValue;
                return (
                  <button
                    key={t._id}
                    onClick={() => setActiveTab(tabValue)}
                    className={[
                      "relative px-10 py-3 text-lg font-medium transition-colors duration-200 md:text-2xl",
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300",
                      isActive
                        ? "text-primary after:bg-primary after:w-full"
                        : "text-muted-foreground hover:text-foreground hover:after:bg-border after:w-0 hover:after:w-full",
                    ].join(" ")}
                  >
                    {t.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content */}
          <div className="relative min-h-48 lg:min-h-36">
            <AnimatePresence mode="wait">
              {programs
                ?.filter((t) => t.shortName.toLowerCase() === activeTab)
                .map((t) => (
                  <motion.div
                    key={t._id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="absolute inset-0 grid gap-6 md:gap-10 lg:grid-cols-3 lg:items-start"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-foreground text-3xl font-medium text-balance md:text-5xl">
                        {t.fullName}
                      </h3>
                      {t.label && (
                        <span className="bg-primary px-3 py-1 text-xs font-semibold text-balance text-white">
                          {t.label}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground col-span-2 text-xl md:text-2xl/9">
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
          className="relative isolate mt-40"
        >
          <div className="relative z-10 grid gap-10 sm:grid-cols-2">
            <div className="relative -mx-6 min-h-80 overflow-hidden sm:mx-0 md:min-h-160">
              {unggulanImage?.image && (
                <Image
                  alt="Program Unggulan"
                  src={urlFor(unggulanImage.image).width(800).url()}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-heading text-foreground mb-8 text-xl font-medium md:text-3xl">
                Program Unggulan
              </h3>
              <div className="grid divide-y-2 divide-black/10">
                {unggulan?.map((u, i) => (
                  <motion.div
                    key={u._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.07,
                      ease: easeOut,
                    }}
                    className="flex items-center gap-4 py-6"
                  >
                    <span className="text-muted-foreground text-lg md:text-xl">
                      {u.name}
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
