
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ButtonCard from './components/ButtonCard';
import LandingPage from './components/LandingPage';
import ButtonDetail from './components/ButtonDetail';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import ProKit from './components/ProKit';
import Packages from './components/Packages';
import Guide from './components/Guide';
import License from './components/License';
import NotFound from './components/NotFound';
import NoConnection from './components/NoConnection';
import { buttonLibrary } from './data/buttonLib';
import { ButtonDesign, ButtonCategory } from './types';
import { Search, Command, ChevronDown } from 'lucide-react';
import { registerServiceWorker, monitorConnectionStatus, recordPageVisit } from './utils/offlineUtils';

// Helper function to convert button name to URL slug
const toSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

// Helper function to find button by slug
const findButtonBySlug = (slug: string): ButtonDesign | null => {
  return buttonLibrary.find(btn => toSlug(btn.name) === slug) || null;
};

type ViewType = 'landing' | 'buttons' | 'button' | 'showcase' | 'pricing' | 'about' | 'terms' | 'privacy' | 'contact' | 'prokit' | 'packages' | 'guide' | 'license' | 'not-found' | 'no-connection';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('landing');
  const [selectedButton, setSelectedButton] = useState<ButtonDesign | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<ButtonCategory | 'All'>('All');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayCount, setDisplayCount] = useState(30); // Show 12 buttons initially

  const LOAD_MORE_COUNT = 30; // Load 12 more on each "Show More"

  // Handle URL navigation on mount and when URL changes
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);

      if (segments.length === 0 || path === '/') {
        setView('landing');
        setSelectedButton(null);
      } else if (segments[0] === 'buttons' && segments.length === 1) {
        setView('buttons');
        setSelectedButton(null);
      } else if (segments[0] === 'buttons' && segments.length === 2) {
        const slug = segments[1];
        // Check if it's a category
        const allCategories = ['All', ...Object.values(ButtonCategory)];
        const categoryMatch = allCategories.find(cat => cat.toLowerCase() === slug.toLowerCase());
        
        if (categoryMatch) {
          // It's a category - filter buttons by this category
          setView('buttons');
          setActiveCategory(categoryMatch as any);
          setSelectedButton(null);
        } else {
          // It's a button slug
          const button = findButtonBySlug(slug);
          if (button) {
            setView('button');
            setSelectedButton(button);
          } else {
            // Redirect to buttons page if button not found
            window.history.replaceState({}, '', '/buttons');
            setView('buttons');
          }
        }
      } else if (segments[0] === 'docs') {
        setView('documentation');
      } else if (segments[0] === 'showcase') {
        setView('showcase');
      } else if (segments[0] === 'pricing') {
        setView('pricing');
      } else if (segments[0] === 'about') {
        setView('about');
      } else if (segments[0] === 'terms') {
        setView('terms');
      } else if (segments[0] === 'privacy') {
        setView('privacy');
      } else if (segments[0] === 'contact') {
        setView('contact');
      } else if (segments[0] === 'prokit') {
        setView('prokit');
      } else if (segments[0] === 'packages') {
        setView('packages');
      } else if (segments[0] === 'guide') {
        setView('guide');
      } else if (segments[0] === 'license') {
        setView('license');
      } else if (segments[0] === 'offline') {
        setView('no-connection');
      } else {
        // Unknown route - show 404
        setView('not-found');
      }
      window.scrollTo(0, 0);
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  // Handle Command+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Initialize service worker and offline storage
  useEffect(() => {
    // Register service worker for offline support
    registerServiceWorker();

    // Monitor connection status
    monitorConnectionStatus((isOnline) => {
      if (!isOnline) {
        // Navigate to no-connection page when offline
        window.history.pushState({}, '', '/offline');
        setView('no-connection');
      }
    });

    // Record initial page visit
    recordPageVisit('landing');
  }, []);

  const filteredButtons = useMemo(() => {
    setDisplayCount(30); // Reset display count when filter changes
    return buttonLibrary.filter(btn => {
      const searchStr = searchTerm.toLowerCase();
      const matchesSearch = 
        btn.name.toLowerCase().includes(searchStr) || 
        btn.category.toLowerCase().includes(searchStr) ||
        btn.description.toLowerCase().includes(searchStr);
      const matchesCategory = activeCategory === 'All' || btn.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const categories = ['All', ...Object.values(ButtonCategory)];

  const navigateToCategory = (category: string) => {
    const categorySlug = category.toLowerCase();
    window.history.pushState({}, '', `/buttons/${categorySlug}`);
    setActiveCategory(category as any);
    window.scrollTo(0, 0);
  };

  const navigateTo = (newView: ViewType, design: ButtonDesign | null = null) => {
    // @ts-ignore
    if (document.startViewTransition) {
      // @ts-ignore
      document.startViewTransition(() => {
        if (newView === 'landing') {
          window.history.pushState({}, '', '/');
        } else if (newView === 'buttons') {
          window.history.pushState({}, '', '/buttons');
        } else if (newView === 'button' && design) {
          const slug = toSlug(design.name);
          window.history.pushState({}, '', `/buttons/${slug}`);
        } else if (newView === 'showcase') {
          window.history.pushState({}, '', '/showcase');
        } else if (newView === 'pricing') {
          window.history.pushState({}, '', '/pricing');
        } else if (newView === 'about') {
          window.history.pushState({}, '', '/about');
        } else if (newView === 'terms') {
          window.history.pushState({}, '', '/terms');
        } else if (newView === 'privacy') {
          window.history.pushState({}, '', '/privacy');
        } else if (newView === 'contact') {
          window.history.pushState({}, '', '/contact');
        } else if (newView === 'prokit') {
          window.history.pushState({}, '', '/prokit');
        } else if (newView === 'packages') {
          window.history.pushState({}, '', '/packages');
        } else if (newView === 'guide') {
          window.history.pushState({}, '', '/guide');
        } else if (newView === 'license') {
          window.history.pushState({}, '', '/license');
        }
        setView(newView);
        if (design) setSelectedButton(design);
        window.scrollTo(0, 0);
      });
    } else {
      if (newView === 'landing') {
        window.history.pushState({}, '', '/');
      } else if (newView === 'buttons') {
        window.history.pushState({}, '', '/buttons');
      } else if (newView === 'button' && design) {
        const slug = toSlug(design.name);
        window.history.pushState({}, '', `/buttons/${slug}`);
      } else if (newView === 'showcase') {
        window.history.pushState({}, '', '/showcase');
      } else if (newView === 'pricing') {
        window.history.pushState({}, '', '/pricing');
      } else if (newView === 'about') {
        window.history.pushState({}, '', '/about');
      } else if (newView === 'terms') {
        window.history.pushState({}, '', '/terms');
      } else if (newView === 'privacy') {
        window.history.pushState({}, '', '/privacy');
      } else if (newView === 'contact') {
        window.history.pushState({}, '', '/contact');
      } else if (newView === 'prokit') {
        window.history.pushState({}, '', '/prokit');
      } else if (newView === 'packages') {
        window.history.pushState({}, '', '/packages');
      } else if (newView === 'guide') {
        window.history.pushState({}, '', '/guide');
      } else if (newView === 'license') {
        window.history.pushState({}, '', '/license');
      }
      setView(newView);
      if (design) setSelectedButton(design);
      window.scrollTo(0, 0);
    }
  };

  if (view === 'landing') {
    return (
      <div className="animate-fade-in">
        <LandingPage 
          onExplore={() => navigateTo('buttons')} 
          onProKit={() => navigateTo('prokit')}
          onNavigateHome={() => navigateTo('landing')}
          onNavigate={(nav) => {
            if (nav === 'packages') navigateTo('packages');
            else if (nav === 'guide') navigateTo('guide');
          }}
        />
      </div>
    );
  }

  if (view === 'button' && selectedButton) {
    return (
      <div className="animate-fade-in">
        <ButtonDetail 
          design={selectedButton} 
          onBack={() => navigateTo('buttons')} 
        />
      </div>
    );
  }

  if (view === 'showcase') {
    return <div className="animate-fade-in"><Showcase onBack={() => navigateTo('landing')} /></div>;
  }

  if (view === 'pricing') {
    return <div className="animate-fade-in"><Pricing onBack={() => navigateTo('landing')} /></div>;
  }

  if (view === 'about') {
    return <div className="animate-fade-in"><About onBack={() => navigateTo('landing')} /></div>;
  }

  if (view === 'terms') {
    return <div className="animate-fade-in"><Terms onBack={() => navigateTo('landing')} /></div>;
  }

  if (view === 'privacy') {
    return <div className="animate-fade-in"><Privacy onBack={() => navigateTo('landing')} /></div>;
  }

  if (view === 'contact') {
    return <div className="animate-fade-in"><Contact onBack={() => navigateTo('landing')} /></div>;
  }

  if (view === 'prokit') {
    return <div className="animate-fade-in"><ProKit onBack={() => navigateTo('landing')} onExplore={() => navigateTo('buttons')} /></div>;
  }

  if (view === 'packages') {
    return <div className="animate-fade-in"><Packages /></div>;
  }

  if (view === 'guide') {
    return <div className="animate-fade-in"><Guide onBack={() => navigateTo('landing')} /></div>;
  }

  if (view === 'license') {
    return <div className="animate-fade-in"><License /></div>;
  }

  if (view === 'not-found') {
    return <div className="animate-fade-in"><NotFound /></div>;
  }

  if (view === 'no-connection') {
    return <div className="animate-fade-in"><NoConnection /></div>;
  }

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark">
      <Header 
        onNavigateHome={() => navigateTo('landing')}
        onNavigate={(viewName: string) => navigateTo(viewName as ViewType)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-20 md:pb-32">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter mb-2">
              Button<span className="text-orange-500">Styles</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">
              Click on any button to view source code.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative group w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-zinc-400 dark:text-zinc-500 transition-colors group-focus-within:text-orange-500 w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full bg-zinc-200/40 dark:bg-zinc-900/40 border border-transparent dark:border-zinc-800/40 rounded-xl md:rounded-2xl pl-11 pr-12 py-3 md:py-3.5 text-sm font-semibold dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-all focus:bg-white dark:focus:bg-zinc-900 focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500/30 outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-4 hidden md:flex items-center pointer-events-none">
              <kbd className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">
                <Command size={12} /> K
              </kbd>
            </div>
          </div>
        </div>

        {/* Category Buttons - After Search Filter */}
        <div className="mb-12 flex justify-center">
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-3xl p-1.5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => navigateToCategory(cat)}
                className={`px-3 py-2 rounded-xl text-[9px] whitespace-nowrap font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg'
                    : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredButtons.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredButtons.slice(0, displayCount).map((design) => (
                <ButtonCard 
                  key={design.id} 
                  design={design} 
                  onClick={() => navigateTo('button', design)}
                />
              ))}
            </div>
            
            {displayCount < filteredButtons.length && (
              <div className="flex justify-center mt-12">
                <button 
                  onClick={() => setDisplayCount(prev => prev + LOAD_MORE_COUNT)}
                  className="px-8 py-3 bg-white-500 text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] border border-indigo-400/30 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  Show More
                  <ChevronDown size={16} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <Search size={40} className="text-zinc-200 mb-6" />
            <h3 className="text-xl font-black dark:text-white mb-2">No styles found</h3>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
              className="mt-4 px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-[10px] uppercase tracking-widest rounded-xl"
            >
              Reset
            </button>
          </div>
        )}
      </main>

      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectButton={(design) => {
          navigateTo('button', design);
          setIsCommandPaletteOpen(false);
        }}
      />

      {(view === 'landing' || view === 'buttons') && <Footer />}
    </div>
  );
};

export default App;
