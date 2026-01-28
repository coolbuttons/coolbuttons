import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const OutlineButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 active:scale-95 transition-all duration-200">
      Outline
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'outline-button',
  name: 'Outline Button',
  category: ButtonCategory.ESSENTIAL,
  component: OutlineButton,
  description: 'A transparent button with border for secondary emphasis.',
  code: `<button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all">\n  Outline\n</button>`,
  typescript: `import React from 'react';\n\nexport const OutlineActionButton = () => (\n  <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all">\n    Outline\n  </button>\n);`,
  css: `.btn-outline {\n  padding: 0.75rem 2rem;\n  background-color: transparent;\n  border: 2px solid #2563eb;\n  color: #2563eb;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-outline:hover {\n  background-color: #eff6ff;\n}\n\n.btn-outline:active {\n  transform: scale(0.95);\n}`
};

export default OutlineButton;
