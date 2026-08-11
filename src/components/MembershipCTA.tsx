import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle2 } from 'lucide-react';


interface MembershipCTAProps {
  onNavigate: (sectionId: string) => void;
}

export const MembershipCTA: React.FC<MembershipCTAProps> = ({ onNavigate }) => {
  return (
    <section id="membership" className="relative py-28 overflow-hidden bg-slate-950">
      {/* Background Architectural Imagery & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="ARMA Membership"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/15 rounded-full blur-[180px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-orange-500/30 text-xs font-bold text-orange-400 uppercase tracking-widest"
        >
          <Users className="w-4 h-4" /> Association Membership
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Be Part of the Future of <span className="text-gradient-copper">Asphalt Roofing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Connect with industry leaders, participate in technical code advocacy, access exclusive market data, and shape the future of North American roofing.
        </motion.p>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 text-left"
        >
          {[
            'Technical Code Advocacy & Representation',
            'Exclusive Industry Shipment & Market Statistics',
            'Joint Sustainability & Recycling Research',
          ].map((benefit, i) => (
            <div key={i} className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-200">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-6"
        >
          <button
            onClick={() => alert('ARMA Membership Application Portal initiated.')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-base shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.02]"
          >
            <span>Become a Member</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 font-semibold text-base transition-all border border-slate-700"
          >
            <span>Learn About ARMA</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
