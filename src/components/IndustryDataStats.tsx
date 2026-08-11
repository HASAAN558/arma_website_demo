import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, BarChart2 } from 'lucide-react';


export const IndustryDataStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'market' | 'durability' | 'sustainability'>('market');

  const marketData = [
    { label: 'U.S. Residential Roofing Market Share', value: 80, color: 'from-orange-500 to-amber-600', unit: '% Market Share' },
    { label: 'Canada Residential Roofing Market Share', value: 82, color: 'from-orange-600 to-amber-500', unit: '% Market Share' },
    { label: 'Commercial Low-Slope Modified Bitumen', value: 35, color: 'from-slate-600 to-slate-500', unit: '% Commercial Share' },
    { label: 'Post-Consumer Shingle Recycling Rate Growth', value: 68, color: 'from-emerald-500 to-teal-600', unit: '% Growth Index' },
  ];

  const durabilityData = [
    { label: 'Class H Wind Resistance Standard (150 mph)', value: 100, status: 'Fully Standardized' },
    { label: 'Class 4 Impact Hail Resistance Compliance', value: 92, status: 'Severe Weather Approved' },
    { label: 'Class A Fire Resistance Rating (ASTM E108)', value: 100, status: 'Maximum Protection' },
    { label: 'Algae Resistance Guarantee (Copper Granule Coating)', value: 95, status: '25-Year Protection' },
  ];

  return (
    <section id="data-stats" className="py-24 bg-slate-900/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 uppercase tracking-widest inline-block"
          >
            Market & Engineering Metrics
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Asphalt Roofing Industry <span className="text-gradient-copper">Insights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Empirical data reflecting market adoption, structural wind load testing, fire safety standards, and economic contribution across North America.
          </motion.p>
        </div>

        {/* Tabs selector */}
        <div className="flex justify-center mb-10">
          <div className="glass-panel p-1.5 rounded-2xl border border-slate-800 flex gap-2">
            <button
              onClick={() => setActiveTab('market')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'market'
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Market Share & Production
            </button>
            <button
              onClick={() => setActiveTab('durability')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'durability'
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Performance Ratings
            </button>
          </div>
        </div>

        {/* Interactive Data Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl max-w-4xl mx-auto"
        >
          {activeTab === 'market' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="font-bold text-xl text-white">North American Roof Coverage Share</h3>
                <BarChart2 className="w-5 h-5 text-orange-400" />
              </div>
              <div className="space-y-6">
                {marketData.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-200">{item.label}</span>
                      <span className="font-mono font-bold text-orange-400">{item.value}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'durability' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="font-bold text-xl text-white">Testing Standard & Code Compliance</h3>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {durabilityData.map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {item.status}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="text-base font-bold text-white leading-snug">{item.label}</h4>
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                      <span>Lab Compliance Rate:</span>
                      <span className="font-mono text-white font-bold">{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};
