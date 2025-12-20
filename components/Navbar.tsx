
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Premium Architectural Logo */}
          <div className="w-10 h-10 flex items-center justify-center relative">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L90 25V75L50 95L10 75V25L50 5Z" stroke="#d4af37" strokeWidth="2" strokeLinejoin="round" />
              <path d="M50 5V95M10 25L90 75M90 25L10 75" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.3" />
              <path d="M30 40L50 30L70 40V60L50 70L30 60V40Z" fill="url(#gold-grad)" fillOpacity="0.8" />
              <defs>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="50%" stopColor="#f9e29f" />
                  <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-lg md:text-2xl font-display font-bold tracking-widest gold-gradient uppercase">
            SREE NIRMAN VENTURES
          </div>
        </div>
        <div className="hidden md:flex space-x-8 lg:space-x-12 text-sm uppercase tracking-widest font-medium text-white/70">
          <a href="#hero" className="hover:text-white transition-colors">Origins</a>
          <a href="#about" className="hover:text-white transition-colors">Legacy</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Vision</a>
          <a href="#contact" className="hover:text-white transition-colors">Inquiry</a>
        </div>
        <button className="px-6 py-2 border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37] text-xs uppercase tracking-tighter transition-all duration-300">
          Book View
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
