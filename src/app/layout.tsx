import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sandeep Boddu | Multi-Cloud DevOps · AI Agent Builder · E-Commerce Architect',
  description: 'Technology professional with 15+ years of experience in Multi-Cloud DevOps, AI Agent Development (RAG chatbots, resume builders, job portals using n8n & LLMs), Full-Stack Web Engineering, and E-Commerce Architecture across Azure, AWS, and GCP.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
