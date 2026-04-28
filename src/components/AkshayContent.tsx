'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ─── Data from Sandeep's profile ─── */

const capabilities = [
  {
    title: 'Multi-Cloud DevOps',
    desc: 'Architecting and operating cloud-native infrastructure across Azure, AWS, and GCP with CI/CD automation, Kubernetes, Terraform, and GitOps workflows.',
    tags: ['Azure', 'AWS', 'GCP', 'Terraform', 'Kubernetes'],
  },
  {
    title: 'Full-Stack Development',
    desc: 'Building high-performance frontends with React, Next.js, and TypeScript, backed by robust Node.js and Java backend services with REST APIs and GraphQL.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python'],
  },
  {
    title: 'E-Commerce Architecture',
    desc: 'Designing, building, and scaling Magento 2 and WordPress/WooCommerce storefronts — custom modules, B2B portals, payment integrations, and headless CMS.',
    tags: ['Magento 2', 'WooCommerce', 'Shopify', 'Stripe', 'PHP'],
  },
  {
    title: 'AIOps & Observability',
    desc: 'Delivering full-stack observability with Azure Monitor, CloudWatch, Prometheus, Grafana, and Datadog. Integrating AIOps for intelligent alert correlation.',
    tags: ['Prometheus', 'Grafana', 'Datadog', 'CloudWatch', 'OpsRamp'],
  },
];

const projects = [
  {
    title: 'Multi-Cloud K8s Platform',
    category: 'DevOps / Infrastructure',
    tools: 'EKS, AKS, GKE, Terraform, ArgoCD',
    desc: 'Architected a unified Kubernetes platform spanning three cloud providers with GitOps-driven deployments, reusable Terraform modules, and 99.9%+ SLA.',
  },
  {
    title: 'Global Magento 2 Storefront',
    category: 'E-Commerce / Enterprise',
    tools: 'Magento 2 EE, Varnish, Redis, PHP',
    desc: 'Built and maintained enterprise retail storefronts with custom modules, multi-store config, B2B portals, and payment gateway integrations (Stripe, PayPal, Braintree).',
  },
  {
    title: 'Automated GitOps CI/CD',
    category: 'Automation / Pipelines',
    tools: 'Azure DevOps, Jenkins, Docker, Helm',
    desc: 'Designed multi-stage CI/CD pipelines for build, test, and release across dev, staging, and production with automated quality gates.',
  },
  {
    title: 'AIOps Observability Stack',
    category: 'Monitoring / Platform',
    tools: 'Prometheus, Grafana, Datadog, OpsRamp',
    desc: 'Integrated intelligent alert correlation and automated incident routing across multi-cloud environments using AIOps tooling.',
  },
  {
    title: 'Headless WooCommerce',
    category: 'E-Commerce / Full-Stack',
    tools: 'WordPress, Next.js, Stripe, WooCommerce',
    desc: 'Implemented headless CMS architecture with custom themes, plugin integrations, and performance optimization using Varnish and CDN.',
  },
];

const experience = [
  {
    role: 'Manager / Senior Multi-Cloud DevOps Engineer',
    company: 'WebEnrich Solutions Pvt. Ltd.',
    period: 'Oct 2012 – Present',
    highlights: [
      'Built and scaled Magento 2 (CE/EE) and WordPress/WooCommerce storefronts — custom modules, B2B portals, and payment gateway integrations.',
      'Architected CI/CD pipelines on Azure DevOps, Jenkins, and GitHub Actions with multi-stage deployments.',
      'Deployed Kubernetes workloads (AKS, EKS, GKE) using Helm, Kustomize, and Argo CD GitOps workflows.',
      'Automated multi-cloud infrastructure with Terraform, ARM, Bicep, and CloudFormation — reusable modules reduced onboarding time by ~40%.',
      'Maintained 99.9%+ SLA across multi-cloud production environments; led disaster recovery and incident response.',
    ],
  },
  {
    role: 'Senior Customer Service Associate',
    company: 'Amazon Development Center India Pvt. Ltd.',
    period: 'Sep 2010 – Jul 2012',
    highlights: [
      'Supported large-scale e-commerce platform operations with robust incident-handling skills in high-volume environments.',
      'Gained deep insight into customer journeys, order management, and platform reliability.',
    ],
  },
  {
    role: 'Assistant Designer',
    company: 'Goldstone Technologies Ltd.',
    period: 'May 2007 – Nov 2008',
    highlights: [
      'Handled digital restoration and production workflows for media projects.',
      'Gained early exposure to structured technical delivery and production coordination.',
    ],
  },
];

const certifications = [
  { name: 'Azure Administrator Associate', code: 'AZ-104', provider: 'Microsoft Azure' },
  { name: 'Azure DevOps Engineer Expert', code: 'AZ-400', provider: 'Microsoft Azure' },
  { name: 'DevOps Engineer – Professional', code: '', provider: 'Amazon Web Services' },
  { name: 'Certified Kubernetes Administrator', code: 'CKA', provider: 'CNCF' },
  { name: 'Azure AI Fundamentals', code: 'AI-900', provider: 'Microsoft Azure' },
  { name: 'Associate Cloud Engineer', code: '', provider: 'Google Cloud (Planned)' },
];

