
import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../types';

const BentoBox: React.FC = () => {
  return (
    <button className="flex items-center gap-1 p-1 bg-zinc-100 rounded-2xl group hover:bg-zinc-200 transition-colors">
      <div className="bg-white p-2 rounded-xl shadow-sm group-hover:scale-95 transition-transform">
        <Zap size={18} className="text-orange-500" />
      </div>
      <span className="px-3 text-sm font-bold text-zinc-700">Quick Start</span>
      <div className="pr-2">
        <ChevronRight size={16} className="text-zinc-400 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'bento-box',
  name: 'Bento Action',
  category: ButtonCategory.MINIMAL,
  component: BentoBox,
  description: 'Segmented modular design with icons.',
  code: `<button className="flex items-center gap-1 p-1 bg-zinc-100 rounded-2xl group hover:bg-zinc-200 transition-colors">\n  <div className="bg-white p-2 rounded-xl shadow-sm group-hover:scale-95 transition-transform">\n    <Zap size={18} className="text-orange-500" />\n  </div>\n  <span className="px-3 text-sm font-bold text-zinc-700">Quick Start</span>\n  <div className="pr-2">\n    <ChevronRight size={16} className="text-zinc-400 group-hover:translate-x-1 transition-transform" />\n  </div>\n</button>`
};

export default BentoBox;
