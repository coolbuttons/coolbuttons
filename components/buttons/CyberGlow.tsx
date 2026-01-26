
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const CyberGlow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-950 text-cyan-400 font-bold border-2 border-cyan-400/50 rounded-lg hover:shadow-[0_0_20px_#22d3ee,inset_0_0_10px_#22d3ee] hover:border-cyan-400 transition-all duration-300 tracking-tighter active:scale-95">
      CORE_ACCESS
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'cyber-glow-core',
  name: 'Cyber Glow Core',
  category: ButtonCategory.EXPERIMENTAL,
  component: CyberGlow,
  description: 'Deep black background with reactive internal and external neon cyan glow.',
  code: `<button className="px-8 py-3 bg-zinc-950 text-cyan-400 font-bold border-2 border-cyan-400/50 rounded-lg hover:shadow-[0_0_20px_#22d3ee,inset_0_0_10px_#22d3ee] transition-all">\n  CORE_ACCESS\n</button>`
};

export default CyberGlow;
