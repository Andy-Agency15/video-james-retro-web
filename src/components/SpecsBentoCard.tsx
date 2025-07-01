
import React from 'react';

const SpecsBentoCard = () => {
  return (
    <div className="vhs-border bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.01] transition-all duration-700 hover:shadow-2xl hover:shadow-neon-purple/50">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-orange/10 animate-pulse group-hover:animate-ping"></div>
      
      <div className="relative z-10">
        <h3 className="text-4xl md:text-5xl font-orbitron font-bold neon-purple mb-8 text-center animate-neon-pulse transform hover:scale-110 transition-all duration-500"
            style={{ textShadow: '0 0 15px hsl(var(--neon-purple)), 0 0 30px hsl(var(--neon-purple))' }}>
          &gt; RECORDING_SPECS.sys
        </h3>
        
        <div className="vhs-label p-8 rounded-2xl font-mono transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-neon-purple/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10 animate-pulse"></div>
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-6">
              {[
                { label: "MICROPHONE:", value: "Audio-Technica AT2020", color: "neon-cyan" },
                { label: "INTERFACE:", value: "Focusrite Scarlett 2i2", color: "neon-pink" },
                { label: "SOFTWARE:", value: "Pro Tools | Audacity", color: "neon-purple" }
              ].map((spec, index) => (
                <div key={index} className="flex justify-between items-center hover:scale-105 transition-transform duration-300 p-3 rounded-lg hover:bg-black/30">
                  <span className="text-neon-cyan animate-neon-flicker text-lg font-bold"
                        style={{ textShadow: '0 0 8px hsl(var(--neon-cyan))' }}>
                    {spec.label}
                  </span>
                  <span className={`${spec.color} font-bold text-lg animate-pulse`}
                        style={{ textShadow: `0 0 12px hsl(var(--${spec.color.replace('neon-', '')}))` }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { label: "SAMPLE_RATE:", value: "48kHz / 24-bit", color: "neon-orange" },
                { label: "DELIVERY:", value: "WAV | MP3 | AIFF", color: "neon-cyan" },
                { label: "TURNAROUND:", value: "24-48 Hours", color: "neon-pink" }
              ].map((spec, index) => (
                <div key={index} className="flex justify-between items-center hover:scale-105 transition-transform duration-300 p-3 rounded-lg hover:bg-black/30">
                  <span className="text-neon-cyan animate-neon-flicker text-lg font-bold"
                        style={{ textShadow: '0 0 8px hsl(var(--neon-cyan))' }}>
                    {spec.label}
                  </span>
                  <span className={`${spec.color} font-bold text-lg animate-pulse`}
                        style={{ textShadow: `0 0 12px hsl(var(--${spec.color.replace('neon-', '')}))` }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 h-3 bg-gradient-to-r from-neon-pink via-neon-cyan via-neon-purple via-neon-orange to-neon-pink rounded-full animate-pulse shadow-xl shadow-neon-pink/50 relative z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SpecsBentoCard;
