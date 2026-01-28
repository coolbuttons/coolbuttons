
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const ModernPrimary: React.FC = () => {
  return (
    <button className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
      Modern Action
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'modern-primary',
  name: 'Modern Primary',
  category: ButtonCategory.ESSENTIAL,
  component: ModernPrimary,
  description: 'Clean shadow-heavy indigo button with smooth hover elevation.',
  code: `<button className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">\n  Modern Action\n</button>`,
  typescript: `import React from 'react';\n\nexport const ModernButton = () => (\n  <button className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">\n    Modern Action\n  </button>\n);`,
  css: `.btn-modern {\n  padding: 0.625rem 1.5rem;\n  background: #4f46e5;\n  color: white;\n  font-weight: 600;\n  border-radius: 0.75rem;\n  border: none;\n  box-shadow: 0 10px 15px -3px rgba(199, 210, 254, 0.5);\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-modern:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(199, 210, 254, 0.6);\n}`
};

export default ModernPrimary;
