
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const GlassInset: React.FC = () => {
  return (
    <div className="p-10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-400/10 blur-[50px]"></div>
      <button className="relative px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/50 dark:border-white/10 text-orange-950 dark:text-orange-100 font-black rounded-xl shadow-[inset_0_2px_15px_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.05)] hover:bg-white/20 transition-all group overflow-hidden">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-45 group-hover:translate-x-full transition-transform duration-1000"></div>
        Amber Vitrum
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-inset',
  name: 'Amber Vitrum',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassInset,
  description: 'Amber vitrified glass with internal light scattering and high-polish sheen.',
  code: `<button className="px-8 py-3 bg-white/10 backdrop-blur-md border-2 border-white/50 text-orange-950 font-black rounded-xl shadow-inner transition-all">\n  Amber Vitrum\n</button>`
};

export default GlassInset;
