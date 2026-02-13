"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowUpRight, 
  Volume2, VolumeX, 
  GraduationCap, 
  Globe, 
  Zap,
  Play,
  Pause,
  Layers
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ArchitectAbout() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section ref={containerRef} id="about" className="relative overflow-hidden bg-[#F8F9FA] py-20 lg:py-48">
      {/* Background Decorative Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative">
        
        {/* HEADER: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-32">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-[1px] w-12 bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">
                Institutional Legacy // 2026
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-slate-900 leading-[0.85] lg:leading-[0.8]">
              Architecting the <br /> 
              <span className="italic font-serif text-slate-400">Elite</span> Standard.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-slate-500 text-base md:text-sm leading-relaxed max-w-md border-l-2 border-emerald-500/20 pl-6 py-2">
              Wealth Wisdom isn't a curriculum—it's an infrastructure. We provide the mechanical blueprints used by Tier-1 desks to navigate global liquidity.
            </p>
          </div>
        </div>

        {/* VIDEO & STATS CONTAINER */}
        <div className="mb-24 lg:mb-40">
          <motion.div 
            style={{ scale: videoScale, opacity }}
            className="relative group"
          >
            {/* Video Player */}
            <div className="relative aspect-video w-full rounded-2xl lg:rounded-[3rem] overflow-hidden bg-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105"
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>

              {/* Glass Video Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20">
                <div className="flex gap-2 p-1.5 bg-black/20 backdrop-blur-xl rounded-full border border-white/10">
                  <button 
                    onClick={togglePlay}
                    className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
                  </button>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-black/20 backdrop-blur-xl rounded-full border border-white/10">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => <span key={i} className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />)}
                  </div>
                  <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest">
                    Live Stream: 4K Institutional // 60FPS
                  </span>
                </div>
              </div>
            </div>

            {/* STATS: Shifted down to prevent overlap */}
            <div className="relative z-30 mt-12 lg:mt-20 px-4 md:px-12">
              {/* Intentional design "bridge" */}
              <div className="absolute -top-12 lg:-top-20 left-1/2 -translate-x-1/2 w-px h-12 lg:h-20 bg-slate-200 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-100 border border-slate-100">
                {[
                  { val: "5k+", label: "Global Scholars", icon: Globe },
                  { val: "92%", label: "Benchmark Avg", icon: Zap },
                  { val: "10y+", label: "Market Tenure", icon: Layers }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ backgroundColor: "#F8FAFC" }}
                    className="p-8 lg:p-12 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <p className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tighter">{stat.val}</p>
                      <stat.icon size={20} className="text-emerald-500 opacity-60" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER: Feature Focus & Large CTA */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-12">
            <h3 className="text-4xl font-light text-slate-900 tracking-tight leading-tight">
              The methodology is the <br />
              <span className="font-serif italic text-slate-400 underline decoration-emerald-500/20 underline-offset-[12px]">
                Systemic Edge.
              </span>
            </h3>

            <div className="grid gap-10">
              <div className="group flex gap-6">
                <div className="mt-1 h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Zap size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">Liquidity Mapping</h5>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                    Eliminate retail bias. Identify where institutional orders are resting and execute with surgical precision.
                  </p>
                </div>
              </div>

              <div className="group flex gap-6">
                <div className="mt-1 h-12 w-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <Globe size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">Unified Framework</h5>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                    A universal language for global markets, applicable from Equities to FX and Digital Assets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link href="/about-wisdom" className="group block">
            <motion.div 
              whileHover={{ y: -8 }}
              className="relative p-10 lg:p-16 bg-slate-900 rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden text-white transition-shadow hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-emerald-500 rounded-full blur-[80px]" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <GraduationCap size={56} className="text-slate-700 group-hover:text-emerald-400 transition-colors duration-500" />
                  <div className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-emerald-500">
                  Document Alpha.
                </h4>

                <p className="text-3xl md:text-4xl font-light tracking-tight leading-[1.1]">
                  Access the Master <br /> 
                  <span className="text-slate-400">Institutional Dossier.</span>
                </p>
              </div>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}