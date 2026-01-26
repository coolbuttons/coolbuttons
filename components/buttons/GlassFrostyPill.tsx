import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlassFrostyPill: React.FC = () => {
  return (
    <div className="p-10 relative">
      <div className="absolute inset-0 bg-rose-500/5 blur-3xl rounded-full"></div>
      <button className="relative px-10 py-3 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-500 dark:text-rose-400 font-bold rounded-full shadow-lg hover:bg-rose-500/20 transition-all">
        Frosty Pill
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-frosty-pill-btn',
  name: 'Rose Frosty Pill',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassFrostyPill,
  description: 'Smooth rose-tinted glass component with heavy edge highlights.',
  code: `<button className="px-10 py-3 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-500 font-bold rounded-full transition-all">\n  Frosty Pill\n</button>`
};

export default GlassFrostyPill;