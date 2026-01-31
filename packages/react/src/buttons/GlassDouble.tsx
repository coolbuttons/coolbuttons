import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const GlassDouble: React.FC = () => {
  return (
    <div className="relative p-1 inline-block group">
      <div className="absolute inset-0 bg-white/10 blur-md rounded-2xl transition-all duration-300 group-hover:bg-white/20"></div>
      <button className="relative px-8 py-3 bg-white/20 border border-white/40 text-zinc-800 font-black rounded-2xl shadow-xl hover:bg-white/40 transition-all duration-300 active:scale-95">
        Dual Glass
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-double-layered',
  name: 'Dual Glass',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassDouble,
  description: 'Two layers of glass effect: a blurred background halo and a sharp foreground button.',

  // Tailwind CSS version
  tailwind: `<div className="relative p-1 inline-block group">
  <div className="absolute inset-0 bg-white/10 blur-md rounded-2xl transition-all duration-300 group-hover:bg-white/20"></div>
  <button className="relative px-8 py-3 bg-white/20 border border-white/40 text-zinc-800 font-black rounded-2xl shadow-xl hover:bg-white/40 transition-all duration-300 active:scale-95">
    Dual Glass
  </button>
</div>`,

  // React TypeScript version
  react: `import React from 'react';

const GlassDouble: React.FC = () => {
  return (
    <div className="relative p-1 inline-block group">
      <div className="absolute inset-0 bg-white/10 blur-md rounded-2xl transition-all duration-300 group-hover:bg-white/20"></div>
      <button className="relative px-8 py-3 bg-white/20 border border-white/40 text-zinc-800 font-black rounded-2xl shadow-xl hover:bg-white/40 transition-all duration-300 active:scale-95">
        Dual Glass
      </button>
    </div>
  );
};

export default GlassDouble;`,

  // HTML/CSS version
  html: `<div class="glass-double-wrapper">
  <div class="glass-halo"></div>
  <button class="glass-double-btn">Dual Glass</button>
</div>`,

  css: `.glass-double-wrapper {
  position: relative;
  display: inline-block;
  padding: 4px; /* p-1 */
}

.glass-double-wrapper .glass-halo {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.1); /* white/10 */
  border-radius: 16px; /* rounded-2xl */
  filter: blur(12px); /* blur-md approx */
  transition: background-color 300ms;
  z-index: 0;
}

.glass-double-wrapper:hover .glass-halo {
  background-color: rgba(255, 255, 255, 0.2);
}

.glass-double-btn {
  position: relative;
  z-index: 10;
  padding: 12px 32px;
  background-color: rgba(255, 255, 255, 0.2); /* white/20 */
  border: 1px solid rgba(255, 255, 255, 0.4); /* white/40 */
  color: #27272a; /* zinc-800 */
  font-weight: 900; /* font-black */
  border-radius: 16px; /* rounded-2xl */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-xl */
  cursor: pointer;
  transition: all 300ms ease;
}

.glass-double-btn:hover {
  background-color: rgba(255, 255, 255, 0.4); /* white/40 */
}

.glass-double-btn:active {
  transform: scale(0.95);
}`,

  // Vanilla JavaScript version
  javascript: `const glassWrapper = document.querySelector('.glass-double-wrapper');
const glassBtn = glassWrapper.querySelector('.glass-double-btn');
const glassHalo = glassWrapper.querySelector('.glass-halo');

glassWrapper.addEventListener('mouseenter', () => {
  glassHalo.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  glassBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
});

glassWrapper.addEventListener('mouseleave', () => {
  glassHalo.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  glassBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
});

glassBtn.addEventListener('mousedown', () => {
  glassBtn.style.transform = 'scale(0.95)';
});

glassBtn.addEventListener('mouseup', () => {
  glassBtn.style.transform = 'scale(1)';
});`,

  // Default code export (Tailwind)
  code: `<div className="relative p-1 inline-block group">
  <div className="absolute inset-0 bg-white/10 blur-md rounded-2xl transition-all duration-300 group-hover:bg-white/20"></div>
  <button className="relative px-8 py-3 bg-white/20 border border-white/40 text-zinc-800 font-black rounded-2xl shadow-xl hover:bg-white/40 transition-all duration-300 active:scale-95">
    Dual Glass
  </button>
</div>`,
};

export default GlassDouble;