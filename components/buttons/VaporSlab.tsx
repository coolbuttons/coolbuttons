
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const VaporSlab: React.FC = () => {
  return (
    <button className="px-8 py-4 bg-[#ff00ff] text-white font-black italic uppercase tracking-tighter border-2 border-cyan-400 shadow-[6px_6px_0_#00ffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#00ffff] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all">
      Vapor Wave
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'vapor-slab',
  name: 'Vaporwave Slab',
  category: ButtonCategory.RETRO,
  component: VaporSlab,
  description: 'Cyber-retro color palette with a hard-offset 3D effect.',
  code: `<button className="px-8 py-4 bg-[#ff00ff] text-white font-black italic border-2 border-cyan-400 shadow-[6px_6px_0_#00ffff] hover:translate-x-1 hover:shadow-[3px_3px_0_#00ffff] transition-all">\n  Vapor Wave\n</button>`
};

export default VaporSlab;
