import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import type { ResourceItem, NewsArticle, AwardProject } from '../types';


interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResourceItem | NewsArticle | AwardProject | null;
  type: 'resource' | 'news' | 'award';
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, data, type }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const resourceData = type === 'resource' ? (data as ResourceItem) : null;
  const newsData = type === 'news' ? (data as NewsArticle) : null;
  const awardData = type === 'award' ? (data as AwardProject) : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-10 p-6 md:p-8 text-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* RESOURCE TYPE MODAL */}
          {resourceData && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
                  {resourceData.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{resourceData.code}</span>
                <span className="text-xs text-slate-500">• {resourceData.date}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {resourceData.title}
              </h2>

              <p className="text-slate-300 mb-6 text-base leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-800">
                {resourceData.summary}
              </p>

              {resourceData.keyTakeaways && resourceData.keyTakeaways.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Key Technical Guidelines & Standards
                  </h3>
                  <ul className="space-y-2">
                    {resourceData.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                  <span>Size: {resourceData.fileSize}</span>
                  <span>•</span>
                  <span>Pages: {resourceData.pages}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => alert(`Simulated PDF Download: ${resourceData.code}`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-colors shadow-lg shadow-orange-600/20"
                  >
                    <Download className="w-4 h-4" /> Download Official Document
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NEWS TYPE MODAL */}
          {newsData && (
            <div>
              <div className="relative h-64 md:h-80 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 overflow-hidden rounded-t-2xl">
                <img
                  src={newsData.image}
                  alt={newsData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6 md:left-8 right-6">
                  <span className="px-3 py-1 text-xs font-semibold text-amber-300 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-400/30">
                    {newsData.category}
                  </span>
                  <p className="text-xs text-slate-300 mt-2">{newsData.date} • {newsData.readTime}</p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {newsData.title}
              </h2>

              <p className="text-base text-slate-300 font-medium leading-relaxed mb-4 text-orange-200/90 italic">
                "{newsData.summary}"
              </p>

              <div className="prose prose-invert max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4 mb-6">
                <p>{newsData.content}</p>
                <p>
                  ARMA member companies collaborate through technical advisory committees to drive continuous innovation in asphalt shingle formulation, durability testing, and sustainable recycling methods across North America.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
                <span>Published by: {newsData.author}</span>
                <span className="text-orange-400">Official ARMA Communication</span>
              </div>
            </div>
          )}

          {/* AWARD TYPE MODAL */}
          {awardData && (
            <div>
              <div className="relative h-64 md:h-80 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 overflow-hidden rounded-t-2xl">
                <img
                  src={awardData.image}
                  alt={awardData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-4 left-6 md:left-8 flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-bold text-amber-400 bg-amber-500/20 border border-amber-400/40 rounded-full flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> {awardData.tier} ({awardData.year})
                  </span>
                  <span className="text-xs text-slate-300 bg-slate-900/70 px-3 py-1 rounded-full">
                    {awardData.category}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {awardData.title}
              </h2>
              <p className="text-xs text-orange-400 mb-6 font-medium">📍 {awardData.location}</p>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {awardData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-slate-800/40 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Contractor</span>
                  <span className="text-sm font-semibold text-white">{awardData.contractor}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Manufacturer / Product</span>
                  <span className="text-sm font-semibold text-white">{awardData.manufacturer}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Project Specifications</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-950 p-3 rounded-lg text-center border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">Shingle Type</span>
                    <span className="text-xs font-semibold text-orange-300 mt-1 block">{awardData.specs.shingleType}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg text-center border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">Square Footage</span>
                    <span className="text-xs font-semibold text-white mt-1 block">{awardData.specs.squareFootage}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg text-center border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">Roof Slope</span>
                    <span className="text-xs font-semibold text-white mt-1 block">{awardData.specs.slope}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg text-center border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase block">Wind Rating</span>
                    <span className="text-xs font-semibold text-emerald-400 mt-1 block">{awardData.specs.windRating}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
