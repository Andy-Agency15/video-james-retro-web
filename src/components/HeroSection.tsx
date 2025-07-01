
import React, { useState, useEffect } from 'react';
import { Play, Pause, Zap, Radio, Tv, Sparkles } from 'lucide-react';

const HeroSection = () => {
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

    // Super intense glitch
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
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Massive Pulsing Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] rounded-full border-8 border-neon-pink animate-ping shadow-2xl shadow-neon-pink/50" style={{ animationDuration: '4s' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full border-6 border-neon-cyan animate-ping shadow-2xl shadow-neon-cyan/50" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full border-4 border-neon-purple animate-ping shadow-2xl shadow-neon-purple/50" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute w-[200px] h-[200px] rounded-full border-3 border-neon-orange animate-ping shadow-2xl shadow-neon-orange/50" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
      </div>

      {/* Rotating Energy Beams */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-60 animate-spin origin-center" style={{ animationDuration: '8s' }} />
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-40 animate-spin origin-center" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
      </div>

      <div className="text-center space-y-12 z-10 relative">
        {/* Ultra Enhanced Main Logo */}
        <div className="space-y-6 relative">
          <div className="relative transform hover:scale-125 transition-all duration-700">
            <h1 className={`text-8xl md:text-9xl lg:text-[12rem] font-orbitron font-black chrome-text tracking-wider transform transition-all duration-500 ${glitchActive || superGlitch ? 'animate-glitch' : 'hover:animate-pulse'}`}
                style={{ 
                  filter: `drop-shadow(0 0 20px hsl(var(--neon-pink))) drop-shadow(0 0 40px hsl(var(--neon-cyan))) ${superGlitch ? 'hue-rotate(180deg)' : ''}`,
                  textShadow: '0 0 10px hsl(var(--neon-pink)), 0 0 20px hsl(var(--neon-pink)), 0 0 40px hsl(var(--neon-pink)), 0 0 80px hsl(var(--neon-pink))'
                }}>
              VIDEO
            </h1>
            {/* Multiple Glitch Duplicates */}
            <h1 className="absolute top-0 left-0 text-8xl md:text-9xl lg:text-[12rem] font-orbitron font-black text-neon-pink tracking-wider opacity-60 translate-x-2 -translate-y-2 pointer-events-none blur-sm">
              VIDEO
            </h1>
            <h1 className="absolute top-0 left-0 text-8xl md:text-9xl lg:text-[12rem] font-orbitron font-black text-neon-cyan tracking-wider opacity-40 -translate-x-2 translate-y-2 pointer-events-none blur-sm">
              VIDEO
            </h1>
            <h1 className="absolute top-0 left-0 text-8xl md:text-9xl lg:text-[12rem] font-orbitron font-black text-neon-purple tracking-wider opacity-30 translate-x-1 translate-y-3 pointer-events-none blur-md">
              VIDEO
            </h1>
          </div>
          
          <div className="relative transform hover:scale-125 transition-all duration-700">
            <h1 className={`text-8xl md:text-9xl lg:text-[12rem] font-orbitron font-black neon-pink tracking-wider transform transition-all duration-500 animate-neon-pulse ${glitchActive || superGlitch ? 'animate-glitch' : ''}`}
                style={{ 
                  filter: `drop-shadow(0 0 30px hsl(var(--neon-pink))) drop-shadow(0 0 60px hsl(var(--neon-purple))) ${superGlitch ? 'saturate(200%) brightness(150%)' : ''}`,
                  textShadow: '0 0 15px hsl(var(--neon-pink)), 0 0 30px hsl(var(--neon-pink)), 0 0 60px hsl(var(--neon-pink)), 0 0 120px hsl(var(--neon-pink))'
                }}>
              JAMES
            </h1>
            
            {/* Extreme Lightning Effects */}
            <Zap className="absolute -top-8 -left-12 text-neon-orange animate-bounce shadow-2xl shadow-neon-orange/50" size={48} style={{ animationDelay: '0.5s', filter: 'drop-shadow(0 0 10px hsl(var(--neon-orange)))' }} />
            <Zap className="absolute -bottom-8 -right-12 text-neon-cyan animate-bounce shadow-2xl shadow-neon-cyan/50" size={42} style={{ animationDelay: '1.5s', filter: 'drop-shadow(0 0 10px hsl(var(--neon-cyan)))' }} />
            <Radio className="absolute top-1/2 -left-16 text-neon-purple animate-spin shadow-2xl shadow-neon-purple/50" size={36} style={{ animationDuration: '2s', filter: 'drop-shadow(0 0 15px hsl(var(--neon-purple)))' }} />
            <Tv className="absolute top-1/2 -right-16 text-neon-pink animate-bounce shadow-2xl shadow-neon-pink/50" size={38} style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 15px hsl(var(--neon-pink)))' }} />
            <Sparkles className="absolute -top-6 right-8 text-neon-cyan animate-spin shadow-2xl shadow-neon-cyan/50" size={32} style={{ animationDuration: '1.5s', filter: 'drop-shadow(0 0 20px hsl(var(--neon-cyan)))' }} />
            <Sparkles className="absolute -bottom-6 left-8 text-neon-orange animate-spin shadow-2xl shadow-neon-orange/50" size={28} style={{ animationDuration: '2.5s', animationDirection: 'reverse', filter: 'drop-shadow(0 0 20px hsl(var(--neon-orange)))' }} />
          </div>
        </div>
        
        {/* Ultra Enhanced Tagline */}
        <div className="vhs-border p-8 bg-black/80 backdrop-blur-xl max-w-2xl mx-auto transform hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-pink/70 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-neon-cyan/10 to-neon-purple/10 animate-pulse"></div>
          <p className="text-2xl md:text-3xl neon-text font-mono tracking-wide animate-neon-flicker relative z-10"
             style={{ textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-cyan))' }}>
            Broadcasting from the Neon Future
          </p>
          <div className="mt-4 flex justify-center space-x-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} 
                   className={`w-3 h-3 rounded-full animate-pulse shadow-lg ${
                     i % 4 === 0 ? 'bg-neon-pink shadow-neon-pink/50' : 
                     i % 4 === 1 ? 'bg-neon-cyan shadow-neon-cyan/50' : 
                     i % 4 === 2 ? 'bg-neon-purple shadow-neon-purple/50' : 
                     'bg-neon-orange shadow-neon-orange/50'
                   }`} 
                   style={{ animationDelay: `${i * 0.15}s`, animationDuration: `${1 + Math.random()}s` }} />
            ))}
          </div>
        </div>

        {/* Ultra Enhanced VHS Play Button */}
        <button 
          onClick={togglePlay}
          className="retro-button px-16 py-8 rounded-2xl font-orbitron font-bold text-2xl flex items-center gap-6 mx-auto hover:animate-pulse transform hover:scale-125 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/70 relative overflow-hidden group"
          style={{ 
            boxShadow: '0 0 30px hsl(var(--neon-pink)), 0 0 60px hsl(var(--neon-cyan)), inset 0 0 30px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 20px hsl(var(--neon-pink)))'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-cyan/20 to-neon-purple/20 animate-pulse group-hover:animate-ping"></div>
          {isPlaying ? (
            <Pause size={48} className="animate-spin relative z-10" style={{ filter: 'drop-shadow(0 0 10px white)' }} />
          ) : (
            <Play size={48} className="animate-bounce relative z-10" style={{ filter: 'drop-shadow(0 0 10px white)' }} />
          )}
          <span className="animate-neon-flicker relative z-10" style={{ textShadow: '0 0 10px white, 0 0 20px white' }}>
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </span>
        </button>
      </div>

      {/* Extreme Floating VHS Elements */}
      <div className="absolute top-20 left-10 opacity-60 animate-pulse hover:opacity-100 transition-opacity hover:scale-150 duration-500">
        <div className="w-32 h-20 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-lg border-4 border-neon-cyan transform hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-neon-pink/50 animate-bounce"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-60 animate-pulse delay-1000 hover:opacity-100 transition-opacity hover:scale-150 duration-500">
        <div className="w-28 h-18 bg-gradient-to-r from-neon-cyan via-neon-orange to-neon-purple rounded-lg border-4 border-neon-purple transform hover:-rotate-12 transition-transform duration-500 shadow-2xl shadow-neon-cyan/50 animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute top-1/2 left-20 opacity-40 animate-bounce hover:scale-150 transition-transform duration-500">
        <div className="w-20 h-14 bg-gradient-to-r from-neon-orange via-neon-pink to-neon-cyan rounded-lg border-2 border-neon-cyan shadow-xl shadow-neon-orange/50"></div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-40 animate-bounce delay-500 hover:scale-150 transition-transform duration-500">
        <div className="w-24 h-16 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-orange rounded-lg border-2 border-neon-orange shadow-xl shadow-neon-purple/50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
