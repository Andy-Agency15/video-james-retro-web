
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Play, Pause, Volume2, DollarSign, Zap, Radio, Tv } from 'lucide-react';

const VideoJamesWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000 + Math.random() * 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-darker-bg via-dark-bg to-darker-bg text-neon-cyan overflow-hidden relative">
      {/* Enhanced Synthwave Grid Background */}
      <div className="fixed inset-0 synthwave-grid pointer-events-none opacity-40" />
      
      {/* Multiple Scanlines Effect */}
      <div className="fixed inset-0 scanlines pointer-events-none" />
      <div className="fixed inset-0 scanlines pointer-events-none" style={{ animationDelay: '1s', opacity: 0.3 }} />

      {/* Floating Neon Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-pulse ${
              i % 4 === 0 ? 'bg-neon-pink' : 
              i % 4 === 1 ? 'bg-neon-cyan' : 
              i % 4 === 2 ? 'bg-neon-purple' : 'bg-neon-orange'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Pulsing Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-96 rounded-full border-4 border-neon-pink animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute w-80 h-80 rounded-full border-2 border-neon-cyan animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          <div className="absolute w-64 h-64 rounded-full border-2 border-neon-purple animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>

        <div className="text-center space-y-8 z-10">
          {/* Enhanced Main Logo */}
          <div className="space-y-4 relative">
            <div className="relative">
              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-orbitron font-black chrome-text tracking-wider transform hover:scale-110 transition-all duration-500 ${glitchActive ? 'animate-glitch' : ''}`}>
                VIDEO
              </h1>
              {/* Glitch duplicates */}
              <h1 className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-neon-pink tracking-wider opacity-30 translate-x-1 -translate-y-1 pointer-events-none">
                VIDEO
              </h1>
              <h1 className="absolute top-0 left-0 text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-neon-cyan tracking-wider opacity-20 -translate-x-1 translate-y-1 pointer-events-none">
                VIDEO
              </h1>
            </div>
            
            <div className="relative">
              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-orbitron font-black neon-pink tracking-wider transform hover:scale-110 transition-all duration-500 animate-neon-pulse ${glitchActive ? 'animate-glitch' : ''}`}>
                JAMES
              </h1>
              {/* Lightning bolts around name */}
              <Zap className="absolute -top-4 -left-8 text-neon-orange animate-bounce" size={32} style={{ animationDelay: '0.5s' }} />
              <Zap className="absolute -bottom-4 -right-8 text-neon-cyan animate-bounce" size={28} style={{ animationDelay: '1.5s' }} />
              <Radio className="absolute top-1/2 -left-12 text-neon-purple animate-spin" size={24} style={{ animationDuration: '3s' }} />
              <Tv className="absolute top-1/2 -right-12 text-neon-pink animate-bounce" size={24} style={{ animationDelay: '2s' }} />
            </div>
          </div>
          
          {/* Enhanced Tagline */}
          <div className="vhs-border p-6 bg-black/70 backdrop-blur-md max-w-lg mx-auto transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-pink/50">
            <p className="text-xl md:text-2xl neon-text font-mono tracking-wide animate-neon-flicker">
              Broadcasting from the Neon Future
            </p>
            <div className="mt-2 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full animate-pulse bg-neon-${i % 2 === 0 ? 'pink' : 'cyan'}`} style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>

          {/* Enhanced VHS Play Button */}
          <button 
            onClick={togglePlay}
            className="retro-button px-12 py-6 rounded-xl font-orbitron font-bold text-xl flex items-center gap-4 mx-auto hover:animate-pulse transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-cyan/50"
          >
            {isPlaying ? <Pause size={32} className="animate-spin" /> : <Play size={32} className="animate-bounce" />}
            <span className="animate-neon-flicker">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>
        </div>

        {/* Enhanced Floating VHS Elements */}
        <div className="absolute top-20 left-10 opacity-50 animate-pulse hover:opacity-100 transition-opacity">
          <div className="w-20 h-12 bg-gradient-to-r from-neon-pink to-neon-purple rounded-sm border-2 border-neon-cyan transform hover:rotate-12 transition-transform duration-500 hover:scale-125"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-50 animate-pulse delay-1000 hover:opacity-100 transition-opacity">
          <div className="w-16 h-10 bg-gradient-to-r from-neon-cyan to-neon-orange rounded-sm border-2 border-neon-purple transform hover:-rotate-12 transition-transform duration-500 hover:scale-125"></div>
        </div>
        <div className="absolute top-1/2 left-20 opacity-30 animate-bounce">
          <div className="w-12 h-8 bg-gradient-to-r from-neon-orange to-neon-pink rounded-sm border border-neon-cyan"></div>
        </div>
        <div className="absolute top-1/3 right-20 opacity-30 animate-bounce delay-500">
          <div className="w-14 h-9 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-sm border border-neon-orange"></div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold chrome-text text-center mb-16 glitch-effect hover:animate-neon-pulse">
            [ CONTACT_PROTOCOL ]
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Enhanced Phone */}
            <div className="vhs-label p-8 rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-pink/30">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="text-neon-pink animate-bounce" size={32} />
                <span className="text-neon-cyan font-mono text-lg tracking-wider animate-neon-flicker">VOICE_LINE</span>
              </div>
              <p className="text-3xl font-orbitron font-bold neon-text hover:animate-pulse">
                +1 (555) 80S-WAVE
              </p>
              <div className="mt-2 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Email */}
            <div className="vhs-label p-8 rounded-xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-purple/30">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="text-neon-purple animate-bounce delay-500" size={32} />
                <span className="text-neon-cyan font-mono text-lg tracking-wider animate-neon-flicker">DATA_STREAM</span>
              </div>
              <p className="text-3xl font-orbitron font-bold neon-text break-all hover:animate-pulse">
                videojames@neon.future
              </p>
              <div className="mt-2 h-1 bg-gradient-to-r from-neon-purple via-neon-orange to-neon-cyan rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold chrome-text text-center mb-16 hover:animate-neon-pulse">
            [ ABOUT_ME.exe ]
          </h2>
          
          <div className="crt-screen vhs-border p-10 rounded-xl bg-black/60 backdrop-blur-md mb-16 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/20">
            <p className="text-xl leading-relaxed neon-text font-mono hover:animate-neon-flicker">
              Welcome to my digital domain! I'm Video James, your friendly neighborhood voice actor 
              broadcasting from the neon-soaked streets of the cyber future. With years of experience 
              bringing characters to life, I specialize in everything from commercial narration to 
              character voices that'll transport you straight back to the golden age of late-night anime 
              and arcade adventures.
            </p>
            <div className="mt-4 flex justify-center space-x-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full animate-pulse bg-neon-${i % 4 === 0 ? 'pink' : i % 4 === 1 ? 'cyan' : i % 4 === 2 ? 'purple' : 'orange'}`} style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
          </div>

          {/* Where You May Have Heard Me */}
          <div className="mb-16">
            <h3 className="text-4xl font-orbitron font-bold neon-pink mb-12 text-center animate-neon-pulse">
              &gt; WHERE_YOU_MAY_HAVE_HEARD_ME
            </h3>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Enhanced Video Players */}
              {[
                { title: "Demo Reel #1", subtitle: "Commercial Spots", gradient: "from-neon-purple/30 to-neon-pink/30", duration: "2:34", color: "neon-pink" },
                { title: "Demo Reel #2", subtitle: "Character Voices", gradient: "from-neon-cyan/30 to-neon-orange/30", duration: "3:12", color: "neon-purple" }
              ].map((video, index) => (
                <div key={index} className="crt-screen vhs-border p-6 bg-black/70 rounded-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/30">
                  <div className={`aspect-video bg-gradient-to-br ${video.gradient} rounded-lg flex items-center justify-center mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
                    <div className="text-center z-10">
                      <Volume2 className="text-neon-cyan mx-auto mb-3 animate-bounce" size={56} />
                      <p className="neon-text font-mono text-lg font-bold">{video.title}</p>
                      <p className="text-sm opacity-70 mt-2 animate-neon-flicker">{video.subtitle}</p>
                    </div>
                    {/* Fake scanlines on video */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent opacity-30"></div>
                  </div>
                  <div className="flex items-center gap-3 text-neon-cyan">
                    <Play size={20} className="animate-pulse" />
                    <div className={`h-2 bg-${video.color} rounded-full flex-1 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                    </div>
                    <span className="text-sm font-mono font-bold animate-neon-flicker">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Recording Specs */}
          <div>
            <h3 className="text-4xl font-orbitron font-bold neon-purple mb-12 text-center animate-neon-pulse">
              &gt; RECORDING_SPECS.sys
            </h3>
            
            <div className="vhs-label p-10 rounded-xl font-mono transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-purple/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { label: "MICROPHONE:", value: "Audio-Technica AT2020", color: "neon-cyan" },
                    { label: "INTERFACE:", value: "Focusrite Scarlett 2i2", color: "neon-pink" },
                    { label: "SOFTWARE:", value: "Pro Tools | Audacity", color: "neon-purple" }
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between items-center hover:scale-105 transition-transform">
                      <span className="text-neon-cyan animate-neon-flicker">{spec.label}</span>
                      <span className={`${spec.color} font-bold animate-pulse`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[
                    { label: "SAMPLE_RATE:", value: "48kHz / 24-bit", color: "neon-orange" },
                    { label: "DELIVERY:", value: "WAV | MP3 | AIFF", color: "neon-cyan" },
                    { label: "TURNAROUND:", value: "24-48 Hours", color: "neon-pink" }
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between items-center hover:scale-105 transition-transform">
                      <span className="text-neon-cyan animate-neon-flicker">{spec.label}</span>
                      <span className={`${spec.color} font-bold animate-pulse`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 h-2 bg-gradient-to-r from-neon-pink via-neon-cyan via-neon-purple to-neon-orange rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Payment Methods */}
      <section className="py-20 px-4 pb-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold chrome-text text-center mb-16 hover:animate-neon-pulse">
            [ PAYMENT_ACCEPTED ]
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "PayPal", color: "neon-cyan", icon: DollarSign },
              { name: "Venmo", color: "neon-pink", icon: DollarSign },
              { name: "Cash App", color: "neon-purple", icon: DollarSign },
              { name: "Bank Transfer", color: "neon-orange", icon: DollarSign }
            ].map((payment, index) => {
              const IconComponent = payment.icon;
              return (
                <div key={index} className="vhs-label p-8 rounded-xl text-center hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-pink/30 transform">
                  <IconComponent className={`text-${payment.color} mx-auto mb-4 animate-bounce`} size={40} style={{ animationDelay: `${index * 0.2}s` }} />
                  <p className={`${payment.color} font-orbitron font-bold text-lg animate-neon-flicker`}>{payment.name}</p>
                  <div className={`mt-2 h-1 bg-${payment.color} rounded-full animate-pulse`} style={{ animationDelay: `${index * 0.1}s` }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="text-center py-12 border-t-2 border-neon-cyan/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/10 to-transparent animate-pulse"></div>
        <div className="vhs-border inline-block p-6 bg-black/70 backdrop-blur-md hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-cyan/30 relative z-10">
          <p className="neon-text font-mono text-lg animate-neon-flicker">
            © 2024 VIDEO JAMES | TRANSMISSION_COMPLETE
          </p>
          <div className="mt-2 flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full animate-ping bg-neon-${i % 3 === 0 ? 'pink' : i % 3 === 1 ? 'cyan' : 'purple'}`} style={{ animationDelay: `${i * 0.5}s` }} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoJamesWebsite;
