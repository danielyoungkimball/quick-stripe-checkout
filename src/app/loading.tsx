import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Loading() {
  return (
    <div className={`${inter.className} min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-center p-6`}>
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-300">Loading Joji&apos;s snack fund...</p>
    </div>
  );
} 