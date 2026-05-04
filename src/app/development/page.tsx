import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
      <main className="bg-[#050507] text-white">

        {/* HERO IMAGE */}
        <section className="relative h-[70vh]">
          <img
            src={`${project.image}?auto=format&fit=crop&w=1600&q=80`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute bottom-10 left-10">
            <h1 className="text-4xl md:text-6xl font-light">
              {project.title}
            </h1>
            <p className="text-white/60 mt-2">{project.location}</p>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-20 px-6 max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div>
              <h2 className="text-2xl mb-4 text-amber-400">
                Project Overview
              </h2>

              <p className="text-white/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <p className="text-xl text-amber-400 mb-6">
                {project.price}
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-3">
                {project.features.map((f, i) => (
                  <div
                    key={i}
                    className="border border-white/10 px-4 py-2 text-sm text-white/60"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT GALLERY */}
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={`${img}?auto=format&fit=crop&w=600&q=80`}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl mb-4">
            Interested in this project?
          </h2>
          <button className="px-8 py-3 bg-amber-500 text-black rounded-full">
            Enquire Now
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
}