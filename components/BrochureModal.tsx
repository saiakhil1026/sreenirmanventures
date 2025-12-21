import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Download, FileText } from 'lucide-react';
import { Project } from '../types';

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, project }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            setIsVisible(false);
            document.body.style.overflow = 'unset';
            return;
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-5xl h-[85vh] bg-[#0a0a0a] border border-white/10 flex flex-col shadow-2xl transform transition-all duration-500 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#111]">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/5 rounded-full">
                            <FileText className="w-5 h-5 text-[#d4af37]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-display text-white">{project.title}</h3>
                            <span className="text-xs uppercase tracking-widest text-white/40">Project Brochure</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href={project.brochureUrl}
                            download
                            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download PDF
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer / Content Area */}
                <div className="flex-1 bg-[#050505] relative w-full h-full">
                    {project.brochureUrl ? (
                        <iframe
                            src={project.brochureUrl}
                            className="w-full h-full border-none"
                            title={`${project.title} Brochure`}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-white/30">
                            <FileText className="w-16 h-16 mb-4 opacity-50" />
                            <p>Brochure preview not available.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default BrochureModal;
