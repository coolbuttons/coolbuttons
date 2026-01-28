import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

const BounceScale: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300">
      Bounce Scale
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'bounce-scale',
  name: 'Bounce Scale',
  category: ButtonCategory.ANIMATED,
  component: BounceScale,
  description: 'A button that scales and bounces on hover.',
  code: `<button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300">\n  Bounce Scale\n</button>`,
  typescript: `import React from 'react';\n\nexport const BounceScaleButton = () => (\n  <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300">\n    Bounce Scale\n  </button>\n);`,
  css: `.btn-bounce-scale {\n  padding: 0.75rem 2rem;\n  background-color: #059669;\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.btn-bounce-scale:hover {\n  transform: scale(1.1) translateY(-4px);\n}\n\n.btn-bounce-scale:active {\n  transform: scale(0.95);\n}`
};

export default BounceScale;
