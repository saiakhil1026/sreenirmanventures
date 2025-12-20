
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden scroll-mt-24">
      {/* Subtle background pattern - fine diagonal lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #d4af37, #d4af37 1px, transparent 1px, transparent 10px)' }}>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-[#d4af37] text-sm uppercase tracking-[0.5em] mb-8 block font-medium">
          OUR LEGACY
        </span>

        <h2 className="text-5xl md:text-7xl font-display mb-12 text-white">
          About <span className="gold-gradient italic">SREE NIRMAN VENTURES</span>
        </h2>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-16"></div>

        <div className="space-y-10">
          <h3 className="text-2xl md:text-4xl font-display text-white/90 leading-tight">
            Crafting Architectural Excellence
          </h3>

          <div className="max-w-3xl mx-auto space-y-8 text-lg text-white/60 font-light leading-relaxed">
            <p>
              At <span className="text-white/80 font-medium">SREE NIRMAN VENTURES</span>, we believe that every structure tells a story. For over two decades, we have been the architects of dreams, transforming raw land into luxurious living spaces and commercial landmarks that define skylines.
            </p>

            <p>
              Our commitment to excellence, uncompromising quality, and attention to detail has earned us the trust of discerning clients who seek nothing but the finest in construction and real estate development.
            </p>

            <p>
              From premium residential villas to towering commercial complexes, every project we undertake is a testament to our dedication to building not just structures, but legacies that endure generations.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
