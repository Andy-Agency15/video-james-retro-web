
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-32 px-4 relative">
      {/* Background Energy Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-60 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-orbitron font-bold chrome-text text-center mb-24 glitch-effect hover:animate-neon-pulse transform hover:scale-110 transition-all duration-700"
            style={{ 
              filter: 'drop-shadow(0 0 30px hsl(var(--neon-pink))) drop-shadow(0 0 60px hsl(var(--neon-cyan)))',
              textShadow: '0 0 20px hsl(var(--neon-pink)), 0 0 40px hsl(var(--neon-pink)), 0 0 80px hsl(var(--neon-pink))'
            }}>
          [ CONTACT_PROTOCOL ]
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ultra Enhanced Phone */}
          <div className="vhs-label p-12 rounded-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-pink/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-purple/20 animate-pulse group-hover:animate-ping"></div>
            <div className="flex items-center gap-6 mb-6 relative z-10">
              <Phone className="text-neon-pink animate-bounce shadow-2xl shadow-neon-pink/50" size={48} 
                     style={{ filter: 'drop-shadow(0 0 20px hsl(var(--neon-pink)))' }} />
              <span className="text-neon-cyan font-mono text-2xl tracking-wider animate-neon-flicker"
                    style={{ textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))' }}>
                VOICE_LINE
              </span>
            </div>
            <p className="text-4xl md:text-5xl font-orbitron font-bold neon-text hover:animate-pulse relative z-10"
               style={{ textShadow: '0 0 15px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan)), 0 0 60px hsl(var(--neon-cyan))' }}>
              +1 (555) 80S-WAVE
            </p>
            <div className="mt-4 h-2 bg-gradient-to-r from-neon-pink via-neon-cyan via-neon-purple to-neon-orange rounded-full animate-pulse shadow-lg shadow-neon-pink/50 relative z-10"></div>
            
            {/* Floating particles around phone */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-neon-pink rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-neon-cyan rounded-full animate-ping opacity-80" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Ultra Enhanced Email */}
          <div className="vhs-label p-12 rounded-2xl transform hover:scale-110 hover:-rotate-2 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-purple/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20 animate-pulse group-hover:animate-ping"></div>
            <div className="flex items-center gap-6 mb-6 relative z-10">
              <Mail className="text-neon-purple animate-bounce delay-500 shadow-2xl shadow-neon-purple/50" size={48}
                    style={{ filter: 'drop-shadow(0 0 20px hsl(var(--neon-purple)))' }} />
              <span className="text-neon-cyan font-mono text-2xl tracking-wider animate-neon-flicker"
                    style={{ textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan))' }}>
                DATA_STREAM
              </span>
            </div>
            <p className="text-4xl md:text-5xl font-orbitron font-bold neon-text break-all hover:animate-pulse relative z-10"
               style={{ textShadow: '0 0 15px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan)), 0 0 60px hsl(var(--neon-cyan))' }}>
              videojames@neon.future
            </p>
            <div className="mt-4 h-2 bg-gradient-to-r from-neon-purple via-neon-orange via-neon-pink to-neon-cyan rounded-full animate-pulse delay-500 shadow-lg shadow-neon-purple/50 relative z-10"></div>
            
            {/* Floating particles around email */}
            <div className="absolute top-4 left-4 w-4 h-4 bg-neon-purple rounded-full animate-ping opacity-70"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-neon-orange rounded-full animate-ping opacity-90" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
