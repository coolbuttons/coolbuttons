
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlassGlow: React.FC = () => {
  return (
    <div className="relative p-10 group">
      <div className="absolute inset-0 bg-purple-500/10 blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700"></div>
      <button className="relative px-8 py-3 bg-white/20 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 text-purple-900 dark:text-purple-100 font-black rounded-xl hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] transition-all active:scale-95">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20"></div>
        Nebula Glass
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-glow',
  name: 'Nebula Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassGlow,
  description: 'Deep frosted surface with refractive light paths and nebula glow.',
  code: `<button className="px-8 py-3 bg-white/20 backdrop-blur-2xl border border-white/40 text-purple-900 font-black rounded-xl transition-all shadow-xl">\n  Nebula Glass\n</button>`,
};

export default GlassGlow;
