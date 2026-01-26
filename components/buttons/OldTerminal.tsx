import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const OldTerminal: React.FC = () => {
  return (
    <button className="px-6 py-2 bg-[#2a2a2a] text-[#ffd700] font-mono border-t-2 border-l-2 border-[#555] border-b-2 border-r-2 border-black hover:bg-black transition-colors shadow-lg">
      [ COMMAND_LINK ]
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'old-terminal-retro',
  name: 'Amber Console',
  category: ButtonCategory.RETRO,
  component: OldTerminal,
  description: 'Classic amber monochrome terminal style with heavy bevels.',
  code: `<button className="px-6 py-2 bg-[#2a2a2a] text-[#ffd700] font-mono border-t-2 border-l-2 border-[#555] border-b-2 border-r-2 border-black">\n  [ COMMAND_LINK ]\n</button>`
};

export default OldTerminal;