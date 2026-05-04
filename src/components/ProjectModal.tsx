"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Zap } from "lucide-react";
import { ProjectSpec } from "@/lib/projectsData";

interface ProjectModalProps {
  project: ProjectSpec | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  const getStatusColor = (status: string) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-linear-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* HEADER */}
            <div className="sticky top-0 bg-linear-to-b from-slate-900 to-slate-900/80 backdrop-blur p-6 flex items-center justify-between border-b border-white/10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-all"
              >
                <X size={24} className="text-white" />
              </motion.button>
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-8">
              {/* DESCRIPTION */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Overview
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* KEY INFO */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={18} className="text-amber-400" />
                    <h4 className="text-sm font-semibold text-white">
                      Project Stats
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span className="text-white font-medium">
                        {project.specifications.area}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Units:</span>
                      <span className="text-white font-medium">
                        {project.specifications.units}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Floors:</span>
                      <span className="text-white font-medium">
                        {project.specifications.floors}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                      <span>Investment:</span>
                      <span className="text-amber-300 font-bold">
                        {project.specifications.investment}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected ROI:</span>
                      <span className="text-green-300 font-bold">
                        {project.specifications.roi}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={18} className="text-blue-400" />
                    <h4 className="text-sm font-semibold text-white">Timeline</h4>
                  </div>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div>
                      <p className="text-white/60 text-xs">Completion:</p>
                      <p className="text-white font-medium">
                        {project.specifications.completion}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Year Launched:</p>
                      <p className="text-white font-medium">{project.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AMENITIES */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Premium Amenities
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.specifications.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3"
                    >
                      <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                      <span className="text-sm text-slate-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MATERIALS */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Construction Materials
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.specifications.materials.map((material, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-sm text-indigo-300"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* HIGHLIGHTS */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Key Highlights
                </h3>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg"
                    >
                      <span className="text-green-400 font-bold mt-1">✓</span>
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all"
                >
                  Request Brochure
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-semibold transition-all"
                >
                  Schedule Tour
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
