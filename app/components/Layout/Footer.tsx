import React from "react";
import { Linkedin, Globe } from "lucide-react"; // ou icônes custom si tu veux
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border mt-16 border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-white/80 space-y-4">
        {/* Réseaux sociaux */}
        <div className="flex justify-center items-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/edwin-dijeont-1469a0226"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.malt.fr/profile/edwindijeont"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
          >
            Malt
          </Link>
          <Link
            href="https://www.malt.fr/profile/edwindijeont"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
          >
            Github
          </Link>
        </div>

        <p className="font-heading text-sm">
          SYSTEM.SHUTDOWN_SEQUENCE // &copy; {new Date().getFullYear()} Edwin
          Dijeont
        </p>
        <p className="text-xs">
          Conçu avec des 0 et des 1 dans le cyber-espace.
        </p>
      </div>
    </footer>
  );
};
