import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sandeep Boddu | Cloud Engineering · DevOps · Full-Stack · AI Solutions',
  description: 'Technology professional with expertise in Cloud Engineering, DevOps, Full-Stack Development, and AI Solutions. Experienced in Azure, AWS, GCP, Infrastructure as Code, CI/CD, containerization, cloud automation, and AI agent development.',
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
