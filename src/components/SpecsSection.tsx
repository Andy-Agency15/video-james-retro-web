
import React from 'react';

const SpecsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Pulsing border lines */}
      <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-pulse opacity-60"></div>
      <div className="absolute bottom-0 left-1/3 right-1/3 h-1 bg-gradient-to-r from-transparent via-neon-orange to-transparent animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <h3 className="text-5xl md:text-6xl font-orbitron font-bold neon-purple mb-16 text-center animate-neon-pulse transform hover:scale-110 transition-all duration-500"
            style={{ textShadow: '0 0 20px hsl(var(--neon-purple)), 0 0 40px hsl(var(--neon-purple)), 0 0 80px hsl(var(--neon-purple))' }}>
          &gt; RECORDING_SPECS.sys
        </h3>
        
        <div className="vhs-label p-16 rounded-2xl font-mono transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-neon-purple/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10 animate-pulse"></div>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              {[
                { label: "MICROPHONE:", value: "Audio-Technica AT2020", color: "neon-cyan" },
                { label: "INTERFACE:", value: "Focusrite Scarlett 2i2", color: "neon-pink" },
                { label: "SOFTWARE:", value: "Pro Tools | Audacity", color: "neon-purple" }
              ].map((spec, index) => (
                <div key={index} className="flex justify-between items-center hover:scale-110 transition-transform duration-300 p-4 rounded-lg hover:bg-black/30">
                  <span className="text-neon-cyan animate-neon-flicker text-xl font-bold"
                        style={{ textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))' }}>
                    {spec.label}
                  </span>
                  <span className={`${spec.color} font-bold text-xl animate-pulse`}
                        style={{ textShadow: `0 0 15px hsl(var(--${spec.color.replace('neon-', '')}))` }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                { label: "SAMPLE_RATE:", value: "48kHz / 24-bit", color: "neon-orange" },
                { label: "DELIVERY:", value: "WAV | MP3 | AIFF", color: "neon-cyan" },
                { label: "TURNAROUND:", value: "24-48 Hours", color: "neon-pink" }
              ].map((spec, index) => (
                <div key={index} className="flex justify-between items-center hover:scale-110 transition-transform duration-300 p-4 rounded-lg hover:bg-black/30">
                  <span className="text-neon-cyan animate-neon-flicker text-xl font-bold"
                        style={{ textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))' }}>
                    {spec.label}
                  </span>
                  <span className={`${spec.color} font-bold text-xl animate-pulse`}
                        style={{ textShadow: `0 0 15px hsl(var(--${spec.color.replace('neon-', '')}))` }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 h-3 bg-gradient-to-r from-neon-pink via-neon-cyan via-neon-purple via-neon-orange to-neon-pink rounded-full animate-pulse shadow-2xl shadow-neon-pink/50 relative z-10"></div>
          
          {/* Floating tech elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-neon-purple rounded-full animate-ping opacity-70"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-neon-orange rounded-full animate-ping opacity-80" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-8 w-2 h-2 bg-neon-cyan rounded-full animate-ping opacity-90" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
