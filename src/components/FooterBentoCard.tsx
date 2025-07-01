
import React from 'react';

const FooterBentoCard = () => {
  return (
    <div className="vhs-border bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-neon-cyan/50 h-full flex items-center justify-center">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-cyan/20 via-neon-purple/20 to-neon-orange/20 animate-pulse group-hover:animate-ping"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple animate-pulse shadow-lg shadow-neon-pink/50"></div>
      
      {/* Floating footer particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-bounce opacity-60 ${
              i % 4 === 0 ? 'bg-neon-pink' : 
              i % 4 === 1 ? 'bg-neon-cyan' : 
              i % 4 === 2 ? 'bg-neon-purple' : 'bg-neon-orange'
            }`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center relative z-10">
        <p className="neon-text font-mono text-lg md:text-xl animate-neon-flicker mb-4"
           style={{ textShadow: '0 0 12px hsl(var(--neon-cyan)), 0 0 24px hsl(var(--neon-cyan))' }}>
          © 2024 VIDEO JAMES
        </p>
        <p className="neon-purple font-mono text-sm animate-pulse"
           style={{ textShadow: '0 0 10px hsl(var(--neon-purple))' }}>
          TRANSMISSION_COMPLETE
        </p>
        <div className="flex justify-center space-x-2 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} 
                 className={`w-2 h-2 rounded-full animate-ping shadow-lg ${
                   i % 3 === 0 ? 'bg-neon-pink shadow-neon-pink/50' : 
                   i % 3 === 1 ? 'bg-neon-cyan shadow-neon-cyan/50' : 
                   'bg-neon-purple shadow-neon-purple/50'
                 }`} 
                 style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${1.5 + Math.random()}s` }} />
          ))}
        </div>
        <div className="mt-4 h-2 bg-gradient-to-r from-neon-pink via-neon-cyan via-neon-purple to-neon-orange rounded-full animate-pulse shadow-xl shadow-neon-pink/50"></div>
      </div>
    </div>
  );
};

export default FooterBentoCard;
