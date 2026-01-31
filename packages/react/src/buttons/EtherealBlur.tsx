import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const EtherealBlur: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl blur-[2px] hover:blur-0 transition-all duration-500 scale-95 hover:scale-100">
      Ghost Reveal
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'ethereal-blur',
  name: 'Dreamy Blur',
  category: ButtonCategory.EXPERIMENTAL,
  component: EtherealBlur,
  description: 'A button that starts in a dream-like blurred state and sharpens into focus on hover.',

  // Tailwind CSS version
  tailwind: `<button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl blur-[2px] hover:blur-0 transition-all duration-500 scale-95 hover:scale-100">
  Ghost Reveal
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const EtherealBlur: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl blur-[2px] hover:blur-0 transition-all duration-500 scale-95 hover:scale-100">
      Ghost Reveal
    </button>
  );
};

export default EtherealBlur;`,

  // HTML/CSS version
  html: `<button class="ethereal-blur">Ghost Reveal</button>`,

  css: `.ethereal-blur {
  padding: 12px 32px;
  background-color: #18181b; /* zinc-900 */
  color: #ffffff;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  
  /* Initial State: Blurred and slightly shrunk */
  filter: blur(2px);
  transform: scale(0.95);
  transition: all 500ms ease;
}

.ethereal-blur:hover {
  filter: blur(0);
  transform: scale(1);
}`,

  // Vanilla JavaScript version
  javascript: `const etherealBtn = document.querySelector('.ethereal-blur');

etherealBtn.addEventListener('mouseenter', () => {
  etherealBtn.style.filter = 'blur(0)';
  etherealBtn.style.transform = 'scale(1)';
});

etherealBtn.addEventListener('mouseleave', () => {
  etherealBtn.style.filter = 'blur(2px)';
  etherealBtn.style.transform = 'scale(0.95)';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-8 py-3 bg-zinc-900 text-white font-bold rounded-xl blur-[2px] hover:blur-0 transition-all duration-500 scale-95 hover:scale-100">
  Ghost Reveal
</button>`,
};

export default EtherealBlur;