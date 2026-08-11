import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldAlert, GraduationCap, Leaf, Cpu, Users, ArrowRight } from 'lucide-react';

interface WhatWeDoProps {
  onNavigate: (sectionId: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'resources',
      title: 'Technical Resources',
      desc: 'Authoritative bulletins, residential manual code updates, and fastener placement specs.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-orange-600/20 via-slate-900 to-slate-950'
    },
    {
      id: 'advocacy',
      title: 'Industry Advocacy',
      desc: 'Representing North American asphalt manufacturers before model building code bodies.',
      icon: ShieldAlert,
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-amber-600/20 via-slate-900 to-slate-950'
    },
    {
      id: 'tech-3d',
      title: 'Research & Education',
      desc: 'Testing material science, polymer modification, wind uplift performance, and fire resistance.',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-slate-700/20 via-slate-900 to-slate-950'
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      desc: 'Promoting post-consumer shingle recycling into road paving and lifecycle transparency (EPDs).',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-emerald-600/20 via-slate-900 to-slate-950'
    },
    {
      id: 'tech-3d',
      title: 'Roofing Innovation',
      desc: 'Exploring cool roof granule reflectivity, algae resistance, and solar tile integration.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-orange-500/20 via-slate-900 to-slate-950'
    },
    {
      id: 'membership',
      title: 'Member Support',
      desc: 'Fostering collaboration among primary asphalt shingle producers and raw material suppliers.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      gradient: 'from-amber-500/20 via-slate-900 to-slate-950'
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 uppercase tracking-widest inline-block"
          >
            Core Pillars
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Dedicated to advancing technical excellence, environmental sustainability, and manufacturing innovation across North America.
          </motion.p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => onNavigate(card.id)}
                className="group relative rounded-3xl bg-slate-900 border border-slate-800/80 overflow-hidden shadow-xl hover:shadow-2xl hover:border-orange-500/50 transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Image & Gradient Background Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-40 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-orange-400 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Arrow CTA */}
                  <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                    <span>Explore Pillar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
