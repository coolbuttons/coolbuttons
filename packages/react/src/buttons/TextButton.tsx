import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const TextButton: React.FC = () => {
  return (
    <button className="px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 active:scale-95 transition-all duration-200">
      Text Link
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'text-button',
  name: 'Text Button',
  category: ButtonCategory.ESSENTIAL,
  component: TextButton,
  description: 'A minimal text-only button for tertiary actions.',
  code: `<button className="px-4 py-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all">\n  Text Link\n</button>`,
  typescript: `import React from 'react';\n\nexport const TextLinkButton = () => (\n  <button className="px-4 py-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 active:scale-95 transition-all">\n    Text Link\n  </button>\n);`,
  css: `.btn-text {\n  padding: 0.5rem 1rem;\n  background-color: transparent;\n  color: #2563eb;\n  font-weight: 600;\n  border: none;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-text:hover {\n  background-color: #eff6ff;\n}\n\n.btn-text:active {\n  transform: scale(0.95);\n}`
};

export default TextButton;
