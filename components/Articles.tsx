
import React from 'react';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: '1',
    category: 'Analysis',
    title: 'Cloud Biometrics Integration Standards 2025',
    excerpt: 'Reviewing the shift from local databases to edge-cloud hybrid models for access control.',
    date: '2024-03-14',
    image: ''
  },
  {
    id: '2',
    category: 'Hardware',
    title: 'Server Room Thermal Dynamics',
    excerpt: 'Optimizing HVAC efficiency in high-density rack configurations.',
    date: '2024-03-10',
    image: ''
  },
  {
    id: '3',
    category: 'Surveillance',
    title: 'Behavioral Analytics in Retail Security',
    excerpt: 'Utilizing computer vision to prevent loss without dedicated monitoring staff.',
    date: '2024-03-05',
    image: ''
  }
];

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-24 border-b border-zinc-800 bg-[#09090b]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
           <h2 className="text-3xl font-bold text-white font-['Space_Grotesk'] uppercase">System Insights</h2>
           <a href="#" className="mono text-xs text-cyan-500 hover:underline">[VIEW_ALL_LOGS]</a>
        </div>

        <div className="border-t border-zinc-800">
          {articles.map((article, index) => (
            <div key={article.id} className="group border-b border-zinc-800 py-8 flex flex-col md:flex-row gap-6 md:items-center hover:bg-zinc-900/30 transition-colors cursor-pointer">
              <div className="md:w-32 mono text-xs text-zinc-500">
                 LOG_ID: {article.id.padStart(3, '0')}
              </div>
              <div className="md:w-48">
                 <span className="inline-block px-2 py-1 border border-zinc-700 text-[10px] uppercase text-zinc-400 font-bold group-hover:border-cyan-500 group-hover:text-cyan-500 transition-colors">
                   {article.category}
                 </span>
              </div>
              <div className="flex-1">
                 <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 font-['Space_Grotesk']">
                   {article.title}
                 </h3>
                 <p className="text-zinc-500 text-sm max-w-2xl">{article.excerpt}</p>
              </div>
              <div className="md:w-32 text-right mono text-xs text-zinc-600">
                 {article.date}
              </div>
              <div className="hidden md:block text-zinc-700 group-hover:text-white group-hover:translate-x-2 transition-all">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
