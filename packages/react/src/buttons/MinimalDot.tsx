import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalDot: React.FC = () => {
  return (
    <button className="px-6 py-2 text-gray-700 dark:text-gray-300 font-medium border-b-2 border-gray-400 hover:border-gray-600 dark:hover:border-gray-200 active:scale-95 transition-all duration-200">
      Minimal Dot
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-dot',
  name: 'Minimal Dot',
  category: ButtonCategory.MINIMAL,
  component: MinimalDot,
  description: 'An underline-only minimal button with subtle border.',
  code: `<button className="px-6 py-2 text-gray-700 font-medium border-b-2 border-gray-400 hover:border-gray-600 active:scale-95 transition-all">\n  Minimal Dot\n</button>`
};

export default MinimalDot;
