import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const FloatingLeaf: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 transition-all duration-300 shadow-lg">
      Floating Leaf
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'floating-leaf',
  name: 'Floating Leaf',
  category: ButtonCategory.ANIMATED,
  component: FloatingLeaf,
  description: 'A button that floats upward on hover with green coloring.',
  code: `<button className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 transition-all duration-300">\n  Floating Leaf\n</button>`
};

export default FloatingLeaf;
