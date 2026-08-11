import React, { useState } from 'react';
import { Check } from 'lucide-react';


interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Grid: Logo/Desc + Links Columns + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-black text-white text-xl shadow-lg">
                A
              </div>
              <div>
                <span className="block font-black text-xl text-white tracking-tight">ARMA</span>
                <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                  Asphalt Roofing Manufacturers Association
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The Asphalt Roofing Manufacturers Association (ARMA) is a trade association representing North American manufacturers of asphalt roofing products and raw material suppliers.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['LinkedIn', 'X (Twitter)', 'YouTube', 'Facebook'].map((name) => (
                <button
                  key={name}
                  onClick={() => alert(`Navigating to official ARMA ${name} channel.`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:border-orange-500/40 hover:text-white transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>


          </div>

          {/* Quick Links Column 1: Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Organization</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-orange-400 transition-colors">About ARMA</button>
              </li>
              <li>
                <button onClick={() => onNavigate('what-we-do')} className="hover:text-orange-400 transition-colors">What We Do</button>
              </li>
              <li>
                <button onClick={() => onNavigate('membership')} className="hover:text-orange-400 transition-colors">Membership</button>
              </li>
              <li>
                <button onClick={() => onNavigate('awards')} className="hover:text-orange-400 transition-colors">Awards Program</button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Technical & Resources (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Technical</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-orange-400 transition-colors">Technical Bulletins</button>
              </li>
              <li>
                <button onClick={() => onNavigate('tech-3d')} className="hover:text-orange-400 transition-colors">3D Material Science</button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-orange-400 transition-colors">System Manuals</button>
              </li>
              <li>
                <button onClick={() => onNavigate('sustainability')} className="hover:text-orange-400 transition-colors">Sustainability & EPDs</button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Industry Digest</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to official ARMA technical bulletins, building code revisions, and research announcements.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your corporate email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs flex items-center gap-1 transition-colors"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <span>Subscribe</span>}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 font-medium">Subscribed to ARMA Technical Updates!</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Asphalt Roofing Manufacturers Association (ARMA). All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <button onClick={() => alert('ARMA Privacy Policy')} className="hover:text-slate-400 transition-colors">Privacy Policy</button>
            <button onClick={() => alert('ARMA Terms of Use')} className="hover:text-slate-400 transition-colors">Terms of Use</button>
            <button onClick={() => alert('ARMA Copyright & Trademark Notice')} className="hover:text-slate-400 transition-colors">Trademarks</button>
          </div>
        </div>


      </div>
    </footer>
  );
};
