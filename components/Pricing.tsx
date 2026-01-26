import React from 'react';
import { ArrowLeft, Check, Zap } from 'lucide-react';

interface PricingProps {
  onBack: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBack }) => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        '100+ button designs',
        'Copy & paste code',
        'Tailwind CSS',
        'React components',
        'Community support'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For professional developers',
      features: [
        'All Free features',
        '400+ button designs',
        'Advanced animations',
        'Premium templates',
        'Priority support',
        'Regular updates',
        'Commercial license'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large teams',
      features: [
        'All Pro features',
        'Custom button designs',
        'Team collaboration',
        'API access',
        'Dedicated support',
        'White-label options',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-2">Simple, Transparent Pricing</h1>
          <p className="text-zinc-400 text-lg">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-2 border-orange-500/50 transform md:scale-105 shadow-xl shadow-orange-500/20'
                  : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
              } p-8`}
            >
              {plan.highlighted && (
                <div className="flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-lg w-fit mx-auto">
                  <Zap size={16} className="text-orange-400" />
                  <span className="text-sm font-black text-orange-400">MOST POPULAR</span>
                </div>
              )}
              <h2 className="text-2xl font-black mb-2">{plan.name}</h2>
              <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.period && <span className="text-zinc-400">{plan.period}</span>}
              </div>

              <button
                className={`w-full py-3 font-black text-sm uppercase tracking-widest rounded-lg transition-all mb-8 ${
                  plan.highlighted
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check size={20} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-black mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I use Free plan buttons commercially?', a: 'Yes, all our button designs are MIT licensed and can be used in commercial projects.' },
              { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee if you\'re not satisfied.' },
              { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time without penalties.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.' }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
