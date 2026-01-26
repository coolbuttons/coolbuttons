import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, X } from 'lucide-react';
import { buttonLibrary } from '../data/buttonLib';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectButton: (button: any) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectButton }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredButtons = buttonLibrary.filter(btn =>
    btn.name.toLowerCase().includes(query.toLowerCase()) ||
    btn.category.toLowerCase().includes(query.toLowerCase()) ||
    btn.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredButtons.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredButtons.length) % filteredButtons.length);
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredButtons[selectedIndex]) {
            onSelectButton(filteredButtons[selectedIndex]);
            onClose();
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredButtons, onSelectButton, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Palette */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
            <Search size={18} className="text-orange-500" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search buttons, categories..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              className="flex-1 bg-transparent text-sm outline-none text-zinc-900 dark:text-white placeholder-zinc-400"
            />
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredButtons.length === 0 ? (
              <div className="px-4 py-12 text-center text-sm text-zinc-500">
                No buttons found for "{query}"
              </div>
            ) : (
              <div className="p-2">
                {filteredButtons.map((button, idx) => (
                  <button
                    key={button.id}
                    onClick={() => {
                      onSelectButton(button);
                      onClose();
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center gap-3 ${
                      idx === selectedIndex
                        ? 'bg-orange-500 text-white'
                        : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{button.name}</div>
                      <div className={`text-xs ${
                        idx === selectedIndex ? 'text-orange-100' : 'text-zinc-500 dark:text-zinc-400'
                      }`}>
                        {button.category}
                      </div>
                    </div>
                    {idx === selectedIndex && (
                      <div className="text-xs font-semibold px-2 py-1 bg-white/20 rounded">
                        Enter
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300 font-mono text-[10px]">↑</kbd>
                <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300 font-mono text-[10px]">↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-300 font-mono text-[10px]">Esc</kbd>
                <span>Close</span>
              </div>
            </div>
            <span>{filteredButtons.length} results</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandPalette;
