
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const PillOutlineFill: React.FC = () => {
  return (
    <button className="relative px-10 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full overflow-hidden group">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">Outline Fill</span>
      <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'pill-outline-fill',
  name: 'Center Pill Fill',
  category: ButtonCategory.MINIMAL,
  component: PillOutlineFill,
  description: 'Clean outline button that fills from the center outwards.',
  code: `<button className="relative px-10 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full overflow-hidden group">\n  <span className="relative z-10 group-hover:text-white transition-colors">Outline Fill</span>\n  <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>\n</button>`
};

export default PillOutlineFill;
