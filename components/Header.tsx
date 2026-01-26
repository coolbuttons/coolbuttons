
import React from 'react';
import { Home } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-3 md:gap-6">
          
          {/* Logo Section */}
          <div 
            onClick={onNavigateHome}
            className="flex items-center gap-2 md:gap-3 shrink-0 cursor-pointer"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl overflow-hidden">
              <img src="/icon.png" alt="Cool Buttons" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-black tracking-tighter text-zinc-900 dark:text-white leading-none">
                COOL<span className="text-orange-500">BUTTONS</span>
              </h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
            <button
              onClick={onNavigateHome}
              className="hidden sm:flex p-2 md:p-2.5 rounded-lg md:rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-orange-500 transition-all active:scale-90"
              title="Home"
            >
              <Home className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </button>
            
            <button className="hidden xs:block px-3 md:px-5 py-2 md:py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-xl transition-all shadow-lg shadow-zinc-200/50 dark:shadow-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
              PRO
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
