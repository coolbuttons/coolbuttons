
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const StripeHover: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold rounded-lg overflow-hidden group">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">Stripe In</span>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#18181b_10px,#18181b_20px)] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'stripe-hover',
  name: 'Hazard Shift',
  category: ButtonCategory.RETRO,
  component: StripeHover,
  description: 'Bold background stripes that slide in vertically.',
  code: `<button className="relative px-8 py-3 bg-zinc-100 font-bold overflow-hidden group">\n  <span className="relative z-10 group-hover:text-white">Stripe In</span>\n  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#18181b_10px,#18181b_20px)] translate-y-full group-hover:translate-y-0 transition-transform"></div>\n</button>`
};

export default StripeHover;
