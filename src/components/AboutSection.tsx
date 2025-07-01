
import React from 'react';
import { Volume2, Play } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-32 px-4 relative">
      {/* Diagonal laser beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-neon-pink opacity-40 transform rotate-12 animate-pulse" style={{ transformOrigin: 'center', animationDuration: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-neon-cyan opacity-40 transform -rotate-12 animate-pulse" style={{ transformOrigin: 'center', animationDuration: '3s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-orbitron font-bold chrome-text text-center mb-24 hover:animate-neon-pulse transform hover:scale-110 transition-all duration-700"
            style={{ 
              filter: 'drop-shadow(0 0 30px hsl(var(--neon-cyan))) drop-shadow(0 0 60px hsl(var(--neon-purple)))',
              textShadow: '0 0 20px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-cyan)), 0 0 80px hsl(var(--neon-cyan))'
            }}>
          [ ABOUT_ME.exe ]
        </h2>
        
        <div className="crt-screen vhs-border p-16 rounded-2xl bg-black/80 backdrop-blur-xl mb-24 transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-neon-cyan/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-pink/10 animate-pulse"></div>
          <p className="text-2xl md:text-3xl leading-relaxed neon-text font-mono hover:animate-neon-flicker relative z-10"
             style={{ textShadow: '0 0 10px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan)), 0 0 40px hsl(var(--neon-cyan))' }}>
            Welcome to my digital domain! I'm Video James, your friendly neighborhood voice actor 
            broadcasting from the neon-soaked streets of the cyber future. With years of experience 
            bringing characters to life, I specialize in everything from commercial narration to 
            character voices that'll transport you straight back to the golden age of late-night anime 
            and arcade adventures.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} 
                   className={`w-4 h-4 rounded-full animate-pulse shadow-lg ${
                     i % 4 === 0 ? 'bg-neon-pink shadow-neon-pink/50' : 
                     i % 4 === 1 ? 'bg-neon-cyan shadow-neon-cyan/50' : 
                     i % 4 === 2 ? 'bg-neon-purple shadow-neon-purple/50' : 
                     'bg-neon-orange shadow-neon-orange/50'
                   }`} 
                   style={{ animationDelay: `${i * 0.2}s`, animationDuration: `${1 + Math.random()}s` }} />
            ))}
          </div>
        </div>

        {/* Where You May Have Heard Me */}
        <div className="mb-24">
          <h3 className="text-5xl md:text-6xl font-orbitron font-bold neon-pink mb-16 text-center animate-neon-pulse transform hover:scale-110 transition-all duration-500"
              style={{ textShadow: '0 0 20px hsl(var(--neon-pink)), 0 0 40px hsl(var(--neon-pink)), 0 0 80px hsl(var(--neon-pink))' }}>
            &gt; WHERE_YOU_MAY_HAVE_HEARD_ME
          </h3>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Ultra Enhanced Video Players */}
            {[
              { title: "Demo Reel #1", subtitle: "Commercial Spots", gradient: "from-neon-purple/40 to-neon-pink/40", duration: "2:34", color: "neon-pink" },
              { title: "Demo Reel #2", subtitle: "Character Voices", gradient: "from-neon-cyan/40 to-neon-orange/40", duration: "3:12", color: "neon-purple" }
            ].map((video, index) => (
              <div key={index} className="crt-screen vhs-border p-10 bg-black/80 rounded-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-neon-cyan/40 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-pink/5 animate-pulse group-hover:animate-ping"></div>
                <div className={`aspect-video bg-gradient-to-br ${video.gradient} rounded-xl flex items-center justify-center mb-8 relative overflow-hidden shadow-2xl shadow-neon-pink/30`}>
                  <div className="absolute inset-0 bg-black/30 animate-pulse"></div>
                  <div className="text-center z-10 relative">
                    <Volume2 className="text-neon-cyan mx-auto mb-4 animate-bounce shadow-2xl shadow-neon-cyan/50" size={72} 
                             style={{ filter: 'drop-shadow(0 0 30px hsl(var(--neon-cyan)))' }} />
                    <p className="neon-text font-mono text-2xl font-bold mb-2"
                       style={{ textShadow: '0 0 15px hsl(var(--neon-cyan)), 0 0 30px hsl(var(--neon-cyan))' }}>
                      {video.title}
                    </p>
                    <p className="text-lg opacity-90 animate-neon-flicker"
                       style={{ textShadow: '0 0 10px hsl(var(--neon-pink))' }}>
                      {video.subtitle}
                    </p>
                  </div>
                  {/* Enhanced scanlines on video */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-50 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/10 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Floating particles in video */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-neon-pink rounded-full animate-ping opacity-80"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-neon-cyan rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="flex items-center gap-4 text-neon-cyan relative z-10">
                  <Play size={32} className="animate-pulse shadow-lg shadow-neon-cyan/50" 
                       style={{ filter: 'drop-shadow(0 0 15px hsl(var(--neon-cyan)))' }} />
                  <div className={`h-3 bg-${video.color} rounded-full flex-1 relative overflow-hidden shadow-lg shadow-neon-pink/50`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse" style={{ animationDuration: '2s' }}></div>
                  </div>
                  <span className="text-lg font-mono font-bold animate-neon-flicker"
                        style={{ textShadow: '0 0 10px hsl(var(--neon-cyan))' }}>
                    {video.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
