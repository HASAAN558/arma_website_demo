import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Search, ArrowRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';


interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = [
    {
      label: 'About ARMA',
      id: 'about',
      items: [
        { title: 'Overview & Mission', desc: 'Representing North American asphalt manufacturers', id: 'about' },
        { title: 'Leadership & Committees', desc: 'Technical advisory and board governance', id: 'about' },
        { title: 'Member Directory', desc: 'Primary asphalt shingle and roll goods producers', id: 'membership' }
      ]
    },
    {
      label: 'Resources',
      id: 'resources',
      items: [
        { title: 'Technical Bulletins', desc: 'Critical fastening, wind, and climate specs', id: 'resources' },
        { title: 'System Manuals', desc: '6th Edition Residential Asphalt Roofing Manual', id: 'resources' },
        { title: 'Research & Life Cycle', desc: 'EPDs and LCA environmental reports', id: 'resources' }
      ]
    },
    {
      label: 'Technical',
      id: 'tech-3d',
      items: [
        { title: '3D Shingle Explorer', desc: 'Interactive 5-layer material science', id: 'tech-3d' },
        { title: 'Standards & Codes', desc: 'ASTM D3161, D7158, and fire testing', id: 'resources' },
        { title: 'Cold Weather Specs', desc: 'Sub-40°F storage and thermal seal activation', id: 'resources' }
      ]
    },
    {
      label: 'Industry',
      id: 'what-we-do',
      items: [
        { title: 'What We Do', desc: 'Advocacy, research, and technical codes', id: 'what-we-do' },
        { title: 'Industry Insights & Data', desc: 'Shipment metrics and economic impact', id: 'data-stats' },
        { title: 'Sustainability & RAP', desc: '2.2M tons of shingle recycling', id: 'sustainability' }
      ]
    },
    {
      label: 'News & Events',
      id: 'news',
      items: [
        { title: 'Press Releases', desc: 'Latest announcements and industry news', id: 'news' },
        { title: 'Symposium & Events', desc: 'Roofing technology conference schedule', id: 'news' }
      ]
    },
    {
      label: 'Awards',
      id: 'awards',
      items: [
        { title: 'Excellence in Asphalt Roofing', desc: 'Gold, Silver, Bronze winning projects', id: 'awards' },
        { title: 'Submit a Project', desc: 'Enter the annual 2026 awards program', id: 'awards' }
      ]
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-3.5 group text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 p-[1px] shadow-lg shadow-orange-600/20 group-hover:shadow-orange-500/40 transition-all">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-extrabold text-white text-lg tracking-tight group-hover:bg-slate-900 transition-colors">
                  A
                </div>
              </div>
              <div>
                <span className="block font-black text-xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  ARMA
                </span>
                <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase -mt-0.5">
                  Asphalt Roofing Mfrs Assn
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(cat.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => onNavigate(cat.id)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                  >
                    <span>{cat.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === cat.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="glass-panel p-2 rounded-2xl shadow-2xl border border-slate-800 bg-slate-950/90 backdrop-blur-2xl">
                          {cat.items.map((item) => (
                            <button
                              key={item.title}
                              onClick={() => {
                                onNavigate(item.id);
                                setActiveDropdown(null);
                              }}
                              className="w-full p-2.5 rounded-xl hover:bg-slate-800/70 text-left transition-colors flex items-start gap-3 group"
                            >
                              <div className="w-2 h-2 rounded-full bg-orange-500/40 mt-2 group-hover:bg-orange-500 transition-colors shrink-0" />
                              <div>
                                <span className="block text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                                  {item.title}
                                </span>
                                <span className="block text-xs text-slate-400 font-normal">
                                  {item.desc}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => onNavigate('resources')}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                title="Search Resources"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('membership')}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-sm font-semibold shadow-lg shadow-orange-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Become a Member</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
};
