
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeoHardShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-orange-400 text-black font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-2 active:translate-y-2 transition-all">
      STAY LOUD
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neo-hard-shadow',
  name: 'Neo Brutal Hard',
  category: ButtonCategory.RETRO,
  component: NeoHardShadow,
  description: 'Stark high-contrast design with a heavy 1:1 offset shadow.',
  code: `<button className="px-8 py-3 bg-orange-400 text-black font-black border-4 border-black shadow-[8px_8px_0_0_#000] transition-all">\n  STAY LOUD\n</button>`
};

export default NeoHardShadow;
