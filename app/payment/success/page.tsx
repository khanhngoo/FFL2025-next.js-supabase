'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import Link from "next/link"
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Suspense } from 'react'
import Image from "next/image"

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
      <footer className="bg-[#2151a1] text-white py-12 pb-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block">
              <Image
                src="/images/logo_old.png"
                alt="Future Founders Bootcamp Logo"
                width={250}
                height={100}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">About</h3>
              <div className="w-12 h-0.5 bg-white mb-4"></div>
              <ul className="space-y-2">
                <li><Link href="https://www.facebook.com/profile.php?id=61574448660870" className="hover:opacity-80">Future Founders Bootcamp 2025</Link></li>
                <li><Link href="https://www.facebook.com/AIESECinVietnam" className="hover:opacity-80">AIESEC in Vietnam</Link></li>
                <li><Link href="https://www.facebook.com/elab.vinuni/" className="hover:opacity-80">VinUniversity Entrepreneurship Lab</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Apply</h3>
              <div className="w-12 h-0.5 bg-white mb-4"></div>
              <ul className="space-y-2">
                <li><Link href="/apply" className="hover:opacity-80">Apply Now</Link></li>
                <li><Link href="/" className="hover:opacity-80">Home</Link></li>
                <li><Link href="/info" className="hover:opacity-80">Information</Link></li>
                <li><Link href="/faq" className="hover:opacity-80">FAQ</Link></li>
                <li><Link href="/about" className="hover:opacity-80">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact</h3>
              <div className="w-12 h-0.5 bg-white mb-4"></div>
              <div className="flex gap-4 flex-wrap">
                <Link href="https://www.facebook.com/profile.php?id=61574448660870" className="hover:opacity-80 flex items-center gap-2">
                  {/* Facebook icon SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
                  </svg>
                  <span>Facebook</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm mt-8">FutureFoundersBootcamp © 2025. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

