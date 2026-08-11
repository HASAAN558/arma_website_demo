import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Sliders, Zap } from 'lucide-react';
import { SHINGLE_LAYERS } from '../data/armaData';
import type { ShingleLayer } from '../types';


export const Roofing3DInnovation: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<ShingleLayer>(SHINGLE_LAYERS[0]);
  const [isExploded, setIsExploded] = useState(true);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  return (
    <section id="tech-3d" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 uppercase tracking-widest inline-block"
          >
            Material Science & Engineering
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Built for Performance.{' '}
            <span className="text-gradient-copper">Designed for the Future.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Explore the multi-layer architectural shingle composition engineered to withstand 150 mph wind shears, severe impact, and extreme temperature fluctuations.
          </motion.p>
        </div>

        {/* 3D Interactive Composition Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT 7 COLS: Perspective 3D Interactive Layer Stack */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* View Mode Toggle Controls */}
            <div className="flex items-center justify-between glass-panel p-3 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <Sliders className="w-4 h-4 text-orange-400" />
                <span>Interactive Shingle Viewport</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsExploded(!isExploded)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isExploded
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {isExploded ? 'Exploded Layer View' : 'Assembled View'}
                </button>
              </div>
            </div>

            {/* 3D Perspective Box */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
              className="relative min-h-[500px] sm:min-h-[550px] glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 flex items-center justify-center overflow-hidden preserve-3d cursor-grab active:cursor-grabbing"
              style={{
                perspective: '1200px'
              }}
            >
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              {/* Parallax Prompt Badge */}
              <div className="absolute top-4 right-4 z-20 text-[11px] text-slate-400 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 pointer-events-none shadow-md">
                Move mouse to rotate perspective
              </div>

              {/* 3D Floating Layer Composition */}
              <motion.div
                animate={{
                  rotateY: mouseOffset.x * 1.2,
                  rotateX: -15 + mouseOffset.y * -0.8,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                className="relative w-full max-w-md preserve-3d my-4"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {SHINGLE_LAYERS.map((layer, index) => {
                  const isSelected = selectedLayer.id === layer.id;
                  const translateY = isExploded ? (index - 2) * 46 : index * 8;
                  const translateZ = isExploded ? (2 - index) * 30 : 0;
                  const scale = isExploded ? 1 - index * 0.03 : 1;

                  return (
                    <motion.div
                      key={layer.id}
                      onClick={() => setSelectedLayer(layer)}
                      animate={{
                        y: translateY,
                        z: translateZ,
                        scale: isSelected ? scale * 1.04 : scale,
                      }}
                      whileHover={{ scale: scale * 1.05 }}
                      transition={{ type: 'spring', damping: 22, stiffness: 200 }}
                      className={`relative p-4 sm:p-4.5 rounded-2xl border transition-all cursor-pointer shadow-xl ${
                        isSelected
                          ? 'border-orange-500 bg-slate-900/95 ring-2 ring-orange-500/40 z-30'
                          : 'border-slate-700/60 bg-slate-950/85 hover:border-slate-500'
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        boxShadow: isSelected ? '0 20px 40px rgba(234, 88, 12, 0.25)' : '0 10px 25px rgba(0,0,0,0.5)'
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-md shrink-0"
                            style={{ backgroundColor: layer.color }}
                          >
                            0{layer.number}
                          </span>
                          <div className="min-w-0">
                            <h4 className="font-bold text-white text-xs sm:text-sm truncate">{layer.name}</h4>
                            <span className="text-[11px] text-slate-400 block truncate">{layer.thickness} • {layer.material}</span>
                          </div>
                        </div>
                        {isSelected && (
                          <span className="px-2.5 py-1 text-[10px] font-bold text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 shrink-0">
                            Active Layer
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Quick Layer Buttons Bar */}
            <div className="flex flex-wrap gap-2">
              {SHINGLE_LAYERS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLayer(l)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedLayer.id === l.id
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-600/20'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  Layer 0{l.number}: {l.name.split(' ')[0]}
                </button>
              ))}
            </div>


          </div>

          {/* RIGHT 5 COLS: Selected Layer Detailed Breakdown */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLayer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl relative"
              >
                {/* Layer Header */}
                <div className="border-b border-slate-800 pb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
                      Layer 0{selectedLayer.number} Specification
                    </span>
                    <span className="text-xs font-mono text-slate-400">Thickness: {selectedLayer.thickness}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">{selectedLayer.name}</h3>
                  <p className="text-xs text-orange-300 font-medium mt-1">{selectedLayer.material}</p>
                </div>

                {/* Performance Function */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-400" /> Engineering Function
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    {selectedLayer.function}
                  </p>
                </div>

                {/* Key Benefits Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Performance Advantages
                  </h4>
                  <div className="space-y-2">
                    {selectedLayer.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industry Code Standard Badge */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Standard Compliance:</span>
                  <span className="font-mono text-orange-400 font-semibold">ASTM D3462 / ASTM D7158</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
