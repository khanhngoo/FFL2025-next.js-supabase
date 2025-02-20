'use client'

import { Button } from "@/components/ui/button"
import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from "react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setIsLoading(true)
      const applicationId = localStorage.getItem('applicationId')

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ applicationId })
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        })

        if (error) {
          console.error('Error:', error)
        }
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#21272a] text-center mb-12">CHECKOUT</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#21272a] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-[#61646b]">
                <span>Registration Fee</span>
                <span>$2,000.00</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-[#21272a]">
                <span>Total</span>
                <span>$2,000.00</span>
              </div>
            </div>

            <div className="space-y-4 text-[#61646b] mb-8">
              <p>The registration fee includes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>All study materials and resources</li>
                <li>Access to all program activities</li>
                <li>Accommodation & local transportation during week 2</li>
                <li>Meals during week 2</li>
              </ul>
            </div>

            <Button 
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-[#2529ff] text-white hover:bg-[#2529ff]/90"
            >
              {isLoading ? 'Processing...' : 'Proceed to Payment'}
            </Button>
          </div>

          <div className="text-center text-sm text-[#61646b]">
            <p>Secure payment powered by Stripe</p>
          </div>
        </div>
      </main>
    </div>
  )
} 