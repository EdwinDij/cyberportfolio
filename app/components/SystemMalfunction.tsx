"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlitchLineProps } from '../types';

const GlitchLine: React.FC<GlitchLineProps> = ({ top, height, color }) => (
  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: '100%' }}
    transition={{
      duration: Math.random() * 0.5 + 0.2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
      delay: Math.random() * 1,
    }}
    style={{ top: `${top}%`, height: `${height}px` }}
    className={`absolute left-0 w-full ${color} mix-blend-hard-light opacity-50 z-30`}
  />
);

const ChromaticAberration = () => (
    <>
        <div className="absolute inset-0 bg-background mix-blend-color-burn z-40" />
        <div className="absolute inset-0 bg-primary mix-blend-screen opacity-20" style={{ transform: 'translateX(2px)' }} />
        <div className="absolute inset-0 bg-secondary mix-blend-screen opacity-20" style={{ transform: 'translateX(-2px)' }} />
    </>
);

export const SystemMalfunction = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <ChromaticAberration />
          {[...Array(15)].map((_, i) => (
            <GlitchLine
              key={i}
              top={Math.random() * 100}
              height={Math.random() * 3 + 1}
              color={i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}
            />
          ))}
           <motion.div
                className="absolute inset-0 bg-background"
                animate={{
                    clipPath: [
                        'inset(0% 0% 0% 0%)',
                        `inset(${Math.random() * 40}% 0% ${Math.random() * 40}% 0%)`,
                        `inset(${Math.random() * 20}% 0% ${Math.random() * 60}% 0%)`,
                        'inset(0% 0% 100% 0%)',
                    ],
                }}
                transition={{
                    duration: 1.2,
                    ease: 'anticipate',
                    times: [0, 0.3, 0.9, 1]
                }}
            />
        </motion.div>
      )}
    </AnimatePresence>
  );
};