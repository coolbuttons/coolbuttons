import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const DiamondCut: React.FC = () => {
  return (
    <button className="relative px-12 py-3 bg-zinc-900 text-white font-black [clip-path:polygon(15%_0%,85%_0%,100%_50%,85%_100%,15%_100%,0%_50%)] hover:bg-zinc-700 transition-colors active:scale-90">
      Diamond
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'diamond-cut-experimental',
  name: 'Diamond Cut',
  category: ButtonCategory.EXPERIMENTAL,
  component: DiamondCut,
  description: 'Sharp diamond/hexagon hybrid shape using clip-path.',
  code: `<button className="px-12 py-3 bg-zinc-900 font-black [clip-path:polygon(15%_0%,85%_0%,100%_50%,85%_100%,15%_100%,0%_50%)]">\n  Diamond\n</button>`
};

export default DiamondCut;