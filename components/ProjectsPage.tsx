import React, { useLayoutEffect } from 'react';
import Navbar from './Navbar';
import RealEstateProjectCard from './RealEstateProjectCard';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';
import Concierge from './Concierge';
import { REAL_PROJECTS } from '../data/projects';
import { Instagram, Facebook, Youtube, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#050505]">
            <Navbar />

            {/* Back Navigation */}
            <div className="pt-24 px-6 max-w-7xl mx-auto">
                <Link
                    to="/#our-projects"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-[#d4af37]/50 rounded-full text-[#d4af37] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Header */}
            <div className="py-8 px-6 text-center">
                <span className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-4 block">Our Portfolio</span>
                <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
                    Architectural <span className="italic text-[#d4af37]">Masterpieces</span>
                </h1>
                <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
                    A curated collection of our most ambitious developments, where engineering meets eternity.
                    Explore our ongoing, completed, and upcoming landmarks.
                </p>
            </div>

            {/* Projects Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* You can add tabs here later for Ongoing/Completed/Upcoming if needed */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {REAL_PROJECTS.map(project => (
                            <RealEstateProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer (Duplicated for now, or extract to SharedLayout) */}
            <footer className="py-12 px-6 bg-black border-t border-white/5">
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
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='Instagram'">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='Facebook'">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='Threads'">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" /></svg>
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='X (Twitter)'">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='YouTube'">
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
};

export default ProjectsPage;
