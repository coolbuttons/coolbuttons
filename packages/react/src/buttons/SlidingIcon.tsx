import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../types';

const SlidingIcon: React.FC = () => {
  return (
    <button className="relative flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group overflow-hidden">
      <span className="group-hover:-translate-x-full group-hover:opacity-0 transition-all duration-300">Start Project</span>
      <ArrowRight className="absolute left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 transition-all duration-300" />
      <span className="absolute right-8 translate-x-10 group-hover:translate-x-0 transition-all duration-300">Start Project</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'sliding-icon-animated',
  name: 'Icon Slider',
  category: ButtonCategory.ANIMATED,
  component: SlidingIcon,
  description: 'Dynamic text replacement where an icon slides into focus.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl group overflow-hidden">\n  <span className="group-hover:-translate-x-full transition-all">Start Project</span>\n  <ArrowRight className="absolute translate-y-10 group-hover:translate-y-0 transition-all" />\n</button>`
};

export default SlidingIcon;