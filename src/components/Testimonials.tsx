// "use client";

// import { motion } from "framer-motion";
// import { Quote, ArrowRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Riya Sharma",
//     role: "Homeowner",
//     text: "Venula delivered our home exactly as promised — on time, with exceptional craftsmanship.",
//     image: "/testimonials/t1.jpg",
//   },
//   {
//     name: "Aditya Singh",
//     role: "Business Owner",
//     text: "From design to execution, everything was handled seamlessly. Truly professional.",
//     image: "/testimonials/t2.jpg",
//   },
//   {
//     name: "Priya Patel",
//     role: "Investor",
//     text: "Clear communication and quality control made this a stress-free investment experience.",
//     image: "/testimonials/t3.jpg",
//   },
//   {
//     name: "Sanjay Rao",
//     role: "Architect",
//     text: "Their attention to detail and structural discipline is unmatched in the industry.",
//     image: "/testimonials/t4.jpg",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-28 md:py-36 bg-[#020306] text-white relative overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px]" />

//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="mb-20 max-w-2xl">
//           <p className="text-xs tracking-[0.3em] text-indigo-400 uppercase mb-6">
//             Testimonials
//           </p>

//           <h2 className="text-4xl md:text-6xl font-light leading-tight">
//             What Our Clients <br />
//             <span className="italic font-serif text-white/70">
//               Say About Us
//             </span>
//           </h2>

//           <p className="text-white/50 mt-6 text-lg leading-relaxed">
//             Trusted by homeowners, investors, and architects who value precision and quality.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -6 }}
//               className="group bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 rounded-2xl transition-all"
//             >
//               <Quote className="text-white/20 mb-6" size={28} />

//               <p className="text-white/70 text-sm leading-relaxed mb-8">
//                 "{t.text}"
//               </p>

//               <div className="flex items-center gap-3">
//                 <div className="h-10 w-10 rounded-xl overflow-hidden bg-white/10">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition"
//                   />
//                 </div>

//                 <div>
//                   <p className="text-sm font-medium">{t.name}</p>
//                   <p className="text-xs text-white/40">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           whileHover={{ scale: 1.01 }}
//           className="mt-20 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
//         >
//           <div>
//             <h3 className="text-2xl md:text-4xl font-light">
//               Ready to Start Your Project?
//             </h3>
//             <p className="text-white/50 mt-3">
//               Let’s build something exceptional together.
//             </p>
//           </div>

//           <motion.a
//             whileHover={{ x: 5 }}
//             href="/contact"
//             className="flex items-center gap-3 text-sm uppercase tracking-widest text-white"
//           >
//             Get in Touch
//             <ArrowRight size={16} />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }