
import React from 'react';
import { Plus } from 'lucide-react';

const SplitIcon: React.FC = () => {
  return (
    <button className="flex items-stretch border-2 border-orange-500 rounded-xl overflow-hidden group">
      <div className="bg-orange-500 p-3 text-white group-hover:bg-orange-600 transition-colors">
        <Plus size={20} />
      </div>
      <div className="px-6 flex items-center bg-white text-orange-600 font-bold group-hover:bg-orange-50 transition-colors">
        New Project
      </div>
    </button>
  );
};

export default SplitIcon;
