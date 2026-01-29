"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home", type: "scroll" },
  { id: "about", label: "About", type: "scroll" },
  { id: "courses", label: "Courses", type: "scroll" },
  { id: "faq", label: "FAQ", type: "scroll" },
  { id: "/gallery", label: "Gallery", type: "route" },
  { id: "/contact", label: "Contact", type: "route" },
];

export default function Navbar() {
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===== Apple Scroll Effect ===== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Prevent background scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* ===== Navigation ===== */
  const handleNavigation = (item: any) => {
    setMenuOpen(false);

    if (item.type === "route") {
      router.push(item.id);
      return;
    }

    const el = document.getElementById(item.id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${item.id}`);
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/95 backdrop-blur-md py-3 border-b border-white/10"
            : "bg-black py-5"
        }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">

          {/* LOGO */}
          <div
            onClick={() => router.push("/")}
            className="cursor-pointer"
          >
            <Image
              src="/WW2.PNG"
              alt="Logo"
              width={300}
              height={100}
              priority
              className={`
                w-auto object-contain
                transition-all duration-300
                ${scrolled ? "h-10" : "h-14"}
              `}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {sections.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="text-sm font-medium text-gray-300 hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => router.push("/contact")}
              className="
              bg-white
              text-black
              px-5 py-2
              rounded-full
              text-sm
              font-semibold
              hover:bg-gray-200
              transition
              "
            >
              Get Started
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <span className="text-white font-semibold text-lg">
                Menu
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center gap-10 flex-1">

              {sections.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="
                  text-white
                  text-2xl
                  font-medium
                  hover:text-gray-300
                  transition
                  "
                >
                  {item.label}
                </button>
              ))}

              {/* Big CTA */}
              <button
                onClick={() => router.push("/contact")}
                className="
                mt-6
                bg-white
                text-black
                px-10 py-4
                rounded-full
                text-lg
                font-semibold
                hover:bg-gray-200
                transition
                "
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
