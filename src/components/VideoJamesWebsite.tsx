
import React, { useState } from 'react';
import { Mail, Phone, Play, Pause, Volume2, DollarSign } from 'lucide-react';

const VideoJamesWebsite = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-darker-bg to-dark-bg text-neon-cyan overflow-hidden">
      {/* Synthwave Grid Background */}
      <div className="fixed inset-0 synthwave-grid pointer-events-none" />
      
      {/* Scanlines Effect */}
      <div className="fixed inset-0 scanlines pointer-events-none" />

      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 z-10">
          {/* Main Logo */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black chrome-text tracking-wider transform hover:scale-105 transition-transform duration-300">
              VIDEO
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black neon-pink tracking-wider transform hover:scale-105 transition-transform duration-300 animate-neon-pulse">
              JAMES
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="vhs-border p-4 bg-black/50 backdrop-blur-sm max-w-md mx-auto">
            <p className="text-lg md:text-xl neon-text font-mono tracking-wide">
              Broadcasting from the Neon Future
            </p>
          </div>

          {/* VHS Play Button */}
          <button 
            onClick={togglePlay}
            className="retro-button px-8 py-4 rounded-lg font-orbitron font-bold text-lg flex items-center gap-3 mx-auto hover:animate-pulse"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </button>
        </div>

        {/* Floating VHS Elements */}
        <div className="absolute top-20 left-10 opacity-30 animate-pulse">
          <div className="w-16 h-10 bg-neon-pink rounded-sm border border-neon-cyan"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-30 animate-pulse delay-1000">
          <div className="w-12 h-8 bg-neon-purple rounded-sm border border-neon-orange"></div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold chrome-text text-center mb-12 glitch-effect">
            [ CONTACT_PROTOCOL ]
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="vhs-label p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-2">
                <Phone className="text-neon-pink" size={24} />
                <span className="text-neon-cyan font-mono text-sm tracking-wider">VOICE_LINE</span>
              </div>
              <p className="text-2xl font-orbitron font-bold neon-text">
                +1 (555) 80S-WAVE
              </p>
            </div>

            {/* Email */}
            <div className="vhs-label p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-2">
                <Mail className="text-neon-purple" size={24} />
                <span className="text-neon-cyan font-mono text-sm tracking-wider">DATA_STREAM</span>
              </div>
              <p className="text-2xl font-orbitron font-bold neon-text break-all">
                videojames@neon.future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold chrome-text text-center mb-12">
            [ ABOUT_ME.exe ]
          </h2>
          
          <div className="crt-screen vhs-border p-8 rounded-lg bg-black/40 backdrop-blur-sm mb-12">
            <p className="text-lg leading-relaxed neon-text font-mono">
              Welcome to my digital domain! I'm Video James, your friendly neighborhood voice actor 
              broadcasting from the neon-soaked streets of the cyber future. With years of experience 
              bringing characters to life, I specialize in everything from commercial narration to 
              character voices that'll transport you straight back to the golden age of late-night anime 
              and arcade adventures.
            </p>
          </div>

          {/* Where You May Have Heard Me */}
          <div className="mb-12">
            <h3 className="text-3xl font-orbitron font-bold neon-pink mb-8 text-center">
              &gt; WHERE_YOU_MAY_HAVE_HEARD_ME
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Video Player 1 */}
              <div className="crt-screen vhs-border p-4 bg-black/60 rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Volume2 className="text-neon-cyan mx-auto mb-2" size={48} />
                    <p className="neon-text font-mono">Demo Reel #1</p>
                    <p className="text-sm opacity-70 mt-2">Commercial Spots</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neon-cyan">
                  <Play size={16} />
                  <div className="h-1 bg-neon-pink rounded-full flex-1"></div>
                  <span className="text-xs font-mono">2:34</span>
                </div>
              </div>

              {/* Video Player 2 */}
              <div className="crt-screen vhs-border p-4 bg-black/60 rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 to-neon-orange/20 rounded flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Volume2 className="text-neon-pink mx-auto mb-2" size={48} />
                    <p className="neon-text font-mono">Demo Reel #2</p>
                    <p className="text-sm opacity-70 mt-2">Character Voices</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neon-cyan">
                  <Play size={16} />
                  <div className="h-1 bg-neon-purple rounded-full flex-1"></div>
                  <span className="text-xs font-mono">3:12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recording Specs */}
          <div>
            <h3 className="text-3xl font-orbitron font-bold neon-purple mb-8 text-center">
              &gt; RECORDING_SPECS.sys
            </h3>
            
            <div className="vhs-label p-8 rounded-lg font-mono">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-neon-cyan">MICROPHONE:</span>
                    <span className="neon-text">Audio-Technica AT2020</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neon-cyan">INTERFACE:</span>
                    <span className="neon-text">Focusrite Scarlett 2i2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neon-cyan">SOFTWARE:</span>
                    <span className="neon-text">Pro Tools | Audacity</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-neon-cyan">SAMPLE_RATE:</span>
                    <span className="neon-text">48kHz / 24-bit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neon-cyan">DELIVERY:</span>
                    <span className="neon-text">WAV | MP3 | AIFF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neon-cyan">TURNAROUND:</span>
                    <span className="neon-text">24-48 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold chrome-text text-center mb-12">
            [ PAYMENT_ACCEPTED ]
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* PayPal */}
            <div className="vhs-label p-6 rounded-lg text-center hover:scale-105 transition-transform">
              <DollarSign className="text-neon-cyan mx-auto mb-2" size={32} />
              <p className="neon-text font-orbitron font-bold">PayPal</p>
            </div>
            
            {/* Venmo */}
            <div className="vhs-label p-6 rounded-lg text-center hover:scale-105 transition-transform">
              <DollarSign className="text-neon-pink mx-auto mb-2" size={32} />
              <p className="neon-pink font-orbitron font-bold">Venmo</p>
            </div>
            
            {/* Cash App */}
            <div className="vhs-label p-6 rounded-lg text-center hover:scale-105 transition-transform">
              <DollarSign className="text-neon-purple mx-auto mb-2" size={32} />
              <p className="neon-purple font-orbitron font-bold">Cash App</p>
            </div>
            
            {/* Bank Transfer */}
            <div className="vhs-label p-6 rounded-lg text-center hover:scale-105 transition-transform">
              <DollarSign className="text-neon-orange mx-auto mb-2" size={32} />
              <p className="text-neon-orange font-orbitron font-bold">Bank Transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-neon-cyan/30">
        <div className="vhs-border inline-block p-4 bg-black/50 backdrop-blur-sm">
          <p className="neon-text font-mono text-sm">
            © 2024 VIDEO JAMES | TRANSMISSION_COMPLETE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VideoJamesWebsite;

