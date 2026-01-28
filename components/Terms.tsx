import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

interface TermsProps {
  onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
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
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-2">Terms of Service</h1>
          <p className="text-zinc-400">Last updated: January 26, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black mb-4">1. Agreement to Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              By accessing and using Cool Buttons ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black mb-4">2. Use License</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Cool Buttons for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on Cool Buttons</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Using any robot, spider, or other automatic device, process or means to access the site</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black mb-4">3. Disclaimer</h2>
            <p className="text-zinc-400 leading-relaxed">
              The materials on Cool Buttons are provided on an 'as is' basis. Cool Buttons makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black mb-4">4. Limitations</h2>
            <p className="text-zinc-400 leading-relaxed">
              In no event shall Cool Buttons or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cool Buttons.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-black mb-4">5. Accuracy of Materials</h2>
            <p className="text-zinc-400 leading-relaxed">
              The materials appearing on Cool Buttons could include technical, typographical, or photographic errors. Cool Buttons does not warrant that any of the materials on the site are accurate, complete, or current. Cool Buttons may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-black mb-4">6. Links</h2>
            <p className="text-zinc-400 leading-relaxed">
              Cool Buttons has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Cool Buttons of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-black mb-4">7. Modifications</h2>
            <p className="text-zinc-400 leading-relaxed">
              Cool Buttons may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-black mb-4">8. Governing Law</h2>
            <p className="text-zinc-400 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Cool Buttons operates, and you irrevocably submit to the exclusive jurisdiction of the courts located there.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-black mb-4">9. Contact Information</h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 mt-4">
              <p className="text-zinc-300 font-semibold">Email: devchauhan.developer@gmail.com</p>
              <p className="text-zinc-400">Website: https://coolbuttons.dev</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
