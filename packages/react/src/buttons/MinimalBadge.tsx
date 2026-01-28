
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const MinimalBadge: React.FC = () => {
  return (
    <button className="px-4 py-1.5 bg-zinc-100 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] rounded hover:bg-zinc-900 hover:text-white transition-all">
      Badge Mode
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'minimal-badge-btn',
  name: 'Industrial Badge',
  category: ButtonCategory.MINIMAL,
  component: MinimalBadge,
  description: 'Small technical badge design with heavy tracking.',
  code: `<button className="px-4 py-1.5 bg-zinc-100 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] rounded hover:bg-zinc-900 hover:text-white transition-all">\n  Badge Mode\n</button>`
};

export default MinimalBadge;
