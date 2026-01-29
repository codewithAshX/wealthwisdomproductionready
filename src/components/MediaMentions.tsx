// "use client";

// import { motion } from "framer-motion";

// const media = [
//   { name: "Outlook Money", logo: "/media/outlook.png" },
//   { name: "The Economic Times", logo: "/media/et.png" },
//   { name: "The Times of India", logo: "/media/toi.png" },
//   { name: "Mid-Day", logo: "/media/midday.png" },
// ];

// export default function MediaMentions() {
//   return (
//     <section
//       className="relative py-28 md:py-36 bg-[#020617] text-white overflow-hidden"
//     >
//       {/* glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[140px]" />

//       <div className="max-w-7xl mx-auto px-6 relative">
        
//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
          
//           <p className="uppercase tracking-[0.3em] text-emerald-400 text-sm">
//             Featured Across India
//           </p>

//           <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
//             Recognized By Leading
//             <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
//               Financial Media
//             </span>
//           </h2>

//           <p className="text-gray-400 mt-6 text-lg">
//             Our mission and impact in the trading space have been highlighted
//             by some of India’s most respected publications.
//           </p>
//         </div>

//         {/* LOGO STRIP */}
//         <div className="
//         grid grid-cols-2 md:grid-cols-4
//         gap-10
//         items-center
//         ">
//           {media.map((item, i) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className="
//               group
//               rounded-2xl
//               border border-white/10
//               bg-white/[0.03]
//               backdrop-blur-xl
//               p-8
//               flex items-center justify-center
//               hover:border-emerald-400/40
//               hover:bg-white/[0.06]
//               transition
//               "
//             >
//               <img
//                 src={item.logo}
//                 alt={item.name}
//                 className="
//                 max-h-12
//                 object-contain
//                 grayscale
//                 opacity-70
//                 group-hover:grayscale-0
//                 group-hover:opacity-100
//                 transition
//                 "
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* TRUST LINE */}
//         <div className="text-center mt-20">
//           <p className="text-gray-500">
//             Trusted by thousands of traders across India.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
