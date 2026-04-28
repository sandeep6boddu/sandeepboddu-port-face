'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Redesign',
    description: 'A headless storefront built with Next.js and Shopify.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Fintech Dashboard',
    description: 'High-performance data visualization for a crypto tracking app.',
    image: 'https://images.unsplash.com/photo-1621501104860-26402456fef3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Creative Agency Site',
    description: 'Award-winning interactive portfolio with WebGL and GSAP.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'SaaS Platform',
    description: 'End-to-end B2B platform with real-time collaboration features.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-[#121212] py-32 px-8 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
            Selected Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Text Container */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light text-lg">
                  {project.description}
                </p>
              </div>

              {/* Decorative Subtle Glow on Hover */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-white/5 to-transparent mix-blend-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
