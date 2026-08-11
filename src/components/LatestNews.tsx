import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/armaData';
import type { NewsArticle } from '../types';


interface LatestNewsProps {
  onSelectNews: (article: NewsArticle) => void;
}

export const LatestNews: React.FC<LatestNewsProps> = ({ onSelectNews }) => {
  const featuredNews = NEWS_ARTICLES.find((item) => item.featured) || NEWS_ARTICLES[0];
  const sideNews = NEWS_ARTICLES.filter((item) => item.id !== featuredNews.id);

  return (
    <section id="news" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 uppercase tracking-widest inline-block"
            >
              Press & Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              Latest Industry <span className="text-gradient-copper">News</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg"
            >
              Stay informed with official press releases, sustainability benchmarks, building code updates, and symposium events.
            </motion.p>
          </div>

          <button
            onClick={() => onSelectNews(featuredNews)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700 transition-all self-start md:self-auto"
          >
            <span>View All News</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>

        {/* Grid Layout: 1 Featured Left + 3 Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT 7 COLS: Large Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            onClick={() => onSelectNews(featuredNews)}
            className="lg:col-span-7 group rounded-3xl bg-slate-900 border border-slate-800/80 overflow-hidden shadow-2xl hover:border-orange-500/40 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-72 sm:h-96 overflow-hidden">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold text-amber-300 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-400/30">
                  ★ Featured Press Release
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="text-orange-400 font-semibold">{featuredNews.category}</span>
                <span>•</span>
                <span>{featuredNews.date}</span>
                <span>•</span>
                <span>{featuredNews.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-orange-400 transition-colors leading-snug">
                {featuredNews.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                {featuredNews.summary}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800 text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                <span>Read Full Announcement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT 5 COLS: 3 Smaller Articles */}
          <div className="lg:col-span-5 space-y-6">
            {sideNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 6 }}
                onClick={() => onSelectNews(article)}
                className="group p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/30 transition-all cursor-pointer flex gap-4 items-center"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="text-orange-400 font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-slate-400 text-xs line-clamp-1">
                    {article.summary}
                  </p>

                  <div className="pt-1 flex items-center gap-1 text-[11px] text-orange-400 font-medium">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
