import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, MapPin, FileText } from 'lucide-react';
import BrochureModal from './BrochureModal';

interface RealEstateProjectCardProps {
    project: Project;
}

const RealEstateProjectCard: React.FC<RealEstateProjectCardProps> = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="group relative bg-[#111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#d4af37]/30">
                {/* Image Container - Opens Brochure Modal */}
                <div
                    onClick={() => setIsModalOpen(true)}
                    className="block relative h-[400px] overflow-hidden cursor-pointer"
                    aria-label={`View brochure for ${project.title}`}
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Overlay Icon on Hover - Brochure */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-full border border-white/10 mb-2">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-white text-xs uppercase tracking-widest font-medium bg-black/60 px-3 py-1 rounded backdrop-blur-md">View Brochure</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                    {/* Map Pin - Links to Location */}
                    <a
                        href={project.projectUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 right-0 p-8 opacity-10 hover:opacity-100 transition-opacity duration-300 group/pin"
                        aria-label={`View location on map for ${project.title}`}
                    >
                        <MapPin className="w-24 h-24 text-white group-hover/pin:text-[#d4af37] transition-colors" />
                    </a>

                    <span className="text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-3 block">
                        {project.category}
                    </span>

                    <h3 className="text-2xl font-display text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                        {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
                        <MapPin className="w-4 h-4" />
                        <span className="uppercase tracking-wider">{project.location}</span>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                        {project.description}
                    </p>

                    <div className="flex justify-between items-center pt-6 border-t border-white/5">
                        <span className="text-white/30 text-xs">Status: <span className="text-white">{project.year}</span></span>
                        <a
                            href={project.projectUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs uppercase tracking-widest text-white hover:text-[#d4af37] transition-colors flex items-center gap-2"
                        >
                            View Location <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            <BrochureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={project}
            />
        </>
    );
};

export default RealEstateProjectCard;
