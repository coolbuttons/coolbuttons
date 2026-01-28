import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const GoldenHour: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-yellow-900 font-bold rounded-lg shadow-lg shadow-yellow-400/50 hover:shadow-xl hover:shadow-orange-400/60 active:scale-95 transition-all duration-200">
      Golden Hour
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'golden-hour',
  name: 'Golden Hour',
  category: ButtonCategory.GRADIENT,
  component: GoldenHour,
  description: 'A warm golden hour inspired gradient.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-yellow-900 font-bold rounded-lg shadow-lg shadow-yellow-400/50 active:scale-95 transition-all">\n  Golden Hour\n</button>`
};

export default GoldenHour;
