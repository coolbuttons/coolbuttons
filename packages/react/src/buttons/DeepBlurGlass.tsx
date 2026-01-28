import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DeepBlurGlass: React.FC = () => {
  return (
    <div className="p-16 relative group">
      <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] group-hover:bg-indigo-500/10 transition-colors"></div>
      <button className="relative px-12 py-5 bg-indigo-500/10 backdrop-blur-[32px] border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold rounded-3xl shadow-2xl hover:bg-indigo-500/15 transition-all">
        Cloud Blur
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'deep-blur-glass-btn',
  name: 'Indigo Cloud',
  category: ButtonCategory.GLASSMORPHIC,
  component: DeepBlurGlass,
  description: 'Indigo hyper-blurred glass surface for a maximum frosted look.',
  code: `<button className="px-12 py-5 bg-indigo-500/10 backdrop-blur-3xl border border-indigo-500/20 text-indigo-600 font-bold rounded-3xl transition-all shadow-2xl">\n  Cloud Blur\n</button>`
};

export default DeepBlurGlass;