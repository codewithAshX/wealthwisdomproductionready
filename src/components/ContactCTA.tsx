"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F7FCF9] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[10px] font-bold tracking-[0.3em] text-emerald-700 uppercase"
          >
            Get In Touch
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.9]">
            Let’s Talk <br />
            <span className="text-emerald-600">Trading.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* CONTACT FORM CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-emerald-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-[#F7FCF9] border border-emerald-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-semibold text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full bg-[#F7FCF9] border border-emerald-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-semibold text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Interested In</label>
                <div className="relative">
                  <select className="w-full bg-[#F7FCF9] border border-emerald-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-semibold text-slate-900 appearance-none cursor-pointer">
                    <option className="text-slate-900">Beginner Course</option>
                    <option className="text-slate-900">Pro Trader Program</option>
                    <option className="text-slate-900">1-on-1 Mentorship</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your trading journey..."
                  className="w-full bg-[#F7FCF9] border border-emerald-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-semibold text-slate-900 placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-600 text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl shadow-xl shadow-emerald-200 flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* INFO & MAP SECTION */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid gap-4"
            >
              {[
                { icon: <Phone size={20} />, label: "Call Us", val: "+91 98765 43210" },
                { icon: <Mail size={20} />, label: "Email", val: "wealthwisdom@gmail.com" },
                { icon: <MapPin size={20} />, label: "Visit", val: "Chandrapur, India" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-emerald-100 shadow-sm group hover:border-emerald-500 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900 tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* GOOGLE MAPS EMBED */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden h-[280px] border border-emerald-100 shadow-sm grayscale hover:grayscale-0 transition-all duration-700"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </motion.div>

            {/* WHATSAPP CARD */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer"
            >
              <div>
                <p className="text-emerald-800 font-black text-xl tracking-tight">Need a quick reply?</p>
                <p className="text-emerald-600/70 font-semibold text-sm">Chat with us on WhatsApp for instant help.</p>
              </div>
              <div className="h-14 w-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}