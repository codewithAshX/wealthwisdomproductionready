"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const properties = [
  {
    id: "bhoo-vaibhav",
    title: "RR BHOO VAIBHAV GARDEN",
    location: "Ettakodi Village, Bangalore",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    desc: "Premium villa plots with RERA approval and modern amenities.",
  },
  {
    id: "terracon",
    title: "RR Terracon Sai Enclave",
    location: "Doddaballapura, Bangalore",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    desc: "Residential plotted development in a fast-growing corridor.",
  },
  {
    id: "kgs-layout",
    title: "RR KGS Layout",
    location: "Kanakapura Town",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    desc: "BMRDA & E-Khata approved plotted development.",
  },
];

export default function FeaturedListings() {
  const router = useRouter();

  return (
    <section className="bg-[#0a0a0c] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-light">
            Featured Listing
          </h2>

          <button
            onClick={() => router.push("/properties")}
            className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-80"
          >
            View More
          </button>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden bg-black border border-white/10 group"
            >
              {/* IMAGE */}
              <div className="relative h-[220px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* TAG */}
                <div className="absolute top-4 left-4 bg-amber-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  ONGOING
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin size={14} />
                  {item.location}
                </div>

                <p className="text-white/50 text-sm">
                  {item.desc}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => router.push(`/properties/${item.id}`)}
                  className="mt-4 px-5 py-2 bg-amber-500 text-black rounded-lg text-sm font-semibold hover:bg-amber-400"
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}