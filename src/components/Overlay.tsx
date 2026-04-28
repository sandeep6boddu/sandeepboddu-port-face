'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 — Hero Name */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <p className="text-lg md:text-xl font-light text-white/60 uppercase tracking-[0.3em] mb-4 drop-shadow-md">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-lg">
          Sandeep Boddu<span className="text-blue-400">.</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light text-white/80 uppercase tracking-widest drop-shadow-md">
          DevOps &amp; Web Engineer
        </p>
      </motion.div>

      {/* Section 2 — Tagline */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white max-w-2xl drop-shadow-lg">
          Multi-Cloud Architect.
          <br />
          <span className="text-white/60">Azure · AWS · GCP</span>
        </h2>
      </motion.div>

      {/* Section 3 — Mission */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white max-w-2xl drop-shadow-lg">
          Bridging e-commerce, development &amp; infrastructure.
        </h2>
      </motion.div>
    </div>
  );
}
