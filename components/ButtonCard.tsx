
import React from 'react';
import { ButtonDesign } from '../types';

interface ButtonCardProps {
  design: ButtonDesign;
  onClick: () => void;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ design, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center aspect-square bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-orange-500/30 overflow-hidden"
    >
      <div className="scale-75 md:scale-90 group-hover:scale-100 transition-transform duration-500">
        <design.component />
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-white dark:from-zinc-900 via-white/90 dark:via-zinc-900/90 to-transparent">
        <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-orange-500 mb-0.5">
          {design.category}
        </span>
        <h3 className="text-[10px] font-black text-zinc-900 dark:text-white truncate">
          {design.name}
        </h3>
      </div>
    </div>
  );
};

export default ButtonCard;
