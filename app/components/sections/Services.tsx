"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Brush, Shield, Zap } from "lucide-react";
import { Service, ServiceCardProps } from "../../types/";

const services: Service[] = [
  {
    icon: Layers,
    title: "Développement Frontend",
    description:
      "Construction d'interfaces réactives et performantes avec React et Next.js, en créant des expériences utilisateur fluides et mémorables.",
  },
  {
    icon: Brush,
    title: "Design UI/UX",
    description:
      "Conception d'interfaces intuitives et esthétiques. Je transforme des idées complexes en designs épurés qui guident l'utilisateur.",
  },
  {
    icon: Zap,
    title: "Animations & Interactions",
    description:
      "Utilisation de Framer Motion pour donner vie aux applications avec des micro-interactions et des animations qui améliorent l'expérience.",
  },
  {
    icon: Shield,
    title: "Sécurité, Maintenance & Performance",
    description:
      "Mise en place des bonnes pratiques de sécurité, suivi régulier et optimisation des performances pour des applications stables, sûres et rapides.",
  },
];

export const ServiceCard = ({ service, index }: ServiceCardProps) => (
  <motion.div
    className="project-card p-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="project-card-glow"></div>
    <div className="relative z-10">
      <div className="mb-4">
        <service.icon className="w-10 h-10 text-red-500" />
      </div>
      <h3 className="text-2xl font-bold font-heading text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground">{service.description}</p>
    </div>
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className="py-24 section-with-muted-bg">
      <div className="container mx-auto px-10 sm:px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="text-cyan-400">//</span> PROTOCOLES_OP
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon arsenal de compétences pour construire le futur du web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
