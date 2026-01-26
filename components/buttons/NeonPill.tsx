
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const NeonPill: React.FC = () => {
  return (
    <button className="px-10 py-3 bg-emerald-400 text-emerald-950 font-black rounded-full shadow-[0_0_20px_rgba(52,211,153,0.5)] hover:shadow-[0_0_40px_rgba(52,211,153,0.8)] transition-all uppercase text-sm">
      Eco Glow
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'neon-pill',
  name: 'Neon Pill',
  category: ButtonCategory.EXPERIMENTAL,
  component: NeonPill,
  description: 'Vibrant neon emerald glow effect.',
  code: `<button className="px-10 py-3 bg-emerald-400 text-emerald-950 font-black rounded-full shadow-[0_0_20px_rgba(52,211,153,0.5)] hover:shadow-[0_0_40px_rgba(52,211,153,0.8)] transition-all uppercase text-sm">\n  Eco Glow\n</button>`
};

export default NeonPill;
