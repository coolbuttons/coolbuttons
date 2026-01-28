import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const PathDraw: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-transparent text-zinc-900 font-black group">
      <span className="relative z-10">Drawing Border</span>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
        <rect x="1" y="1" width="98" height="38" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="280" strokeDashoffset="280" className="group-hover:stroke-dashoffset-0 transition-all duration-700 ease-in-out" />
      </svg>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'path-draw-experimental',
  name: 'SVG Draw',
  category: ButtonCategory.EXPERIMENTAL,
  component: PathDraw,
  description: 'SVG stroke-dasharray animation to draw the border frame.',
  code: `<button className="relative px-8 py-3 bg-transparent font-black group">\n  <svg className="absolute inset-0 w-full h-full">\n    <rect stroke-dasharray="280" stroke-dashoffset="280" className="group-hover:stroke-dashoffset-0" />\n  </svg>\n</button>`
};

export default PathDraw;