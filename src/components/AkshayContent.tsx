'use client';

import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  { title: 'Frontend Architecture', desc: 'Designing scalable, maintainable, and high-performance frontend systems using React, Next.js, and TypeScript.' },
  { title: 'Full-Stack Development', desc: 'Building seamless end-to-end applications with robust Node.js backend services and modern interactive UIs.' },
  { title: 'Performance Optimization', desc: 'Identifying bottlenecks and implementing strategies across the stack to ensure lightning-fast load times.' },
  { title: 'UI/UX Engineering', desc: 'Translating complex design systems into pixel-perfect, accessible, and responsive digital experiences.' }
];

const arsenal = [
  { title: 'Lumina Vault', desc: 'Personal Media Storage', link: '#' },
  { title: 'Personal Portfolio', desc: '3D Interactive Design', link: '#' },
  { title: 'Legacy Portfolio', desc: 'Modern UI / Animations', link: '#' },
  { title: 'iCloud Hire', desc: 'Modern UI / Animations', link: '#' }
];

const experience = [
  { role: 'Full Stack Engineer', desc: 'Designed and developed scalable, user-facing web applications using React, TypeScript, and modern architectures. Improved frontend performance and stability by optimising component rendering.' },
  { role: 'Senior Software Engineer', desc: 'Built and maintained web applications supporting business-critical workflows for enterprise clients. Led frontend architecture decisions, ensuring reusable components.' },
  { role: 'Software Engineer', desc: 'Wrote modern, performant, and robust code for a diverse array of client and internal projects using JavaScript, TypeScript, Angular, React.' }
];

const recommendations = [
  { name: 'Yogesh Kothiya', role: 'Agentic AI | Gen AI', text: '"We got our UI/UX made on a tight deadline and Sandeep was extremely agile throughout. An expert in the field, strong communication, where he doesn\'t fail to deliver."' },
  { name: 'Salil Rana', role: 'HR Manager', text: '"He is a highly skilled and hardworking Full Stack Engineer who was one of the standout members of his team. Always ready to help others."' },
  { name: 'Naincy Kumari', role: 'HR', text: '"Sandeep helped us build our community website UI. We liked working with him as he was approachable and flexible. Very prompt in his work."' }
];

export default function SandeepContent() {
  const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="relative w-full bg-[#121212] pt-32 pb-48 px-8 lg:px-24 border-t border-white/5 text-white">
      <div className="max-w-6xl mx-auto space-y-48">
        
        {/* Core Capabilities */}
        <section id="services">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Core Capabilities</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-white/60 text-lg font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* My Arsenal */}
        <section id="work">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">My Arsenal</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {arsenal.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <a href={item.link} className="block group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-lg font-light">{item.desc}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Career Journey */}
        <section id="experience">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">My Career Journey</h2>
          </FadeIn>
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">{item.role}</h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Client Recommendations */}
        <section id="testimonials">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Client Recommendations</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-full flex flex-col">
                  <p className="text-white/80 text-lg font-light italic mb-6 flex-grow">{item.text}</p>
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-blue-400/80 text-sm mt-1">{item.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
