'use client';

import { useEffect, useState, useRef } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Inter, Righteous } from 'next/font/google';
import Footer from '@/components/Footer';

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
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load Stripe on component mount
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError('Unable to initialize payment system. Please try again later.');
          console.error('Error loading Stripe configuration:', data.error);
          return;
        }
        setStripePromise(loadStripe(data.publishableKey));
      })
      .catch(error => {
        setError('Unable to initialize payment system. Please try again later.');
        console.error('Error fetching Stripe configuration:', error);
      });
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
      setError(null);
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Payment system not initialized');
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
      setError('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className={`${inter.className} ${righteous.variable} flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-center`}
      onClick={handleUnmute}
    >
      <div className="flex-1 flex flex-col items-center justify-center p-6">
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
            aria-label="Joji the cat video"
          />
          {isMuted && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white cursor-pointer transition-opacity hover:bg-black/60"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleUnmute()}
            >
              Click anywhere to unmute 🔊
            </div>
          )}
        </div>
        <p className="text-xl mb-8 text-gray-200 font-light">
          Support Joji&apos;s snack fund 🍖
        </p>
        {error && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200">
            {error}
          </div>
        )}
        <button
          onClick={handleDonate}
          disabled={isLoading}
          className={`bg-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-purple-500/25 ${
            isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-700'
          }`}
          aria-label="Donate $5 to Joji's snack fund"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </span>
          ) : (
            'Send $5'
          )}
        </button>
      </div>
      <Footer />
    </div>
  );
}
