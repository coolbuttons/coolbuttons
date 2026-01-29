import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const GlassCard: React.FC = () => {
  return (
    <div className="p-10 relative group overflow-hidden bg-slate-100/50 rounded-3xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
      <button className="relative px-10 py-5 bg-white/20 border border-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] text-blue-950 font-black hover:bg-white/30 transition-all duration-300 active:scale-95 active:shadow-none">
        Sapphire Slab
      </button>
    </div>
  );
};

export const design: ButtonDesign = {
  id: 'glass-card',
  name: 'Sapphire Slab',
  category: ButtonCategory.GLASSMORPHIC,
  component: GlassCard,
  description: 'A heavy blue-tinted glass slab with internal reflections, deep rounded corners, and a background ambient glow.',

  // Tailwind CSS version
  tailwind: `<div className="p-10 relative group overflow-hidden bg-slate-100/50 rounded-3xl">
  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
  <button className="relative px-10 py-5 bg-white/20 border border-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] text-blue-950 font-black hover:bg-white/30 transition-all duration-300 active:scale-95 active:shadow-none">
    Sapphire Slab
  </button>
</div>`,

  // React TypeScript version
  react: `import React from 'react';

const GlassCard: React.FC = () => {
  return (
    <div className="p-10 relative group overflow-hidden bg-slate-100/50 rounded-3xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
      <button className="relative px-10 py-5 bg-white/20 border border-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] text-blue-950 font-black hover:bg-white/30 transition-all duration-300 active:scale-95 active:shadow-none">
        Sapphire Slab
      </button>
    </div>
  );
};

export default GlassCard;`,

  // HTML/CSS version
  html: `<div class="glass-container">
  <div class="glow-blob"></div>
  <button class="sapphire-slab">Sapphire Slab</button>
</div>`,

  css: `.glass-container {
  padding: 40px;
  position: relative;
  overflow: hidden;
  background-color: rgba(241, 245, 249, 0.5); /* slate-100/50 */
  border-radius: 24px;
}

.glass-container .glow-blob {
  position: absolute;
  top: 0;
  right: 0;
  width: 128px; /* w-32 */
  height: 128px; /* h-32 */
  background-color: rgba(59, 130, 246, 0.3); /* blue-500/30 */
  border-radius: 9999px;
  filter: blur(60px);
  pointer-events: none;
  transition: transform 700ms;
}

.glass-container:hover .glow-blob {
  transform: scale(1.5);
}

.sapphire-slab {
  position: relative;
  padding: 20px 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2.5rem; /* rounded-[2.5rem] */
  color: #172554; /* blue-950 */
  font-weight: 900;
  backdrop-filter: blur(40px); /* backdrop-blur-2xl */
  -webkit-backdrop-filter: blur(40px);
  cursor: pointer;
  transition: all 300ms ease;
  
  /* Complex shadows: Drop shadow + Top inset highlight */
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.sapphire-slab:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.sapphire-slab:active {
  transform: scale(0.95);
  box-shadow: none;
}`,

  // Vanilla JavaScript version
  javascript: `const container = document.querySelector('.glass-container');
const blob = container.querySelector('.glow-blob');
const glassBtn = container.querySelector('.sapphire-slab');

container.addEventListener('mouseenter', () => {
  blob.style.transform = 'scale(1.5)';
});

container.addEventListener('mouseleave', () => {
  blob.style.transform = 'scale(1)';
});

glassBtn.addEventListener('mouseenter', () => {
  glassBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
});

glassBtn.addEventListener('mouseleave', () => {
  glassBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
});

glassBtn.addEventListener('mousedown', () => {
  glassBtn.style.transform = 'scale(0.95)';
  glassBtn.style.boxShadow = 'none';
});

glassBtn.addEventListener('mouseup', () => {
  glassBtn.style.transform = 'scale(1)';
  glassBtn.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
});`,

  // Default code export (Tailwind)
  code: `<button className="relative px-10 py-5 bg-white/20 border border-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] text-blue-950 font-black hover:bg-white/30 transition-all duration-300 active:scale-95 active:shadow-none">
  Sapphire Slab
</button>`,
};

export default GlassCard;