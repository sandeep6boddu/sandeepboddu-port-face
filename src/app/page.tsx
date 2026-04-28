import ScrollyCanvas from '@/components/ScrollyCanvas';
import SandeepContent from '@/components/AkshayContent';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Header />
      {/* 500vh container for the scrolling canvas + sticky logic */}
      <ScrollyCanvas />
      
      {/* The Extracted Content with Framer Motion Entrances */}
      <SandeepContent />
    </main>
  );
}
