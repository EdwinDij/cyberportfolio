"use client";
import Image from "next/image";
import React from "react";
import { TechnoType } from "../../types";
import { motion } from "framer-motion";

const technologies: TechnoType[] = [
  {
    name: "React",
    description:
      "Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques et maintenables, utilisée par les plus grandes entreprises.",
    logo: "/assets/React.png",
    className: "md:col-span-2",
  },
  {
    name: "TailwindCSS",
    description:
      "Framework CSS utilitaire permettant de créer rapidement des interfaces modernes, personnalisées et responsives.",
    logo: "/assets/tailwindicon.png",
    className: "md:col-span-1",
  },
  {
    name: "CircleCI",
    description:
      "Plateforme d'intégration continue pour automatiser les tests et déploiements en toute confiance.",
    logo: "/assets/circleci.png",
    className: "md:col-span-1",
  },
  {
    name: "Vercel",
    description:
      "Solution de déploiement optimisée pour les applications front-end, avec CDN intégré et CI/CD.",
    logo: "/assets/vercel.svg",
    className: "md:col-span-1",
  },
  {
    name: "TypeScript",
    description:
      "Superset de JavaScript offrant un typage statique pour sécuriser le code et améliorer la productivité à long terme.",
    logo: "/assets/typescript.png",
    className: "md:col-span-1",
  },
  {
    name: "Next.js",
    description:
      "Framework React full-stack, conçu pour des applications web rapides, SEO-friendly et scalables.",
    logo: "/assets/nextjsicon.png",
    className: "md:col-span-2",
  },
  {
    name: "Firebase",
    description:
      "Plateforme BaaS de Google facilitant l’authentification, l’hébergement et la gestion de base de données en temps réel.",
    logo: "/assets/firebaseicon.png",
    className: "md:col-span-1",
  },
];


export const Techno = () => {
  return (
    <section id="technologies" className="py-24">
      <div className="container mx-auto px-10 sm:px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="text-cyan-400">//</span> ARSENAL_TECH
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon arsenal de compétences pour construire le futur du web.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`p-6 shadow-lg bg-white dark:bg-gray-800 ${tech.className}  rounded-lg flex flex-col items-center text-center project-card `}
            >
              <Image
              width={64}
              height={64}
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
