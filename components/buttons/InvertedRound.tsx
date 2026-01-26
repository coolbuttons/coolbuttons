
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const InvertedRound: React.FC = () => {
  return (
    <button className="relative px-10 py-3 bg-zinc-900 text-white font-bold [clip-path:polygon(10%_0,90%_0,100%_10%,100%_90%,90%_100%,10%_100%,0_90%,0_10%)] hover:scale-105 transition-transform">
      Octagon Cut
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'inverted-round',
  name: 'Octagon Cut',
  category: ButtonCategory.MINIMAL,
  component: InvertedRound,
  description: 'Precise geometric octagonal shape using clip-path.',
  code: `<button className="px-10 py-3 bg-zinc-900 text-white font-bold [clip-path:polygon(10%_0,90%_0,100%_10%,100%_90%,90%_100%,10%_100%,0_90%,0_10%)] hover:scale-105 transition-transform">\n  Octagon Cut\n</button>`
};

export default InvertedRound;
