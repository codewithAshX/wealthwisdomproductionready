"use client";

import { Playfair_Display } from "next/font/google";
import { ArrowRight } from "lucide-react";

const serif = Playfair_Display({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <section className="bg-[#050507] text-white min-h-screen pt-32 pb-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HERO TEXT */}
        <div className="mb-20">
          <h1 className={`${serif.className} text-5xl md:text-7xl leading-[1.1] text-white`}>
            Let’s Build <br />
            <span className="text-white/70 italic">Something Exceptional.</span>
          </h1>

          <p className="text-white/40 text-xs tracking-[0.2em] mt-6">
            SHARE YOUR VISION — WE’LL CRAFT A TAILORED PLAN.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-16" />

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-2 border border-white/10 rounded-3xl overflow-hidden">

          {/* LEFT FORM */}
          <div className="p-10 md:p-14">

            <form className="space-y-10">

              {/* NAME + EMAIL */}
              <div className="grid md:grid-cols-2 gap-10">

                <div>
                  <p className="text-[10px] tracking-[0.25em] text-white/40 mb-3">
                    01. NAME
                  </p>
                  <input
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white outline-none focus:border-white transition"
                  />
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.25em] text-white/40 mb-3">
                    02. EMAIL
                  </p>
                  <input
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white outline-none focus:border-white transition"
                  />
                </div>

              </div>

              {/* SELECT */}
              <div>
                <p className="text-[10px] tracking-[0.25em] text-white/40 mb-3">
                  03. PROJECT TYPE
                </p>

                <select className="w-full bg-transparent border-b border-white/20 pb-3 text-white outline-none focus:border-white">
                  <option>Select project</option>
                  <option>Luxury Villas</option>
                  <option>Residential Plots</option>
                  <option>Investment Land</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <p className="text-[10px] tracking-[0.25em] text-white/40 mb-3">
                  04. PROJECT BRIEF
                </p>

                <textarea
                  rows={3}
                  placeholder="Tell us about your vision..."
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white outline-none resize-none focus:border-white"
                />
              </div>

              {/* CTA */}
              <button className="flex items-center gap-6 text-sm tracking-[0.2em] text-white group mt-10">
                SEND INQUIRY

                <span className="h-px w-24 bg-white/40 group-hover:w-32 transition-all duration-300" />

                <ArrowRight className="text-white/60 group-hover:translate-x-2 transition" />
              </button>

            </form>
          </div>

          {/* RIGHT PANEL */}
          <div className="border-l border-white/10 p-10 md:p-14 flex flex-col justify-between">

            <div>
              <p className="text-[10px] tracking-[0.25em] text-white/40 mb-10">
                CONTACT INFO
              </p>

              <div className="space-y-8">

                <div>
                  <p className="text-[10px] text-white/40 tracking-widest">PHONE</p>
                  <p className="text-white mt-2">+91 98765 43210</p>
                </div>

                <div>
                  <p className="text-[10px] text-white/40 tracking-widest">EMAIL</p>
                  <p className="text-white mt-2">hello@venuladevelopers.com</p>
                </div>

                <div>
                  <p className="text-[10px] text-white/40 tracking-widest">LOCATION</p>
                  <p className="text-white mt-2">Chandrapur, India</p>
                </div>

              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-12">
              <p className="text-white/60 mb-2">Follow Along</p>
              <p className="text-white/40 text-sm mb-6">
                Updates & behind the scenes.
              </p>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
                  IG
                </div>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white transition">
                  TW
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}