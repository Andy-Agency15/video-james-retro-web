
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactBentoCard = () => {
  return (
    <div className="vhs-border bg-black/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-neon-cyan/50 h-full">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-pink/10 animate-pulse group-hover:animate-ping"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold chrome-text text-center mb-8 hover:animate-neon-pulse transform hover:scale-110 transition-all duration-500"
            style={{ 
              filter: 'drop-shadow(0 0 20px hsl(var(--neon-pink))) drop-shadow(0 0 40px hsl(var(--neon-cyan)))',
              textShadow: '0 0 15px hsl(var(--neon-pink)), 0 0 30px hsl(var(--neon-pink))'
            }}>
          [ CONTACT ]
        </h2>
        
        <div className="space-y-6 flex-1">
          {/* Phone */}
          <div className="vhs-label p-6 rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-xl hover:shadow-neon-pink/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-purple/20 animate-pulse group-hover:animate-ping"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <Phone className="text-neon-pink animate-bounce shadow-xl shadow-neon-pink/50" size={32} 
                     style={{ filter: 'drop-shadow(0 0 15px hsl(var(--neon-pink)))' }} />
              <span className="text-neon-cyan font-mono text-lg tracking-wider animate-neon-flicker"
                    style={{ textShadow: '0 0 10px hsl(var(--neon-cyan))' }}>
                VOICE_LINE
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-orbitron font-bold neon-text hover:animate-pulse relative z-10"
               style={{ textShadow: '0 0 15px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan))' }}>
              +1 (555) 80S-WAVE
            </p>
            <div className="mt-3 h-2 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple rounded-full animate-pulse shadow-lg shadow-neon-pink/50 relative z-10"></div>
          </div>

          {/* Email */}
          <div className="vhs-label p-6 rounded-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-xl hover:shadow-neon-purple/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20 animate-pulse group-hover:animate-ping"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <Mail className="text-neon-purple animate-bounce delay-500 shadow-xl shadow-neon-purple/50" size={32}
                    style={{ filter: 'drop-shadow(0 0 15px hsl(var(--neon-purple)))' }} />
              <span className="text-neon-cyan font-mono text-lg tracking-wider animate-neon-flicker"
                    style={{ textShadow: '0 0 10px hsl(var(--neon-cyan))' }}>
                DATA_STREAM
              </span>
            </div>
            <p className="text-xl md:text-2xl font-orbitron font-bold neon-text break-all hover:animate-pulse relative z-10"
               style={{ textShadow: '0 0 15px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan))' }}>
              videojames@neon.future
            </p>
            <div className="mt-3 h-2 bg-gradient-to-r from-neon-purple via-neon-orange to-neon-cyan rounded-full animate-pulse delay-500 shadow-lg shadow-neon-purple/50 relative z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBentoCard;
