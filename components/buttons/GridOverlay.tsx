
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GridOverlay: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-900 text-white font-mono rounded overflow-hidden group">
      <span className="relative z-10">GRID_NAV</span>
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_9px,#fff_10px),linear-gradient(0deg,transparent_9px,#fff_10px)] bg-[size:10px_10px] group-hover:scale-150 transition-transform duration-700"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'grid-overlay-experimental',
  name: 'Grid Overlay',
  category: ButtonCategory.EXPERIMENTAL,
  component: GridOverlay,
  description: 'Dark monospace button with a technical grid background that expands on interaction.',
  code: `<button className="relative px-8 py-3 bg-zinc-900 text-white font-mono rounded overflow-hidden group">\n  <span className="relative z-10">GRID_NAV</span>\n  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_9px,#fff_10px),linear-gradient(0deg,transparent_9px,#fff_10px)] bg-[size:10px_10px] group-hover:scale-150 transition-transform"></div>\n</button>`
};

export default GridOverlay;
