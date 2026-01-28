
import React from 'react';

const GradientPulse: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold rounded-full overflow-hidden group">
      <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
      <span className="relative">Hot Action</span>
    </button>
  );
};

export default GradientPulse;
