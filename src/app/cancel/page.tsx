'use client';

import Link from 'next/link';
import { Inter, Righteous } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const righteous = Righteous({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
});

export default function Cancel() {
  return (
    <div className={`${inter.className} ${righteous.variable} flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800 text-center`}>
      <div className="space-y-6">
        <h1 className="font-righteous text-5xl font-bold text-white tracking-wide">
          Donation Cancelled
        </h1>
        <div className="space-y-4">
          <p className="text-xl text-gray-200 font-light">
            No worries! Joji understands. 😺
          </p>
          <p className="text-lg text-gray-300 font-light">
            You can try again whenever you want!
          </p>
        </div>
        <Link 
          href="/"
          className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-purple-500/25"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
