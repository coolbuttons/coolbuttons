import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface NotFoundProps {
  onBack?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onBack }) => {
  return (
    <>
      <Header onNavigateHome={() => window.location.href = '/'} />
      <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light selection:bg-orange-500 selection:text-white overflow-x-hidden flex flex-col">
        {/* Dynamic Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-orange-500/[0.03] blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/[0.03] blur-[120px] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute inset-0 grid-bg opacity-30"></div>
        </div>

        <main className="relative z-10 flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center">
          <div className="text-center">
            {/* 404 Number */}
            <h1 className="text-6xl sm:text-9xl font-bold mb-2 text-orange-500 tracking-tighter">404</h1>
            
            {/* Heading */}
            <h2 className="text-xl sm:text-3xl font-bold mb-6 uppercase tracking-widest">Page Not Found</h2>
            
            {/* Divider Line */}
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
              But if you don't change your direction, and if you keep looking, you may end up where you are heading.
            </p>

            {/* Action Button */}
            <button
              onClick={() => window.location.href = '/'}
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-full transition-all duration-300"
            >
              Take me home
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
