"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Globe, Cpu, Shield } from "lucide-react";
import { containerVariants, itemVariants } from "../../lib/variants";

const packages = [
  {
    icon: Zap,
    tag: "⚡ Essentiel",
    price: "500 €",
    target: "Pour les indépendants et artisans qui veulent exister en ligne",
    features: [
      "Site 1 page (landing page)",
      "Présentation, services, contact, lien de réservation",
      "Design sur mesure, responsive mobile",
      "Déployé et en ligne à la livraison",
      "Nom de domaine conseillé et configuré",
    ],
    accent: "text-cyan-400",
    border: "border-cyan-400/30 hover:border-cyan-400/70",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.08)] hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]",
    featured: false,
  },
  {
    icon: Globe,
    tag: "🌐 Vitrine",
    price: "1 000 €",
    target: "Pour les commerces et prestataires avec plusieurs offres",
    features: [
      "Site multi-pages (jusqu'à 7 pages)",
      "Interface d'administration simple (Keystatic CMS)",
      "Le client peut modifier ses textes et tarifs seul",
      "Design sur mesure, responsive mobile",
      "Déployé et en ligne à la livraison",
      "Nom de domaine conseillé et configuré",
    ],
    accent: "text-red-400",
    border: "border-red-500/50 hover:border-red-500",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.12)] hover:shadow-[0_0_50px_rgba(239,68,68,0.25)]",
    featured: true,
  },
  {
    icon: Cpu,
    tag: "⚙️ Sur mesure",
    price: "Devis",
    target: "Pour les besoins fonctionnels spécifiques",
    features: [
      "Application web, PWA, outil métier interne",
      "Développement React / Next.js / Supabase",
      "Fonctionnalités sur mesure selon vos besoins",
      "Tarif établi après un premier échange gratuit",
    ],
    accent: "text-cyan-400",
    border: "border-cyan-400/30 hover:border-cyan-400/70",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.08)] hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]",
    featured: false,
  },
];

const maintenanceOptions = [
  {
    icon: Check,
    title: "Autonomie",
    subtitle: "Inclus",
    features: [
      "Accès complets à votre site",
      "Hébergement Vercel configuré à votre nom",
      "Prise en main incluse à la livraison",
      "Vous gérez votre contenu en toute autonomie",
    ],
  },
  {
    icon: Shield,
    title: "Sérénité",
    subtitle: "35 €/mois",
    features: [
      "Hébergement et nom de domaine inclus",
      "Mises à jour de contenu sur demande",
      "Corrections de bugs incluses",
      "Sans engagement de durée",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="tarifs" className="py-24 section-with-muted-bg w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-10 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="text-cyan-400">{"//"}</span> PACKAGES_DISPONIBLES
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Je conçois et développe des sites vitrines et applications web pour les indépendants et les PME.
            Chaque projet est livré avec un code propre, un déploiement sur mesure, et une prise en main simple.
          </p>
        </motion.div>

        {/* Packages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.tag}
              variants={itemVariants}
              className={`relative rounded-lg border bg-blue-900/10 p-8 flex flex-col gap-6 transition-all duration-300 ${pkg.border} ${pkg.glow}`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-red-500 text-black text-xs font-bold font-heading px-4 py-1 rounded-full uppercase tracking-widest">
                    Populaire
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-800/40 flex items-center justify-center">
                  <pkg.icon className={`w-5 h-5 ${pkg.accent}`} />
                </div>
                <span className={`font-heading font-bold text-lg uppercase tracking-wider ${pkg.accent}`}>
                  {pkg.tag}
                </span>
              </div>

              <div>
                <p className="text-4xl font-bold font-heading text-white">{pkg.price}</p>
                <p className="text-sm text-muted-foreground mt-2">{pkg.target}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.accent}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:edwin.d899@gmail.com"
                className={`mt-2 w-full text-center py-3 rounded-md border font-heading text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
                  pkg.featured
                    ? "bg-red-500 border-red-500 text-black hover:bg-red-400"
                    : "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                }`}
              >
                Démarrer le projet
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold font-heading text-center mb-8">
            <span className="text-cyan-400">{"//"}</span> OPTION_MAINTENANCE
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
            Disponible en complément de chaque package, selon votre niveau d'autonomie souhaité.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {maintenanceOptions.map((opt) => (
              <div
                key={opt.title}
                className="rounded-lg border border-white/10 bg-blue-900/10 p-6 flex flex-col gap-4 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold text-lg uppercase text-white">{opt.title}</span>
                  <span className="text-cyan-400 font-heading font-bold">{opt.subtitle}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          className="mt-16 border border-white/10 rounded-lg bg-blue-900/10 p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold font-heading text-center mb-6">
            <span className="text-cyan-400">{"//"}</span> COMMENT_ÇA_SE_PASSE
          </h3>
          <ol className="flex flex-col gap-4">
            {[
              "Échange initial pour définir vos besoins",
              "Devis envoyé sous 48h",
              "Acompte de 50% au démarrage, solde à la livraison",
              "Délai de livraison : 1 à 3 semaines selon le projet",
              "2 allers-retours de corrections inclus après livraison",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-white/80">
                <span className="font-heading font-bold text-cyan-400 text-lg leading-none w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};
