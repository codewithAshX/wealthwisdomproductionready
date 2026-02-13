"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-6 relative">
      {/* Increased opacity for brand mark for better visibility */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none hidden lg:block">
        <h1 className="text-[20rem] font-black leading-none tracking-tighter text-slate-900">WW</h1>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION - Enhanced border contrast */}
        <div className="grid lg:grid-cols-12 gap-8 border-b border-slate-200 pb-16 mb-16">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-700 font-mono text-[11px] font-bold tracking-[0.5em] uppercase mb-6 block"
            >
              Contact / Inquiry
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-slate-900 leading-[0.8] mb-8">
              Open a <br />
              <span className="italic font-serif text-emerald-600">Position.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end lg:text-right">
            {/* Darkened text for better readability */}
            <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em] leading-relaxed max-w-[240px] lg:ml-auto">
              Institutional grade support for retail evolution. We operate during NSE/BSE market hours.
            </p>
          </div>
        </div>

        {/* Enhanced Grid Contrast */}
        <div className="grid lg:grid-cols-12 gap-0 border-x border-slate-200 border-t border-slate-200">
          
          {/* THE FORM (LEFT) */}
          <div className="lg:col-span-7 p-8 md:p-16 border-r border-slate-200">
            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-2 block">01. Identity</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-slate-300 py-4 outline-none focus:border-emerald-600 transition-all font-medium text-xl text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-2 block">02. Gateway</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-slate-300 py-4 outline-none focus:border-emerald-600 transition-all font-medium text-xl text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-2 block">03. Objective</label>
                <select className="w-full bg-transparent border-b border-slate-300 py-4 outline-none focus:border-emerald-600 transition-all font-medium text-xl text-slate-600 appearance-none cursor-pointer">
                  <option>Select Mentorship Level</option>
                  <option>Foundation (Basics)</option>
                  <option>Institutional Mastery</option>
                  <option>1-on-1 Transformation</option>
                </select>
              </div>

              <div className="relative">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-2 block">04. Narrative</label>
                <textarea 
                  rows={3}
                  placeholder="Your trading history..."
                  className="w-full bg-transparent border-b border-slate-300 py-4 outline-none focus:border-emerald-600 transition-all font-medium text-xl text-slate-900 placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-slate-900 group"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em]">Transmit Inquiry</span>
                <div className="h-px w-24 bg-slate-900 group-hover:w-32 group-hover:bg-emerald-600 transition-all duration-500" />
                <ArrowRight size={18} className="group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </motion.button>
            </form>
          </div>

          {/* THE INFO (RIGHT) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-8 md:p-16 border-b border-slate-200 flex-grow">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-700 font-bold mb-10">Direct Channels</h4>
              
              <div className="space-y-10">
                {[
                  { label: "Voice", val: "+91 98765 43210", icon: <Phone size={16} /> },
                  { label: "Digital", val: "www.wealthwisdom.com", icon: <Mail size={16} /> },
                  { label: "Studio", val: "Chandrapur, Maharashtra", icon: <MapPin size={16} /> }
                ].map((item) => (
                  <div key={item.label} className="group cursor-pointer">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{item.val}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -rotate-45 transition-all text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-16 bg-slate-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 tracking-tighter text-lg">Social Intelligence</h4>
                  <p className="text-xs text-slate-500 font-medium">Daily markups and psychology</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-11 w-11 rounded-full border border-slate-300 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all cursor-pointer text-slate-700">
                    <Instagram size={20} />
                  </div>
                  <div className="h-11 w-11 rounded-full border border-slate-300 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all cursor-pointer text-slate-700">
                    <Twitter size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION - Improved contrast and fixed source */}
        <div className="mt-16 border-b border-slate-200 pb-16">
          <div className="flex items-center gap-3 mb-6">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Live Studio Location</span>
          </div>
          <div className="h-[450px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-300 shadow-inner">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119335.34246830501!2d79.2081395!3d19.9511119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2d04f9810f6e9f%3A0xc619f5a09289133a!2sChandrapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Quick Help Footer */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
           <p className="text-slate-500 text-sm font-medium">© 2026 Wealth Wisdom Academy. All trades involve risk.</p>
           <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-emerald-600 transition-all group">
              <MessageCircle size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">WhatsApp Desk</span>
           </button>
        </div>
      </div>
    </div>
  );
}