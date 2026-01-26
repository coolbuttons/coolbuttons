import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const CyberSlice: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-cyan-400 font-bold uppercase tracking-widest [clip-path:polygon(0%_15%,15%_0%,100%_0%,100%_85%,85%_100%,0%_100%)] hover:bg-cyan-400 hover:text-black transition-all group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <span className="relative z-10">Cyber_Slice</span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'cyber-slice',
  name: 'Cyber Slice',
  category: ButtonCategory.EXPERIMENTAL,
  component: CyberSlice,
  description: 'Aggressive multi-cut geometric design with a light sweep.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-cyan-400 font-bold [clip-path:polygon(0%_15%,15%_0%,100%_0%,100%_85%,85%_100%,0%_100%)] hover:bg-cyan-400 hover:text-black transition-all">\n  Cyber_Slice\n</button>`
};

export default CyberSlice;