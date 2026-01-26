import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const MorphShape: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:rounded-full hover:scale-105 active:scale-95 transition-all duration-500">
      Morph Shape
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'morph-shape',
  name: 'Morph Shape',
  category: ButtonCategory.EXPERIMENTAL,
  component: MorphShape,
  description: 'A button that morphs from rounded rectangle to circle.',
  code: `<button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:rounded-full hover:scale-105 active:scale-95 transition-all duration-500">\n  Morph Shape\n</button>`
};

export default MorphShape;
