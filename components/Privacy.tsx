import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PrivacyProps {
  onBack?: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-2">Privacy Policy</h1>
          <p className="text-zinc-400">Last updated: January 26, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black mb-4">1. Introduction</h2>
            <p className="text-zinc-400 leading-relaxed">
              Cool Buttons ("we," "us," "our," or "Company") operates the coolbuttons.dev website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black mb-4">2. Information Collection and Use</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">We collect several different types of information for various purposes:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Data:</h3>
                <p className="text-zinc-400">
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"), including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4 mt-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Usage Data:</h3>
                <p className="text-zinc-400">
                  We may also collect information on how the Service is accessed and used ("Usage Data"), including computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages visited, and other diagnostic data.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black mb-4">3. Use of Data</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">Cool Buttons uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black mb-4">4. Security of Data</h2>
            <p className="text-zinc-400 leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-black mb-4">5. Cookies</h2>
            <p className="text-zinc-400 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Service and we hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-black mb-4">6. Third-Party Links</h2>
            <p className="text-zinc-400 leading-relaxed">
              Our Service may contain links to other sites that are not operated by us. This Privacy Policy applies only to our Site, and we are not responsible for the privacy practices of third-party websites. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-black mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-black mb-4">8. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <p className="text-zinc-300 font-semibold">Email: devchauhan.developer@gmail.com</p>
              <p className="text-zinc-400">Website: https://coolbuttons.dev</p>
              <p className="text-zinc-400">Address: Cool Buttons Project</p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-black mb-4">9. Your Rights</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
              <li>The right to access your data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to delete your data</li>
              <li>The right to restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
