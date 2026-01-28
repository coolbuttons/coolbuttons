import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const PurpleRain: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-400/50 hover:shadow-xl hover:shadow-purple-500/60 active:scale-95 transition-all duration-200">
      Purple Rain
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'purple-rain',
  name: 'Purple Rain',
  category: ButtonCategory.GRADIENT,
  component: PurpleRain,
  description: 'A cascading purple gradient button.',
  code: `<button className="px-8 py-3 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-400/50 active:scale-95 transition-all">\n  Purple Rain\n</button>`
};

export default PurpleRain;
