import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: "Donation for Joji's Snacks",
            },
            unit_amount: 500, // $5
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://sendmycatmoney.com/success',
      cancel_url: 'https://sendmycatmoney.com/cancel',
    });

    return NextResponse.json({ id: session.id });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
