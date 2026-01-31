
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const StackedLayers: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-rose-500 text-white font-bold rounded-xl before:absolute before:inset-0 before:bg-rose-200 before:rounded-xl before:-z-10 before:translate-x-0 before:translate-y-0 hover:before:-translate-x-2 hover:before:-translate-y-2 before:transition-transform">
      Layer Stack
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'stacked-layers',
  name: 'Stacked Layers',
  category: ButtonCategory.EXPERIMENTAL,
  component: StackedLayers,
  description: 'Visual depth using pseudo-elements.',
  code: `<button className="relative px-8 py-3 bg-rose-500 text-white font-bold rounded-xl before:absolute before:inset-0 before:bg-rose-200 before:rounded-xl before:-z-10 before:translate-x-0 before:translate-y-0 hover:before:-translate-x-2 hover:before:-translate-y-2 before:transition-transform">\n  Layer Stack\n</button>`
};

export default StackedLayers;
