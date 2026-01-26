import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const PulseGlow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-400/70 active:scale-95 transition-all duration-200 animate-pulse">
      Pulse Glow
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'pulse-glow',
  name: 'Pulse Glow',
  category: ButtonCategory.ANIMATED,
  component: PulseGlow,
  description: 'A button with continuous pulsing animation.',
  code: `<button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 animate-pulse transition-all">\n  Pulse Glow\n</button>`,
  typescript: `import React from 'react';\n\nexport const PulseGlowButton = () => (\n  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/50 animate-pulse transition-all">\n    Pulse Glow\n  </button>\n);`,
  css: `.btn-pulse-glow {\n  padding: 0.75rem 2rem;\n  background-color: #2563eb;\n  color: white;\n  font-weight: 600;\n  border-radius: 0.5rem;\n  border: none;\n  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.5);\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  cursor: pointer;\n}\n\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}`
};

export default PulseGlow;
