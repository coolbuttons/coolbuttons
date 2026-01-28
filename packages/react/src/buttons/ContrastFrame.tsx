import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ContrastFrame: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border-2 border-zinc-900 shadow-[inset_0_0_0_2px_white] hover:bg-zinc-900 hover:text-white transition-all active:scale-95">
      Double Frame
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'contrast-frame-essential',
  name: 'Double Frame',
  category: ButtonCategory.ESSENTIAL,
  component: ContrastFrame,
  description: 'Clean high-contrast border with an internal inset stroke.',
  code: `<button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border-2 border-zinc-900 shadow-[inset_0_0_0_2px_white] hover:bg-zinc-900 hover:text-white transition-all">\n  Double Frame\n</button>`
};

export default ContrastFrame;