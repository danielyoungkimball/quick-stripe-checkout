import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <div className={`${inter.className} min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-center p-6`}>
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found 😿</h1>
      <p className="text-gray-300 mb-8 max-w-md">
        Looks like Joji ate this page! Don&apos;t worry, you can still help feed him by going back to the main page.
      </p>
      <Link
        href="/"
        className="bg-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-purple-500/25 hover:bg-purple-700"
      >
        Back to Home
      </Link>
    </div>
  );
} 