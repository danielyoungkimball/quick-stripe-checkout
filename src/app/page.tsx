'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

export default function Home() {
  const [stripePromise, setStripePromise] = useState<any>(null);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => {
        setStripePromise(loadStripe(data.publishableKey));
      });
  }, []);

  const handleClick = async () => {
    const stripe = await stripePromise;
    const res = await fetch('/api/create-checkout-session', { method: 'POST' });
    const session = await res.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Pay Me $1</h1>
      <button onClick={handleClick}>Checkout</button>
    </div>
  );
}
