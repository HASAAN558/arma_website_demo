import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, ShieldCheck, ChevronDown, Sparkles, Layers } from 'lucide-react';


interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-slate-950"
    >
      {/* Background Image & Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Architectural Asphalt Roofing"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(1.05) translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`
          }}
        />
        {/* Dark Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        {/* Animated Radial Lighting */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-orange-500/30 text-xs font-semibold text-orange-300 tracking-wide uppercase shadow-lg shadow-orange-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>North American Asphalt Roofing Authority</span>
            </motion.div>

            {/* Large Editorial Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Advancing the Future of{' '}
                <span className="text-gradient-copper">Asphalt Roofing</span>
              </motion.h1>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed"
            >
              Connecting innovation, technical expertise, and manufacturing leadership across North America's premier asphalt roofing community.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <button
                onClick={() => onNavigate('what-we-do')}
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Explore Asphalt Roofing</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('resources')}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl glass-panel hover:bg-slate-800/60 border border-slate-700/60 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] w-full sm:w-auto"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span>Industry Resources</span>
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 text-xs sm:text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <span><strong>95%+</strong> Manufacturers Represented</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span><strong>4.5B+ Sq Ft</strong> Annual Coverage</span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Interactive Layered Shingle Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="lg:col-span-5 relative flex justify-center"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${mousePos.y * -0.3}deg)`
            }}
          >
            {/* Interactive Card Container */}
            <div className="relative w-full max-w-md glass-card p-6 rounded-3xl border border-slate-700/50 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Multi-Layer Architectural Shingle</h3>
                    <span className="text-xs text-slate-400">Class H Wind (150 MPH) • Class 4 Hail</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  ASTM D7158
                </span>
              </div>

              {/* Layer Stack Representation */}
              <div className="space-y-2.5">
                {[
                  { name: 'Ceramic Basalt Granules', desc: 'UV & Class A Fire Shield', color: 'from-slate-700 to-slate-800' },
                  { name: 'SBS Modified Asphalt', desc: 'Impermeable Waterproof Core', color: 'from-slate-900 to-slate-950' },
                  { name: 'Woven Fiberglass Mat', desc: 'High-Tensile Tear Resistance', color: 'from-orange-600 to-amber-700' },
                  { name: 'Thermogrip Sealant Strip', desc: 'Thermal Solar Activation', color: 'from-orange-500 to-orange-600' },
                ].map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="p-3 rounded-xl bg-gradient-to-r border border-slate-700/60 flex items-center justify-between text-left shadow-md cursor-pointer"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))`
                    }}
                  >
                    <div>
                      <span className="text-xs font-bold text-orange-300 block">Layer 0{index + 1}: {layer.name}</span>
                      <span className="text-[11px] text-slate-400 block">{layer.desc}</span>
                    </div>
                    <Sparkles className="w-4 h-4 text-orange-400 opacity-60" />
                  </motion.div>
                ))}
              </div>

              {/* Interactive Prompt Footer */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Interactive Material Science</span>
                <button
                  onClick={() => onNavigate('tech-3d')}
                  className="text-orange-400 font-semibold hover:underline flex items-center gap-1"
                >
                  Explore 3D Layering →
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium text-slate-400 cursor-pointer"
        onClick={() => onNavigate('about')}
      >
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-orange-400" />
      </motion.div>
    </section>
  );
};
