
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const RetroCassette: React.FC = () => {
  return (
    <button className="relative px-10 py-4 bg-[#e5e0d8] dark:bg-[#2a2a2a] text-[#d97706] font-black rounded-lg border-x-8 border-t-2 border-b-8 border-zinc-400 dark:border-zinc-800 shadow-xl group overflow-hidden active:translate-y-1 active:border-b-4 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse group-hover:shadow-[0_0_10px_#ef4444]"></div>
        <span className="uppercase tracking-tighter text-sm italic">REC_MODE</span>
      </div>
      <div className="absolute top-0 right-4 w-12 h-1 bg-zinc-400 opacity-20"></div>
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'retro-cassette',
  name: 'Tape Cassette',
  category: ButtonCategory.RETRO,
  component: RetroCassette,
  description: 'Analog aesthetic with a recording indicator and thick side bezels.',
  code: `<button className="px-10 py-4 bg-[#e5e0d8] text-[#d97706] font-black rounded-lg border-x-8 border-t-2 border-b-8 border-zinc-400 active:translate-y-1 transition-all">\n  <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse inline-block mr-2"></div>\n  REC_MODE\n</button>`
};

export default RetroCassette;
