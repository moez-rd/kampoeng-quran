import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const loraHeading = Lora({ subsets: ["latin"], variable: "--font-heading" });

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kampoeng Qur'an IBS — Islamic Boarding School",
  description:
    "Pondok Pesantren Kampoeng Qur'an Ancol Tanjung Atap. Penerimaan Santri Baru T.A 2026/2027 untuk jenjang MTs, MA, dan Tahfizh Intensif di Ogan Ilir, Sumatera Selatan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        loraHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
