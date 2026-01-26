
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const RetroPress: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-100 text-zinc-800 font-bold rounded-lg border-x-2 border-t-2 border-b-8 border-zinc-300 active:border-b-2 active:translate-y-1.5 transition-all">
      KEY_PRESS
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-press',
  name: 'Retro Keypress',
  category: ButtonCategory.RETRO,
  component: RetroPress,
  description: 'Mechanical keyboard feel with heavy bottom border.',
  code: `<button className="px-8 py-3 bg-zinc-100 border-x-2 border-t-2 border-b-8 border-zinc-300 active:border-b-2 active:translate-y-1.5 transition-all">\n  KEY_PRESS\n</button>`
};

export default RetroPress;
