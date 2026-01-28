
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const RetroSticker: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-yellow-300 text-zinc-900 font-black border-2 border-black rotate-[-3deg] hover:rotate-[3deg] transition-transform shadow-[4px_4px_0_0_#000]">
      CLICK_HERE!
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-sticker',
  name: 'Brutalist Sticker',
  category: ButtonCategory.RETRO,
  component: RetroSticker,
  description: 'A pop-art sticker feel with a heavy rotation.',
  code: `<button className="px-6 py-2 bg-yellow-300 text-zinc-900 font-black border-2 border-black rotate-[-3deg] hover:rotate-[3deg] transition-transform shadow-[4px_4px_0_0_#000]">\n  CLICK_HERE!\n</button>`
};

export default RetroSticker;
