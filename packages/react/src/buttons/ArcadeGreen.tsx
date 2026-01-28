
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ArcadeGreen: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-[#003300] text-[#00ff00] font-mono font-bold border-2 border-[#00ff00] shadow-[0_0_15px_#00ff00] hover:bg-[#00ff00] hover:text-black transition-all">
      INSERT COIN
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'arcade-green',
  name: '8-Bit Arcade',
  category: ButtonCategory.RETRO,
  component: ArcadeGreen,
  description: 'Classic green phosphor arcade cabinet style.',
  code: `<button className="px-8 py-3 bg-[#003300] text-[#00ff00] font-mono font-bold border-2 border-[#00ff00] shadow-[0_0_15px_#00ff00] hover:bg-[#00ff00] hover:text-black transition-all">\n  INSERT COIN\n</button>`
};

export default ArcadeGreen;
