"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { User, Code, Coffee } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-10 sm:px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="text-cyan-400">//</span> TRANSMISSION_ID
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon arsenal de compétences pour construire le futur du web.
          </p>
        </motion.div>
        <div className="flex max-lg:flex-col items-center justify-center gap-8">
          <div className="max-w-2xl text-lg text-muted-foreground">
            <p>
              Je suis un architecte du web, un fantôme dans la machine qui
              façonne des expériences numériques. Pour moi, le code n’est pas
              seulement une série d’instructions : c’est une forme d’art, un
              moyen de communication.
            </p>
            <p className="mt-4">
              Inspiré par les mondes de science-fiction et les jeux vidéo, je
              cherche à repousser les limites de l’interaction homme-machine
              pour créer non seulement des sites web, mais des univers
              engageants, intuitifs et accessibles.
            </p>

            <div className="mt-6 space-y-4 text-red-400">
              <div className="flex items-center space-x-2">
                <User />
                <span>Approche humaine</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee />
                <span>Propulsé au thé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code />
                <span>Code élégant</span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57"
              alt="About Image"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
