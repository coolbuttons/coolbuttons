
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const MorphingShape: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl hover:rounded-full transition-all duration-700 hover:scale-105">
      Morph Shape
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'morphing-shape',
  name: 'Morphing Squircle',
  category: ButtonCategory.ANIMATED,
  component: MorphingShape,
  description: 'Slow border-radius transition for an organic feel.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl hover:rounded-full transition-all duration-700">\n  Morph Shape\n</button>`
};

export default MorphingShape;
