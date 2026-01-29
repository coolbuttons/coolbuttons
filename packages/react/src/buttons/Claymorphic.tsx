import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const Claymorphic: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-indigo-500 text-white font-black rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-200">
      Plasticine
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'claymorphic',
  name: 'Plasticine Clay',
  category: ButtonCategory.NEUMORPHIC,
  component: Claymorphic,
  description: 'Vibrant claymorphic design using heavy internal highlights to simulate physical volume and texture.',

  // Tailwind CSS version
  tailwind: `<button className="px-8 py-3 bg-indigo-500 text-white font-black rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-200">
  Plasticine
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const Claymorphic: React.FC = () => {
  return (
    <button className="px-8 py-3 bg-indigo-500 text-white font-black rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-200">
      Plasticine
    </button>
  );
};

export default Claymorphic;`,

  // HTML/CSS version
  html: `<button class="claymorphic">Plasticine</button>`,

  css: `.claymorphic {
  padding: 12px 32px;
  background-color: #6366f1; /* indigo-500 */
  color: #ffffff;
  font-weight: 900;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  transition: all 200ms ease;
  
  /* Claymorphic Shadows: 
     1. Inner shadow bottom-right (depth)
     2. Inner highlight top-left (light source)
     3. Drop shadow (elevation) 
  */
  box-shadow: 
    inset -4px -4px 8px rgba(0,0,0,0.3),
    inset 4px 4px 8px rgba(255,255,255,0.3),
    8px 8px 16px rgba(0,0,0,0.15);
}

.claymorphic:hover {
  transform: scale(1.1);
}

.claymorphic:active {
  transform: scale(0.95);
}`,

  // Vanilla JavaScript version
  javascript: `const clayBtn = document.querySelector('.claymorphic');

clayBtn.addEventListener('mouseenter', () => {
  clayBtn.style.transform = 'scale(1.1)';
});

clayBtn.addEventListener('mouseleave', () => {
  clayBtn.style.transform = 'scale(1)';
});

clayBtn.addEventListener('mousedown', () => {
  clayBtn.style.transform = 'scale(0.95)';
});

clayBtn.addEventListener('mouseup', () => {
  clayBtn.style.transform = 'scale(1.1)';
});`,

  // Default code export (Tailwind)
  code: `<button className="px-8 py-3 bg-indigo-500 text-white font-black rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-200">
  Plasticine
</button>`,
};

export default Claymorphic;