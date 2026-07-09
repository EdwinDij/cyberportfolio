"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Mail",
    value: "edwin.d899@gmail.com",
    href: "mailto:edwin.d899@gmail.com",
    icon: <Mail className="w-6 h-6 text-red-500/90" />,
    description: "Réponse sous 24h ouvrées",
  },
  {
    label: "LinkedIn",
    value: "/in/edwin-dijeont",
    href: "https://www.linkedin.com/in/edwin-dijeont-1469a0226",
    icon: (
      <svg className="w-6 h-6 text-red-500/90" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    description: "Profil professionnel",
  },
  {
    label: "Malt",
    value: "malt.fr/profile/edwindijeont",
    href: "https://www.malt.fr/profile/edwindijeont",
    icon: (
      <svg className="w-6 h-6 text-red-500/90" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.28 3.293a1 1 0 00-1.415 0l-2.17 2.17A8.5 8.5 0 003.5 17.914l-1.207 1.207a1 1 0 101.414 1.414L4.914 19.33A8.5 8.5 0 0019.45 5.62l.537-.537a1 1 0 00-.707-1.79zM12 19a7 7 0 110-14 7 7 0 010 14z" />
      </svg>
    ),
    description: "Disponibilités & devis",
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 section-with-muted-bg"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="text-cyan-400 uppercase">{"//"}</span> Ligne Sécurisée
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à transmettre un signal ? Connectons nos esprits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CONTACT_LINKS.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-8 rounded-lg border border-white/10 bg-blue-900/10 hover:border-red-500/50 hover:bg-blue-900/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-lg text-white uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 break-all">
                    {link.value}
                  </p>
                  <p className="text-xs text-cyan-400/70 mt-2">{link.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
