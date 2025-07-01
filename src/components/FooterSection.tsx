
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="text-center py-20 border-t-4 border-neon-cyan/70 relative overflow-hidden">
      {/* Intense footer background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-cyan/20 via-neon-purple/20 to-neon-orange/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple animate-pulse shadow-lg shadow-neon-pink/50"></div>
      
      {/* Floating footer particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full animate-bounce opacity-60 ${
              i % 4 === 0 ? 'bg-neon-pink' : 
              i % 4 === 1 ? 'bg-neon-cyan' : 
              i % 4 === 2 ? 'bg-neon-purple' : 'bg-neon-orange'
            }`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="vhs-border inline-block p-10 bg-black/80 backdrop-blur-xl hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/40 relative z-10 rounded-2xl">
        <p className="neon-text font-mono text-2xl animate-neon-flicker mb-4"
           style={{ textShadow: '0 0 15px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan)), 0 0 60px hsl(var(--neon-cyan))' }}>
          © 2024 VIDEO JAMES | TRANSMISSION_COMPLETE
        </p>
        <div className="flex justify-center space-x-3 mb-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} 
                 className={`w-3 h-3 rounded-full animate-ping shadow-lg ${
                   i % 3 === 0 ? 'bg-neon-pink shadow-neon-pink/50' : 
                   i % 3 === 1 ? 'bg-neon-cyan shadow-neon-cyan/50' : 
                   'bg-neon-purple shadow-neon-purple/50'
                 }`} 
                 style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${1.5 + Math.random()}s` }} />
          ))}
        </div>
        <div className="h-2 bg-gradient-to-r from-neon-pink via-neon-cyan via-neon-purple to-neon-orange rounded-full animate-pulse shadow-xl shadow-neon-pink/50"></div>
      </div>
      
      {/* Corner laser effects */}
      <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-neon-pink to-transparent animate-pulse opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-neon-cyan to-transparent animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>
    </footer>
  );
};

export default FooterSection;
