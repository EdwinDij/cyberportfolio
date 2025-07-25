"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Contact, CyberLoader, Techno,  } from "./components";
import { Hero, Services, About } from "./components/";

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
        <div className="font-sans sm:grid sm:grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-[32px] row-start-2 items-center ">
            <Hero />
            <Services />
            <Techno />
            <About />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}
