
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../types';

const ScanlineCyber: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-zinc-950 text-emerald-500 font-mono border border-emerald-500/30 overflow-hidden group">
      <span className="relative z-10">SYS_EXECUTE</span>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/40 animate-[scan_2s_linear_infinite] group-hover:bg-emerald-400"></div>
      <style>{`@keyframes scan { from { top: -10%; } to { top: 110%; } }`}</style>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'scanline-cyber',
  name: 'Cyber Scanline',
  category: ButtonCategory.EXPERIMENTAL,
  component: ScanlineCyber,
  description: 'Classic CRT terminal scanline animation.',
  code: `<button className="px-8 py-3 bg-zinc-950 text-emerald-500 font-mono border border-emerald-500/30 overflow-hidden relative">\n  <span>SYS_EXECUTE</span>\n  <div className="absolute inset-0 bg-[length:100%_2px] animate-scan"></div>\n</button>`
};

export default ScanlineCyber;
