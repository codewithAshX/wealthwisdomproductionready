"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-10 border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <Image
              src="/venula_developers_logo.svg"
              alt="Venula Developers"
              width={140}
              height={50}
            />

            <p className="mt-6 text-yellow-400 text-sm">
              Invest in the golden future
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-yellow-400/40 hover:bg-yellow-400 hover:text-black transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>

            {/* CONTACT */}
            <div className="mt-6 text-sm text-white/60 space-y-2">
              <p>
                Sales Support:{" "}
                <span className="text-white">+91 98765 43210</span>
              </p>
              <p>contact@venuladevelopers.com</p>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h4 className="text-yellow-400 text-sm mb-6 uppercase tracking-widest">
              Featured Projects
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              {[
                "RR Bhoo Vaibhav Garden",
                "RR Terracon Sai Enclave",
                "RR KGS Layout",
                "RR Hillside Meadows",
                "RR SV Farms",
              ].map((item, i) => (
                <li key={i} className="hover:text-yellow-400 cursor-pointer transition">
                  → {item}
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-yellow-400 text-sm mb-6 uppercase tracking-widest">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              {["Properties", "Buyers", "Sellers", "Gallery", "About Us", "Contact Us"].map(
                (item, i) => (
                  <li key={i} className="hover:text-yellow-400 cursor-pointer transition">
                    → {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* MAP */}
          <div>
            <h4 className="text-yellow-400 text-sm mb-6 uppercase tracking-widest">
              Visit Us
            </h4>

            <div className="rounded-xl overflow-hidden border border-yellow-400/20">
              <iframe
                src="https://www.google.com/maps?q=Bangalore&output=embed"
                width="100%"
                height="160"
                loading="lazy"
                className="border-0"
              />
            </div>

            <p className="text-xs text-white/50 mt-2">
              Chandrapur, Maharashtra, India
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px bg-yellow-400/20 mb-6" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">

          <p>© {year} Venula Developers. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-yellow-400 cursor-pointer">Terms and Conditions</span>
            <span className="hover:text-yellow-400 cursor-pointer">Privacy Policy</span>
          </div>

          <p>
            Designed & Developed by{" "}
            <span className="text-yellow-400">CodewithAshX</span>
          </p>

        </div>
      </div>
    </footer>
  );
}