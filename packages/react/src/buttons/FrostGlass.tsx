import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const FrostGlass: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white/20 dark:bg-slate-900/30 backdrop-blur-xl border border-white/30 dark:border-slate-700/50 text-slate-900 dark:text-white font-semibold rounded-2xl hover:bg-white/30 dark:hover:bg-slate-800/40 active:scale-95 transition-all duration-200 shadow-xl">
      Frost Glass
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'frost-glass',
  name: 'Frost Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: FrostGlass,
  description: 'A frosted glass button with strong blur effect.',
  code: `<button className="px-8 py-3 bg-white/20 backdrop-blur-xl border border-white/30 text-slate-900 font-semibold rounded-2xl hover:bg-white/30 active:scale-95 transition-all">\n  Frost Glass\n</button>`
};

export default FrostGlass;
