import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const SpringButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:scale-125 active:scale-85 transition-all duration-200 shadow-lg hover:shadow-xl">
      Spring Pop
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'spring-button',
  name: 'Spring Pop',
  category: ButtonCategory.ANIMATED,
  component: SpringButton,
  description: 'A button with springy pop animation on hover.',
  code: `<button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:scale-125 active:scale-85 transition-all duration-200">\n  Spring Pop\n</button>`
};

export default SpringButton;
