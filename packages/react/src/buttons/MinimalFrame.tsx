import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalFrame: React.FC = () => {
  return (
    <button className="px-8 py-3 text-blue-600 dark:text-blue-400 font-semibold border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 active:scale-95 transition-all duration-200">
      Frame
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-frame',
  name: 'Minimal Frame',
  category: ButtonCategory.MINIMAL,
  component: MinimalFrame,
  description: 'A minimalist outlined button with frame borders.',
  code: `<button className="px-8 py-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-lg hover:bg-blue-50 active:scale-95 transition-all">\n  Frame\n</button>`
};

export default MinimalFrame;
