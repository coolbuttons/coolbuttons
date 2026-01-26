import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlossyShine: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-gradient-to-br from-teal-400 to-teal-600 text-white font-semibold rounded-lg overflow-hidden group hover:shadow-2xl active:scale-95 transition-all duration-200">
      <span className="relative z-10">Glossy Shine</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:translate-x-full transition-all duration-500"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'glossy-shine',
  name: 'Glossy Shine',
  category: ButtonCategory.ANIMATED,
  component: GlossyShine,
  description: 'A button with a glossy shine effect that moves on hover.',
  code: `<button className="relative px-8 py-3 bg-gradient-to-br from-teal-400 to-teal-600 text-white font-semibold rounded-lg overflow-hidden group hover:shadow-2xl">\n  <span className="relative z-10">Glossy Shine</span>\n  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-all"></div>\n</button>`
};

export default GlossyShine;
