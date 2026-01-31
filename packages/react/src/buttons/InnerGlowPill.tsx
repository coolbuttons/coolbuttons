import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const InnerGlowPill: React.FC = () => {
  return (
    <button className="relative px-10 py-3 bg-zinc-950 text-white font-black rounded-full overflow-hidden group border border-white/5 shadow-2xl">
      <span className="relative z-10 uppercase tracking-widest text-[10px]">Star Void</span>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-zinc-950 to-zinc-950"></div>
      {/* Specular Top highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      {/* Interactive Nebula */}
      <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-t from-fuchsia-600/20 via-transparent to-transparent blur-2xl group-hover:bottom-0 transition-all duration-700"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'inner-glow-pill-dark',
  name: 'Star Void',
  category: ButtonCategory.GRADIENT,
  component: InnerGlowPill,
  description: 'Deep cosmic pill with a top specular highlight and internal nebula rise.',
  code: `<button className="px-10 py-3 bg-zinc-950 text-white font-black rounded-full overflow-hidden group shadow-2xl">\n  <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-zinc-950 to-zinc-950"></div>\n  <div className="absolute bottom-[-50%] w-full h-full bg-gradient-to-t from-fuchsia-600/20 to-transparent blur-2xl group-hover:bottom-0 transition-all"></div>\n</button>`
};

export default InnerGlowPill;