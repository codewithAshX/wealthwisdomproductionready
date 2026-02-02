import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // High-performance Google Fonts
import "./globals.css";
import Navbar from "@/components/Header";

// Configure fonts to be preloaded and swapped properly
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Prevents invisible text during load
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
        <Navbar />
        {children}
        
        {/* Footer could go here */}
      </body>
    </html>
  );
}