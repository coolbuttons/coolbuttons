
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const DotPattern: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-zinc-50 transition-colors">
      Dot Matrix
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'dot-pattern',
  name: 'Dot Pattern',
  category: ButtonCategory.RETRO,
  component: DotPattern,
  description: 'Subtle technical dot pattern texture.',
  code: `<button className="px-8 py-3 bg-white border-2 border-zinc-900 text-zinc-900 font-bold rounded-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:10px_10px] hover:bg-zinc-50 transition-colors">\n  Dot Matrix\n</button>`
};

export default DotPattern;
