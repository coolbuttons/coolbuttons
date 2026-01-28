
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlassRefraction: React.FC = () => {
  return (
    <div className="p-12 relative group">
      <div className="absolute inset-4 bg-cyan-400/10 blur-[40px] rounded-3xl group-hover:scale-125 transition-transform duration-700"></div>
      <button className="relative px-10 py-4 bg-white/30 dark:bg-white/5 backdrop-blur-3xl border border-white/80 dark:border-white/20 text-cyan-950 dark:text-cyan-100 font-black rounded-[2rem] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(255,255,255,0.6)] hover:bg-white/40 hover:translate-y-[-2px] transition-all">
        Crystal Prism
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-refraction-btn',
  name: 'Crystal Prism',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassRefraction,
  description: 'Crystal-clear refraction effect with extreme backdrop blur and internal highlights.',
  code: `<button className="px-10 py-4 bg-white/30 backdrop-blur-3xl border border-white/80 text-cyan-950 font-black rounded-[2rem] transition-all shadow-xl">\n  Crystal Prism\n</button>`
};

export default GlassRefraction;
