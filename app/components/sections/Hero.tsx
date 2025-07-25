"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { containerVariants, itemVariants } from "../../lib/variants";
import Link from "next/link";

export const Hero = () => {
  return (
    <motion.section
      className="w-screen max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center items-center text-center relative pt-16">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading"
          variants={itemVariants}
        >
          <span className="glitch-text cyberfont" data-text="Edwin Dijeont">
            Edwin Dijeont
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mt-4"
          variants={itemVariants}
        >
          Développeur web front-end // Architecte d&apos;Interfaces
        </motion.p>
        <motion.p
          className="max-w-xl mt-6 text-foreground/80 text-lg mx-auto"
          variants={itemVariants}
        >
          Je compile des lignes de code en expériences numériques immersives. Ma
          mission : hacker les conventions pour créer des interfaces qui ont une
          âme.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex justify-center"
        >
          <Button href="/Work">
            <Link href="/Work">Explorer mes projets</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
