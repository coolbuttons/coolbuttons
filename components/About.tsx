import React from 'react';
import { ArrowLeft, Heart, Users, Zap, Globe } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  const team = [
    { name: 'Alex Chen', role: 'Founder & Designer', initials: 'AC' },
    { name: 'Sarah Johnson', role: 'Lead Developer', initials: 'SJ' },
    { name: 'Marcus Webb', role: 'UI/UX Specialist', initials: 'MW' },
    { name: 'Emma Davis', role: 'Community Manager', initials: 'ED' }
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4">About Cool Buttons</h1>
          <p className="text-xl text-zinc-400 mb-8">
            We're on a mission to make button design accessible to every developer.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Our Story</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-4 text-zinc-300">
            <p>
              Cool Buttons started as a side project when our founder noticed that finding well-designed, copy-paste ready button components was surprisingly difficult. Designers spend hours creating buttons, developers spend hours integrating them, and both sides get frustrated.
            </p>
            <p>
              We decided to change that. We created a curated collection of 400+ beautifully designed buttons, all built with Tailwind CSS, ready to use in any project.
            </p>
            <p>
              Today, Cool Buttons is used by thousands of developers worldwide to speed up their design-to-code workflow.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Design Excellence',
                desc: 'Every button is crafted with attention to detail and modern design principles.'
              },
              {
                icon: Users,
                title: 'Developer First',
                desc: 'We build tools that make developers\' lives easier and more productive.'
              },
              {
                icon: Globe,
                title: 'Open & Accessible',
                desc: 'Our components are free, open-source, and available to everyone.'
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

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '400+', label: 'Button Designs' },
              { number: '50K+', label: 'Active Users' },
              { number: '15K+', label: 'GitHub Stars' },
              { number: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-black text-orange-500 mb-2">{stat.number}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Meet The Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-lg font-black mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-zinc-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Join Our Community</h2>
          <p className="text-zinc-400 mb-8">Be part of the Cool Buttons community and help shape the future of button design.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-lg transition-all">
              Get Involved
            </button>
            <button className="px-8 py-3 border border-orange-500/50 hover:border-orange-500 text-white font-black uppercase tracking-widest rounded-lg transition-all">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
