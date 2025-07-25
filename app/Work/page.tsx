"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { itemVariants } from "../lib";
import { Button } from "../components/ui/Button";
import { useWork } from "../components/hooks";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const { projects, selectedProject, setSelectedProject } = useWork();

  const currentProject = projects.find((p) => p.id === selectedProject);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="relative p-4 sm:p-6 md:p-8"
      >
        <div className="text-center">
          <motion.h1
            className=" max-sm:text-3xl md:text-6xl font-bold font-heading mt-4 max-sm:mt-25"
            variants={itemVariants}
          >
            <span className="glitch-text uppercase" data-text="Project_archive">
              Project_archive
            </span>
          </motion.h1>
          <p className="mt-4 mb-10 text-lg">
            Journal de bord de mes expéditions dans le code. Chaque projet est
            une histoire.
          </p>
        </div>

        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des projets */}
          <div className="project-card px-6 max-sm:pb-9">
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-10 uppercase text-cyan-400">
                // Select_project :
              </h2>
              {projects.map((project) => {
                const isActive = selectedProject === project.id;

                return (
                  <motion.div key={project.id} className="mt-4">
                    <Button
                      onClick={() => setSelectedProject(project.id)}
                      className={` w-full transition-all duration-200 py-3  ${
                        isActive
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : null
                      }`}
                    >
                      {project.title}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <AnimatePresence mode="wait">
            {currentProject && (
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="project-card lg:col-span-2"
              >
                <div className="mt-4 p-6">
                  <Image
                    width={800}
                    height={300}
                    src={currentProject.image ?? "/placeholder.png"}
                    alt={currentProject.title}
                    className="mt-2 rounded "
                  />
                  <h3 className="text-4xl font-semibold text-cyan-400 mt-12 uppercase">
                    project : {currentProject.title}
                  </h3>
                  <p className="text-white/85 mt-6 text-lg">
                    {currentProject.description}
                  </p>
                  <div>
                    <p className="text-white/85 mt-8">
                      <span className="text-cyan-400 text-xl">
                        Technologies :
                      </span>{" "}
                      {currentProject.techno.join(", ")}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-6">
                    <Button>
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir le site web
                      </a>
                    </Button>
                    {currentProject.github && (
                      <Button>
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Voir le projet GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </motion.main>
    </AnimatePresence>
  );
}
