import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export interface MaterialSpecs {
    cements: string[];
    steel: string[];
    plumbing: string[];
    sanitary: string[];
    electrical: {
        wiring: string[];
        switches: string[];
    };
    paints: string[];
}

interface MaterialDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    tierTitle: string;
    materials: MaterialSpecs;
}

const MaterialDetailsModal: React.FC<MaterialDetailsModalProps> = ({ isOpen, onClose, tierTitle, materials }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-[95%] sm:w-full max-w-2xl bg-[#0f0f0f] border border-[#d4af37]/20 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden animate-fade-in-up max-h-[85vh] flex flex-col">

                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#151515]">
                    <div>
                        <span className="text-[#d4af37] text-xs uppercase tracking-[0.2em] block mb-1">Specifications</span>
                        <h3 className="text-2xl font-display text-white">
                            {tierTitle} <span className="font-light text-white/50">Plan</span>
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-4 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <MaterialSection title="Cement" items={materials.cements} />
                        <MaterialSection title="Steel" items={materials.steel} />
                        <MaterialSection title="Plumbing" items={materials.plumbing} />
                        <MaterialSection title="Sanitary" items={materials.sanitary} />

                        {/* Electrical Special Section */}
                        <div className="col-span-1 md:col-span-2 bg-white/5 rounded-xl p-6 border border-white/5">
                            <h4 className="text-[#d4af37] text-sm uppercase tracking-widest mb-4 font-bold border-b border-white/10 pb-2">Electrical</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <span className="text-white/50 text-xs uppercase tracking-wider block mb-2">Wiring</span>
                                    <div className="flex flex-wrap gap-2">
                                        {materials.electrical.wiring.map((item, idx) => (
                                            <span key={idx} className="bg-black/40 text-white/90 px-3 py-1 rounded text-sm border border-white/10">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-white/50 text-xs uppercase tracking-wider block mb-2">Switches</span>
                                    <div className="flex flex-wrap gap-2">
                                        {materials.electrical.switches.map((item, idx) => (
                                            <span key={idx} className="bg-black/40 text-white/90 px-3 py-1 rounded text-sm border border-white/10">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MaterialSection title="Paints" items={materials.paints} fullWidth />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-[#151515] flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                        Got It
                    </button>
                </div>
            </div>
        </div>
    );
};

const MaterialSection: React.FC<{ title: string; items: string[]; fullWidth?: boolean }> = ({ title, items, fullWidth }) => (
    <div className={`bg-white/5 rounded-xl p-6 border border-white/5 space-y-3 ${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
        <h4 className="text-[#d4af37] text-sm uppercase tracking-widest font-bold border-b border-white/10 pb-2">{title}</h4>
        <div className="space-y-2">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]/50" />
                    <span>{item}</span>
                </div>
            ))}
        </div>
    </div>
);

export default MaterialDetailsModal;
