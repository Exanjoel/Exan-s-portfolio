import { Section } from "lucide-react";
import React, { useState } from "react";
import SectionHead from "../section";
import { motion, AnimatePresence } from "framer-motion";
import projects from "./project";

const ProjectSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <SectionHead title="My Projects" icon={<Section />} />

      <div className="py-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer group rounded-xl overflow-hidden shadow-xl bg-[var(--bg-color)] border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Image */}
            <div className="w-full h-48 md:h-44 lg:h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text content */}
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--text-color)] group-hover:underline">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[var(--text-color)] text-[var(--bg-color)] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-[var(--bg-color)] rounded-xl shadow-lg flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ✖ Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-3 text-[var(--text-color)] hover:text-red-500 text-2xl font-bold z-10"
              >
                ×
              </button>
              {/* Preview Image */}
              <div className="w-full md:w-1/2 h-48 md:h-auto">
                <img
                  src={projects[selectedIndex].image}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>

              {/* Project Detail Info */}
              <div className="w-full md:w-1/2 p-6 space-y-6">
                <h2 className="text-3xl font-bold text-[var(--text-color)]">
                  {projects[selectedIndex].name}
                </h2>

                <p className="text-base text-[var(--text-color)]">
                  {projects[selectedIndex].description}
                </p>

                <div className="space-y-4">
                  {projects[selectedIndex].category === "design" ? (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[var(--text-color2)]">
                        Tools
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {projects[selectedIndex].tools?.map((tool, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 bg-[var(--bg-color)] text-[var(--text-color)] px-3 py-1 rounded-full shadow-sm hover:scale-105 transition"
                          >
                            {tool.icon && (
                              <img
                                src={tool.icon}
                                alt={`${tool.name} icon`}
                                className="w-5 h-5 object-contain"
                              />
                            )}
                            <span className="text-sm font-medium">
                              {tool.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ["frontend", "backend", "database"].map((type) => (
                      <div key={type}>
                        <h3 className="text-lg font-semibold mb-2 text-[var(--text-color2)]">
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {projects[selectedIndex][type]?.map((tech, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 bg-[var(--bg-color)] text-[var(--text-color)] px-3 py-1 border border-gray-700 rounded-full hover:scale-105 transition"
                            >
                              {tech.icon && (
                                <img
                                  src={tech.icon}
                                  alt={`${tech.name} icon`}
                                  className="w-5 h-5 object-contain"
                                />
                              )}
                              <span className="text-sm font-medium">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <a
                  href={projects[selectedIndex].repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 font-medium underline hover:text-blue-600"
                >
                  View Repository →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectSection;
