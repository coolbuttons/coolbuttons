import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../types';

const ChevronExpand: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">
      <span>Continue</span>
      <div className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
        <ChevronRight size={18} className="translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300" />
      </div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'chevron-expand-animated',
  name: 'Chevron Expand',
  category: ButtonCategory.ANIMATED,
  component: ChevronExpand,
  description: 'Satisfying width-based reveal of an arrow icon on interaction.',
  code: `<button className="flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group">\n  <span>Continue</span>\n  <div className="w-0 group-hover:w-4 transition-all">\n    <ChevronRight size={18} />\n  </div>\n</button>`
};

export default ChevronExpand;