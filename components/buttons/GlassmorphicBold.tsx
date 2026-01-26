import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlassmorphicBold: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-blue-500/30 dark:bg-blue-400/10 backdrop-blur-lg border border-blue-300/50 dark:border-blue-300/20 text-blue-900 dark:text-blue-100 font-bold rounded-2xl hover:bg-blue-500/40 dark:hover:bg-blue-400/20 shadow-2xl active:scale-95 transition-all duration-200">
      Glassmorphic Bold
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glassmorphic-bold',
  name: 'Glassmorphic Bold',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassmorphicBold,
  description: 'A bold glassmorphic button with colored tint.',
  code: `<button className="px-8 py-3 bg-blue-500/30 backdrop-blur-lg border border-blue-300/50 text-blue-900 font-bold rounded-2xl hover:bg-blue-500/40 active:scale-95 transition-all">\n  Glassmorphic Bold\n</button>`
};

export default GlassmorphicBold;
