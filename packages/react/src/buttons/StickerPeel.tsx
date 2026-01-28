
import React from 'react';

const StickerPeel: React.FC = () => {
  return (
    <button className="relative px-8 py-3 bg-indigo-500 text-white font-bold rounded-xl rounded-tr-none hover:rounded-tr-xl transition-all duration-300 before:absolute before:top-0 before:right-0 before:w-4 before:h-4 before:bg-indigo-700 before:rounded-bl-lg before:opacity-100 hover:before:opacity-0">
      Peel Me
    </button>
  );
};

export default StickerPeel;
