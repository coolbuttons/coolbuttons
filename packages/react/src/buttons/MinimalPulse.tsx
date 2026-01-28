
import React from 'react';

const MinimalPulse: React.FC = () => {
  return (
    <button className="flex items-center gap-3 px-6 py-2.5 bg-white border border-zinc-100 rounded-full text-zinc-600 font-semibold hover:border-zinc-300 transition-all shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
      </span>
      Live Status
    </button>
  );
};

export default MinimalPulse;
