import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import { INDUSTRY_STATS } from '../data/armaData';


interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const CountUpNumber: React.FC<CounterProps> = ({ end, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Number((progress * end).toFixed(end % 1 !== 0 ? 1 : 0)));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
      {count}
      <span className="text-orange-500 ml-0.5">{suffix}</span>
    </span>
  );
};

interface ARMAOverviewProps {
  onNavigate: (sectionId: string) => void;
}

export const ARMAOverview: React.FC<ARMAOverviewProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Editorial Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> About ARMA
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Leading the Asphalt Roofing Industry <span className="text-gradient-copper">Forward</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              The Asphalt Roofing Manufacturers Association (ARMA) is the premier trade association representing North America’s asphalt roofing manufacturers and primary raw material suppliers.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Founded over a century ago, ARMA acts as the unified voice of the industry — setting technical building code standards, conducting lifecycle impact research, promoting roof recycling initiatives, and recognizing extraordinary craftsmanship.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('membership')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-600/20"
              >
                <span>Learn About Membership</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('resources')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-300 font-semibold text-sm transition-all border border-slate-700"
              >
                <span>Browse Technical Library</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Count-Up Viewport Statistics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white">North American Industry Reach</h3>
                  <p className="text-xs text-slate-400 mt-1">Verified Asphalt Roofing Association Metrics</p>
                </div>
                <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              {/* Grid of Animated Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {INDUSTRY_STATS.map((stat) => (
                  <div key={stat.id} className="space-y-2">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                    <h4 className="text-sm font-semibold text-slate-200">{stat.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
                  </div>
                ))}
              </div>

              {/* Decorative Accent Tag */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Unified Technical Standards</span>
                <span className="text-orange-400 font-semibold">100+ Years Leadership</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
