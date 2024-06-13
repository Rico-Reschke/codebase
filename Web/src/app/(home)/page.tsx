'use client';

import LogoCarousel from '@/components/LogoCarusel';
import DekoSection from '@/pages/Home/DekoSection';
import { HeroSection } from '@/pages/Home/HeroSection';
import { MapSection } from '@/pages/Home/MapSection';
import StatsSection from '@/pages/Home/StatsSection';
import SupportSection from '@/pages/Home/SupportSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DekoSection />
      <MapSection />
      <SupportSection />
      <LogoCarousel />
      <StatsSection />
    </>
  );
}
