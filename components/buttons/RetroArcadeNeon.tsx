
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RetroArcadeNeon: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-[#111] text-zinc-400 font-mono font-bold border-4 border-zinc-800 rounded shadow-[0_0_0_2px_#333] hover:border-fuchsia-500 hover:text-fuchsia-400 hover:shadow-[0_0_20px_#d946ef] active:scale-95 transition-all">
      &gt; START_GAME
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-arcade-neon',
  name: 'Arcade Neon',
  category: ButtonCategory.RETRO,
  component: RetroArcadeNeon,
  description: 'Classic arcade cabinet input with a reactive neon fuchsia activation.',
  code: `<button className="px-8 py-3 bg-[#111] text-zinc-400 font-mono font-bold border-4 border-zinc-800 hover:border-fuchsia-500 hover:text-fuchsia-400 hover:shadow-[0_0_20px_#d946ef] transition-all">\n  > START_GAME\n</button>`
};

export default RetroArcadeNeon;
