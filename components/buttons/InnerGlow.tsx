import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const InnerGlow: React.FC = () => {
  return (
    <button className="px-10 py-3 bg-zinc-950 text-cyan-200 font-black rounded-2xl border border-white/5 shadow-[inset_0_2px_15px_rgba(34,211,238,0.1)] hover:shadow-[inset_0_2px_25px_rgba(34,211,238,0.3),0_15px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 group">
      <span className="relative z-10 uppercase tracking-widest text-[10px]">Deep Space</span>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_70%)] group-hover:scale-150 transition-transform duration-700"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'inner-glow',
  name: 'Deep Space',
  category: ButtonCategory.GRADIENT,
  component: InnerGlow,
  description: 'Subtle atmospheric inner glow using radial gradients and Cyan-200 highlights.',
  code: `<button className="px-10 py-3 bg-zinc-950 text-cyan-200 font-black rounded-2xl shadow-[inset_0_2px_15px_rgba(34,211,238,0.1)] hover:shadow-inner transition-all">\n  Deep Space\n</button>`
};

export default InnerGlow;