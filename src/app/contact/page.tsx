import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#eef7f4] text-gray-900">

        {/* HERO */}
        <section className="py-32 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s Build Your
            <span className="block text-emerald-600">
              Trading Future.
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you're just starting or ready to become consistent,
            our team will guide you toward the right trading path.
          </p>
        </section>

        {/* MAIN CONTACT CARD */}
        <section className="pb-32 px-6">
          <div
            className="
            max-w-6xl
            mx-auto
            grid md:grid-cols-2
            gap-12
            bg-white
            border border-emerald-100
            rounded-3xl
            p-10 md:p-14
            shadow-sm
          "
          >
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-3xl font-bold">
                Speak With Our Team
              </h2>

              <p className="mt-4 text-gray-600">
                Get clarity on courses, mentorship, and the roadmap
                best suited for your trading goals.
              </p>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/91XXXXXXXX"
                className="
                inline-block
                mt-8
                bg-emerald-600
                px-8 py-4
                rounded-full
                font-semibold
                text-white
                hover:bg-emerald-700
                transition
                shadow-sm
                "
              >
                Chat on WhatsApp →
              </a>

              {/* Trust Signals */}
              <div className="mt-10 space-y-3 text-gray-600">
                <p>✔ No spam. Just genuine guidance.</p>
                <p>✔ Talk directly with our support team.</p>
                <p>✔ Beginner-friendly assistance.</p>
              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <div className="bg-[#f8fbfa] rounded-2xl p-8 border border-emerald-100">
              
              <h3 className="text-xl font-semibold mb-6">
                Request a Call Back
              </h3>

              <form className="space-y-4">
                
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                  w-full p-3 rounded-lg
                  bg-white
                  border border-emerald-100
                  focus:border-emerald-500
                  outline-none
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                  w-full p-3 rounded-lg
                  bg-white
                  border border-emerald-100
                  focus:border-emerald-500
                  outline-none
                  "
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                  w-full p-3 rounded-lg
                  bg-white
                  border border-emerald-100
                  focus:border-emerald-500
                  outline-none
                  "
                />

                <button
                  className="
                  w-full
                  mt-4
                  bg-emerald-600
                  py-3
                  rounded-lg
                  font-semibold
                  text-white
                  hover:bg-emerald-700
                  transition
                  "
                >
                  Submit →
                </button>

              </form>

            </div>

          </div>
        </section>

        {/* REASSURANCE */}
        <section className="pb-24 text-center px-6">
          <p className="text-gray-500">
            Trusted by thousands of aspiring traders across India.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}
