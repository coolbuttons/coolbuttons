
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const DiagonalStripes: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-orange-500 text-white font-black rounded-lg overflow-hidden group">
      <span className="relative z-10">Danger Zone</span>
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] animate-[move-bg_2s_linear_infinite]"></div>
      <style>{`
        @keyframes move-bg {
          0% { background-position: 0 0; }
          100% { background-position: 40px 0; }
        }
      `}</style>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'diagonal-stripes',
  name: 'Hazard Stripe',
  category: ButtonCategory.RETRO,
  component: DiagonalStripes,
  description: 'Moving industrial warning pattern.',
  code: `<button className="relative px-8 py-3 bg-orange-500 text-white font-black rounded-lg overflow-hidden group">\n  <span className="relative z-10">Danger Zone</span>\n  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] animate-move-bg"></div>\n</button>`
};

export default DiagonalStripes;
