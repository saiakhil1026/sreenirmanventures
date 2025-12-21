import React, { useEffect } from 'react';
import Navbar from './Navbar';
import RealEstateProjectCard from './RealEstateProjectCard';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';
import Concierge from './Concierge';
import { INTERIOR_PROJECTS, MANAGEMENT_PROJECTS, PLOTS_PROJECTS, VILLAS_PROJECTS } from '../data/projects';
import { Instagram, Facebook, Twitter, Youtube, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProjectsPageProps {
    type: 'interior' | 'management' | 'plots' | 'villas';
}

const ServiceProjectsPage: React.FC<ServiceProjectsPageProps> = ({ type }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    let data;
    let title;
    let subtitle;

    switch (type) {
        case 'interior':
            data = INTERIOR_PROJECTS;
            title = <>Interior <span className="italic text-[#d4af37]">Sanctuaries</span></>;
            subtitle = 'Transforming spaces into timeless experiences.';
            break;
        case 'management':
            data = MANAGEMENT_PROJECTS;
            title = <>Asset <span className="italic text-[#d4af37]">Stewardship</span></>;
            subtitle = 'Preserving value through excellence in care.';
            break;
        case 'plots':
            data = PLOTS_PROJECTS;
            title = <>Premium <span className="italic text-[#d4af37]">Landscapes</span></>;
            subtitle = 'Strategic land investments in high-growth corridors.';
            break;
        case 'villas':
            data = VILLAS_PROJECTS;
            title = <>Bespoke <span className="italic text-[#d4af37]">Residences</span></>;
            subtitle = 'Architectural marvels designed for ultra-luxury living.';
            break;
        default:
            data = [];
            title = 'Our Portfolio';
            subtitle = 'Explore our projects.';
    }

    const backLink = (type === 'plots' || type === 'villas') ? '/#our-projects' : '/#our-services';

    return (
        <div className="relative min-h-screen bg-[#050505]">
            <Navbar />

            {/* Back Navigation */}
            <div className="pt-32 px-6 max-w-7xl mx-auto">
                <Link to={backLink} className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Header */}
            <div className="pt-10 pb-20 px-6 text-center">
                <span className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-4 block animate-fade-in">Our Portfolio</span>
                <h1 className="text-5xl md:text-7xl font-display text-white mb-8 animate-fade-in-up">
                    {title}
                </h1>
                <p className="text-white/40 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                    {subtitle} Explore our current and upcoming projects.
                </p>
            </div>

            {/* Projects Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {data.map(project => (
                            <RealEstateProjectCard
                                key={project.id}
                                project={project}
                                variant={(type === 'interior' || type === 'management') ? 'service' : 'project'}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
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

export default ServiceProjectsPage;
