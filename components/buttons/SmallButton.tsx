import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const SmallButton: React.FC = () => {
  return (
    <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 active:scale-95 transition-all duration-200">
      Small
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'small-button',
  name: 'Small Button',
  category: ButtonCategory.ESSENTIAL,
  component: SmallButton,
  description: 'A compact button for tight layouts and dense interfaces.',
  code: `<button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 active:scale-95 transition-all">\n  Small\n</button>`,
  typescript: `import React from 'react';\n\nexport const SmallActionButton = () => (\n  <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 active:scale-95 transition-all">\n    Small\n  </button>\n);`,
  css: `.btn-small {\n  padding: 0.375rem 1rem;\n  background-color: #2563eb;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border-radius: 0.375rem;\n  border: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-small:hover {\n  background-color: #1d4ed8;\n}\n\n.btn-small:active {\n  transform: scale(0.95);\n}`
};

export default SmallButton;
