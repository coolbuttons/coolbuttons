import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const BlurEffect: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:backdrop-blur-sm active:scale-95 transition-all duration-200 shadow-lg">
      Blur Effect
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'blur-effect',
  name: 'Blur Effect',
  category: ButtonCategory.EXPERIMENTAL,
  component: BlurEffect,
  description: 'A button with blur effect on hover.',
  code: `<button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:backdrop-blur-sm active:scale-95 transition-all shadow-lg">\n  Blur Effect\n</button>`
};

export default BlurEffect;
