import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const Brutalist: React.FC = () => {
  return (
    <button className="px-6 py-3 bg-white border-4 border-black text-black font-black text-lg shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all">
      NO RULES
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'brutalist-block',
  name: 'Brutalist Block',
  category: ButtonCategory.RETRO,
  component: Brutalist,
  description: 'High contrast stark black and white design with a heavy drop shadow that collapses on click.',

  // Tailwind CSS version
  tailwind: `<button className="px-6 py-3 bg-white border-4 border-black text-black font-black text-lg shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all">
  NO RULES
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const Brutalist: React.FC = () => {
  return (
    <button className="px-6 py-3 bg-white border-4 border-black text-black font-black text-lg shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all">
      NO RULES
    </button>
  );
};

export default Brutalist;`,

  // HTML/CSS version
  html: `<button class="brutalist-block">NO RULES</button>`,

  css: `.brutalist-block {
  padding: 12px 24px;
  background-color: #ffffff;
  color: #000000;
  border: 4px solid #000000;
  font-weight: 900; /* font-black */
  font-size: 1.125rem; /* text-lg */
  box-shadow: 6px 6px 0 0 #000000;
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.brutalist-block:active {
  box-shadow: none;
  transform: translate(6px, 6px);
}`,

  // Vanilla JavaScript version
  javascript: `const brutalistBtn = document.querySelector('.brutalist-block');

brutalistBtn.addEventListener('mousedown', () => {
  brutalistBtn.style.boxShadow = 'none';
  brutalistBtn.style.transform = 'translate(6px, 6px)';
});

brutalistBtn.addEventListener('mouseup', () => {
  brutalistBtn.style.boxShadow = '6px 6px 0 0 #000000';
  brutalistBtn.style.transform = 'translate(0, 0)';
});

// Handle mouse leaving while pressed
brutalistBtn.addEventListener('mouseleave', () => {
  brutalistBtn.style.boxShadow = '6px 6px 0 0 #000000';
  brutalistBtn.style.transform = 'translate(0, 0)';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-6 py-3 bg-white border-4 border-black text-black font-black text-lg shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all">
  NO RULES
</button>`,
};

export default Brutalist;