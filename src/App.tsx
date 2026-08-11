import { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ARMAOverview } from './components/ARMAOverview';
import { WhatWeDo } from './components/WhatWeDo';
import { Roofing3DInnovation } from './components/Roofing3DInnovation';
import { TechnicalResources } from './components/TechnicalResources';
import { IndustryDataStats } from './components/IndustryDataStats';
import { LatestNews } from './components/LatestNews';
import { AwardsSection } from './components/AwardsSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { MembershipCTA } from './components/MembershipCTA';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import type { ResourceItem, NewsArticle, AwardProject } from './types';


export function App() {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    data: ResourceItem | NewsArticle | AwardProject | null;
    type: 'resource' | 'news' | 'award';
  }>({
    isOpen: false,
    data: null,
    type: 'resource'
  });

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenResource = (resource: ResourceItem) => {
    setModalData({ isOpen: true, data: resource, type: 'resource' });
  };

  const handleOpenNews = (article: NewsArticle) => {
    setModalData({ isOpen: true, data: article, type: 'news' });
  };

  const handleOpenAward = (award: AwardProject) => {
    setModalData({ isOpen: true, data: award, type: 'award' });
  };

  const handleCloseModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Custom Ring Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Association Overview & Viewport Counter Stats */}
        <ARMAOverview onNavigate={handleNavigate} />

        {/* Core Pillars: What We Do */}
        <WhatWeDo onNavigate={handleNavigate} />

        {/* 3D Roofing Innovation & Layer Inspector */}
        <Roofing3DInnovation />

        {/* Searchable & Filterable Technical Resources */}
        <TechnicalResources onSelectResource={handleOpenResource} />

        {/* Industry Data Insights & Metrics */}
        <IndustryDataStats />

        {/* Latest Industry News & Press */}
        <LatestNews onSelectNews={handleOpenNews} />

        {/* Excellence in Asphalt Roofing Awards Program */}
        <AwardsSection onSelectAward={handleOpenAward} />

        {/* Sustainability & Circular Economy */}
        <SustainabilitySection onNavigate={handleNavigate} />

        {/* High-Impact Membership CTA */}
        <MembershipCTA onNavigate={handleNavigate} />
      </main>

      {/* Modern Multi-Column Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Detail Modal Dialog */}
      <DetailModal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        data={modalData.data}
        type={modalData.type}
      />
    </div>
  );
}

export default App;
