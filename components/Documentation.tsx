import React from 'react';
import { ArrowLeft, Code2, Layers, Zap, BookOpen, Github } from 'lucide-react';

interface DocumentationProps {
  onBack: () => void;
}

const Documentation: React.FC<DocumentationProps> = ({ onBack }) => {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-black mb-2">Documentation</h1>
        <p className="text-zinc-400 text-lg mb-12">Learn how to use Cool Buttons in your projects.</p>

        <div className="grid gap-8">
          {/* Getting Started */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold">Getting Started</h2>
            </div>
            <p className="text-zinc-400 mb-4">
              Cool Buttons is a collection of 400+ beautifully designed button components built with Tailwind CSS. Each button includes complete code that you can copy and paste directly into your project.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-zinc-400">
              <li>Browse the button gallery</li>
              <li>Click on any button to view its code</li>
              <li>Copy the code in your preferred format (Tailwind, React, or CSS)</li>
              <li>Paste it into your project</li>
            </ol>
          </section>

          {/* Installation */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold">Installation</h2>
            </div>
            <p className="text-zinc-400 mb-4">
              Cool Buttons uses Tailwind CSS. Make sure you have Tailwind CSS configured in your project:
            </p>
            <pre className="bg-black/50 border border-zinc-700 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">
              <code>{`npm install -D tailwindcss
npx tailwindcss init`}</code>
            </pre>
            <p className="text-zinc-400">Then add the button code to your project.</p>
          </section>

          {/* Usage */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold">Usage Examples</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">React Component</h3>
                <pre className="bg-black/50 border border-zinc-700 rounded-lg p-4 overflow-x-auto text-sm font-mono">
                  <code>{`import React from 'react';

const MyButton = () => (
  <button className="px-6 py-2 bg-orange-500 text-white rounded-lg">
    Click me
  </button>
);

export default MyButton;`}</code>
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-2">HTML Usage</h3>
                <pre className="bg-black/50 border border-zinc-700 rounded-lg p-4 overflow-x-auto text-sm font-mono">
                  <code>{`<button class="px-6 py-2 bg-orange-500 text-white rounded-lg">
  Click me
</button>`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold">Best Practices</h2>
            </div>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>
                <span>Use semantic button elements for accessibility</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>
                <span>Always provide clear, descriptive button text</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>
                <span>Test buttons on different screen sizes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>
                <span>Ensure sufficient contrast for accessibility</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500">✓</span>
                <span>Use consistent button styles across your site</span>
              </li>
            </ul>
          </section>

          {/* Support */}
          <section className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Github className="text-orange-500" size={28} />
              <h2 className="text-2xl font-bold">Need Help?</h2>
            </div>
            <p className="text-zinc-400 mb-4">
              Check out our GitHub repository or open an issue if you have questions or suggestions.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-sm uppercase tracking-widest rounded-lg transition-all"
            >
              <Github size={18} />
              Visit GitHub
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
