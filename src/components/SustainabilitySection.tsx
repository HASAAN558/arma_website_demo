import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Sun, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';

interface SustainabilitySectionProps {
  onNavigate: (sectionId: string) => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onNavigate }) => {
  return (
    <section id="sustainability" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle Eco Green Glow Accent */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT 6 COLS: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest">
              <Leaf className="w-4 h-4" /> Environmental Leadership
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building a More <span className="text-emerald-400">Sustainable Future</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              ARMA member manufacturers are committed to advancing environmental stewardship across the full life cycle of asphalt shingle systems — from raw material extraction to zero-landfill recycling.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">2.2+ Million Tons Recycled Annually</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Post-consumer tear-off shingles are processed into Recycled Asphalt Shingles (RAS) for road construction, conserving crude oil and landfill capacity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Cool Roof Granule Technology</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Solar-reflective mineral granules deflect infrared solar energy, reducing urban heat islands and building air conditioning energy demand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Verified Environmental Product Declarations (EPDs)</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Third-party ISO 14025 Life Cycle Assessment (LCA) data providing specifiers with transparent embodied carbon disclosures for LEED v4.1 certification.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('resources')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20"
              >
                <span>Read Shingle Recycling Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT 6 COLS: Animated Circular Lifecycle Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center text-center space-y-6">
              
              {/* Rotating Circular Ring */}
              <div className="relative w-56 h-56 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/40"
                />

                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-emerald-600/20 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 border border-emerald-500/30 text-center shadow-xl">
                  <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="text-xs font-bold text-white mt-2">Circular Economy</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Zero Waste</span>
                </div>
              </div>

              {/* Lifecycle Stage Pills */}
              <div className="w-full space-y-2.5">
                {[
                  { stage: '1. Sustainable Sourcing', desc: 'Inorganic fiberglass & recycled minerals' },
                  { stage: '2. Low-Energy Manufacturing', desc: 'Continuous energy intensity reduction' },
                  { stage: '3. 30-50 Year Roof Lifespan', desc: 'Class H wind & Class A fire durability' },
                  { stage: '4. Post-Consumer RAS Recycling', desc: 'Reclaimed into road paving asphalt' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{item.stage}</span>
                    <span className="text-slate-400 text-[11px]">{item.desc}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
