import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SpinRotate: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:rotate-6 active:scale-95 transition-all duration-300">
      Spin Rotate
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'spin-rotate',
  name: 'Spin Rotate',
  category: ButtonCategory.ANIMATED,
  component: SpinRotate,
  description: 'A button that rotates slightly on hover.',
  code: `<button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:rotate-6 active:scale-95 transition-all">\n  Spin Rotate\n</button>`
};

export default SpinRotate;
