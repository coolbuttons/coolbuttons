import React, { useState, useEffect } from 'react';
import { Wifi, RefreshCw } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const NoConnection: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [attemptCount, setAttemptCount] = useState(0);

  useEffect(() => {
    // Check initial online status
    setIsOnline(navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setAttemptCount(prev => prev + 1);
    window.location.reload();
  };

  if (isOnline) {
    return (
      <>
        <Header onNavigateHome={() => window.location.href = '/'} />
        <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome Back Online!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Your connection has been restored.</p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </>
    );
  }

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
            

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">No Internet Connection</h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
              It looks like you're offline. Check your internet connection and try again. Some content may be cached and available to view.
            </p>

            {/* Attempt Counter */}
            {attemptCount > 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
                Retry attempt: {attemptCount}
              </p>
            )}

            {/* Action Button */}
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border border-gray-200/50 dark:border-zinc-800/50 rounded-2xl max-w-md mx-auto">
              <h3 className="font-semibold mb-2">What you can do:</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 text-left">
                <li>✓ Check your Wi-Fi or mobile connection</li>
                <li>✓ Restart your router or device</li>
                <li>✓ Try again in a moment</li>
                <li>✓ View cached pages if available</li>
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NoConnection;
