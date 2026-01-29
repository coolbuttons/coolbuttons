
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const SplitColor: React.FC = () => {
  return (
    <button className="relative px-10 py-3 bg-indigo-600 text-white font-bold rounded-xl overflow-hidden group">
      <span className="relative z-10">Split View</span>
      <span className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800 translate-x-full group-hover:translate-x-0 transition-transform"></span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'split-color',
  name: 'Split Color',
  category: ButtonCategory.MINIMAL,
  component: SplitColor,
  description: 'Geometric split background on interaction.',
  code: `<button className="relative px-10 py-3 bg-indigo-600 text-white font-bold rounded-xl overflow-hidden group">\n  <span className="relative z-10">Split View</span>\n  <span className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800 translate-x-full group-hover:translate-x-0 transition-transform"></span>\n</button>`
};

export default SplitColor;
