import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ClaySoftPill: React.FC = () => {
  return (
    <button className="px-12 py-4 bg-indigo-500 text-white font-black rounded-full shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.15),inset_8px_8px_16px_rgba(255,255,255,0.2),12px_12px_24px_rgba(79,70,229,0.2)] hover:scale-110 active:scale-90 transition-all duration-300">
      Soft Clay
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'clay-soft-pill',
  name: 'Soft Clay',
  category: ButtonCategory.NEUMORPHIC,
  component: ClaySoftPill,
  description: 'A "claymorphic" variation using distinct internal highlights to create an organic, rubbery volume.',

  // Tailwind CSS version
  tailwind: `<button className="px-12 py-4 bg-indigo-500 text-white font-black rounded-full shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.15),inset_8px_8px_16px_rgba(255,255,255,0.2),12px_12px_24px_rgba(79,70,229,0.2)] hover:scale-110 active:scale-90 transition-all duration-300">
  Soft Clay
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const ClaySoftPill: React.FC = () => {
  return (
    <button className="px-12 py-4 bg-indigo-500 text-white font-black rounded-full shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.15),inset_8px_8px_16px_rgba(255,255,255,0.2),12px_12px_24px_rgba(79,70,229,0.2)] hover:scale-110 active:scale-90 transition-all duration-300">
      Soft Clay
    </button>
  );
};

export default ClaySoftPill;`,

  // HTML/CSS version
  html: `<button class="clay-soft-pill">Soft Clay</button>`,

  css: `.clay-soft-pill {
  padding: 16px 48px;
  background-color: #6366f1; /* indigo-500 */
  color: #ffffff;
  font-weight: 900;
  border-radius: 9999px; /* full rounded */
  border: none;
  cursor: pointer;
  transition: all 300ms ease;
  
  /* Claymorphic Shadows: 
     1. Inner shadow bottom-right (depth)
     2. Inner highlight top-left (light source)
     3. Soft colored drop shadow (elevation) 
  */
  box-shadow: 
    inset -8px -8px 16px rgba(0, 0, 0, 0.15),
    inset 8px 8px 16px rgba(255, 255, 255, 0.2),
    12px 12px 24px rgba(79, 70, 229, 0.2);
}

.clay-soft-pill:hover {
  transform: scale(1.1);
}

.clay-soft-pill:active {
  transform: scale(0.9);
}`,

  // Vanilla JavaScript version
  javascript: `const clayPill = document.querySelector('.clay-soft-pill');

clayPill.addEventListener('mouseenter', () => {
  clayPill.style.transform = 'scale(1.1)';
});

clayPill.addEventListener('mouseleave', () => {
  clayPill.style.transform = 'scale(1)';
});

clayPill.addEventListener('mousedown', () => {
  clayPill.style.transform = 'scale(0.9)';
});

clayPill.addEventListener('mouseup', () => {
  clayPill.style.transform = 'scale(1.1)';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-12 py-4 bg-indigo-500 text-white font-black rounded-full shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.15),inset_8px_8px_16px_rgba(255,255,255,0.2),12px_12px_24px_rgba(79,70,229,0.2)] hover:scale-110 active:scale-90 transition-all duration-300">
  Soft Clay
</button>`,
};

export default ClaySoftPill;