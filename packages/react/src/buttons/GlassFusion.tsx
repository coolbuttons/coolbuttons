
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GlassFusion: React.FC = () => {
  return (
    <div className="relative p-10 group">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/20 blur-[60px] rounded-full group-hover:bg-emerald-400/40 transition-colors duration-500"></div>
      
      <button className="relative px-10 py-4 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/10 text-emerald-900 dark:text-emerald-100 font-black rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:scale-105 active:scale-95 transition-all overflow-hidden group/btn">
        {/* Specular Highlight */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
        <span className="relative">Aurora Glass</span>
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-fusion',
  name: 'Aurora Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassFusion,
  description: 'Premium frosted glass with a specular highlight and emerald mesh glow.',
  code: `<button className="px-10 py-4 bg-white/40 backdrop-blur-xl border border-white/60 text-emerald-900 font-black rounded-2xl shadow-xl transition-all">\n  Aurora Glass\n</button>`,
};

export default GlassFusion;
