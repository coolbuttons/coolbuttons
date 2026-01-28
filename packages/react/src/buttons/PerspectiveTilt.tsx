
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const PerspectiveTilt: React.FC = () => {
  return (
    <div className="[perspective:1000px] group">
      <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(10deg)_rotateY(10deg)_translateZ(20px)] shadow-xl">
        3D Tilt
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'perspective-tilt',
  name: '3D Perspective Tilt',
  category: ButtonCategory.EXPERIMENTAL,
  component: PerspectiveTilt,
  description: 'Cinematic 3D rotation using CSS perspective.',
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl transition-transform duration-500 hover:[transform:rotateX(10deg)_rotateY(10deg)_translateZ(20px)] shadow-xl">\n  3D Tilt\n</button>`
};

export default PerspectiveTilt;
