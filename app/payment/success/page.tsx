'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Suspense } from 'react'
import { Footer } from "@/components/Footer"

function PaymentSuccessContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        const sessionId = searchParams.get('session_id')
        const applicationId = localStorage.getItem('applicationId')

        if (sessionId && applicationId) {
          // Update payment status in Supabase
          const { error } = await supabase
            .from('applications')
            .update({ payment_status: 'paid' })
            .eq('id', applicationId)

          if (error) {
            console.error('Error updating payment status:', error)
          } else {
            // Clear the applicationId from localStorage after successful update
            localStorage.removeItem('applicationId')
          }
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    updatePaymentStatus()
  }, [searchParams])

  return (
    <div className="max-w-3xl w-full text-center space-y-8">
      <div className="mx-auto w-24 h-24 rounded-full bg-[#21272a] flex items-center justify-center">
        <Check className="w-12 h-12 text-white" />
      </div>

      <h1 className="text-4xl font-bold text-[#21272a]">PAYMENT SUCCESSFUL</h1>

      <h2 className="text-2xl font-medium text-[#21272a]">Thank you for applying to Future Founder Bootcamp!</h2>

      <p className="text-[#61646b] max-w-2xl mx-auto">
        A confirmation of the application will be sent to your email as soon as possible. Please check your inbox
        regularly to ensure you don't miss any important updates from us!
      </p>

      <div className="max-w-md mx-auto space-y-2">
        <label className="block text-sm text-[#61646b]">Receive latest news from us</label>
        <div className="flex gap-4">
          <Input placeholder="example@email.com" className="border-[#d9d9d9]" />
          <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90 whitespace-nowrap">Sign Me Up!</Button>
        </div>
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <Suspense fallback={
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#21272a]">Processing payment...</h1>
          </div>
        }>
          <PaymentSuccessContent />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

