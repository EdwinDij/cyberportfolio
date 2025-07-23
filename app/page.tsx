"use client";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { CyberLoader, Navbar } from "./components";
import { Hero } from "./components/sections/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <CyberLoader />}</AnimatePresence>

      {!loading && (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <Navbar />
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Hero/>
          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    
          </footer>
        </div>
      )}
    </>
  );
}
