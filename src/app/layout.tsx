import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sandeep Boddu | Principal Multi-Cloud DevOps Engineer & E-Commerce Architect',
  description: 'Technology professional with 15+ years of experience across E-Commerce Development, Full-Stack Web Engineering, and Multi-Cloud DevOps. Specializing in Azure, AWS, GCP, Kubernetes, Terraform, and AIOps.',
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
