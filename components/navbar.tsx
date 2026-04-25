"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/pendaftaran", label: "Pendaftaran" },
];

interface NavbarProps {
  /** When true the navbar starts in "scrolled" (opaque) state immediately. */
  alwaysOpaque?: boolean;
}

export function Navbar({ alwaysOpaque = false }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(alwaysOpaque);

  useEffect(() => {
    if (alwaysOpaque) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysOpaque]);

  return (
    <div
      className={[
        "border-b backdrop-blur-xs transition-all duration-300",
        scrolled ? "bg-white" : "border-white/30",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className={[
            "flex flex-col transition-colors duration-300",
            scrolled ? "text-gray-900" : "text-white",
          ].join(" ")}
        >
          <span className="font-heading leading-tight font-semibold tracking-wide">
            Kampoeng Qur&apos;an
          </span>
          <span className="text-xs">Islamic Boarding School</span>
        </Link>

        {/* Nav links + CTA */}
        <nav>
          <ul
            className={[
              "flex items-center gap-4 text-sm font-medium tracking-wide transition-colors duration-300 md:gap-8",
              scrolled ? "text-gray-600" : "text-white/80",
            ].join(" ")}
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "relative pb-0.5 transition-colors duration-200",
                      "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:rounded-full after:transition-all after:duration-300",
                      scrolled
                        ? "after:bg-gray-900 hover:text-gray-900"
                        : "after:bg-white hover:text-white",
                      isActive
                        ? scrolled
                          ? "font-semibold text-gray-900 after:w-full"
                          : "font-semibold text-white after:w-full"
                        : "after:w-0 hover:after:w-full",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
