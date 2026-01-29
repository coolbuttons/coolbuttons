import React from 'react';
import Header from './Header';
import Footer from './Footer';

const License: React.FC = () => {
  return (
    <>
      <Header onNavigateHome={() => window.location.href = '/'} />
      <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light flex flex-col">
        {/* Main Content */}
        <div className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
          <h1 className="text-5xl sm:text-6xl font-bold mb-8">MIT License</h1>
          
          {/* License Text */}
          <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
            <p className="whitespace-pre-wrap font-light text-sm">
{`
Copyright (c) 2026 Cool Buttons

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default License;
