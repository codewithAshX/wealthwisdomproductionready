"use client";

import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import AboutUs from "@/components/AboutUs";
import CoursesShowcase from "@/components/CoursesShowcase";
import HowItWorks from "@/components/HowItWorks";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import StatsSuperhero from "@/components/StatsSuperhero";
import TestimonialsSplit from "@/components/TestimonialsSplit";
// import Navbar from "@/components/Header";
// import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* URGENCY BOOST */}
      <Countdown />

      {/* AUTHORITY */}
      <AboutUs />

      {/* PROGRAMS */}
      <CoursesShowcase />

      {/* PROCESS */}
      <HowItWorks />

      {/* TARGET AUDIENCE */}
      <WhoIsThisFor />

      {/* SOCIAL PROOF */}
      <StatsSuperhero />

      {/* TESTIMONIALS */}
      <TestimonialsSplit />

      {/* FAQ — VERY IMPORTANT FOR CONVERSIONS */}
      <FAQ />

      {/* CONTACT CTA */}
      <ContactCTA />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
