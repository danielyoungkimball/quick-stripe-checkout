'use client';

import { useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className={`${inter.className} min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-center p-6`}>
      <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong 😿</h1>
      <p className="text-gray-300 mb-8 max-w-md">
        Don&apos;t worry, Joji is still getting his snacks. Please try again or contact us if the problem persists.
      </p>
      <button
        onClick={reset}
        className="bg-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-purple-500/25 hover:bg-purple-700"
      >
        Try Again
      </button>
    </div>
  );
} 