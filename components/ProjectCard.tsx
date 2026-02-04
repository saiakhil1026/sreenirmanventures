
import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden bg-[#111] border border-white/5 h-[400px] md:h-[500px] lg:h-[600px] cursor-pointer rounded-2xl">
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

      {/* Refined "Explore" Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 overflow-hidden">
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:bg-[#d4af37] group-hover:border-[#d4af37] group-hover:scale-110">
          <ArrowUpRight className="w-5 h-5 text-white transition-colors duration-500 group-hover:text-black" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-8 w-full md:w-3/4 z-10">
        <span className="text-[#d4af37] text-xs uppercase tracking-widest mb-2 block">
          {project.category}
        </span>
        <h3 className="text-3xl font-display text-white mb-4">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
          <span className="text-white/40 text-xs uppercase tracking-tighter">
            {project.location} • {project.year}
          </span>
          <div className="w-12 h-[1px] bg-[#d4af37]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
