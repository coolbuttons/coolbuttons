
import React from 'react';
import { Zap } from 'lucide-react';
import { ButtonDesign, ButtonCategory } from '../../types';

const IconBounce: React.FC = () => {
  return (
    <button className="flex items-center gap-3 px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-black rounded-2xl group hover:bg-zinc-900 hover:text-white transition-all duration-300">
      <Zap className="group-hover:scale-150 group-hover:rotate-12 transition-transform" size={18} />
      <span>Super Power</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'icon-bounce-power',
  name: 'Power Bounce',
  category: ButtonCategory.ESSENTIAL,
  component: IconBounce,
  description: 'Clean essential button with an icon that scales and rotates aggressively.',
  code: `<button className="flex items-center gap-3 px-8 py-3 border-2 border-zinc-900 text-zinc-900 font-black rounded-2xl group hover:bg-zinc-900 hover:text-white transition-all">\n  <Zap size={18} className="group-hover:scale-150 transition-transform" />\n  <span>Super Power</span>\n</button>`
};

export default IconBounce;
