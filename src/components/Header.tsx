"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const sections = [
  { id: "hero", label: "Home", route: "/" },
  { id: "about", label: "Legacy", route: "/#about" },
  { id: "projects", label: "Developments", route: "/development" },
  { id: "services", label: "Expertise", route: "/#services" },
  { id: "contact", label: "Contact", route: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        setActiveSection(section.id);
        break;
      }
    }
  });

  const handleNavigation = (item: (typeof sections)[0]) => {
    setMenuOpen(false);

    if (item.route?.startsWith("/#")) {
      const targetId = item.route.split("#")[1];
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (item.route) {
      router.push(item.route);
    } else {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-10 ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <motion.div
  whileHover={{ scale: 1.05 }}
  onClick={() => router.push("/")}
  className="cursor-pointer flex items-center"
>
  <Image
    src="/venula_developers_logo.svg"
    alt="Venula Developers"
    width={360}   // 🔥 increased
    height={160}   // 🔥 increased
    priority
    className="object-contain h-[60px] md:h-[70px] w-auto"
  />
</motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {sections.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`text-[11px] tracking-[0.25em] uppercase font-semibold transition ${
                  activeSection === item.id
                    ? "text-amber-400"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + MOBILE */}
          <div className="flex items-center gap-4">

            {/* CTA */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push("/contact")}
              className="hidden lg:flex items-center gap-2 px-7 py-3 rounded-full bg-amber-500 text-black text-[11px] font-bold tracking-[0.2em] uppercase shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:bg-amber-400 transition"
            >
              Enquire Now <ArrowRight size={14} />
            </motion.button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-3 rounded-full bg-white/10 text-white"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-10 text-center">

              {sections.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-4xl font-light text-white/60 hover:text-white uppercase tracking-wider">
                    {item.label}
                  </span>
                </motion.button>
              ))}

              {/* MOBILE CTA */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/contact");
                }}
                className="mt-6 px-8 py-4 bg-amber-500 text-black rounded-full font-semibold"
              >
                Enquire Now
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}