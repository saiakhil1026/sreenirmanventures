import React, { useEffect } from 'react';
import Navbar from './Navbar';
import RealEstateProjectCard from './RealEstateProjectCard';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';
import Concierge from './Concierge';
import { REAL_PROJECTS } from '../data/projects';
import { Instagram, Facebook, Twitter, Youtube, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#050505]">
            <Navbar />

            {/* Back Navigation */}
            <div className="pt-32 px-6 max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Header */}
            <div className="pt-10 pb-20 px-6 text-center">
                <span className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-4 block animate-fade-in">Our Portfolio</span>
                <h1 className="text-5xl md:text-7xl font-display text-white mb-8 animate-fade-in-up">
                    Architectural <span className="italic text-[#d4af37]">Masterpieces</span>
                </h1>
                <p className="text-white/40 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
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
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='X (Twitter)'">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 aria-label='YouTube'">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                    <p className="text-white/20 text-[10px] uppercase tracking-widest">
                        © 2024 Sree Nirman Ventures. All Rights Reserved.
                    </p>
                </div>
            </footer>

            <Concierge />
            <WhatsAppButton />
        </div>
    );
};

export default ProjectsPage;
