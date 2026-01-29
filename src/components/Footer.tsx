"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[140px]" />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-3">

        {/* BRAND */}
        <div className="text-center md:text-left">
          <div className="mx-auto md:mx-0 mb-5 w-50 h-40 relative">
            <Image
              src="/WW2.PNG"
              alt="Wealth Wisdom Logo"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-white font-extrabold text-xl">
            Wealth Wisdom Trading Academy
          </h3>

          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            Learn. Trade. Grow.  
            Empowering traders with real market knowledge and discipline.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center">
          <h4 className="text-white font-semibold mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#hero" className="hover:text-emerald-400 transition">Home</a></li>
            <li><a href="#features" className="hover:text-emerald-400 transition">Why Us</a></li>
            <li><a href="#courses" className="hover:text-emerald-400 transition">Courses</a></li>
            <li><a href="#testimonials" className="hover:text-emerald-400 transition">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-emerald-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-center md:text-right">
          <h4 className="text-white font-semibold mb-6">
            Contact
          </h4>

          <p className="text-sm">📞 +91 XXXXXXXX</p>
          <p className="mt-2 text-sm">✉️ contact@wealthwisdom.com</p>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex justify-center md:justify-end gap-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                className="p-3 rounded-full border border-white/10
                hover:border-emerald-400 hover:text-emerald-400
                hover:shadow-[0_0_18px_rgba(16,185,129,0.45)]
                transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Wealth Wisdom Trading Academy. All rights reserved.
        </p>

        <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
          Disclaimer: Trading in stock markets involves risk. Past performance does not guarantee future results.
        </p>

        {/* BUILDER CREDIT */}
        <p className="mt-6 text-xs text-gray-500">
          Designed & Developed by{" "}
          <span className="text-emerald-400 font-semibold">
            CodewithAshX
          </span>
        </p>
      </div>
    </footer>
  );
}
