import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const FloatingShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-[#ff7a00] text-white font-bold rounded-xl shadow-[0_5px_0_0_#b45309] hover:shadow-[0_15px_30px_rgba(251,146,60,0.4)] hover:-translate-y-2 transition-all duration-300">
      Shadow Flight
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'floating-shadow',
  name: 'Floating Shadow',
  category: ButtonCategory.ESSENTIAL,
  component: FloatingShadow,
  description: 'Dramatic elevation where a solid "physical" shadow transforms into a soft, distant shadow, simulating a lift-off effect.',

  // Tailwind CSS version
  tailwind: `<button className="px-8 py-3 bg-[#ff7a00] text-white font-bold rounded-xl shadow-[0_5px_0_0_#b45309] hover:shadow-[0_15px_30px_rgba(251,146,60,0.4)] hover:-translate-y-2 transition-all duration-300">
  Shadow Flight
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const FloatingShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-[#ff7a00] text-white font-bold rounded-xl shadow-[0_5px_0_0_#b45309] hover:shadow-[0_15px_30px_rgba(251,146,60,0.4)] hover:-translate-y-2 transition-all duration-300">
      Shadow Flight
    </button>
  );
};

export default FloatingShadow;`,

  // HTML/CSS version
  html: `<button class="floating-shadow">Shadow Flight</button>`,

  css: `.floating-shadow {
  padding: 12px 32px;
  background-color: #ff7a00;
  color: #ffffff;
  font-weight: 700;
  border-radius: 12px; /* rounded-xl */
  border: none;
  cursor: pointer;
  transition: all 300ms ease;
  
  /* Initial State: Solid, hard shadow (grounded) */
  box-shadow: 0 5px 0 0 #b45309;
  transform: translateY(0);
}

.floating-shadow:hover {
  /* Hover State: Soft, diffuse shadow (flying) */
  box-shadow: 0 15px 30px rgba(251, 146, 60, 0.4);
  transform: translateY(-8px); /* -translate-y-2 approx */
}`,

  // Vanilla JavaScript version
  javascript: `const floatBtn = document.querySelector('.floating-shadow');

floatBtn.addEventListener('mouseenter', () => {
  floatBtn.style.boxShadow = '0 15px 30px rgba(251, 146, 60, 0.4)';
  floatBtn.style.transform = 'translateY(-8px)';
});

floatBtn.addEventListener('mouseleave', () => {
  floatBtn.style.boxShadow = '0 5px 0 0 #b45309';
  floatBtn.style.transform = 'translateY(0)';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-8 py-3 bg-[#ff7a00] text-white font-bold rounded-xl shadow-[0_5px_0_0_#b45309] hover:shadow-[0_15px_30px_rgba(251,146,60,0.4)] hover:-translate-y-2 transition-all duration-300">
  Shadow Flight
</button>`,
};

export default FloatingShadow;