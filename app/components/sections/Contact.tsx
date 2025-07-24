"use client";
import React from "react";
import { Button } from "../ui/Button";
import { useContact } from "../hooks";
import { Info, Mail, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FeedbackMessage } from "../ui/FeedBackMessage";

export const Contact = () => {
  const {
    description,
    email,
    projectType,
    name,
    setDescription,
    setEmail,
    setProjectType,
    setName,
    sendMessage,
    errorMessage,
  } = useContact();

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 section-with-muted-bg"
    >
      <div className="container mx-auto px-10 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="text-cyan-400 uppercase">//</span> Ligne Sécurisée
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à transmettre un signal ? Connectons nos esprits.
          </p>
        </div>

        <div className="flex gap-10 max-sm:flex-col">
          <form className="max-w-2xl mx-auto space-y-6 w-full" onSubmit={sendMessage}>
            {/* 🟡 Zone Feedback */}
            {errorMessage && (
              <FeedbackMessage
                type={errorMessage.type}
                text={errorMessage.text}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground uppercase"
                >
                  Entreprise // Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Neo Anderson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground uppercase"
                >
                  Adresse // mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="neo@matrix.org"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-muted-foreground uppercase"
              >
                Type de projet // intervention
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="mt-1 w-full appearance-none rounded-md border border-gray-300 bg-gray-900 text-white px-4 py-2 pr-10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="">-- Sélectionner --</option>
                <option value="Création de site web">Création de site web</option>
                <option value="Refonte web">Refonte web</option>
                <option value="Maintenance web">Maintenance web</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground uppercase"
              >
                Message // transmission
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Décrivez votre projet..."
                className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="text-center pt-4 flex">
              <Button
                type="submit"
                className="w-full flex justify-center gap-6 bg-red-500 text-white py-4"
              >
                Transmettre le signal <Send />
              </Button>
            </div>
          </form>

          {/* Bloc info à droite */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-lg  space-y-4">
              <p>
                Contactez-nous pour tout renseignement, demande de devis ou
                simplement pour échanger sur votre projet.
              </p>
              <p>
                Pour toute demande de création de site web une maquette est
                fortement recommandée.
              </p>
              <p>
                Nous vous répondrons dans un délai maximum de 24 heures ouvrées.
              </p>
            </div>
            <div className="bg-blue-900/30 border-l-4 border-red-500/90 p-4 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-5 text-red-500/90 mt-1 flex-shrink-0" />
                <p>
                  Pour information, nous acceptons un nombre limité de projets
                  afin de garantir une qualité optimale pour chacun de nos
                  clients.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-500/90" />
                </div>
                <Link
                  href="mailto:edwin.d899@gmail.com"
                  className="hover:text-red-500/90 transition-colors"
                >
                  edwin.d899@gmail.com
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
