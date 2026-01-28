
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DualTone: React.FC = () => {
  return (
    <button className="flex px-1 items-center bg-zinc-100 rounded-full group hover:bg-zinc-900 transition-colors duration-300">
      <div className="bg-white px-6 py-2 rounded-full text-zinc-900 font-bold group-hover:bg-zinc-800 group-hover:text-white transition-all">Dual</div>
      <div className="px-6 py-2 text-zinc-400 font-bold group-hover:text-zinc-500 transition-all">Tone</div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'dual-tone',
  name: 'Dual Tone Pill',
  category: ButtonCategory.MINIMAL,
  component: DualTone,
  description: 'Elegant two-color segment layout in a single button.',
  code: `<button className="flex px-1 items-center bg-zinc-100 rounded-full group hover:bg-zinc-900 transition-colors">\n  <div className="bg-white px-6 py-2 rounded-full">Dual</div>\n  <div className="px-6 py-2 text-zinc-400">Tone</div>\n</button>`
};

export default DualTone;
