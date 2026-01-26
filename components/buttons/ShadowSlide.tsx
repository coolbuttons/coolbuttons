import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ShadowSlide: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-[0_4px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-200">
      Shadow Slide
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'shadow-slide',
  name: 'Shadow Slide',
  category: ButtonCategory.ANIMATED,
  component: ShadowSlide,
  description: 'A button with an expanding shadow on hover.',
  code: `<button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-[0_4px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.5)] active:translate-y-0 transition-all">\n  Shadow Slide\n</button>`
};

export default ShadowSlide;
