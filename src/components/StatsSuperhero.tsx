"use client";

import { motion } from "framer-motion";
import {
  Users,
  Bell,
  Briefcase,
  Download,
  Youtube,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "5 Lakh+",
    label: "Certified GTF Traders",
    color: "bg-orange-100 text-orange-500",
  },
  {
    icon: Bell,
    value: "1.8M+",
    label: "Followers",
    color: "bg-sky-100 text-sky-500",
  },
  {
    icon: Briefcase,
    value: "35+",
    label: "Team",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: Users,
    value: "30K+",
    label: "GTF Trader Community",
    color: "bg-emerald-100 text-emerald-500",
  },
  {
    icon: Youtube,
    value: "70 Lakh+",
    label: "YouTube Subscribers",
    color: "bg-red-100 text-red-500",
  },
  {
    icon: Download,
    value: "5 Lakh+",
    label: "App Downloads",
    color: "bg-purple-100 text-purple-500",
  },
];

export default function StatsSuperhero() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Overwhelming Support From GTF Family
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-emerald-500">
            You Made Us A Superhero
          </h2>
          <div className="mx-auto mt-4 h-1 w-28 bg-emerald-500 rounded-full" />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 rounded-full bg-white px-8 py-5 shadow-lg border border-gray-100"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                >
                  <Icon size={22} />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
