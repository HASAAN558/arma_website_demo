import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { AWARD_PROJECTS } from '../data/armaData';
import type { AwardProject } from '../types';


interface AwardsSectionProps {
  onSelectAward: (award: AwardProject) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ onSelectAward }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % AWARD_PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + AWARD_PROJECTS.length) % AWARD_PROJECTS.length);
  };

  const activeProject = AWARD_PROJECTS[currentIndex];

  return (
    <section id="awards" className="py-24 bg-slate-950 relative overflow-hidden text-white border-t border-b border-slate-800">
      
      {/* High-contrast ambient backdrop */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-widest inline-block"
            >
              Annual Awards Program
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              Excellence in <span className="text-gradient-copper">Asphalt Roofing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg"
            >
              Honoring North America's most exceptional residential and commercial roofing projects demonstrating outstanding craftsmanship and design innovation.
            </motion.p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Previous award project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Next award project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Award Showcase Slide */}
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => onSelectAward(activeProject)}
          className="group relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 min-h-[460px]"
        >
          {/* Image Left 7 Cols */}
          <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-[460px]">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-90" />
            
            {/* Top Tier Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 shadow-lg flex items-center gap-1.5">
                <Award className="w-4 h-4" /> {activeProject.tier}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-800">
                {activeProject.year}
              </span>
            </div>
          </div>

          {/* Details Right 5 Cols */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <MapPin className="w-4 h-4" />
                <span>{activeProject.location}</span>
                <span>•</span>
                <span className="text-slate-400">{activeProject.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-400 transition-colors leading-tight">
                {activeProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeProject.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Project Specs</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block">Shingle:</span>
                    <span className="font-semibold text-slate-200">{activeProject.specs.shingleType}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Wind Rating:</span>
                    <span className="font-semibold text-emerald-400">{activeProject.specs.windRating}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>View Full Project Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Dots Selector */}
        <div className="flex justify-center gap-2 mt-8">
          {AWARD_PROJECTS.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-amber-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
