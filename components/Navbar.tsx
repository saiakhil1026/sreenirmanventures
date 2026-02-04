import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const navLinks = [
    { name: 'Origins', href: '/#hero' },
    { name: 'Legacy', href: '/#about' },
    { name: 'Projects', href: '/#our-projects' },
    { name: 'Services', href: '/#our-services' },
    { name: 'Vision', href: '/#philosophy' },
    { name: 'Inquiry', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        <div
          ref={buttonRef}
          className="flex items-center gap-3 cursor-pointer z-50 relative"
          onClick={toggleMobileMenu}
        >
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
          <div className="text-lg md:text-xl lg:text-2xl font-display font-bold tracking-widest gold-gradient uppercase whitespace-nowrap">
            SREE NIRMAN VENTURES
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 xl:space-x-12 text-sm uppercase tracking-widest font-medium text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
              onClick={(e) => {
                if (window.location.pathname === '/' && link.href.startsWith('/#')) {
                  e.preventDefault();
                  const targetId = link.href.substring(2);
                  const elem = document.getElementById(targetId);
                  if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Content */}
        <div
          ref={menuRef}
          className={`absolute top-full left-6 mt-2 w-64 bg-gradient-to-b from-neutral-900/95 to-black/95 backdrop-blur-2xl z-40 rounded-xl border border-[#d4af37]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 origin-top-left lg:hidden ${isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-4 text-sm font-display text-white/80 hover:text-[#d4af37] hover:bg-white/5 tracking-[0.2em] uppercase transition-all duration-300 border-b border-white/5 last:border-0"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (window.location.pathname === '/' && link.href.startsWith('/#')) {
                    e.preventDefault();
                    const targetId = link.href.substring(2);
                    const elem = document.getElementById(targetId);
                    if (elem) {
                      elem.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
