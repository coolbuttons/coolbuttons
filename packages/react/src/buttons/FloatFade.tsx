import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const FloatFade: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg opacity-80 hover:opacity-100 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 transition-all duration-300 shadow-lg">
      Float Fade
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'float-fade',
  name: 'Float Fade',
  category: ButtonCategory.ANIMATED,
  component: FloatFade,
  description: 'A button that floats up while fading in on hover.',
  code: `<button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg opacity-80 hover:opacity-100 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 transition-all duration-300">\n  Float Fade\n</button>`
};

export default FloatFade;
