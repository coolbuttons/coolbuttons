import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const FragmentButton: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-black group overflow-hidden">
      <span className="relative z-10">Fragment_Nav</span>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-white/10 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'fragment-button-experimental',
  name: 'Fragment Shard',
  category: ButtonCategory.EXPERIMENTAL,
  component: FragmentButton,
  description: 'Fast-moving glass-like shard that slices across the button face.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 text-white font-black group overflow-hidden">\n  <span className="relative z-10">Fragment_Nav</span>\n  <div className="absolute top-0 left-0 w-1/2 h-full bg-white/10 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700"></div>\n</button>`
};

export default FragmentButton;