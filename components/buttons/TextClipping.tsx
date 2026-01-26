import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const TextClipping: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-100 text-zinc-900 font-black text-xl hover:bg-zinc-900 hover:text-white transition-all duration-500 [clip-path:inset(10%_0_10%_0)] hover:[clip-path:inset(0%_0_0%_0)]">
      Clip Open
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'text-clipping-animated',
  name: 'Clip Reveal',
  category: ButtonCategory.ANIMATED,
  component: TextClipping,
  description: 'A button that expands vertically from a central clipping mask on hover.',
  code: `<button className="px-8 py-3 [clip-path:inset(10%_0_10%_0)] hover:[clip-path:inset(0%)] transition-all">\n  Clip Open\n</button>`
};

export default TextClipping;