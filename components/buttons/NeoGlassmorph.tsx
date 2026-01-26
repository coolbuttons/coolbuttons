import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeoGlassmorph: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 dark:from-emerald-400/10 dark:to-cyan-400/10 backdrop-blur-md border border-emerald-400/50 dark:border-emerald-300/30 text-emerald-900 dark:text-emerald-100 font-semibold rounded-2xl hover:bg-emerald-500/30 dark:hover:bg-emerald-400/15 shadow-xl active:scale-95 transition-all duration-200">
      Neo Glassmorph
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neo-glassmorph',
  name: 'Neo Glassmorph',
  category: ButtonCategory.GLASSMORPHIC,
  component: NeoGlassmorph,
  description: 'A modern glassmorphic button with gradient tint.',
  code: `<button className="px-8 py-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-md border border-emerald-400/50 text-emerald-900 font-semibold rounded-2xl hover:bg-emerald-500/30 active:scale-95 transition-all">\n  Neo Glassmorph\n</button>`
};

export default NeoGlassmorph;
