
import React from 'react';
import BackgroundEffects from './BackgroundEffects';
import HeroBentoCard from './HeroBentoCard';
import ContactBentoCard from './ContactBentoCard';
import AboutBentoCard from './AboutBentoCard';
import SpecsBentoCard from './SpecsBentoCard';
import PaymentBentoCard from './PaymentBentoCard';
import FooterBentoCard from './FooterBentoCard';

const VideoJamesWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darker-bg via-dark-bg to-darker-bg text-neon-cyan overflow-hidden relative">
      <BackgroundEffects />
      
      {/* Bento Box Grid Layout */}
      <div className="container mx-auto p-4 md:p-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-min">
          {/* Hero Section - Takes full width on mobile, spans multiple columns on larger screens */}
          <div className="col-span-1 md:col-span-6 lg:col-span-12 row-span-1">
            <HeroBentoCard />
          </div>
          
          {/* Contact and About - Side by side on larger screens */}
          <div className="col-span-1 md:col-span-3 lg:col-span-6">
            <ContactBentoCard />
          </div>
          <div className="col-span-1 md:col-span-3 lg:col-span-6">
            <AboutBentoCard />
          </div>
          
          {/* Specs - Full width */}
          <div className="col-span-1 md:col-span-6 lg:col-span-12">
            <SpecsBentoCard />
          </div>
          
          {/* Payment and Footer */}
          <div className="col-span-1 md:col-span-4 lg:col-span-8">
            <PaymentBentoCard />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <FooterBentoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoJamesWebsite;
