import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalBold: React.FC = () => {
  return (
    <button className="px-6 py-2 text-gray-900 dark:text-gray-100 font-bold border-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 active:scale-95 transition-all duration-200">
      Bold Minimal
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-bold',
  name: 'Bold Minimal',
  category: ButtonCategory.MINIMAL,
  component: MinimalBold,
  description: 'A bold text-based minimal button with animated border.',
  code: `<button className="px-6 py-2 text-gray-900 font-bold border-2 border-transparent hover:border-gray-900 active:scale-95 transition-all">\n  Bold Minimal\n</button>`
};

export default MinimalBold;
