import React from 'react';
import { ArrowLeft, Heart, Code2, Zap, Globe, Github, Twitter } from 'lucide-react';
import Footer from './Footer';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  const [avatarSrc, setAvatarSrc] = React.useState('https://github.com/devchauhann.png');

  const handleAvatarError = () => {
    setAvatarSrc('https://via.placeholder.com/150');
  };

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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">About Cool Buttons</h1>
          <p className="text-xl text-zinc-400">
            A passion project created by a solo full-stack developer
          </p>
        </div>

        {/* Developer Card */}
        <section className="mb-16 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-12 text-center">
          <img 
            src={avatarSrc}
            alt="Dev Chauhan"
            className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-orange-500 object-cover"
            onError={handleAvatarError}
          />
          <h2 className="text-3xl font-black mb-2">Dev Chauhan</h2>
          <p className="text-lg text-orange-400 font-semibold mb-4">Full Stack Developer & Designer</p>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in React, TypeScript, Tailwind CSS, and modern web technologies. Cool Buttons is my personal project where I combine my love for UI design and clean code.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="https://devchauhan.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-lg transition-all"
            >
              <Globe size={18} />
              Visit Portfolio
            </a>
            <a 
              href="https://github.com/devchauhann" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-orange-500/50 hover:border-orange-500 text-white font-black uppercase tracking-widest rounded-lg transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">The Story</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-4 text-zinc-300 leading-relaxed">
            <p>
              Cool Buttons started as a personal challenge to create a comprehensive collection of beautifully designed button components. While working on various projects, I noticed the lack of a centralized, well-organized resource for high-quality, production-ready button designs.
            </p>
            <p>
              I decided to build something that would not only serve my own projects but also help other developers and designers. The goal was simple: provide a collection of 400+ carefully crafted button designs that are easy to copy, customize, and integrate into any modern web project.
            </p>
            <p>
              Every button on this site has been meticulously designed and coded with performance and accessibility in mind. From minimalist flat designs to complex animated interactions, each style was created to solve real-world design challenges.
            </p>
            <p>
              Today, Cool Buttons is a reflection of my passion for clean code, beautiful design, and helping the developer community create better user experiences.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">My Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Quality Code',
                desc: 'Every button is built with clean, optimized, and well-documented code that follows best practices.'
              },
              {
                icon: Heart,
                title: 'Design Excellence',
                desc: 'Each design is carefully crafted to be not just beautiful, but also functional and user-friendly.'
              },
              {
                icon: Zap,
                title: 'Developer Experience',
                desc: 'Make it incredibly easy for developers to find, customize, and integrate buttons into their projects.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <Icon className="text-orange-500 mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Built With</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { tech: 'React 18', desc: 'Modern UI library for building interactive components' },
              { tech: 'TypeScript', desc: 'Type-safe JavaScript for robust development' },
              { tech: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid UI development' },
              { tech: 'Vite', desc: 'Lightning-fast build tool and development server' },
              { tech: 'Vercel', desc: 'Cloud platform for deploying and hosting' },
              { tech: 'Git & GitHub', desc: 'Version control and collaboration' }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                <h3 className="font-bold text-orange-400 mb-1">{item.tech}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '200+', label: 'Button Designs' },
              { number: '9', label: 'Categories' },
              { number: '100%', label: 'Open Source' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-black text-orange-500 mb-2">{stat.number}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Get In Touch</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Have feedback, suggestions, or just want to chat about web design? I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a 
              href="mailto:devchauhan.developer@gmail.com"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-lg transition-all"
            >
              Send Email
            </a>
            <a 
              href="https://devchauhan.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 border border-orange-500/50 hover:border-orange-500 text-white font-black uppercase tracking-widest rounded-lg transition-all"
            >
              Visit Portfolio
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
