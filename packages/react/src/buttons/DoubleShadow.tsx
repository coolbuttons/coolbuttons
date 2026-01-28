
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DoubleShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border border-zinc-100 shadow-[5px_5px_0_0_#ff7a00,10px_10px_0_0_#fef3c7] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300">
      Multi Layer
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'double-shadow-pill',
  name: 'Double Shadow Pill',
  category: ButtonCategory.RETRO,
  component: DoubleShadow,
  description: 'Two-tone offset shadows that collapse into the button on hover.',
  code: `<button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border border-zinc-100 shadow-[5px_5px_0_0_#ff7a00,10px_10px_0_0_#fef3c7] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">\n  Multi Layer\n</button>`
};

export default DoubleShadow;
