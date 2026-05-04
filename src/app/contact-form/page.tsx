import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactFormComponent from "@/components/ContactFormComponent";

export const metadata: Metadata = {
  title: "Contact Us | Venula Developers",
  description:
    "Get in touch with our team to learn more about our premium real estate projects and investment opportunities.",
};

export default function ContactFormPage() {
  return (
    <>
      <ContactFormComponent />
      <Footer />
    </>
  );
}
