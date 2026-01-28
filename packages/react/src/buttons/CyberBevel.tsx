
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const CyberBevel: React.FC = () => {
  return (
    <button className="px-10 py-3 bg-blue-600 text-white font-black skew-x-[-12deg] shadow-[4px_4px_0_#1e3a8a] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all uppercase italic">
      Bevel Drive
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'cyber-bevel',
  name: 'Cyber Bevel',
  category: ButtonCategory.RETRO,
  component: CyberBevel,
  description: 'Skewed aggressive design with hard shadows.',
  code: `<button className="px-10 py-3 bg-blue-600 text-white font-black skew-x-[-12deg] shadow-[4px_4px_0_#1e3a8a] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all uppercase italic">\n  Bevel Drive\n</button>`
};

export default CyberBevel;
