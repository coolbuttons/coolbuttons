import React, { useState } from 'react';
import {
  Code2, Zap, Github, Linkedin, Twitter,
  Sparkles, Award, Rocket, Heart, ArrowRight,
  Layers, Users2
} from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      {/* Header */}
      <Header />


      {/* What is Cool Buttons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">What is Cool Buttons?</h2>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Cool Buttons is a comprehensive, open-source collection of beautifully designed button components. Whether you're building a simple website or a complex web application, you'll find production-ready button styles that work seamlessly with React, Vue, Svelte, or vanilla JavaScript.
            </p>
            
            <p>
              Each button component is meticulously crafted with attention to detail, accessibility, and performance. From minimalist flat designs to complex animated interactions, Cool Buttons covers every design style and use case you might encounter.
            </p>

            <p>
              The goal is simple: provide developers and designers with a single, reliable resource to copy, customize, and integrate beautiful button components into their projects in seconds—without worrying about compatibility or performance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cool Buttons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Why Cool Buttons?</h2>
          
          <div className="space-y-6">
            {[
              {
                icon: Code2,
                title: 'Production-Ready Code',
                desc: 'Every button is built with clean, optimized, and well-documented code following industry best practices.'
              },
              {
                icon: Heart,
                title: 'Beautiful Design',
                desc: 'Carefully crafted designs across categories: Essential, Gradient, Animated, Neumorphic, Glassmorphic, Minimal, Cyberpunk, Brutalist, and more.'
              },
              {
                icon: Zap,
                title: 'Easy to Use',
                desc: 'Copy the code you like, customize it to match your brand, and paste it into your project. No complex setup required.'
              },
              {
                icon: Award,
                title: 'Framework Agnostic',
                desc: 'Works with React, Vue, Svelte, or vanilla JavaScript. Mix and match components from different frameworks.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                  <Icon className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-black text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">Built With Modern Tech</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { tech: 'React 19', desc: 'Component library' },
              { tech: 'TypeScript', desc: 'Type-safe development' },
              { tech: 'Tailwind CSS', desc: 'Utility-first styling' },
              { tech: 'Vite', desc: 'Fast build tool' },
              { tech: 'npm', desc: 'Package distribution' },
              { tech: 'GitHub', desc: 'Version control' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg"
              >
                <h3 className="font-black text-orange-500 mb-1">{item.tech}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8">By The Numbers</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { number: '∞', label: 'Button Components' },
              { number: '∞', label: 'Design Categories' },
              { number: '100%', label: 'Open Source' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-zinc-800 border border-zinc-700 rounded-lg text-center"
              >
                <div className="text-4xl font-black text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
