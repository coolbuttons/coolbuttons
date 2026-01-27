import React, { useState } from 'react';
import { ArrowLeft, Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import Footer from './Footer';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-4">Get in Touch</h1>
          <p className="text-zinc-400 text-lg">Have questions or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
              <Mail className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-zinc-400">Send us an email anytime</p>
            <a href="mailto:devchauhan.developer@gmail.com" className="text-orange-500 font-semibold mt-2 hover:text-orange-400">
              devchauhan.developer@gmail.com
            </a>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
              <Phone className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Support</h3>
            <p className="text-zinc-400">Response time: 24 hours</p>
            <p className="text-orange-500 font-semibold mt-2">Available on GitHub</p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Social</h3>
            <p className="text-zinc-400">Follow us online</p>
            <div className="flex gap-3 mt-3">
              <a href="#" className="text-orange-500 hover:text-orange-400">GitHub</a>
              <a href="#" className="text-orange-500 hover:text-orange-400">Twitter</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-black mb-8">Send us a Message</h2>
          
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle className="text-green-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Thank you!</h3>
              <p className="text-zinc-400">We've received your message and will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How quickly will I get a response?', a: 'We typically respond within 24 hours during business days.' },
              { q: 'Can I report bugs or suggest features?', a: 'Absolutely! We encourage feedback. Please use our GitHub issues or contact us directly.' },
              { q: 'Do you offer custom button designs?', a: 'Yes, for enterprise clients. Please mention this in your message.' },
              { q: 'How can I contribute to the project?', a: 'Check out our GitHub repository and feel free to submit pull requests!' }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
