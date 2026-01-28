import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalUnderline: React.FC = () => {
  return (
    <button className="px-6 py-2 text-slate-700 dark:text-slate-300 font-medium border-b-4 border-transparent hover:border-slate-700 dark:hover:border-slate-300 active:scale-95 transition-all duration-200">
      Underline
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-underline',
  name: 'Minimal Underline',
  category: ButtonCategory.MINIMAL,
  component: MinimalUnderline,
  description: 'A text button with animated underline border.',
  code: `<button className="px-6 py-2 text-slate-700 font-medium border-b-4 border-transparent hover:border-slate-700 active:scale-95 transition-all">\n  Underline\n</button>`
};

export default MinimalUnderline;
