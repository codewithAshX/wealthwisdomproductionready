"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Layers, Calendar } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { projectsData, ProjectSpec } from "@/lib/projectsData";

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectSpec | null>(
    null
  );
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing" | "upcoming">("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.status === filter);

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300";
      case "ongoing":
        return "bg-blue-500/20 text-blue-300";
      case "upcoming":
        return "bg-amber-500/20 text-amber-300";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* FILTER SECTION */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {["all", "completed", "ongoing", "upcoming"].map((status) => (
          <motion.button
            key={status}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(status as any)}
            className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
              filter === status
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/50"
                : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"
            }`}
          >
            {status}
          </motion.button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all h-80 bg-linear-to-br from-slate-900 to-slate-950 hover:shadow-2xl hover:shadow-indigo-500/20">
              {/* BACKGROUND IMAGE */}
              <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* PLACEHOLDER IMAGE BACKGROUND */}
              <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/20 mb-4">
                    {project.title.charAt(0)}
                  </div>
                  <div className="w-32 h-32 bg-linear-to-br from-indigo-500/30 to-purple-500/30 rounded-lg blur-xl mx-auto" />
                </div>
              </div>

              {/* CONTENT OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-between group-hover:from-slate-950 group-hover:via-slate-950/40 transition-all">
                {/* TOP BADGE */}
                <div className="flex justify-between items-start">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize backdrop-blur ${getStatusBadgeColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                  <div className="text-right">
                    <p className="text-white/60 text-xs">Launched</p>
                    <p className="text-white font-bold">{project.year}</p>
                  </div>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="space-y-3 transform group-hover:translate-y-0 transition-all">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-all">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={16} className="text-amber-400" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  {/* INFO PILLS */}
                  <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all">
                    <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs text-slate-300">
                      <Layers size={14} />
                      {project.specifications.floors}
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs text-slate-300">
                      <Calendar size={14} />
                      {project.specifications.completion}
                    </div>
                  </div>

                  {/* CTA BUTTON */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="pt-2 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-all">
                      View Details
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* PROJECT MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
