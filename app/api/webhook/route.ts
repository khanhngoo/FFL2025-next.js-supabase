/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

// Check if we're in mock mode
const MOCK_MODE = process.env.MOCK_STRIPE === 'true';

// Check for required environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Log warnings for missing environment variables
if (!stripeSecretKey && !MOCK_MODE) {
  console.error('Missing STRIPE_SECRET_KEY environment variable');
}
if (!webhookSecret && !MOCK_MODE) {
  console.error('Missing STRIPE_WEBHOOK_SECRET environment variable');
}

// Initialize Stripe only if the key is available and not in mock mode
const stripe = !MOCK_MODE && stripeSecretKey ? new Stripe(stripeSecretKey) : null;

export async function POST(request: Request) {
  // If in mock mode, return a successful response
  if (MOCK_MODE) {
    console.log('Using mock Stripe webhook mode');
    return NextResponse.json({ received: true, mockMode: true });
  }

  // Check if Stripe is initialized
  if (!stripe || !webhookSecret) {
    console.error('Stripe or webhook secret not initialized. Check your environment variables.');
    return NextResponse.json(
      { error: 'Stripe not properly configured' },
      { status: 500 }
    );
  }

  try {
    const payload = await request.text()
    const signature = request.headers.get('stripe-signature')
    
    if (!signature) {
      throw new Error('Missing stripe-signature header');
    }

    const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      const applicationId = session.metadata?.applicationId

      if (applicationId) {
        try {
          // Update payment status in Supabase
          await supabase
            .from('applications')
            .update({ payment_status: 'paid' })
            .eq('id', applicationId)
          console.log(`Updated payment status for application: ${applicationId}`);
        } catch (dbError) {
          console.error('Database update error:', dbError);
          // Continue processing, don't fail the webhook
        }
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { 
        error: 'Webhook handler failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    )
  }
} 