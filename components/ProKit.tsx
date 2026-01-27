import React from 'react';
import { ArrowRight, Check, Zap, Shield, Layers, Sparkles } from 'lucide-react';
import Footer from './Footer';

interface ProKitProps {
  onBack: () => void;
  onExplore?: () => void;
}

const ProKit: React.FC<ProKitProps> = ({ onBack, onExplore }) => {
  const features = [
    { icon: Zap, title: "400+ Button Styles", desc: "Access all button designs completely free. A growing collection of styles from minimalist to futuristic." },
    { icon: Layers, title: "React Components", desc: "Copy-paste ready components for your projects. All available at no cost." },
    { icon: Shield, title: "Production Ready", desc: "Battle-tested, optimized, and accessible components. Use with confidence in production." },
    { icon: Sparkles, title: "Regular Updates", desc: "New button designs added regularly. Everything stays free as we grow." }
  ];

  const pricing = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Everything available right now",
      features: ["400+ Button Styles", "React Components", "Copy-Paste Code", "Production Ready", "Regular Updates", "MIT Licensed"],
      popular: true
    },
    {
      name: "Future Pro",
      price: "TBD",
      period: "when available",
      description: "Premium features coming soon",
      features: ["All Free Features", "Advanced Analytics", "Priority Support", "Custom Components", "API Access", "Team Collaboration"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-500/[0.03] blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/[0.03] blur-[120px] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:py-6 max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-1 md:gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-xl overflow-hidden">
            <img src="/icon.png" alt="Cool Buttons" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-lg md:text-xl font-black tracking-tighter dark:text-white">
            COOL<span className="text-orange-500">BUTTONS</span>
          </h1>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-8 md:pt-16 pb-16 md:py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.9] text-zinc-900 dark:text-white mb-6 md:mb-8">
            Premium Features <br />
            <span className="text-orange-500">Available Now for Free</span>
          </h1>
          
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-base md:text-xl max-w-2xl mb-10 md:mb-12 leading-relaxed mx-auto">
            All 400+ button designs, advanced components, and features are completely free to use right now. Premium plans may be introduced in the future, but existing features will always remain free.
          </p>

          <button 
            onClick={onExplore}
            className="group px-8 md:px-12 py-4 md:py-5 bg-orange-500 text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-4 mx-auto"
          >
            Explore Features
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
            What You Get
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group p-6 md:p-7 bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-base md:text-lg font-black text-zinc-900 dark:text-white mb-2 uppercase tracking-tight">
                  {f.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
            Pricing
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Everything is free now. Premium features may be introduced in the future, but all current features will remain free forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricing.map((plan, i) => (
            <div 
              key={i} 
              className={`relative rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? 'border-orange-500 bg-gradient-to-br from-orange-500/5 to-transparent shadow-2xl shadow-orange-500/10 scale-105'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700'
              } p-8 md:p-10`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium ml-2">
                  {plan.period}
                </span>
              </div>

              <button 
                onClick={onExplore}
                className={`w-full px-6 py-3 mb-8 font-black uppercase tracking-widest text-[10px] rounded-[2rem] transition-all ${
                  plan.popular
                    ? 'bg-orange-500 text-white shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-105'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {plan.popular ? 'Get Started Now' : 'Stay Tuned'}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Is Cool Buttons really free?", a: "Yes! All 400+ button designs are completely free to use forever. No credit card required, no hidden fees." },
            { q: "Can I use it in production?", a: "Absolutely! Cool Buttons is MIT licensed, meaning you can use it in commercial projects, modify it, and distribute it freely." },
            { q: "Will it always be free?", a: "All current features will always remain free. We may introduce premium features in the future, but existing functionality stays free." },
            { q: "Can I contribute?", a: "Yes! Cool Buttons is open source. Visit our GitHub to contribute new button designs and improvements." }
          ].map((faq, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-base md:text-lg font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-3">
                {faq.q}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-40">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 text-white text-center p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-zinc-950/50 opacity-50"></div>
          <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3 md:mb-4 leading-tight">
              Start Using Cool Buttons Today
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto mb-6 md:mb-8 font-medium">
              All 400+ button designs are ready to use. Copy, paste, and ship faster.
            </p>
            <button 
              onClick={onExplore}
              className="px-8 md:px-12 py-4 md:py-5 bg-orange-500 text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all inline-flex items-center gap-4"
            >
              Explore Library
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onBack} />
    </div>
  );
};

export default ProKit;
