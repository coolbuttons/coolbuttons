import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const LandingSecondary: React.FC = () => {
  return (
    <button className="px-12 py-4 text-lg bg-transparent border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-bold rounded-full hover:bg-gray-100 dark:hover:bg-white/10 active:scale-95 transition-all duration-200">
      Learn More
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'landing-secondary',
  name: 'Landing Secondary',
  category: ButtonCategory.ESSENTIAL,
  component: LandingSecondary,
  description: 'A secondary call-to-action button for landing pages.',
  code: `<button className="px-12 py-4 text-lg bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded-full hover:bg-gray-100 active:scale-95 transition-all">\n  Learn More\n</button>`
};

export default LandingSecondary;
