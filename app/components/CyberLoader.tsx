"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OverlayHud, SystemMalfunction } from "./index";
import { GlitchTextProps } from "../types";

const GlitchText = ({ text, className }: GlitchTextProps) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 60);
    }, Math.random() * 2000 + 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <span
        className="absolute inset-0 text-primary opacity-80"
        style={{
          clipPath: glitch
            ? `inset(${Math.random() * 100}% 0 ${Math.random() * 100}% 0)`
            : "inset(50% 0 50% 0)",
        }}
      >
        {text}
      </span>
      {text}
      <span
        className="absolute inset-0 text-secondary opacity-80"
        style={{
          clipPath: glitch
            ? `inset(${Math.random() * 100}% 0 ${Math.random() * 100}% 0)`
            : "inset(50% 0 50% 0)",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export const CyberLoader = () => {
  const [step, setStep] = useState(0);
  const [showMalfunction, setShowMalfunction] = useState(false);

  const lines = [
    "> Root access requested...",
    "> Bypassing firewall...",
    "[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%",
    "> AUTHENTICATION FAILED.",
    "> Retrying with sudo...",
    "> Access Granted. Welcome, Ghost.",
    "WARNING: SYSTEM INTEGRITY COMPROMISED",
    ">>> KERNEL PANIC <<<",
  ];

  useEffect(() => {
    if (step < lines.length - 1) {
      const timer = setTimeout(
        () => setStep((s) => s + 1),
        step < 4 ? 300 : 500
      );
      return () => clearTimeout(timer);
    }
    if (step === lines.length - 1) {
      const malfunctionTimer = setTimeout(() => setShowMalfunction(true), 100);
      return () => clearTimeout(malfunctionTimer);
    }
  }, [step, lines.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background font-mono text-green-400 p-4"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <OverlayHud />

      <AnimatePresence>
        {showMalfunction && <SystemMalfunction />}
      </AnimatePresence>

      <AnimatePresence>
        {step >= 7 && (
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/80 text-background z-20"
          >
            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
            </svg>
            <GlitchText
              text="! SYSTEM BREACH !"
              className="text-4xl font-heading mt-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent pointer-events-none"
        style={{
          backgroundSize: "100% 4px",
          backgroundRepeat: "repeat-y",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <div className="w-full max-w-lg text-sm md:text-base">
        {lines.slice(0, step + 1).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: i * 0.05 }}
            className="relative z-10"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};
