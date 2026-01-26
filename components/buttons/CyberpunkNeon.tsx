import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const CyberpunkNeon: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-black text-cyan-400 font-black rounded-none border-2 border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8),inset_0_0_20px_rgba(34,211,238,0.2)] active:scale-95 transition-all duration-200">
      CYBER
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'cyberpunk-neon',
  name: 'Cyberpunk Neon',
  category: ButtonCategory.EXPERIMENTAL,
  component: CyberpunkNeon,
  description: 'A hardcore cyberpunk button with glowing cyan neon effect.',
  code: `<button className="px-8 py-3 bg-black text-cyan-400 font-black rounded-none border-2 border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] active:scale-95 transition-all">\n  CYBER\n</button>`
};

export default CyberpunkNeon;
