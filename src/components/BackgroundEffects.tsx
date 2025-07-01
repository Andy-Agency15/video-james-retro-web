
import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Enhanced Synthwave Grid Background */}
      <div className="fixed inset-0 synthwave-grid pointer-events-none opacity-60" />
      <div className="fixed inset-0 synthwave-grid pointer-events-none opacity-30" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      
      {/* Multiple Intense Scanlines Effect */}
      <div className="fixed inset-0 scanlines pointer-events-none opacity-80" />
      <div className="fixed inset-0 scanlines pointer-events-none opacity-50" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
      <div className="fixed inset-0 scanlines pointer-events-none opacity-30" style={{ animationDelay: '1s', animationDuration: '4s' }} />

      {/* Laser Beam Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-neon-pink via-transparent to-neon-cyan opacity-60 animate-pulse" style={{ animationDuration: '1.5s' }} />
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-neon-purple via-transparent to-neon-orange opacity-40 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '0.8s' }} />
        <div className="absolute left-0 top-1/3 w-full h-1 bg-gradient-to-r from-neon-cyan via-transparent to-neon-pink opacity-30 animate-pulse" style={{ animationDuration: '3s' }} />
      </div>

      {/* Intense Floating Neon Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-bounce ${
              i % 5 === 0 ? 'w-4 h-4 bg-neon-pink shadow-lg shadow-neon-pink/50' : 
              i % 5 === 1 ? 'w-3 h-3 bg-neon-cyan shadow-lg shadow-neon-cyan/50' : 
              i % 5 === 2 ? 'w-5 h-5 bg-neon-purple shadow-lg shadow-neon-purple/50' : 
              i % 5 === 3 ? 'w-2 h-2 bg-neon-orange shadow-lg shadow-neon-orange/50' :
              'w-6 h-6 bg-gradient-to-r from-neon-pink to-neon-cyan shadow-xl shadow-neon-pink/70'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1 + Math.random() * 3}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Rotating Neon Rings */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full border-4 border-neon-pink opacity-40 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute w-80 h-80 rounded-full border-2 border-neon-cyan opacity-30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute w-64 h-64 rounded-full border-3 border-neon-purple opacity-50 animate-spin" style={{ animationDuration: '25s' }} />
        <div className="absolute w-48 h-48 rounded-full border-2 border-neon-orange opacity-60 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
      </div>

      {/* Pulsing Corner Elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full opacity-60 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
      <div className="fixed top-10 right-10 w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-orange rounded-full opacity-50 animate-ping pointer-events-none" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="fixed bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full opacity-40 animate-ping pointer-events-none" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="fixed bottom-10 right-10 w-18 h-18 bg-gradient-to-br from-neon-orange to-neon-cyan rounded-full opacity-70 animate-ping pointer-events-none" style={{ animationDuration: '2.5s' }} />
    </>
  );
};

export default BackgroundEffects;
