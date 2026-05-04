"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building2, ShieldCheck, Zap, ChevronDown, Sparkles } from "lucide-react";

export default function CinematicHero() {
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.9, ease: [0.21, 1.02, 0.49, 1.03] }
    })
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0c]">
      
      {/* NAVIGATION HEADER */}
{/* FLOATING PROPERTY CARDS
<div className="absolute inset-0 z-10 pointer-events-none"> */}

  {/* Card 1 */}
  {/* <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="absolute top-[25%] left-[8%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-[220px] shadow-xl" */}
  {/* >
    <span className="text-amber-400 text-xs uppercase tracking-widest">Luxury Villa</span>
    <h3 className="text-white text-lg font-semibold mt-1">₹2.4 Cr</h3>
    <p className="text-white/50 text-xs">Chandrapur Premium Zone</p>
  </motion.div> */}

  {/* Card 2 */}
  {/* <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
    className="absolute bottom-[20%] left-[12%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-[200px] shadow-xl"
  >
    <span className="text-amber-400 text-xs uppercase tracking-widest">Apartments</span>
    <h3 className="text-white text-lg font-semibold mt-1">₹85L+</h3>
    <p className="text-white/50 text-xs">Modern Living</p>
  </motion.div> */}

  {/* Card 3 */}
  {/* <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
    className="absolute top-[30%] right-[8%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-[220px] shadow-xl" */}
  {/* >
    <span className="text-amber-400 text-xs uppercase tracking-widest">Plots</span>
    <h3 className="text-white text-lg font-semibold mt-1">₹45L+</h3>
    <p className="text-white/50 text-xs">Investment Ready</p>
  </motion.div>

</div> */}

      {/* BACKGROUND LAYER - Cinematic Urban Scenery */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="relative w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic Real Estate"
            className="w-full h-full object-cover brightness-[0.45] contrast-[1.1]"
          />
        </motion.div>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0c]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* PREMIUM TAG */}
        {/* <motion.div
          variants={fadeInUp} initial="hidden" animate="visible" custom={0}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span className="text-[9px] font-bold text-amber-200 tracking-[0.3em] uppercase">The Pinnacle of Bangalore Living</span>
        </motion.div> */}

        {/* MAIN HEADING */}
        <motion.h1 
            variants={fadeInUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl sm:text-7xl md:text-[90px] font-serif font-medium text-white mb-10 leading-[1] tracking-tight"
        >
          Discover Your <span className="italic text-amber-400">Grand</span> <br />
          Heritage in <span className="relative inline-block">
            Chandrapur
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none"><path d="M5 15C100 5 200 5 295 15" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/></svg>
          </span>
        </motion.h1>

        {/* SEARCH PORTAL - Glassmorphism UI */}
        <motion.div 
          variants={fadeInUp} initial="hidden" animate="visible" custom={2}
          className="w-full max-w-4xl bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex-1 flex items-center px-8 py-4 border-b md:border-b-0 md:border-r border-white/10 w-full group cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-1">Status</span>
              <div className="flex items-center gap-2 text-white font-medium">
                Buy Properties <ChevronDown className="w-4 h-4 text-white/40" />
              </div>
            </div>
          </div>
          
          <div className="flex-[2] flex items-center px-8 py-4 w-full">
            <div className="flex flex-col items-start w-full">
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-1">Location</span>
              <input 
                type="text" 
                placeholder="Search by Area (Indiranagar, Whitefield...)" 
                className="bg-transparent w-full outline-none text-white placeholder:text-white/30 text-base font-light"
              />
            </div>
          </div>

          <button className="w-full md:w-auto px-12 py-5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl md:rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 group">
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="uppercase tracking-widest text-sm">Find Property</span>
          </button>
        </motion.div>

        {/* METRICS */}
        <motion.div 
          variants={fadeInUp} initial="hidden" animate="visible" custom={3}
          className="mt-20 flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold"
        >
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-500/50" />
            <span>RERA Certified</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Building2 className="w-6 h-6 text-white/50" />
            <span>Premium Projects</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-500/50" />
            <span>Prime Locations</span>
          </div>
        </motion.div>
      </div>

      {/* WHATSAPP FLOAT */}
      <motion.button 
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-10 right-10 z-50 p-5 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all group"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Chat with us</span>
      </motion.button>
    </section>
  );
}