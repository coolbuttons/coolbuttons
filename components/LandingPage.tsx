
import React, { useState, useEffect, useRef } from 'react';
import { buttonLibrary } from '../data/buttonLib';
import Footer from './Footer';
import { 
  ArrowRight, Sparkles, Layers, ShieldCheck, 
  Rocket, MousePointer2, CheckCircle2, Star, 
  MessageSquare, ChevronDown, Github, Twitter,
  Cpu, Layout, Globe
} from 'lucide-react';
import Claymorphic from './buttons/Claymorphic';

interface LandingPageProps {
  onExplore: () => void;
  onProKit?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onExplore, onProKit }) => {
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const changeStyle = () => {
      if (!isHovered) {
        setCurrentStyleIdx((prev) => (prev + 1) % buttonLibrary.length);
      }
    };

    intervalRef.current = window.setInterval(changeStyle, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const currentDesign = buttonLibrary[currentStyleIdx];

  const features = [
    { icon: Layout, title: "400+ Designs", desc: "Explore 9 categories with styles from minimalist to futuristic." },
    { icon: Cpu, title: "Copy & Paste", desc: "Get production-ready code instantly. No build process needed." },
    { icon: Rocket, title: "Zero Dependencies", desc: "Pure Tailwind CSS. No npm packages, no bloat, no headaches." },
    { icon: Globe, title: "Fully Responsive", desc: "Mobile-first designs that look perfect on every screen size." }
  ];

  const testimonials = [
    { name: "Alex Rivers", role: "Senior Designer", text: "The fastest way to spice up a landing page. The neumorphic styles are incredible." },
    { name: "Sarah Chen", role: "Frontend Lead", text: "Clean code, amazing variety. This saved my team weeks of UI experimentation." },
    { name: "Marcio J.", role: "Independent Dev", text: "I just copy, paste, and ship. The best button resource on the web, period." }
  ];

  const faqs = [
    { q: "Can I use these buttons in production?", a: "Absolutely! All 400+ buttons are production-ready and fully tested. They're built with React and Tailwind CSS, optimized for performance and accessibility." },
    { q: "Do I need to install any dependencies?", a: "Nope! Cool Buttons uses only Tailwind CSS utility classes. Just copy the code and paste it into your project. No npm packages required." },
    { q: "Can I modify the buttons to match my brand?", a: "Yes! Every button is fully customizable. Change colors, sizes, animations, and more. All code is yours to modify and use however you want." },
    { q: "What about mobile responsiveness?", a: "Every button is mobile-first and fully responsive. They adapt beautifully to any screen size using Tailwind's responsive breakpoints." }
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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1 md:gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-xl overflow-hidden">
            <img src="/icon.png" alt="Cool Buttons" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-lg md:text-xl font-black tracking-tighter dark:text-white">
            COOL<span className="text-orange-500">BUTTONS</span>
          </h1>
        </button>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <a href="/docs" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Docs</a>
            <a href="/showcase" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Showcase</a>
            <a href="/pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</a>
          </div>
          <button 
            onClick={onExplore}
            className="px-4 md:px-6 py-2 md:py-3 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-xl shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all"
          >
            Explore
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-8 md:pt-16 pb-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.9] text-zinc-900 dark:text-white mb-6 md:mb-8">
              Beautifully <br />
              <span className="text-zinc-300 dark:text-zinc-800 transition-colors duration-700 hover:text-orange-500">Actionable.</span>
            </h2>
            
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-base md:text-xl max-w-xl mb-10 md:mb-12 leading-relaxed mx-auto lg:mx-0">
              Stop building buttons from scratch. Access <span className="text-zinc-900 dark:text-white font-black underline decoration-orange-500/30 decoration-4 underline-offset-4">400+ industrial-grade</span> styles ready for production.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={onExplore}
                className="group px-9 sm:px-8 md:px-12 py-4 sm:py-5 md:py-5 bg-orange-500 text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-4"
              >
                Go to Library
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onProKit}
                className="px-9 sm:px-8 md:px-12 py-4 sm:py-5 md:py-5 bg-white-500 text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] border border-indigo-400/30 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all">
                Get the Pro Kit
              </button>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <img src="/buttons.svg" alt="Cool Buttons Illustration" className="w-full h-auto drop-shadow-2xl dark:opacity-90" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
            Why Choose <span className="text-orange-500">Cool Buttons?</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto font-medium">
            Built for real developers, real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group p-6 md:p-7 bg-white dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900/70">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>

                {/* Content */}
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

      {/* Analytics Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Analytics Image */}
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <img src="/analyise.svg" alt="Analytics Illustration" className="w-full h-auto drop-shadow-2xl dark:opacity-90" />
          </div>

          {/* Analytics Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
              Used by <span className="text-orange-500">Thousands</span> of Developers
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-medium mb-8 leading-relaxed max-w-lg">
              Join developers worldwide who've shipped faster, iterated quicker, and shipped better UI with Cool Buttons.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-black text-zinc-900 dark:text-white mb-1 text-sm uppercase tracking-tight">Copy & Deploy</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Zero setup required. Paste code and it just works.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-black text-zinc-900 dark:text-white mb-1 text-sm uppercase tracking-tight">Fully Customizable</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Tailor every button to match your brand perfectly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-black text-zinc-900 dark:text-white mb-1 text-sm uppercase tracking-tight">Production Ready</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Battle-tested, optimized, and accessible components.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="bg-zinc-950 py-16 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter text-center">
            Trusted by <span className="text-orange-500">Developers</span>
          </h2>
        </div>

        {/* Marquee Container - Desktop */}
        <div className="relative z-10 overflow-hidden hidden md:block">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-content {
              animation: marquee 30s linear infinite;
            }
            .marquee-content:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex gap-6 marquee-content">
            {/* First set of testimonials */}
            {testimonials.map((t, i) => (
              <div key={`${i}-1`} className="flex-shrink-0 w-96 group p-6 md:p-7 bg-zinc-900/80 border border-zinc-800/50 rounded-2xl hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium mb-6 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-zinc-800/50">
                  <h4 className="text-white font-black text-sm uppercase tracking-tight">{t.name}</h4>
                  <p className="text-zinc-500 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {testimonials.map((t, i) => (
              <div key={`${i}-2`} className="flex-shrink-0 w-96 group p-6 md:p-7 bg-zinc-900/80 border border-zinc-800/50 rounded-2xl hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium mb-6 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-zinc-800/50">
                  <h4 className="text-white font-black text-sm uppercase tracking-tight">{t.name}</h4>
                  <p className="text-zinc-500 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-20"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Testimonials Grid - Mobile */}
        <div className="relative z-10 md:hidden px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="group p-5 bg-zinc-900/80 border border-zinc-800/50 rounded-xl hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-xs leading-relaxed font-medium mb-4 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="pt-3 border-t border-zinc-800/50">
                  <h4 className="text-white font-black text-xs uppercase tracking-tight">{t.name}</h4>
                  <p className="text-zinc-500 text-[10px] font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          {/* Showcase Image */}
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <img src="/show.svg" alt="Showcase Illustration" className="w-full h-auto drop-shadow-2xl dark:opacity-90" />
          </div>

          {/* Showcase Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
              See the <span className="text-orange-500">Difference</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-medium mb-8 leading-relaxed max-w-lg">
              Every button is handcrafted with attention to detail. From subtle interactions to bold statements, your UI will stand out.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Sparkles className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-black text-zinc-900 dark:text-white mb-1 text-sm uppercase tracking-tight">Beautiful by Default</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">No configuration needed. Every button looks perfect out of the box.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Layers className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-black text-zinc-900 dark:text-white mb-1 text-sm uppercase tracking-tight">Multiple Styles</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Choose from 9 distinct categories - neumorphic, glassmorphic, brutalist, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-black text-zinc-900 dark:text-white mb-1 text-sm uppercase tracking-tight">Accessible & Fast</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">WCAG compliant with minimal CSS. Lightning-fast load times guaranteed.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <button 
                onClick={onExplore}
                className="group mt-10 px-8 md:px-12 py-4 md:py-5 bg-orange-500 text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all flex items-center gap-4"
              >
                Explore Showcase
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-12 md:mb-16">
          {/* FAQ Image */}
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <img src="/question.svg" alt="FAQ Illustration" className="w-full h-auto drop-shadow-2xl dark:opacity-90" />
          </div>

          {/* FAQ Header */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
              Common <span className="text-orange-500">Questions.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
              Find answers to the most frequently asked questions about Cool Buttons. Can't find what you're looking for? <a href="mailto:devchauhan.developer@gmail.com" className="text-orange-500 hover:text-orange-600 font-black">Get in touch</a>.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="group bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-2xl md:rounded-[2rem] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 md:px-10 py-6 md:py-8 text-left"
                >
                  <span className="text-sm md:text-lg font-black text-zinc-900 dark:text-white uppercase tracking-tighter">{faq.q}</span>
                  <ChevronDown className={`text-zinc-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 md:px-10 pb-8 text-xs md:text-base text-zinc-500 dark:text-zinc-500 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-40">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 text-white text-center p-8 md:p-12 group">
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-zinc-950/50 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10">

            {/* Headline */}
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3 md:mb-4 leading-tight">
              Start Creating Beautiful Buttons
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto mb-6 md:mb-8 font-medium">
              Access 400+ production-ready button designs. Free, MIT licensed, and ready to use.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button 
                onClick={onExplore}
                className="group/btn w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-orange-500 text-white font-black uppercase tracking-wider text-xs rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Explore Library
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <a 
                href="mailto:devchauhan.developer@gmail.com"
                className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 bg-white-500/20 hover:bg-orange-500/30 border border-orange-400/40 text-white font-black uppercase tracking-wider text-xs rounded-[2rem] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2 group/btn"
              >
                Contact
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onExplore} />
    </div>
  );
};

export default LandingPage;
