
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CoreChallengesSection from '@/components/CoreChallengesSection';
import ProspectorSection from '@/components/ProspectorSection';
import CloserSection from '@/components/CloserSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import TimelineSection from '@/components/TimelineSection';
import PricingSection from '@/components/PricingSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import CustomSolutionsSection from '@/components/CustomSolutionsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Laskon AI Sales & Marketing Engine Proposal</title>
        <meta name="description" content="A robust proposal from Laskon AI for DX Energy to implement a custom AI-driven sales and marketing engine, designed to solve key business challenges and automate growth." />
      </Helmet>
      
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <CoreChallengesSection />
          <ProspectorSection />
          <CloserSection />
          <SolutionsSection />
          <ServicesSection />
          <TimelineSection />
          <PricingSection />
          <AdvantagesSection />
          <CustomSolutionsSection />
          <CTASection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
