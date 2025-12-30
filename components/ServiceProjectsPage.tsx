import React, { useEffect } from 'react';
import Navbar from './Navbar';
import RealEstateProjectCard from './RealEstateProjectCard';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';
import Concierge from './Concierge';
import MaterialDetailsModal, { MaterialSpecs } from './MaterialDetailsModal';
import ManagementTierCard from './ManagementTierCard';
import { INTERIOR_PROJECTS, MANAGEMENT_PROJECTS, PLOTS_PROJECTS, VILLAS_PROJECTS } from '../data/projects';
import { Instagram, Facebook, Youtube, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProjectsPageProps {
    type: 'interior' | 'management' | 'plots' | 'villas';
}

const ServiceProjectsPage: React.FC<ServiceProjectsPageProps> = ({ type }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    const [selectedTier, setSelectedTier] = React.useState<{ title: string; materials: MaterialSpecs } | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleViewSpecs = (title: string, materials: MaterialSpecs) => {
        setSelectedTier({ title, materials });
        setIsModalOpen(true);
    };

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
            title = <>Construction <span className="italic text-[#d4af37]">Services</span></>;
            subtitle = 'Comprehensive oversight for your valuable assets.';
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
                    <div className={type === 'management' ? "w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"}>
                        {type === 'management' ? (
                            // Management Tiers Grid
                            <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                                <ManagementTierCard
                                    title="Basic"
                                    description="Essential core services"
                                    features={[
                                        "Trusted brand Cement and Steel",
                                        "Standard Floor Tiles",
                                        "Standard Doors & UPVC Windows",
                                        "Essential Kitchen & Bathroom Fittings",
                                        "Basic Emulsion Paint"

                                    ]}
                                    delay={0}
                                    materials={{
                                        cements: ["Hemadri", "Sagar", "Priya"],
                                        steel: ["Simhadri", "Radha"],
                                        plumbing: ["Supreme & Sonet"],
                                        sanitary: ["Supreme & Sonet"],
                                        electrical: {
                                            wiring: ["Salzer"],
                                            switches: ["Salzer"]
                                        },
                                        paints: ["Asian Paints / Dulux / Berger (Ace & Tractor Quality)"]
                                    }}
                                    onSelect={handleViewSpecs}
                                />
                                <ManagementTierCard
                                    title="Economy"
                                    description="Essential oversight for compact needs"
                                    features={[
                                        "Trusted brand Cement and Steel,",
                                        "Double Charged Floor Tiles",
                                        "Standard Doors & Tata Windows",
                                        "Stylish Kitchen & Bathroom Fittings",
                                        "Economy Emulsion Paint"
                                    ]}
                                    delay={100}
                                    materials={{
                                        cements: ["Maha", "Deccan", "Chetinadu"],
                                        steel: ["Simhadri", "Radha"],
                                        plumbing: ["Supreme & Sonet/Cera"],
                                        sanitary: ["Supreme & Sonet / Cera"],
                                        electrical: {
                                            wiring: ["Goldmedal"],
                                            switches: ["Goldmedal"]
                                        },
                                        paints: ["Asian Paints / Dulux / Berger (Ace shyne & Tractor shyne)"]
                                    }}
                                    onSelect={handleViewSpecs}
                                />
                                <ManagementTierCard
                                    title="Premium"
                                    description="Enhanced living experience"
                                    isPopular={true}
                                    features={[
                                        "Prime Quality Cement & Steel",
                                        "Double Charged Floor Tiles",
                                        "Standard Doors & Windows (Wood/Aluminium)",
                                        "Premium Kitchen & Bathroom Fittings",
                                        "Premium Emulsion Paint"

                                    ]}
                                    delay={200}
                                    materials={{
                                        cements: ["Dalmia", "ACC", "Raasi"],
                                        steel: ["Vizag"],
                                        plumbing: ["Astral/Ashirvad & Hindware/Parryware"],
                                        sanitary: ["Astral/Ashirvad & Hindware/Parryware"],
                                        electrical: {
                                            wiring: ["Anchor"],
                                            switches: ["Anchor Roma"]
                                        },
                                        paints: ["Asian Paints / Dulux / Berger (Apex & Premium Quality)"]
                                    }}
                                    onSelect={handleViewSpecs}
                                />
                                <ManagementTierCard
                                    title="Luxury"
                                    description="White-glove concierge living"
                                    features={[
                                        "Prime Quality Cement & Steel",
                                        "Double Charged Floor Tiles",
                                        "Standard Doors & Windows (Teak Wood/Aluminium)",
                                        "Lavish Kitchen & Bathroom Fittings",
                                        "Luxury Emulsion Paint"

                                    ]}
                                    delay={300}
                                    materials={{
                                        cements: ["UltraTech"],
                                        steel: ["Tata"],
                                        plumbing: ["Astral/Ashirvad", "Jaquar/Kohler"],
                                        sanitary: ["Astral/Ashirvad", "Jaquar/Kohler"],
                                        electrical: {
                                            wiring: ["Polycab", "Finolex"],
                                            switches: ["Legrand"]
                                        },
                                        paints: ["Asian Paints / Dulux / Berger (Ultima & Royale Quality)"]
                                    }}
                                    onSelect={handleViewSpecs}
                                />
                            </div>
                        ) : (
                            // Standard Projects Grid
                            data.map(project => (
                                <RealEstateProjectCard
                                    key={project.id}
                                    project={project}
                                    variant={(type === 'interior' || type === 'management') ? 'service' : 'project'}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Material Modal */}
            {selectedTier && (
                <MaterialDetailsModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    tierTitle={selectedTier.title}
                    materials={selectedTier.materials}
                />
            )}

            {/* Contact Section */}
            <Contact />

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
