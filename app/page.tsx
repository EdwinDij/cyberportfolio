"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Contact, CyberLoader, Techno, Hero, Services, About, Pricing } from "./components";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("hasVisitedHome");

    if (alreadyLoaded) {
      setLoading(false); // ne pas afficher le loader si déjà vu
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedHome", "true");
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <AnimatePresence>{loading && <CyberLoader />}</AnimatePresence>

      {!loading && (
        <main className="relative font-sans min-h-screen w-full overflow-x-hidden">
          <div className="flex flex-col gap-16 items-center w-full">
            <Hero />
            <Services />
            <Techno />
            <About />
            <Pricing />
            <Contact />
          </div>
        </main>
      )}
    </>
  );
}
