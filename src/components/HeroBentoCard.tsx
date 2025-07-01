
import React, { useState, useEffect } from 'react';
import { Play, Pause, Zap, Radio, Tv, Sparkles } from 'lucide-react';

const HeroBentoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [superGlitch, setSuperGlitch] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Enhanced glitch effects
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000 + Math.random() * 8000);

    const superInterval = setInterval(() => {
      setSuperGlitch(true);
      setTimeout(() => setSuperGlitch(false), 150);
    }, 15000 + Math.random() * 20000);

    return () => {
      clearInterval(interval);
      clearInterval(superInterval);
    };
  }, []);

  return (
    <div className="vhs-border bg-black/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-neon-pink/50">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-neon-cyan/10 to-neon-purple/10 animate-pulse group-hover:animate-ping"></div>
      
      {/* Pulsing rings inside card */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-64 h-64 rounded-full border-4 border-neon-pink animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute w-48 h-48 rounded-full border-3 border-neon-cyan animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Compact Logo */}
        <div className="space-y-4 relative">
          <div className="relative transform hover:scale-110 transition-all duration-500">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-orbitron font-black chrome-text tracking-wider transform transition-all duration-500 ${glitchActive || superGlitch ? 'animate-glitch' : 'hover:animate-pulse'}`}
                style={{ 
                  filter: `drop-shadow(0 0 20px hsl(var(--neon-pink))) drop-shadow(0 0 40px hsl(var(--neon-cyan))) ${superGlitch ? 'hue-rotate(180deg)' : ''}`,
                  textShadow: '0 0 10px hsl(var(--neon-pink)), 0 0 20px hsl(var(--neon-pink)), 0 0 40px hsl(var(--neon-pink))'
                }}>
              VIDEO JAMES
            </h1>
            
            {/* Compact floating icons */}
            <Zap className="absolute -top-4 -left-8 text-neon-orange animate-bounce shadow-xl shadow-neon-orange/50" size={24} style={{ animationDelay: '0.5s', filter: 'drop-shadow(0 0 10px hsl(var(--neon-orange)))' }} />
            <Sparkles className="absolute -top-4 -right-8 text-neon-cyan animate-spin shadow-xl shadow-neon-cyan/50" size={20} style={{ animationDuration: '1.5s', filter: 'drop-shadow(0 0 15px hsl(var(--neon-cyan)))' }} />
          </div>
        </div>
        
        {/* Compact Tagline */}
        <div className="vhs-border p-6 bg-black/60 backdrop-blur-xl transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-neon-pink/50 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-neon-cyan/10 to-neon-purple/10 animate-pulse"></div>
          <p className="text-lg md:text-xl neon-text font-mono tracking-wide animate-neon-flicker relative z-10"
             style={{ textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))' }}>
            Broadcasting from the Neon Future
          </p>
        </div>

        {/* Compact Play Button */}
        <button 
          onClick={togglePlay}
          className="retro-button px-8 py-4 rounded-xl font-orbitron font-bold text-lg flex items-center gap-4 mx-auto hover:animate-pulse transform hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-neon-cyan/50 relative overflow-hidden group"
          style={{ 
            boxShadow: '0 0 20px hsl(var(--neon-pink)), 0 0 40px hsl(var(--neon-cyan)), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 15px hsl(var(--neon-pink)))'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-cyan/20 to-neon-purple/20 animate-pulse group-hover:animate-ping"></div>
          {isPlaying ? (
            <Pause size={32} className="animate-spin relative z-10" style={{ filter: 'drop-shadow(0 0 10px white)' }} />
          ) : (
            <Play size={32} className="animate-bounce relative z-10" style={{ filter: 'drop-shadow(0 0 10px white)' }} />
          )}
          <span className="animate-neon-flicker relative z-10" style={{ textShadow: '0 0 10px white, 0 0 20px white' }}>
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroBentoCard;
