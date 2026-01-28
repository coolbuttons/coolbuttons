import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const PrimaryButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
      Primary Action
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'primary-button',
  name: 'Primary Button',
  category: ButtonCategory.ESSENTIAL,
  component: PrimaryButton,
  description: 'A clean, straightforward primary action button for main calls-to-action.',
  code: `<button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">\n  Primary Action\n</button>`,
  typescript: `import React from 'react';\n\nexport const PrimaryActionButton = () => (\n  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">\n    Primary Action\n  </button>\n);`,
  css: `.btn-primary {\n  padding: 0.75rem 2rem;\n  background-color: #2563eb;\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-primary:hover {\n  background-color: #1d4ed8;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\n.btn-primary:active {\n  transform: scale(0.95);\n}`
};

export default PrimaryButton;
