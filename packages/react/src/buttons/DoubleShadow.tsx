import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const DoubleShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border border-zinc-100 shadow-[5px_5px_0_0_#ff7a00,10px_10px_0_0_#fef3c7] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300">
      Multi Layer
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'double-shadow-pill',
  name: 'Double Shadow Pill',
  category: ButtonCategory.RETRO,
  component: DoubleShadow,
  description: 'A pop-art style button with two-tone offset shadows that collapse into the button on hover.',

  // Tailwind CSS version
  tailwind: `<button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border border-zinc-100 shadow-[5px_5px_0_0_#ff7a00,10px_10px_0_0_#fef3c7] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300">
  Multi Layer
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const DoubleShadow: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border border-zinc-100 shadow-[5px_5px_0_0_#ff7a00,10px_10px_0_0_#fef3c7] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300">
      Multi Layer
    </button>
  );
};

export default DoubleShadow;`,

  // HTML/CSS version
  html: `<button class="double-shadow">Multi Layer</button>`,

  css: `.double-shadow {
  padding: 12px 32px;
  background-color: #ffffff;
  color: #18181b; /* zinc-900 */
  font-weight: 700;
  border-radius: 12px;
  border: 1px solid #f4f4f5; /* zinc-100 */
  cursor: pointer;
  transition: all 300ms ease;
  
  /* Double Hard Shadow: Orange layer, then Pale Yellow layer */
  box-shadow: 
    5px 5px 0 0 #ff7a00,
    10px 10px 0 0 #fef3c7;
}

.double-shadow:hover {
  transform: translate(4px, 4px); /* translate-x-1 translate-y-1 */
  box-shadow: none;
}`,

  // Vanilla JavaScript version
  javascript: `const doubleShadowBtn = document.querySelector('.double-shadow');

doubleShadowBtn.addEventListener('mouseenter', () => {
  doubleShadowBtn.style.transform = 'translate(4px, 4px)';
  doubleShadowBtn.style.boxShadow = 'none';
});

doubleShadowBtn.addEventListener('mouseleave', () => {
  doubleShadowBtn.style.transform = 'translate(0, 0)';
  doubleShadowBtn.style.boxShadow = '5px 5px 0 0 #ff7a00, 10px 10px 0 0 #fef3c7';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-8 py-3 bg-white text-zinc-900 font-bold rounded-xl border border-zinc-100 shadow-[5px_5px_0_0_#ff7a00,10px_10px_0_0_#fef3c7] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300">
  Multi Layer
</button>`,
};

export default DoubleShadow;