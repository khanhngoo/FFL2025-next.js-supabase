import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Remove trailing slash if present
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '')

export async function POST(request: Request) {
  try {
    const { applicationId } = await request.json()

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
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 })
  }
} 