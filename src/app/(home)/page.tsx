'use client';

import DekoSection from '@/components/DekoSection';
import { HeroSection } from '@/components/HeroSection';
import { MapSection } from '@/components/MapSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DekoSection />
      <MapSection />
      <StatsSection />
    </>
  );
}
