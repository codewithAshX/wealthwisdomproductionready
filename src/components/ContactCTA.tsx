// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Instagram,
//   Twitter,
//   MessageCircle,
// } from "lucide-react";

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-[#020306] pt-32 pb-16 px-6 relative">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full" />

//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <div className="grid lg:grid-cols-12 gap-8 border-b border-white/10 pb-16 mb-16">
//           <div className="lg:col-span-8">
//             <span className="text-white/40 text-[11px] font-semibold tracking-[0.4em] uppercase mb-6 block">
//               Contact / Inquiry
//             </span>

//             <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-[0.9]">
//               Let’s Build <br />
//               <span className="italic font-serif text-white/70">
//                 Something Exceptional.
//               </span>
//             </h1>
//           </div>

//           <div className="lg:col-span-4 flex flex-col justify-end lg:text-right">
//             <p className="text-white/40 text-xs uppercase tracking-[0.2em] max-w-[260px] lg:ml-auto">
//               Share your vision — we’ll craft a tailored plan.
//             </p>
//           </div>
//         </div>

//         {/* GRID */}
//         <div className="grid lg:grid-cols-12 border border-white/10 rounded-3xl overflow-hidden">

//           {/* FORM */}
//           <div className="lg:col-span-7 p-8 md:p-16 border-r border-white/10 backdrop-blur-xl bg-white/5">
//             <form className="space-y-12">

//               <div className="grid md:grid-cols-2 gap-10">
//                 {["Name", "Email"].map((label, i) => (
//                   <div key={label}>
//                     <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">
//                       0{i + 1}. <span className="text-white">{label}</span>
//                     </label>
//                     <input
//                       type={label === "Email" ? "email" : "text"}
//                       placeholder={label}
//                       className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-indigo-400 transition-all text-white placeholder:text-white/30"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">
//                   03. <span className="text-white">Project Type</span>
//                 </label>
//                 <select className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-indigo-400 text-white">
//                   <option className="bg-black">Select project</option>
//                   <option className="bg-black">Residential</option>
//                   <option className="bg-black">Commercial</option>
//                   <option className="bg-black">Renovation</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">
//                   04. <span className="text-white">Project Brief</span>
//                 </label>
//                 <textarea
//                   rows={3}
//                   placeholder="Tell us about your vision..."
//                   className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-indigo-400 text-white placeholder:text-white/30 resize-none"
//                 />
//               </div>

//               {/* CTA */}
//               <motion.button
//                 whileHover={{ x: 8 }}
//                 className="flex items-center gap-4 group"
//               >
//                 <span className="text-xs uppercase tracking-[0.3em] text-white">
//                   Send Inquiry
//                 </span>

//                 <div className="h-px w-24 bg-white/40 group-hover:w-32 group-hover:bg-indigo-400 transition-all duration-500" />

//                 <ArrowRight className="group-hover:translate-x-1 transition-all" />
//               </motion.button>
//             </form>
//           </div>

//           {/* INFO */}
//           <div className="lg:col-span-5 flex flex-col">

//             <div className="p-8 md:p-16 border-b border-white/10">
//               <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-10">
//                 Contact Info
//               </h4>

//               <div className="space-y-8">
//                 {[
//                   { label: "Phone", val: "+1 555 123 4567", icon: <Phone size={16} /> },
//                   { label: "Email", val: "hello@venula.com", icon: <Mail size={16} /> },
//                   { label: "Location", val: "San Francisco, CA", icon: <MapPin size={16} /> },
//                 ].map((item) => (
//                   <div key={item.label} className="group cursor-pointer">
//                     <p className="text-[10px] text-white/30 uppercase mb-1">
//                       {item.label}
//                     </p>
//                     <div className="flex items-center gap-3">
//                       <span className="text-white group-hover:text-indigo-400 transition">
//                         {item.val}
//                       </span>
//                       <ArrowRight className="opacity-0 group-hover:opacity-100 transition -rotate-45 text-indigo-400" size={14} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* SOCIAL */}
//             <div className="p-8 md:p-16 bg-white/5 backdrop-blur-xl">
//               <h4 className="text-white mb-2">Follow Along</h4>
//               <p className="text-white/40 text-sm mb-6">
//                 Updates & behind the scenes.
//               </p>

//               <div className="flex gap-4">
//                 {[Instagram, Twitter].map((Icon, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -3 }}
//                     className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 cursor-pointer"
//                   >
//                     <Icon size={20} />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MAP */}
//         <div className="mt-16">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="h-2 w-2 bg-indigo-400 rounded-full animate-pulse" />
//             <span className="text-[10px] uppercase tracking-widest text-white/40">
//               Office Location
//             </span>
//           </div>

//           <div className="h-[420px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition duration-700">
//             <iframe
//               title="map"
//               src="https://www.google.com/maps/embed?pb=!1m18!..."
//               className="w-full h-full border-0"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-white/40 text-sm">
//             © 2026 Venula Developers
//           </p>

//           <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition">
//             <MessageCircle size={18} />
//             <span className="text-xs uppercase tracking-widest">
//               Message Desk
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }