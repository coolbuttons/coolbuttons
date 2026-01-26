import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlassmorphicSoft: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-white/40 dark:hover:bg-white/20 active:scale-95 transition-all duration-200 shadow-lg">
      Glassmorphic Soft
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glassmorphic-soft',
  name: 'Glassmorphic Soft',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassmorphicSoft,
  description: 'A soft glassmorphic button with blur and transparency.',
  code: `<button className="px-8 py-3 bg-white/30 backdrop-blur-md border border-white/40 text-gray-900 font-semibold rounded-xl hover:bg-white/40 active:scale-95 transition-all">\n  Glassmorphic Soft\n</button>`
};

export default GlassmorphicSoft;
