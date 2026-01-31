import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const DepthSlide: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold border-b-4 border-zinc-300 rounded-lg overflow-hidden group active:border-b-0 active:translate-y-1 transition-all">
      <span className="relative z-10 group-hover:text-white transition-colors duration-200">Depth Slide</span>
      <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'depth-slide',
  name: 'Depth Slide',
  category: ButtonCategory.RETRO,
  component: DepthSlide,
  description: 'A button combining physical depth (press effect) with a modern sliding background reveal.',

  // Tailwind CSS version
  tailwind: `<button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold border-b-4 border-zinc-300 rounded-lg overflow-hidden group active:border-b-0 active:translate-y-1 transition-all">
  <span className="relative z-10 group-hover:text-white transition-colors duration-200">Depth Slide</span>
  <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const DepthSlide: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold border-b-4 border-zinc-300 rounded-lg overflow-hidden group active:border-b-0 active:translate-y-1 transition-all">
      <span className="relative z-10 group-hover:text-white transition-colors duration-200">Depth Slide</span>
      <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
    </button>
  );
};

export default DepthSlide;`,

  // HTML/CSS version
  html: `<button class="depth-slide">
  <span class="label">Depth Slide</span>
  <div class="slide-bg"></div>
</button>`,

  css: `.depth-slide {
  position: relative;
  padding: 12px 32px;
  background-color: #f4f4f5; /* zinc-100 */
  color: #18181b; /* zinc-900 */
  font-weight: 700;
  border: none;
  border-bottom: 4px solid #d4d4d8; /* zinc-300 */
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 150ms ease;
}

.depth-slide .label {
  position: relative;
  z-index: 10;
  transition: color 200ms;
}

.depth-slide .slide-bg {
  position: absolute;
  inset: 0;
  background-color: #18181b; /* zinc-900 */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 300ms ease;
  z-index: 0;
}

/* Hover State */
.depth-slide:hover .slide-bg {
  transform: scaleX(1);
}

.depth-slide:hover .label {
  color: #ffffff;
}

/* Active State (The Press) */
.depth-slide:active {
  border-bottom-width: 0;
  transform: translateY(4px);
  /* Optional: Add margin-bottom to prevent layout shift if needed in flow */
  margin-bottom: 4px; 
}`,

  // Vanilla JavaScript version
  javascript: `const depthBtn = document.querySelector('.depth-slide');
const label = depthBtn.querySelector('.label');
const slideBg = depthBtn.querySelector('.slide-bg');

depthBtn.addEventListener('mouseenter', () => {
  slideBg.style.transform = 'scaleX(1)';
  label.style.color = '#ffffff';
});

depthBtn.addEventListener('mouseleave', () => {
  slideBg.style.transform = 'scaleX(0)';
  label.style.color = '#18181b';
});

depthBtn.addEventListener('mousedown', () => {
  depthBtn.style.borderBottomWidth = '0';
  depthBtn.style.transform = 'translateY(4px)';
});

depthBtn.addEventListener('mouseup', () => {
  depthBtn.style.borderBottomWidth = '4px';
  depthBtn.style.transform = 'translateY(0)';
});`,

  // Default code export (Tailwind)
  code: `<button className="relative px-8 py-3 bg-zinc-100 text-zinc-900 font-bold border-b-4 border-zinc-300 rounded-lg overflow-hidden group active:border-b-0 active:translate-y-1 transition-all">
  <span className="relative z-10 group-hover:text-white transition-colors duration-200">Depth Slide</span>
  <div className="absolute inset-0 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</button>`,
};

export default DepthSlide;