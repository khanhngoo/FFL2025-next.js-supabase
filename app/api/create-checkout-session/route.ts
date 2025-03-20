import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Check if we're in mock mode
const MOCK_MODE = process.env.MOCK_STRIPE === 'true';

// Check if the Stripe secret key is available
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey && !MOCK_MODE) {
  console.error('Missing STRIPE_SECRET_KEY environment variable');
}

// Initialize Stripe only if the key is available and not in mock mode
const stripe = !MOCK_MODE && stripeSecretKey ? new Stripe(stripeSecretKey) : null;

// Get base URL with fallback
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || 'http://localhost:3000';

export async function POST(request: Request) {
  try {
    const { applicationId } = await request.json()

    // If in mock mode, return a fake session ID
    if (MOCK_MODE) {
      console.log('Using mock Stripe mode with applicationId:', applicationId);
      return NextResponse.json({ 
        sessionId: `mock_session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`,
        mockMode: true
      });
    }

    // Check if Stripe is initialized
    if (!stripe) {
      throw new Error('Stripe is not initialized. Check your environment variables.');
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Future Founders Launchpad 2025 Registration',
              description: 'Registration fee for the Future Founders Launchpad 2025 program',
            },
            unit_amount: 200000, // $2000 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/payment/error`,
      metadata: {
        applicationId: applicationId
      }
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json({ 
      error: 'Error creating checkout session', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
} 