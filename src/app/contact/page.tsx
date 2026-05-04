import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";
import { ArrowRight } from "lucide-react";

const serif = Playfair_Display({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <>
      <main className="bg-[#050507] text-white">

        {/* HERO */}
        <section className="pt-32 pb-20 px-6 text-center">
          <h1 className={`${serif.className} text-5xl md:text-7xl leading-[1.1]`}>
            Let’s Build <br />
            <span className="italic text-white/70">
              Your Future Investment.
            </span>
          </h1>

          <p className="mt-6 text-white/50 max-w-2xl mx-auto">
            Share your requirements and our team will guide you with the right property and investment plan.
          </p>
        </section>

        {/* FORM BLOCK */}
        <section className="px-6 pb-32">
          <div className="max-w-6xl mx-auto border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2">

            {/* LEFT FORM */}
            <div className="p-10 md:p-14">

              <form className="space-y-10">

                {/* NAME */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-white/40 mb-3">
                    01. FULL NAME
                  </p>
                  <input
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-amber-400 transition"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-white/40 mb-3">
                    02. EMAIL ADDRESS
                  </p>
                  <input
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-amber-400 transition"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-white/40 mb-3">
                    03. PHONE NUMBER
                  </p>
                  <input
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-amber-400 transition"
                  />
                </div>

                {/* PROJECT TYPE */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-white/40 mb-3">
                    04. PROJECT TYPE
                  </p>
                  <select className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-amber-400">
                    <option>Residential Plot</option>
                    <option>Luxury Villa</option>
                    <option>Investment Land</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-white/40 mb-3">
                    05. REQUIREMENTS
                  </p>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-transparent border-b border-white/20 pb-3 outline-none resize-none focus:border-amber-400"
                  />
                </div>

                {/* CTA */}
                <button className="flex items-center gap-6 text-sm tracking-[0.2em] group">
                  SEND INQUIRY
                  <span className="h-px w-24 bg-white/40 group-hover:w-32 transition-all duration-300" />
                  <ArrowRight className="text-white/60 group-hover:translate-x-2 transition" />
                </button>

              </form>
            </div>

            {/* RIGHT INFO PANEL */}
            <div className="border-l border-white/10 p-10 md:p-14 flex flex-col justify-between">

              <div>
                <p className="text-[10px] tracking-[0.3em] text-white/40 mb-10">
                  CONTACT DETAILS
                </p>

                <div className="space-y-8">

                  <div>
                    <p className="text-[10px] text-white/40">PHONE</p>
                    <p className="text-white mt-2">+91 98765 43210</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-white/40">EMAIL</p>
                    <p className="text-white mt-2">hello@venuladevelopers.com</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-white/40">LOCATION</p>
                    <p className="text-white mt-2">Chandrapur, India</p>
                  </div>

                </div>
              </div>

              {/* TRUST */}
              <div className="mt-12">
                <p className="text-white/60 mb-2">Why Choose Venula?</p>
                <p className="text-white/40 text-sm leading-relaxed">
                  Legally clear properties, prime locations, and long-term value.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* FOOTER TEXT */}
        <section className="pb-24 text-center px-6">
          <p className="text-white/40">
            Trusted by investors and homeowners across India.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}