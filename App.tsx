
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Concierge from './components/Concierge';
import { Project } from './types';

const SERVICES: Project[] = [
  {
    id: '1',
    title: 'Precision Plots',
    category: 'Land Banking',
    description: 'Strategic acquisition of high-appreciation land parcels in premium growth corridors. Our land banks are meticulously vetted for legal clarity, zoning potential, and future connectivity, offering a secure foundation for generational wealth.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    location: 'Prime Corridors',
    year: 'Ongoing'
  },
  {
    id: '2',
    title: 'Bespoke Villas',
    category: 'Luxury Living',
    description: 'Architectural marvels tailored to your persona. From contemporary minimalism to neo-classical grandeur, we construct independent residences that blend seamless indoor-outdoor living with state-of-the-art automation and sustainable design.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    location: 'Gated Communities',
    year: 'Custom'
  },
  {
    id: '3',
    title: 'Interior Curation',
    category: 'Aesthetic Design',
    description: 'Transforming shells into sanctuaries. Our interior design wing curates global art, bespoke furniture, and lighting concepts. We harmonize textures, colors, and spatial flow to create environments that are both visually stunning and deeply comforting.',
    imageUrl: '/interior-design.png',
    location: 'Turnkey Solutions',
    year: 'Custom'
  },
  {
    id: '4',
    title: 'Property Management',
    category: 'Asset Care',
    description: 'A white-glove service ensuring your asset retains its pristine condition and value. From tenant vetting and lease management to preventative maintenance and concierge services, we handle every detail of your real estate portfolio.',
    imageUrl: '/veridian.png',
    location: 'Global Support',
    year: '24/7'
  }
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <About />

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 bg-black border-y border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-[#d4af37]/40"></div>
            <img
              src="/philosophy.png"
              alt="SREE NIRMAN VENTURES Philosophy"
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <span className="text-[#d4af37] text-sm uppercase tracking-[0.4em]">Our Ethos</span>
            <h2 className="text-5xl font-display leading-tight text-white">
              We Don't Just Build.<br />We <span className="italic">Compose</span>.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Under the visionary leadership of SREE NIRMAN VENTURES, we approach construction as a fine art. Our philosophy is rooted in the belief that space should inspire, protect, and transcend. Every project is a synthesis of cutting-edge technology and timeless elegance.
            </p>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="services" className="py-32 bg-[#0a0a0a] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div className="max-w-2xl">
              <span className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
              <h2 className="text-6xl font-display text-white">Our Premium Services</h2>
            </div>
            <p className="text-white/40 text-sm md:max-w-xs mt-6 md:mt-0 leading-relaxed">
              Curated selection of our most ambitious developments across the globe, where engineering meets eternity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {SERVICES.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5L90 25V75L50 95L10 75V25L50 5Z" stroke="#d4af37" strokeWidth="3" />
                <path d="M30 40L50 30L70 40V60L50 70L30 60V40Z" fill="#d4af37" />
              </svg>
            </div>
            <div className="text-xl font-display font-bold tracking-[0.2em] gold-gradient uppercase">
              SREE NIRMAN VENTURES
            </div>
          </div>
          <div className="text-white/30 text-xs uppercase tracking-widest flex space-x-8">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Architectural Digest</a>
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2024 Sree Nirman Ventures. All Rights Reserved.
          </p>
        </div>
      </footer>

      <Concierge />
    </div>
  );
};

export default App;
