import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlassFrostyPill: React.FC = () => {
  return (
    <div className="p-10 relative inline-block group">
      <div className="absolute inset-0 bg-rose-500/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100"></div>
      <button className="relative px-10 py-3 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-500 dark:text-rose-400 font-bold rounded-full shadow-lg hover:bg-rose-500/20 transition-all duration-300 active:scale-95">
        Frosty Pill
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-frosty-pill-btn',
  name: 'Rose Frosty Pill',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassFrostyPill,
  description: 'Smooth rose-tinted glass component with heavy edge highlights and soft backdrop glow.',

  // Tailwind CSS version
  tailwind: `<div className="p-10 relative inline-block group">
  <div className="absolute inset-0 bg-rose-500/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100"></div>
  <button className="relative px-10 py-3 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-500 dark:text-rose-400 font-bold rounded-full shadow-lg hover:bg-rose-500/20 transition-all duration-300 active:scale-95">
    Frosty Pill
  </button>
</div>`,

  // React TypeScript version
  react: `import React from 'react';

const GlassFrostyPill: React.FC = () => {
  return (
    <div className="p-10 relative inline-block group">
      <div className="absolute inset-0 bg-rose-500/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100"></div>
      <button className="relative px-10 py-3 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-500 dark:text-rose-400 font-bold rounded-full shadow-lg hover:bg-rose-500/20 transition-all duration-300 active:scale-95">
        Frosty Pill
      </button>
    </div>
  );
};

export default GlassFrostyPill;`,

  // HTML/CSS version
  html: `<div class="frosty-container">
  <div class="frosty-blob"></div>
  <button class="frosty-pill">Frosty Pill</button>
</div>`,

  css: `.frosty-container {
  position: relative;
  display: inline-block;
  padding: 40px; /* p-10 */
}

.frosty-container .frosty-blob {
  position: absolute;
  inset: 0;
  background-color: rgba(244, 63, 94, 0.05); /* rose-500/5 */
  border-radius: 9999px;
  filter: blur(64px); /* blur-3xl approx */
  z-index: 0;
}

.frosty-pill {
  position: relative;
  z-index: 10;
  padding: 12px 40px; /* px-10 py-3 */
  background-color: rgba(244, 63, 94, 0.1); /* rose-500/10 */
  border: 1px solid rgba(244, 63, 94, 0.2); /* rose-500/20 */
  color: #f43f5e; /* rose-500 */
  font-weight: 700;
  border-radius: 9999px; /* rounded-full */
  
  /* Glassmorphism */
  backdrop-filter: blur(24px); /* backdrop-blur-xl */
  -webkit-backdrop-filter: blur(24px);
  
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  cursor: pointer;
  transition: all 300ms ease;
}

.frosty-pill:hover {
  background-color: rgba(244, 63, 94, 0.2); /* rose-500/20 */
}

.frosty-pill:active {
  transform: scale(0.95);
}`,

  // Vanilla JavaScript version
  javascript: `const frostyBtn = document.querySelector('.frosty-pill');

frostyBtn.addEventListener('mouseenter', () => {
  frostyBtn.style.backgroundColor = 'rgba(244, 63, 94, 0.2)';
});

frostyBtn.addEventListener('mouseleave', () => {
  frostyBtn.style.backgroundColor = 'rgba(244, 63, 94, 0.1)';
});

frostyBtn.addEventListener('mousedown', () => {
  frostyBtn.style.transform = 'scale(0.95)';
});

frostyBtn.addEventListener('mouseup', () => {
  frostyBtn.style.transform = 'scale(1)';
});`,

  // Default code export (Tailwind)
  code: `<div className="p-10 relative inline-block group">
  <div className="absolute inset-0 bg-rose-500/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100"></div>
  <button className="relative px-10 py-3 bg-rose-500/10 backdrop-blur-xl border border-rose-500/20 text-rose-500 font-bold rounded-full shadow-lg hover:bg-rose-500/20 transition-all duration-300 active:scale-95">
    Frosty Pill
  </button>
</div>`,
};

export default GlassFrostyPill;