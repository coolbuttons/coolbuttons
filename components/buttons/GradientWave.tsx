import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GradientWave: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all duration-200">
      Gradient Wave
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'gradient-wave',
  name: 'Gradient Wave',
  category: ButtonCategory.GRADIENT,
  component: GradientWave,
  description: 'A smooth cyan to blue gradient button with colored shadow.',
  code: `<button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all">\n  Gradient Wave\n</button>`,
  typescript: `import React from 'react';\n\nexport const GradientWaveButton = () => (\n  <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all">\n    Gradient Wave\n  </button>\n);`,
  css: `.btn-gradient-wave {\n  padding: 0.75rem 2rem;\n  background: linear-gradient(to right, #06b6d4, #2563eb);\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.btn-gradient-wave:hover {\n  box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.5);\n}\n\n.btn-gradient-wave:active {\n  transform: scale(0.95);\n}`
};

export default GradientWave;
