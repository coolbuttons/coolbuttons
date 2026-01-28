
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DashRotate: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-white text-zinc-900 font-bold rounded-lg group">
      <span className="relative z-10">Dash Spin</span>
      <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-lg group-hover:animate-[spin_4s_linear_infinite] group-hover:border-orange-500 transition-colors"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'dash-rotate-animated',
  name: 'Dash Spin',
  category: ButtonCategory.ANIMATED,
  component: DashRotate,
  description: 'A dashed border that starts spinning and changes color on hover.',
  code: `<button className="relative px-8 py-3 bg-white font-bold group">\n  <span className="relative z-10">Dash Spin</span>\n  <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-lg group-hover:animate-spin"></div>\n</button>`
};

export default DashRotate;
