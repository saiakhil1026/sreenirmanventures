
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden bg-[#111] border border-white/5 h-[600px] cursor-pointer">
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      
      <div className="absolute bottom-0 left-0 p-8 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-[#d4af37] text-xs uppercase tracking-widest mb-2 block">
          {project.category}
        </span>
        <h3 className="text-3xl font-display text-white mb-4">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
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
