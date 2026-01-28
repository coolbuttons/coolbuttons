
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const RetroConsole: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-black text-emerald-400 font-mono border-l-4 border-emerald-400 hover:bg-emerald-950 hover:pl-8 transition-all duration-300">
       RUN_CLI
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-console-cmd',
  name: 'CLI Terminal',
  category: ButtonCategory.RETRO,
  component: RetroConsole,
  description: 'Monospace font with a left border "cursor" that expands on hover.',
  code: `<button className="px-6 py-2 bg-black text-emerald-400 font-mono border-l-4 border-emerald-400 hover:bg-emerald-950 hover:pl-8 transition-all">\n  > RUN_CLI\n</button>`
};

export default RetroConsole;
