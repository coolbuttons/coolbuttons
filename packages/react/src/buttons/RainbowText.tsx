import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const RainbowText: React.FC = () => {
  return (
    <button className="px-10 py-3 bg-zinc-900 border border-white/5 rounded-2xl group overflow-hidden shadow-xl active:scale-95 transition-all">
      <span className="bg-gradient-to-r from-red-500 via-orange-400 via-yellow-300 via-emerald-400 via-cyan-400 via-indigo-400 via-purple-500 bg-[length:400%_auto] bg-clip-text text-transparent font-black uppercase text-xs tracking-[0.3em] group-hover:bg-[position:100%_center] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-[1000ms]">
        Chroma Peak
      </span>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'rainbow-text-gradient',
  name: 'Chroma Peak',
  category: ButtonCategory.GRADIENT,
  component: RainbowText,
  description: 'High-tracking text with an 8-stop multi-color gradient shift.',
  code: `<button className="px-10 py-3 bg-zinc-900 rounded-2xl group">\n  <span className="bg-gradient-to-r from-red-500 via-yellow-300 via-emerald-400 via-purple-500 bg-[length:400%_auto] bg-clip-text text-transparent font-black transition-all group-hover:bg-[position:100%_center]">\n    Chroma Peak\n  </span>\n</button>`
};

export default RainbowText;