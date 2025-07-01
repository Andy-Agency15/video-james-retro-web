
import React from 'react';
import { Volume2, Play } from 'lucide-react';

const AboutBentoCard = () => {
  return (
    <div className="vhs-border bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-neon-purple/50 h-full">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-orange/10 animate-pulse group-hover:animate-ping"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold chrome-text text-center mb-6 hover:animate-neon-pulse transform hover:scale-110 transition-all duration-500"
            style={{ 
              filter: 'drop-shadow(0 0 20px hsl(var(--neon-cyan))) drop-shadow(0 0 40px hsl(var(--neon-purple)))',
              textShadow: '0 0 15px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan))'
            }}>
          [ ABOUT_ME ]
        </h2>
        
        <div className="crt-screen vhs-border p-6 rounded-xl bg-black/60 backdrop-blur-xl mb-6 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-neon-cyan/30 relative overflow-hidden flex-1">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-pink/10 animate-pulse"></div>
          <p className="text-base md:text-lg leading-relaxed neon-text font-mono hover:animate-neon-flicker relative z-10"
             style={{ textShadow: '0 0 8px hsl(var(--neon-cyan)), 0 0 16px hsl(var(--neon-cyan))' }}>
            Welcome to my digital domain! I'm Video James, your friendly neighborhood voice actor 
            broadcasting from the neon-soaked streets of the cyber future. With years of experience 
            bringing characters to life, I specialize in everything from commercial narration to 
            character voices.
          </p>
        </div>

        {/* Compact Demo Reels */}
        <div className="space-y-4">
          {[
            { title: "Demo #1", subtitle: "Commercial", color: "neon-pink" },
            { title: "Demo #2", subtitle: "Characters", color: "neon-purple" }
          ].map((video, index) => (
            <div key={index} className="crt-screen vhs-border p-4 bg-black/60 rounded-xl transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-neon-cyan/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-pink/5 animate-pulse group-hover:animate-ping"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-pink/40 to-neon-purple/40 rounded-lg flex items-center justify-center">
                  <Volume2 className="text-neon-cyan animate-bounce" size={20} 
                           style={{ filter: 'drop-shadow(0 0 10px hsl(var(--neon-cyan)))' }} />
                </div>
                <div className="flex-1">
                  <p className="neon-text font-mono text-lg font-bold"
                     style={{ textShadow: '0 0 10px hsl(var(--neon-cyan))' }}>
                    {video.title}
                  </p>
                  <p className="text-sm opacity-90 animate-neon-flicker"
                     style={{ textShadow: '0 0 8px hsl(var(--neon-pink))' }}>
                    {video.subtitle}
                  </p>
                </div>
                <Play size={20} className="animate-pulse shadow-lg shadow-neon-cyan/50" 
                     style={{ filter: 'drop-shadow(0 0 10px hsl(var(--neon-cyan)))' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBentoCard;
