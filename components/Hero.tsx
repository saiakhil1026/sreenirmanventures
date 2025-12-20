
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden scroll-mt-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Background Image (Architectural placeholder) */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
        alt="Luxury Architecture"
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[10000ms] hover:scale-110"
      />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h2 className="text-white/60 text-sm uppercase tracking-[0.5em] mb-6">
          Legacy of Excellence
        </h2>
        <h1 className="text-6xl md:text-9xl font-display font-medium text-white mb-8 leading-tight">
          Crafting <span className="italic font-light">Ethereal</span> Structures
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Redefining the horizon through meticulous engineering and uncompromising luxury. Where every stone tells a story of grandeur.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#services" className="px-10 py-4 bg-[#d4af37] text-black font-semibold uppercase tracking-widest hover:bg-white transition-all duration-500">
            Our Services
          </a>
          <a href="#contact" className="px-10 py-4 border border-white/20 text-white hover:bg-white/10 transition-all duration-500 uppercase tracking-widest text-sm">
            Private Consultation
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </div>
    </section>
  );
};

export default Hero;
