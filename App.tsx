
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';

import WhatsAppButton from './components/WhatsAppButton';
import ProjectsPage from './components/ProjectsPage';
import ServiceProjectsPage from './components/ServiceProjectsPage';
import { Project } from './types';
import { Instagram, Facebook, Youtube } from 'lucide-react';



const CONSTRUCTION_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Precision Plots',
    category: 'Open spaces',
    description: 'Strategic acquisition of high-appreciation land parcels in premium growth corridors. Our land banks are meticulously vetted for legal clarity, zoning potential, and future connectivity, offering a secure foundation for generational wealth.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    location: 'Prime Corridors',
    year: 'Ongoing'
  },
  {
    id: '2',
    title: 'Bespoke Villas',
    category: 'Luxury Living',
    description: 'Architectural marvels tailored to your persona. From contemporary minimalism to neo-classical grandeur, we construct independent residences that blend seamless indoor-outdoor living with sustainable design.',
    imageUrl: '/bespoke_villa.png',
    location: 'Gated Communities',
    year: 'Custom'
  }
];

const PREMIUM_SERVICES: Project[] = [
  {
    id: '3',
    title: 'Interior Curation',
    category: 'Aesthetic Design',
    description: 'Transforming shells into sanctuaries. Our interior design wing curates global art, bespoke furniture, and lighting concepts. We harmonize textures, colors, and spatial flow to create environments that are both visually stunning and deeply comforting.',
    imageUrl: '/interior-design.png',
    location: '',
    year: ''
  },
  {
    id: '4',
    title: 'Construction Services',
    category: 'Build your dream house',
    description: 'We understand that every house is a reflection of its owner. Our construction services are designed to bring your vision to life, ensuring every detail is executed with precision and care.',
    imageUrl: '/veridian.png',
    location: '',
    year: ''
  }
];

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

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
              Led by a Vision of Excellence, SREE NIRMAN VENTURES,
              approaches construction as a fine art. Our philosophy is rooted in the belief that the spaces we create should inspire, protect, and transcend. Every project is a synthesis of cutting-edge technology and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div id="our-projects" className="scroll-mt-32 flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
              <h2 className="text-6xl font-display text-white">Projects</h2>
            </div>
            {/* <p className="text-white/40 text-sm md:max-w-xs mt-6 md:mt-0 leading-relaxed">
              Curated selection of our most ambitious developments.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-24">
            {CONSTRUCTION_PROJECTS.map(project => (
              <Link
                to={project.id === '1' ? '/projects/plots' : '/projects/villas'}
                key={project.id}
                className="block cursor-pointer"
              >
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>

          <div id="our-services" className="scroll-mt-32 flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-4 block">Exclusive Care</span>
              <h2 className="text-6xl font-display text-white">Services</h2>
            </div>
            {/* <p className="text-white/40 text-sm md:max-w-xs mt-6 md:mt-0 leading-relaxed">
              Comprehensive lifestyle and asset management solutions.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {PREMIUM_SERVICES.map(project => (
              <Link
                to={project.id === '3' ? '/services/interior' : '/services/management'}
                key={project.id}
                className="block cursor-pointer"
              >
                <ProjectCard project={project} />
              </Link>
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
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/sreenirmanventures/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='Instagram'">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61585424236161" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='Facebook'">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.threads.com/@sreenirmanventures" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='Threads'">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" /></svg>
            </a>
            <a href="https://x.com/sreenirman1968" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='X (Twitter)'">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://www.youtube.com/@SREENIRMANVENTURES" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='YouTube'">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2026 Sree Nirman Ventures. All Rights Reserved.
          </p>
        </div>
      </footer>


      <WhatsAppButton />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/plots" element={<ServiceProjectsPage type="plots" />} />
        <Route path="/projects/villas" element={<ServiceProjectsPage type="villas" />} />
        <Route path="/services/interior" element={<ServiceProjectsPage type="interior" />} />
        <Route path="/services/management" element={<ServiceProjectsPage type="management" />} />
      </Routes>
    </Router>
  )
};

export default App;
