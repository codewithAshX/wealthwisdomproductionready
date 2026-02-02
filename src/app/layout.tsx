import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; 
import "./globals.css";
// FIX: Ensure this matches the EXACT capitalization of your file Header.tsx
import Navbar from "@/components/Header"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", 
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wealth Wisdom | Precision Trading Academy",
  description: "Master the institutional price action strategy with professional mentorship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-[#F7FCF9] text-slate-900`}
      >
        {/* The component is named Navbar here but refers to the Header.tsx file */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}