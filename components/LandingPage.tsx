
import React, { useState, useEffect, useRef } from 'react';
import { buttonLibrary } from '../data/buttonLib';
import Footer from './Footer';
import { 
  ArrowRight, Sparkles, Layers, ShieldCheck, 
  Rocket, MousePointer2, CheckCircle2, Star, 
  MessageSquare, ChevronDown, Github, Twitter,
  Cpu, Layout, Globe
} from 'lucide-react';

interface LandingPageProps {
  onExplore: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onExplore }) => {
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
    { icon: Layout, title: "130+ Presets", desc: "From Glassmorphism to Neo-Brutalism." },
    { icon: Cpu, title: "React Ready", desc: "Modular components, copy & paste directly." },
    { icon: Rocket, title: "Ultra Fast", desc: "Lightweight Tailwind utility classes only." },
    { icon: Globe, title: "Accessible", desc: "Focused on semantic and ARIA standards." }
  ];

  const testimonials = [
    { name: "Alex Rivers", role: "Senior Designer", text: "The fastest way to spice up a landing page. The neumorphic styles are incredible." },
    { name: "Sarah Chen", role: "Frontend Lead", text: "Clean code, amazing variety. This saved my team weeks of UI experimentation." },
    { name: "Marcio J.", role: "Independent Dev", text: "I just copy, paste, and ship. The best button resource on the web, period." }
  ];

  const faqs = [
    { q: "Is it free for commercial use?", a: "Yes! All styles are licensed under MIT. Use them in your SaaS, client projects, or personal sites." },
    { q: "How do I use the code?", a: "Simply click the 'Code' icon on any button card, copy the Tailwind class string, and paste it into your project." },
    { q: "Do these support dark mode?", a: "Every button is built with Tailwind's dark: prefix or neutral colors that adapt to your theme." }
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
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-xl overflow-hidden">
            <img src="/icon.png" alt="Cool Buttons" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-lg md:text-xl font-black tracking-tighter dark:text-white">
            COOL<span className="text-orange-500">BUTTONS</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <a href="/docs" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Docs</a>
            <a href="/showcase" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Showcase</a>
            <a href="/pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</a>
          </div>
          <button 
            onClick={onExplore}
            className="px-4 md:px-6 py-2 md:py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-zinc-200/50 dark:shadow-none"
          >
            Explore
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.9] text-zinc-900 dark:text-white mb-6 md:mb-8">
              Beautifully <br />
              <span className="text-zinc-300 dark:text-zinc-800 transition-colors duration-700 hover:text-orange-500">Actionable.</span>
            </h2>
            
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-base md:text-xl max-w-xl mb-10 md:mb-12 leading-relaxed mx-auto lg:mx-0">
              Stop building buttons from scratch. Access <span className="text-zinc-900 dark:text-white font-black underline decoration-orange-500/30 decoration-4 underline-offset-4">130+ industrial-grade</span> styles ready for production.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={onExplore}
                className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-orange-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl md:rounded-2xl shadow-2xl shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 transition-all flex items-center justify-center gap-4"
              >
                Go to Library
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[10px] rounded-xl md:rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
                Get the Pro Kit
              </button>
            </div>
          </div>

          {/* Morphing Stage */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-4 md:-inset-8 bg-orange-500/10 blur-[60px] md:blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 flex flex-col items-center justify-center shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] min-h-[400px] md:min-h-[500px]">
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 dark:text-zinc-600">LIVE PREVIEW STAGE</span>
                </div>
                
                <div 
                  className="flex-1 flex items-center justify-center w-full transition-all duration-700"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="scale-[1.2] md:scale-[2] transition-transform duration-500 ease-out">
                    <currentDesign.component />
                  </div>
                </div>

                <div className="mt-8 md:mt-12 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-full mb-2 md:mb-4">
                    <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-zinc-400' : 'bg-orange-500 animate-pulse'}`}></div>
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-zinc-900 dark:text-white tracking-tighter mb-1 uppercase">
                    {currentDesign.name}
                  </h3>
                  <p className="text-[9px] md:text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                    {currentDesign.category} DESIGN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <div className="relative py-12 md:py-20 border-y border-zinc-100 dark:border-zinc-900 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: "UNIQUE STYLES", value: "130+" },
            { label: "WEEKLY DOWNLOADS", value: "2.5K" },
            { label: "GITHUB STARS", value: "12K" },
            { label: "DESIGNERS", value: "50K+" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <span className="block text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter mb-1">
                {stat.value}
              </span>
              <span className="text-[8px] md:text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
            Engineered for <span className="text-orange-500">Performance.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm md:text-xl max-w-2xl mx-auto font-medium">
            Everything you need to build faster and look better. No fluff, just pure quality code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 md:p-10 bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] md:rounded-[3rem] hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-2 transition-all duration-500">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-50 dark:bg-zinc-800 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 group-hover:bg-orange-500 transition-all">
                <f.icon className="text-zinc-400 dark:text-zinc-500 group-hover:text-white w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-zinc-900 dark:text-white mb-2 md:mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-zinc-400 dark:text-zinc-500 text-xs md:text-base leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-950 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16 md:mb-24 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-4 md:mb-6">
                Loved by the <br /><span className="text-orange-500">Community.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-xl font-medium max-w-md">
                Used by thousands of designers and engineers worldwide.
              </p>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-900 bg-zinc-800"></div>
                 ))}
               </div>
               <div className="text-left">
                 <div className="flex text-orange-500 mb-1"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                 <span className="text-[10px] font-black text-white uppercase tracking-widest">4.9/5 RATING</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 md:p-12 bg-zinc-900/50 border border-zinc-800 rounded-[2rem] md:rounded-[3rem] hover:border-zinc-700 transition-colors">
                <MessageSquare className="text-orange-500 mb-6 md:mb-10 w-6 h-6 md:w-8 md:h-8" />
                <p className="text-zinc-300 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 font-medium italic">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-black uppercase text-xs md:text-sm tracking-widest">{t.name}</h4>
                  <span className="text-zinc-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24 md:py-40">
        <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter text-center mb-16 md:mb-24">Common <span className="text-orange-500">Questions.</span></h2>
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
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-40">
        <div className="p-8 md:p-32 bg-orange-500 rounded-[2.5rem] md:rounded-[5rem] text-white text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-zinc-950 opacity-0 group-hover:opacity-5 transition-opacity"></div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
           
           <div className="relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 text-[10px] font-black uppercase tracking-widest border border-white/20">
               <Rocket size={14} /> Ready to Upgrade?
             </div>
             <h2 className="text-4xl md:text-8xl font-black tracking-[-0.05em] mb-10 md:mb-16 leading-[0.9]">
               Start Building Your <br />
               Next Big Idea.
             </h2>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                 onClick={onExplore}
                 className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-7 bg-white text-orange-600 font-black uppercase tracking-widest text-xs md:text-sm rounded-2xl md:rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4"
               >
                 Go to Library
                 <ArrowRight />
               </button>
               <button className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-7 bg-orange-600 border-2 border-white/30 text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-2xl md:rounded-[2.5rem] hover:bg-white/10 transition-all">
                 Contact Team
               </button>
             </div>
           </div>
        </div>
      </section>

      <Footer onNavigate={onExplore} />
    </div>
  );
};

export default LandingPage;
