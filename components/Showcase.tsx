import React from 'react';
import { ArrowLeft, Sparkles, Globe, Users, Trophy } from 'lucide-react';

interface ShowcaseProps {
  onBack: () => void;
}

const Showcase: React.FC<ShowcaseProps> = ({ onBack }) => {
  const showcases = [
    {
      title: 'Modern SaaS Platform',
      description: 'A sleek SaaS dashboard using gradient and glass buttons',
      category: 'Business',
      icon: Globe
    },
    {
      title: 'E-Commerce Store',
      description: 'Dynamic e-commerce site with interactive button animations',
      category: 'Shopping',
      icon: Trophy
    },
    {
      title: 'Creative Agency',
      description: 'Bold and artistic button designs for creative portfolios',
      category: 'Design',
      icon: Sparkles
    },
    {
      title: 'Social Network',
      description: 'Social media interface with engaging button patterns',
      category: 'Social',
      icon: Users
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-black mb-2">Showcase</h1>
        <p className="text-zinc-400 text-lg mb-12">Explore real-world examples of Cool Buttons in action.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {showcases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <span className="text-xs font-black px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                      {item.category}
                    </span>
                  </div>
                  <Icon className="text-orange-500 group-hover:scale-110 transition-transform" size={32} />
                </div>
                <p className="text-zinc-400 mb-6">{item.description}</p>
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-sm uppercase tracking-widest rounded-lg transition-all">
                  View Project
                </button>
              </div>
            );
          })}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/5 to-orange-600/5 border border-orange-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-black mb-4">Featured Collections</h2>
          <p className="text-zinc-400 mb-8">
            Explore curated collections of button designs perfect for specific use cases and industries.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {['Minimalist', 'Glassmorphism', 'Neumorphic', 'Animated', 'Gradient', 'Dark Mode'].map((collection) => (
              <button
                key={collection}
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg font-semibold transition-all text-left"
              >
                {collection} Buttons →
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Showcase;
