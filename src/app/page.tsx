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
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load Stripe on component mount
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.error('Error loading Stripe configuration:', data.error);
          return;
        }
        setStripePromise(loadStripe(data.publishableKey));
      })
      .catch(error => {
        console.error('Error fetching Stripe configuration:', error);
      });

    // Handle video playback
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
    try {
      setIsLoading(true);
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const result = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
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
        disabled={isLoading}
        className={`bg-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-purple-500/25 ${
          isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-700'
        }`}
      >
        {isLoading ? 'Processing...' : 'Send $5'}
      </button>
    </div>
  );
}
