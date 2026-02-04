import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { MaterialSpecs } from './MaterialDetailsModal';

interface TierFeature {
    text: string;
    included: boolean;
}

interface ManagementTierProps {
    title: string;
    price?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    delay?: number;
    materials?: MaterialSpecs;
    onSelect?: (title: string, materials: MaterialSpecs) => void;
}

const ManagementTierCard: React.FC<ManagementTierProps> = ({
    title,
    price,
    description,
    features,
    isPopular = false,
    delay = 0,
    materials,
    onSelect
}) => {

    const handleSelectPlan = () => {
        if (materials && onSelect) {
            onSelect(title, materials);
        } else {
            console.log("Plan selected:", title);
        }
    };

    return (
        <div
            className={`relative group p-[1px] rounded-2xl transition-all duration-500 hover:scale-105`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Gradient Border Background */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${isPopular ? 'from-[#d4af37]/50 via-[#d4af37]/20 to-transparent' : ''}`} />

            {/* Glowing Effect on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/30 to-[#d4af37]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

            {/* Card Content */}
            <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-8 flex flex-col border border-white/5 group-hover:border-[#d4af37]/30 transition-colors duration-500 overflow-hidden">

                {/* Popular Tag */}
                {isPopular && (
                    <div className="absolute top-0 right-0 bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-lg shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        Most Popular
                    </div>
                )}

                {/* Header */}
                <div className="mb-6 relative z-10">
                    <h3 className={`text-2xl font-display mb-2 ${isPopular ? 'text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]' : 'text-white'}`}>
                        {title}
                    </h3>
                    <p className="text-white/40 text-sm h-10">{description}</p>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 group-hover:via-[#d4af37]/30 transition-colors duration-500" />

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                            <span className={`mt-0.5 flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full ${isPopular ? 'bg-[#d4af37] text-black' : 'bg-white/10 text-[#d4af37]'}`}>
                                <Check className="w-2.5 h-2.5" strokeWidth={3} />
                            </span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button
                    onClick={handleSelectPlan}
                    className={`w-full py-4 px-6 rounded-lg uppercase tracking-widest text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${isPopular
                        ? 'bg-[#d4af37] text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                        : 'bg-white/5 text-white hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                        }`}>
                    <span>{materials ? 'View Specifications' : 'Select Plan'}</span>
                    {materials ? <Info className="w-3 h-3" /> : <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />}
                </button>

                {/* Background Visual Flair */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d4af37]/5 rounded-full blur-3xl group-hover:bg-[#d4af37]/10 transition-colors duration-500" />
            </div>
        </div>
    );
};



export default ManagementTierCard;
