import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";

// Defer heavier sections to the client to improve initial server render and hydration.
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const CoursesShowcase = dynamic(() => import("@/components/CoursesShowcase"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const WhoIsThisFor = dynamic(() => import("@/components/WhoIsThisFor"));
// const StatsSuperhero = dynamic(() => import("@/components/StatsSuperhero"));
const TestimonialsSplit = dynamic(() => import("@/components/TestimonialsSplit"));
const FAQ = dynamic(() => import("@/components/FAQ"));
// const ContactCTA = dynamic(() => import("@/components/ContactCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
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
      {/* <StatsSuperhero /> */}

      {/* TESTIMONIALS */}
      <TestimonialsSplit />

      {/* FAQ — VERY IMPORTANT FOR CONVERSIONS */}
      <FAQ />

      {/* CONTACT CTA */}
      {/* <ContactCTA /> */}

      {/* FOOTER */}
      <Footer />
    </>
  );
}
