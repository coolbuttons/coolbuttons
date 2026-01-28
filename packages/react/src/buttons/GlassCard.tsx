
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlassCard: React.FC = () => {
  return (
    <div className="p-10 relative group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full group-hover:scale-110 transition-transform duration-700"></div>
      <button className="relative px-10 py-5 bg-white/20 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] text-blue-950 dark:text-blue-100 font-black hover:bg-white/30 transition-all active:scale-95">
        Sapphire Slab
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-card',
  name: 'Sapphire Slab',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassCard,
  description: 'A heavy blue-tinted glass slab with internal reflections and high-end rounding.',
  code: `<button className="px-10 py-5 bg-white/20 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] text-blue-950 font-black transition-all">\n  Sapphire Slab\n</button>`
};

export default GlassCard;
