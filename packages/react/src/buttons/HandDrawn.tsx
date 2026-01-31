
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const HandDrawn: React.FC = () => {
  return (
    <button className="px-8 py-3 border-2 border-zinc-900 text-zinc-900 font-bold rounded-[20%_80%_20%_80%/80%_20%_80%_20%] hover:rounded-2xl hover:bg-zinc-900 hover:text-white transition-all duration-300">
      Sketch Style
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'hand-drawn',
  name: 'Sketchy Architecture',
  category: ButtonCategory.RETRO,
  component: HandDrawn,
  description: 'Wobbly organic border with stark contrast.',
  code: `<button className="px-8 py-3 border-2 border-zinc-900 text-zinc-900 font-bold rounded-[20%_80%_20%_80%/80%_20%_80%_20%] hover:rounded-2xl hover:bg-zinc-900 hover:text-white transition-all duration-300">\n  Sketch Style\n</button>`
};

export default HandDrawn;
