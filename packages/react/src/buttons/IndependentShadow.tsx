import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const IndependentShadow: React.FC = () => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-indigo-200 rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 blur-sm"></div>
      <button className="relative px-8 py-3 bg-indigo-600 text-white font-bold rounded-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform shadow-lg">
        Decoupled
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'independent-shadow-animated',
  name: 'Decoupled Shadow',
  category: ButtonCategory.ANIMATED,
  component: IndependentShadow,
  description: 'The background shadow moves independently from the button body.',
  code: `<div className="relative group">\n  <div className="absolute inset-0 bg-indigo-200 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>\n  <button className="relative bg-indigo-600">Decoupled</button>\n</div>`
};

export default IndependentShadow;