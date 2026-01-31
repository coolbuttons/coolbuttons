import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const Holographic: React.FC = () => {
  return (
    <button className="relative px-10 py-3 bg-white/10 dark:bg-white/5 border border-white/20 text-zinc-900 dark:text-white font-black rounded-xl overflow-hidden group">
      <span className="relative z-10 uppercase tracking-widest text-[11px]">Pearl Holo</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-rose-500/20 to-cyan-500/20 group-hover:scale-150 transition-transform duration-1000"></div>
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-35deg] group-hover:left-[100%] transition-all duration-[1500ms]"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'holographic',
  name: 'Pearl Holo',
  category: ButtonCategory.GRADIENT,
  component: Holographic,
  description: 'Complex iridescent holographic effect with pearl sheen and light sweep.',
  code: `<button className="relative px-10 py-3 bg-white/10 border border-white/20 font-black rounded-xl overflow-hidden group">\n  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-rose-500/20 to-cyan-500/20"></div>\n  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-35deg] group-hover:left-full transition-all"></div>\n</button>`
};

export default Holographic;