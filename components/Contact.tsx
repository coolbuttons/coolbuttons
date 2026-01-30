import React from 'react';
import { Mail, Github } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Header onNavigateHome={() => window.location.href = '/'} />
      <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light selection:bg-orange-500 selection:text-white overflow-x-hidden">
        {/* Dynamic Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-500/[0.03] blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/[0.03] blur-[120px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute inset-0 grid-bg opacity-30"></div>
        </div>

        <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have questions, feedback, or want to collaborate? We'd love to hear from you. Reach out and let's connect.
            </p>
          </div>

          {/* Contact Methods - Simple Text */}
          <div className="space-y-12">
            {/* Email */}
            <div className="text-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <a 
                    href="mailto:devchauhan.developer@gmail.com" 
                    className="text-lg text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium"
                  >
                    devchauhan.developer@gmail.com
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Response time: 24 hours</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium text-lg">Follow us</p>
              <div className="flex justify-center gap-2">
                <a 
                  href="https://github.com/coolbuttons/coolbuttons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 hover:text-orange-500 text-gray-700 dark:text-gray-300 transition-colors"
                  title="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a 
                  href="https://x.com/devchauhann3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 hover:text-orange-500 text-gray-700 dark:text-gray-300 transition-colors"
                  title="X (Twitter)"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L5.551 21.75H2.232l7.73-8.835L1.456 2.25h6.556l4.702 6.217 5.534-6.217zM17.002 18.807h1.83L6.822 4.1H4.881l12.121 14.707z" />
                  </svg>
                </a>
                <a 
                  href="https://www.npmjs.com/org/coolbuttons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 hover:text-orange-500 text-gray-700 dark:text-gray-300 transition-colors"
                  title="NPM"
                >
                  <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                    <g fillRule="nonzero">
                      <path d="M10.999 500.999v-490h490v490h-490z" fill="red"/>
                      <path d="M102.874 102.874h306.25v306.25h-61.25v-245h-91.875v245H102.874v-306.25z" fill="white"/>
                    </g>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/coolbuttons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 hover:text-orange-500 text-blue-700 dark:text-gray-300 transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.738-2.002 1.45-.103.252-.129.604-.129.957v5.398h-3.554s.047-8.745 0-9.649h3.554v1.366c.43-.664 1.199-1.608 2.818-1.608 2.059 0 3.602 1.344 3.602 4.227v5.664zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.706 0-.955.771-1.71 1.971-1.71 1.199 0 1.914.754 1.939 1.71 0 .948-.74 1.706-1.995 1.706zm1.946 11.019H3.39V9.804h3.893v10.648zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
