import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const CyberGradient: React.FC = () => {
  return (
    <button className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-300 group">
      <div className="px-8 py-3 bg-zinc-950 rounded-2xl flex items-center justify-center">
        <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent font-black uppercase tracking-[0.2em] text-[11px] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all">
          Mesh Flow
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'cyber-gradient',
  name: 'Mesh Flow',
  category: ButtonCategory.GRADIENT,
  component: CyberGradient,
  description: 'Multi-stop mesh gradient border with reactive text glow and ambient blur.',
  code: `<button className="relative p-[1.5px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-yellow-400 group">\n  <div className="px-8 py-3 bg-zinc-950 rounded-2xl">\n    <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent font-black tracking-widest">\n      Mesh Flow\n    </span>\n  </div>\n</button>`
};

export default CyberGradient;