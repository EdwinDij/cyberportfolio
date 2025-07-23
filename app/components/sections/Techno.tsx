import Image from "next/image";
import React from "react";

const technologies = [
  {
    name: "React",
    description:
      "Construction d'interfaces utilisateur réactives et complexes.",
    logo: "/next.svg",
    className: "md:col-span-2",
  },
  {
    name: "TailwindCSS",
    description: "Styling rapide et sur-mesure pour des designs uniques.",
    logo: "/next.svg",
    className: "md:col-span-1",
  },
  {
    name: "Vite",
    description: "Build tool ultra-rapide pour un développement moderne.",
    logo: "/next.svg",
    className: "md:col-span-1",
  },
  {
    name: "Framer Motion",
    description: "Animations fluides et complexes pour une UX vivante.",
    logo: "/next.svg",
    className: "md:col-span-1",
  },
  {
    name: "TypeScript",
    description: "Typage statique pour une meilleure robustesse du code.",
    logo: "/next.svg",
    className: "md:col-span-1",
  },
  {
    name: "Next.js",
    description: "Framework React pour des applications web performantes.",
    logo: "/next.svg",
    className: "md:col-span-2",
  },
];

export const Techno = () => {
  return (
    <section id="technologies" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 ${tech.className}`}
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
