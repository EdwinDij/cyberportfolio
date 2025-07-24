"use client";
import React from "react";
import { motion } from "framer-motion";
import { HudElementProps } from "../types";

const HudElement = ({ children, className }: HudElementProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.7, 0, 0.6, 0.8] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export const OverlayHud = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none font-mono text-xs">
      {/* Corners */}
      <HudElement className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
      <HudElement className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50" />
      <HudElement className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50" />
      <HudElement className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50" />

      {/* Side elements */}
      <HudElement className="absolute top-1/2 left-4 -translate-y-1/2 text-cyan-400/50">
        <p>SYS_STATUS: ONLINE</p>
        <p>CONN: SECURE</p>
      </HudElement>

      <HudElement className="absolute top-1/2 right-4 -translate-y-1/2 text-right text-cyan-400/50">
        <p>UID: EDW.DIJ_DEV</p>
        <p>NODE: FR-PAR-19</p>
      </HudElement>

      {/* Top and Bottom lines */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Scanline effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-cyan-400/20"
        style={{ filter: "blur(10px)" }}
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
