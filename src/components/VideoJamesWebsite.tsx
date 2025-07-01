
import React from 'react';
import BackgroundEffects from './BackgroundEffects';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import SpecsSection from './SpecsSection';
import PaymentSection from './PaymentSection';
import FooterSection from './FooterSection';

const VideoJamesWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darker-bg via-dark-bg to-darker-bg text-neon-cyan overflow-hidden relative">
      <BackgroundEffects />
      <HeroSection />
      <ContactSection />
      <AboutSection />
      <SpecsSection />
      <PaymentSection />
      <FooterSection />
    </div>
  );
};

export default VideoJamesWebsite;
