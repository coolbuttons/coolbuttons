import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const LargeButton: React.FC = () => {
  return (
    <button className="px-12 py-4 text-lg bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl">
      Large Button
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'large-button',
  name: 'Large Button',
  category: ButtonCategory.ESSENTIAL,
  component: LargeButton,
  description: 'A prominent button for important primary actions that need visibility.',
  code: `<button className="px-12 py-4 text-lg bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">\n  Large Button\n</button>`,
  typescript: `import React from 'react';\n\nexport const LargeActionButton = () => (\n  <button className="px-12 py-4 text-lg bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl">\n    Large Button\n  </button>\n);`,
  css: `.btn-large {\n  padding: 1rem 3rem;\n  font-size: 1.125rem;\n  background-color: #2563eb;\n  color: white;\n  font-weight: 700;\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-large:hover {\n  background-color: #1d4ed8;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n}\n\n.btn-large:active {\n  transform: scale(0.95);\n}`
};

export default LargeButton;
