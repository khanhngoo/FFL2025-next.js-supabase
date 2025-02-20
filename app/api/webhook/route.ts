import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  const payload = await request.text()
  const signature = request.headers.get('stripe-signature')!

  try {
    const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      const applicationId = session.metadata?.applicationId

      if (applicationId) {
        // Update payment status in Supabase
        await supabase
          .from('applications')
          .update({ payment_status: 'paid' })
          .eq('id', applicationId)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
} 