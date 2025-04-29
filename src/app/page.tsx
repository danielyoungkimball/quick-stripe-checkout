'use client';

import { useEffect, useState, useRef } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Inter, Righteous } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const righteous = Righteous({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
});

export default function Home() {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        setStripePromise(loadStripe(data.publishableKey));
      });

    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error('Error playing video:', error);
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, []);

  const handleUnmute = () => {
    if (videoRef.current && isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleDonate = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;
    
    const res = await fetch('/api/create-checkout-session', { method: 'POST' });
    const session = await res.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div 
      className={`${inter.className} ${righteous.variable} flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800 text-center`}
      onClick={handleUnmute}
    >
      <h1 className="font-righteous text-5xl font-bold mb-4 text-white tracking-wide">
        Send My Cat Money 🐾
      </h1>
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl mb-6 ring-4 ring-purple-500/30 relative">
        <video
          ref={videoRef}
          src="/AllMyFellas.mp4"
          width="100%"
          height="100%"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover pointer-events-none"
        />
        {isMuted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
            Click anywhere to unmute 🔊
          </div>
        )}
      </div>
      <p className="text-xl mb-8 text-gray-200 font-light">
        Support Joji&apos;s snack fund 🍖
      </p>
      <button
        onClick={handleDonate}
        className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-purple-500/25"
      >
        Send $5
      </button>
    </div>
  );
}
