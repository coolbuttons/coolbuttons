
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const Cyberpunk: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-black italic rounded-none [clip-path:polygon(0_0,100%_0,100%_70%,85%_100%,0_100%)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
      CYBER_UP
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'cyberpunk',
  name: 'Cyber Blade',
  category: ButtonCategory.EXPERIMENTAL,
  component: Cyberpunk,
  description: 'Angular sci-fi button with a signature clip-path cut.',
  code: `<button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-black italic [clip-path:polygon(0_0,100%_0,100%_70%,85%_100%,0_100%)] hover:bg-cyan-400 hover:text-black transition-all">\n  CYBER_UP\n</button>`,
  typescript: `import React from 'react';\n\nexport const CyberButton = () => (\n  <button className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-black italic [clip-path:polygon(0_0,100%_0,100%_70%,85%_100%,0_100%)] hover:bg-cyan-400 hover:text-black transition-all">\n    CYBER_UP\n  </button>\n);`,
  css: `.btn-cyber {\n  padding: 0.75rem 2rem;\n  background: transparent;\n  color: #22d3ee;\n  border: 2px solid #22d3ee;\n  font-weight: 900;\n  font-style: italic;\n  clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);\n  transition: all 0.3s;\n}\n\n.btn-cyber:hover {\n  background: #22d3ee;\n  color: black;\n  box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);\n}`
};

export default Cyberpunk;
