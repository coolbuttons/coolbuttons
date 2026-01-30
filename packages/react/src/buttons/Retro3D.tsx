
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const Retro3D: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-orange-500 text-white font-extrabold rounded-xl border-b-[6px] border-orange-700 active:border-b-0 active:translate-y-[6px] transition-all uppercase tracking-tight">
      Play Retro
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-3d',
  name: 'Retro 3D Play',
  category: ButtonCategory.RETRO,
  component: Retro3D,
  description: 'Bouncy orange retro arcade button with physical click feel.',
  code: `<button className="px-8 py-3 bg-orange-500 text-white font-extrabold rounded-xl border-b-[6px] border-orange-700 active:border-b-0 active:translate-y-[6px] transition-all uppercase tracking-tight">\n  Play Retro\n</button>`,
  typescript: `import React from 'react';\n\nexport const RetroButton = () => (\n  <button className="px-8 py-3 bg-orange-500 text-white font-extrabold rounded-xl border-b-[6px] border-orange-700 active:border-b-0 active:translate-y-[6px] transition-all uppercase tracking-tight">\n    Play Retro\n  </button>\n);`,
  css: `.btn-retro {\n  padding: 0.75rem 2rem;\n  background: #f97316;\n  color: white;\n  font-weight: 800;\n  border-radius: 0.75rem;\n  border: none;\n  border-bottom: 6px solid #c2410c;\n  transition: all 0.1s;\n  text-transform: uppercase;\n}\n\n.btn-retro:active {\n  border-bottom-width: 0;\n  transform: translateY(6px);\n}`
};

export default Retro3D;
