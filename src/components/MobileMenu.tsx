import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Shield, BookOpen, Wrench, Building, Newspaper, Award, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { label: 'About ARMA', id: 'about', icon: Shield, desc: 'Our Mission & Leadership' },
    { label: 'What We Do', id: 'what-we-do', icon: Building, desc: 'Industry Advocacy & Standards' },
    { label: '3D Roofing Tech', id: 'tech-3d', icon: Wrench, desc: 'Interactive Material Science' },
    { label: 'Technical Resources', id: 'resources', icon: BookOpen, desc: 'Bulletins, Manuals & Guides' },
    { label: 'Industry Data', id: 'data-stats', icon: Newspaper, desc: 'Market Insights & Metrics' },
    { label: 'Latest News', id: 'news', icon: Newspaper, desc: 'Press Releases & Events' },
    { label: 'Awards Program', id: 'awards', icon: Award, desc: 'Excellence in Asphalt Roofing' },
    { label: 'Sustainability', id: 'sustainability', icon: Shield, desc: 'Recycling & Circularity' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white shadow-lg">
                A
              </div>
              <span className="font-bold text-lg text-white tracking-tight">ARMA</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sequential Menu List */}
          <div className="py-6 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/60 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-base font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {item.label}
                        </span>
                        <span className="block text-xs text-slate-400 font-normal">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                onNavigate('membership');
                onClose();
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20"
            >
              <span>Become a Member</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Asphalt Roofing Manufacturers Association
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
