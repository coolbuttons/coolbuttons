import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const PurpleViolet: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 transition-all duration-200">
      Purple Violet
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'purple-violet',
  name: 'Purple Violet',
  category: ButtonCategory.GRADIENT,
  component: PurpleViolet,
  description: 'A rich purple to violet gradient.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 transition-all">\n  Purple Violet\n</button>`,
  typescript: `import React from 'react';\n\nexport const PurpleVioletButton = () => (\n  <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 transition-all">\n    Purple Violet\n  </button>\n);`,
  css: `.btn-purple-violet {\n  padding: 0.75rem 2rem;\n  background: linear-gradient(to right, #a855f7, #7c3aed);\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-purple-violet:hover {\n  box-shadow: 0 10px 15px -3px rgba(168, 85, 247, 0.5);\n}\n\n.btn-purple-violet:active {\n  transform: scale(0.95);\n}`
};

export default PurpleViolet;
