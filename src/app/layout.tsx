import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";

/* ✅ FONT SYSTEM (CLEAN & PREMIUM) */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* ✅ METADATA */
export const metadata: Metadata = {
  title: "Venula Developers | Construction & Design",
  description:
    "Venula Developers builds modern, resilient spaces with a focus on craftsmanship, clarity, and consistency.",
};

/* ✅ ROOT LAYOUT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#020306] text-white antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}