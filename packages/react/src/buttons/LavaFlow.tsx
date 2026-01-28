import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const LavaFlow: React.FC = () => {
  return (
    <button className="relative px-10 py-3 bg-orange-700 text-white font-black rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(194,65,12,0.3)]">
      <span className="relative z-10 uppercase tracking-widest text-[11px]">Magma Flow</span>
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 group-hover:scale-125 transition-transform duration-700"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_80%)]"></div>
      <div className="absolute -inset-2 bg-orange-500/30 blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'lava-flow-btn',
  name: 'Magma Flow',
  category: ButtonCategory.GRADIENT,
  component: LavaFlow,
  description: 'Deep volcanic magma gradient with heat-bloom and intense shadow.',
  code: `<button className="relative px-10 py-3 bg-orange-700 font-black rounded-xl overflow-hidden group shadow-xl">\n  <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 transition-transform group-hover:scale-125"></div>\n</button>`
};

export default LavaFlow;