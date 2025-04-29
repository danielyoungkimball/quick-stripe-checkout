import Link from 'next/link';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Thank you for your donation! 🎉</h1>
      <p className="text-lg mb-6">Joji appreciates your support! 🐱</p>
      <Link 
        href="/"
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
} 