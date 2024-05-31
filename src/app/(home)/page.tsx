'use client';

import DekoSection from '@/components/DekoSection';
import { HeroSection } from '@/components/HeroSection';
import LogoCarousel from '@/components/LogoCarusel';
import { MapSection } from '@/components/MapSection';
import StatsSection from '@/components/StatsSection';
import SupportSection from '@/components/SupportSection';

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
