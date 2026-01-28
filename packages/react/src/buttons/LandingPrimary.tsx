import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const LandingPrimary: React.FC = () => {
  return (
    <button className="px-12 py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/60 hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
      Get Started
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'landing-primary',
  name: 'Landing Primary',
  category: ButtonCategory.ESSENTIAL,
  component: LandingPrimary,
  description: 'A prominent call-to-action button for landing pages.',
  code: `<button className="px-12 py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all">\n  Get Started\n</button>`
};

export default LandingPrimary;
