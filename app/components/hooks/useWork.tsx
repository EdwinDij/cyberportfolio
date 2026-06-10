"use client";
import { useState } from "react";
import { ProjectType } from "../../types";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Bibliotekia",
    description:
      "Votre bibliothèque numérique personnelle. Accédez à des milliers de livres, organisez votre collection et découvrez des titres adaptés à vos goûts.",
    link: "https://www.bibliotekia.fr/",
    techno: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Api ChatGPT",
    ],
    github: "https://github.com/EdwinDij/recommendation",
    image: "/assets/bibliotekia.png",
  },
  {
    id: 2,
    title: "Trimio Edit",
    description: "Site web professionnel pour Trimio, une agence de montage vidéo et prise de vue en drone.",
    link: "https://trimio-eta.vercel.app/",
    techno: ["Next.js", "Tailwind CSS", "TypeScript", "Sendgrid"],
    github: "https://github.com/EdwinDij/trimio",
    image: "/assets/trimio.png",
  },
  {
    id: 3,
    title: "Pupsty",
    description:
      "Rencontrez votre compagnon à quatre pattes parmi des milliers d'élevage de chiens et de chats",
    link: "https://pup-rho.vercel.app/",
    techno: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/EdwinDij/pup",
    image: "/assets/pupsty.png",
  },
  {
    id: 4,
    title: "Rhalgr",
    description:
      "Plateforme communautaire de guides stratégiques pour les raids de Final Fantasy XIV — mécaniques, positionnements et outils visuels pour la communauté francophone.",
    link: "https://rhalgr.vercel.app/",
    techno: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX", "Keystatic"],
    github: "https://github.com/EdwinDij/rhalgr",
    image: "/assets/rhalgr.png",
  },
];

export const useWork = () => {
  const [selectedProject, setSelectedProject] = useState<number>(1);

  return {
    projects,
    selectedProject,
    setSelectedProject,
  };
};
