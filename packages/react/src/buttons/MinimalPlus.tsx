import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalPlus: React.FC = () => {
  return (
    <button className="px-4 py-4 w-12 h-12 rounded-lg border-2 border-slate-400 text-slate-600 dark:text-slate-300 dark:border-slate-600 font-bold text-lg hover:border-slate-600 dark:hover:border-slate-400 active:scale-95 transition-all duration-200 flex items-center justify-center">
      +
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-plus',
  name: 'Minimal Plus',
  category: ButtonCategory.MINIMAL,
  component: MinimalPlus,
  description: 'A minimal plus icon button.',
  code: `<button className="w-12 h-12 rounded-lg border-2 border-slate-400 text-slate-600 font-bold text-lg hover:border-slate-600 active:scale-95 transition-all flex items-center justify-center">\n  +\n</button>`
};

export default MinimalPlus;
