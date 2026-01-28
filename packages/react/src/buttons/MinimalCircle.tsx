import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalCircle: React.FC = () => {
  return (
    <button className="px-4 py-4 w-16 h-16 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 dark:hover:bg-blue-950 active:scale-95 transition-all duration-200 flex items-center justify-center">
      ✓
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-circle',
  name: 'Minimal Circle',
  category: ButtonCategory.MINIMAL,
  component: MinimalCircle,
  description: 'A circular minimal button with border and icon.',
  code: `<button className="w-16 h-16 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center">\n  ✓\n</button>`
};

export default MinimalCircle;
