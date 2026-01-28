import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const WarningButton: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
      Warning
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'warning-button',
  name: 'Warning Button',
  category: ButtonCategory.ESSENTIAL,
  component: WarningButton,
  description: 'An amber warning-state button for cautionary actions.',
  code: `<button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 active:scale-95 transition-all duration-200">\n  Warning\n</button>`,
  typescript: `import React from 'react';\n\nexport const WarningActionButton = () => (\n  <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 active:scale-95 transition-all duration-200">\n    Warning\n  </button>\n);`,
  css: `.btn-warning {\n  padding: 0.75rem 2rem;\n  background-color: #f59e0b;\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-warning:hover {\n  background-color: #d97706;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\n.btn-warning:active {\n  transform: scale(0.95);\n}`
};

export default WarningButton;
