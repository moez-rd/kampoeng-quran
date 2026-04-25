import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

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
      <body className="flex min-h-full flex-col">
        <div className="fixed inset-x-0 top-0 z-50">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