const techSkills = [
  { category: 'Cloud Platforms', items: ['Azure (AKS, DevOps, Functions, Key Vault)', 'AWS (EKS, EC2, Lambda, S3, RDS)', 'GCP (GKE, Cloud Run, Cloud Build)'] },
  { category: 'CI/CD & GitOps', items: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'Argo CD', 'SonarQube'] },
  { category: 'Containers & K8s', items: ['Docker', 'Kubernetes', 'Helm', 'Kustomize', 'OpenShift'] },
  { category: 'IaC', items: ['Terraform', 'ARM Templates', 'Bicep', 'CloudFormation', 'Ansible'] },
  { category: 'E-Commerce', items: ['Magento 2 CE/EE', 'WooCommerce', 'Shopify (Headless)', 'Stripe', 'PayPal'] },
  { category: 'Web Development', items: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Java', 'PHP'] },
];

const recommendations = [
  { name: 'Yogesh Kothiya', role: 'Agentic AI | Gen AI', text: '"We got our UI/UX made on a tight deadline and Sandeep was extremely agile throughout. An expert in the field, strong communication, where he doesn\'t fail to deliver."' },
  { name: 'Salil Rana', role: 'HR Manager', text: '"He is a highly skilled and hardworking Full Stack Engineer who was one of the standout members of his team. Always ready to help others."' },
  { name: 'Naincy Kumari', role: 'HR', text: '"Sandeep helped us build our community website UI. We liked working with him as he was approachable and flexible. Very prompt in his work."' },
];

/* ─── Component ─── */

export default function SandeepContent() {
  const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
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

        {/* ── About ── */}
        <section id="about">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">About Me</h2>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-4xl">
              Technology professional with <span className="text-white font-medium">15+ years</span> of experience across three disciplines: E-Commerce Development, Full-Stack Web Engineering, and Multi-Cloud DevOps. Started career as an E-Commerce specialist — building and scaling WordPress and Magento storefronts — before pivoting into cloud infrastructure. Now specializes in architecting cloud-native infrastructure across <span className="text-blue-400 font-medium">Azure, AWS, and GCP</span>, with deep expertise in CI/CD automation, Kubernetes, Terraform, and AIOps-driven observability.
            </p>
          </FadeIn>
        </section>

        {/* ── Core Capabilities ── */}
        <section id="services">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">What I Do</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group h-full">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/70 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Tech Skills ── */}
        <section>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Tech Stack</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSkills.map((group, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-full">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 text-white/80 border border-white/5 hover:bg-white/15 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── My Work / Projects ── */}
        <section id="work">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">My Work</h2>
          </FadeIn>
          <div className="space-y-6">
            {projects.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-white/20">0{idx + 1}</span>
                        <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      </div>
                      <p className="text-blue-400/80 text-sm font-medium uppercase tracking-wider">{item.category}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:flex-shrink-0">
                      {item.tools.split(', ').map((tool, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/60 text-lg font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Career Journey ── */}
        <section id="experience">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Career Journey</h2>
          </FadeIn>
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-400">{item.role}</h3>
                      <p className="text-white/50 text-base font-light mt-1">{item.company}</p>
                    </div>
                    <span className="text-sm font-medium text-white/40 bg-white/5 px-4 py-1.5 rounded-full whitespace-nowrap self-start">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="text-white/70 text-base font-light leading-relaxed flex gap-3">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section id="certifications">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Certifications</h2>
            <p className="text-white/50 text-lg font-light mb-12">In Progress</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                    {cert.code && <p className="text-blue-400 text-sm font-medium mb-3">{cert.code}</p>}
                  </div>
                  <p className="text-white/50 text-sm font-light mt-2">{cert.provider}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Recommendations ── */}
        <section id="testimonials">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Recommendations</h2>
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

        {/* ── Contact / Footer ── */}
        <section id="contact">
          <FadeIn>
            <div className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Let&apos;s Connect</h2>
              <p className="text-white/50 text-lg font-light mb-8 max-w-xl mx-auto">
                📍 Greenwood, Indiana &nbsp;·&nbsp; 15+ years of experience
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <a
                  href="mailto:sandeep6boddu@gmail.com"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors text-base"
                >
                  sandeep6boddu@gmail.com
                </a>
                <a
                  href="tel:225-481-9642"
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors text-base"
                >
                  📱 225-481-9642
                </a>
              </div>
              <div className="flex items-center justify-center gap-6 text-white/50">
                <a href="https://github.com/sandeep6boddu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <span>·</span>
                <a href="https://www.linkedin.com/in/sandeep-boddu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <span>·</span>
                <a href="https://x.com/sandeep6boddu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X/Twitter</a>
                <span>·</span>
                <a href="https://www.instagram.com/sandeep.boddu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              </div>
              <p className="text-white/30 text-sm mt-8">© 2026 Sandeep Boddu. All rights reserved.</p>
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
