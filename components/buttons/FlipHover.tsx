import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const FlipHover: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:skew-y-2 hover:-translate-x-1 active:scale-95 transition-all duration-300">
      Flip Hover
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'flip-hover',
  name: 'Flip Hover',
  category: ButtonCategory.ANIMATED,
  component: FlipHover,
  description: 'A button that skews and shifts on hover for a flipping effect.',
  code: `<button className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:skew-y-2 hover:-translate-x-1 active:scale-95 transition-all">\n  Flip Hover\n</button>`
};

export default FlipHover;
