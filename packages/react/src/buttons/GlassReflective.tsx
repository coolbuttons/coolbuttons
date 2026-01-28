
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlassReflective: React.FC = () => {
  return (
    <div className="p-12 flex items-center justify-center">
      <button className="relative px-10 py-4 bg-white/40 dark:bg-white/10 border border-white/60 dark:border-white/20 text-zinc-900 dark:text-zinc-100 font-black rounded-2xl overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md">
        <span className="relative z-10">Mirror Glass</span>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000"></div>
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-reflective-btn',
  name: 'Mirror Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassReflective,
  description: 'Pure reflective glass with a sharp horizontal highlight and moving specular wipe.',
  code: `<button className="relative px-10 py-4 bg-white/40 border border-white/60 text-zinc-900 font-black rounded-2xl overflow-hidden group backdrop-blur-md">\n  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-full transition-all"></div>\n  <span className="relative z-10">Mirror Glass</span>\n</button>`
};

export default GlassReflective;
