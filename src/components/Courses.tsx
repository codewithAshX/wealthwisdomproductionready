// "use client";

// import { motion } from "framer-motion";
// import { fadeUp, stagger } from "@/lib/animations";

// const courses = [
//   {
//     title: "Online Trading Course",
//     price: "₹999",
//     points: ["Recorded videos", "Live Q&A", "Beginner friendly"],
//   },
//   {
//     title: "Offline Mentorship",
//     price: "₹9,999",
//     points: ["Classroom training", "Live trading", "Personal guidance"],
//   },
//   {
//     title: "Premium Group",
//     price: "₹2,999",
//     points: ["Daily calls", "Premium setups", "Community access"],
//   },
// ];

// export default function Courses() {
//   return (
//     <section id="courses" className="bg-black py-28">
//       <motion.div
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-6"
//       >
//         <motion.h2
//           variants={fadeUp}
//           className="text-3xl font-bold text-center mb-16"
//         >
//           Our Trading Programs
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {courses.map((course) => (
//             <motion.div
//               key={course.title}
//               variants={fadeUp}
//               whileHover={{ scale: 1.05 }}
//               className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center backdrop-blur"
//             >
//               <h3 className="text-xl font-semibold">{course.title}</h3>
//               <p className="text-3xl font-bold mt-4">{course.price}</p>

//               <ul className="mt-6 text-gray-400 space-y-2">
//                 {course.points.map((p) => (
//                   <li key={p}>✔ {p}</li>
//                 ))}
//               </ul>

//               <a
//                 href="https://wa.me/91XXXXXXXX"
//                 className="inline-block mt-8 rounded-full bg-green-500 px-6 py-3 font-semibold text-black"
//               >
//                 Enroll Now
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-28 md:py-36 bg-[#020617] text-white scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Programs Designed For
            <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Serious Traders
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Whether you're just starting out or refining your edge —
            our structured programs guide you toward consistency.
          </p>
        </div>

        {/* ===== FEATURED MENTORSHIP ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          relative
          rounded-3xl
          border border-emerald-400/30
          bg-gradient-to-b from-emerald-500/10 to-transparent
          p-10 md:p-14
          mb-14
          overflow-hidden
          "
        >
          {/* glow */}
          <div className="absolute inset-0 bg-emerald-500/5 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            
            <div>
              <span className="text-emerald-400 font-semibold">
                FLAGSHIP PROGRAM
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mt-3">
                Elite Trading Mentorship
              </h3>

              <p className="text-gray-400 mt-4">
                A high-impact mentorship designed to transform you into a
                disciplined, confident, and system-driven trader.
              </p>

              {/* bullets */}
              <div className="mt-6 space-y-3 text-gray-300">
                <p>✔ Live Market Training</p>
                <p>✔ Institutional-Level Strategies</p>
                <p>✔ Daily Trade Discussions</p>
                <p>✔ Risk Management Framework</p>
                <p>✔ Direct Mentor Access</p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-6">
              
              <div>
                <p className="text-gray-400 line-through text-right">
                  ₹24,999
                </p>
                <p className="text-5xl font-extrabold text-emerald-400">
                  ₹14,999
                </p>
              </div>

              <a
                href="https://wa.me/91XXXXXXXX"
                className="
                rounded-full
                bg-gradient-to-r from-emerald-400 to-green-500
                px-10 py-4
                font-bold
                text-black
                shadow-xl
                hover:scale-105
                transition
                "
              >
                Apply Now →
              </a>

              <span className="text-sm text-gray-500">
                Limited seats. Serious traders only.
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===== SECONDARY COURSES ===== */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {[
            {
              title: "Beginner Foundations",
              desc: "Perfect for new traders who want clarity before risking capital.",
            },
            {
              title: "Options Mastery",
              desc: "Build advanced strategies with structured risk control.",
            },
            {
              title: "Intraday Edge",
              desc: "Develop precision entries and high-probability setups.",
            },
          ].map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="
              rounded-2xl
              border border-white/10
              bg-gradient-to-b from-white/5 to-transparent
              p-8
              hover:border-emerald-400/40
              hover:shadow-[0_0_60px_rgba(16,185,129,0.15)]
              transition-all
              "
            >
              <h4 className="text-xl font-semibold">
                {course.title}
              </h4>

              <p className="text-gray-400 mt-3">
                {course.desc}
              </p>

              <a
                href="https://wa.me/91XXXXXXXX"
                className="inline-block mt-6 text-emerald-400 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
