import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const PulseRing: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg shadow-red-500/50 hover:shadow-xl active:scale-90 transition-all duration-200 relative overflow-hidden group">
      <span className="relative z-10">Pulse Ring</span>
      <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-30 scale-100 group-hover:scale-150 transition-all duration-500"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'pulse-ring',
  name: 'Pulse Ring',
  category: ButtonCategory.ANIMATED,
  component: PulseRing,
  description: 'A button with a pulsing ring effect on hover.',
  code: `<button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg shadow-red-500/50 relative overflow-hidden group">\n  <span className="relative z-10">Pulse Ring</span>\n  <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>\n</button>`
};

export default PulseRing;
