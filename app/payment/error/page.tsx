import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/Footer"

export default function PaymentErrorPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="mx-auto w-24 h-24 rounded-full bg-[#21272a] flex items-center justify-center">
            <X className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-[#21272a]">PAYMENT UNSUCCESSFUL</h1>

          <p className="text-[#61646b] max-w-2xl mx-auto">
            Future Founder Bootcamp 2025 is an intensive summer camp hosted by ELab at VinUniversity. 
            Designed for ambitious young entrepreneurs, the program is a unique chance to
            network with like-minded peers, gain real-world insights, and kickstart your journey as a future
            changemaker. We are here to experience hands-on workshops, mentorship and culminate in a pitch competition
            to showcase your innovative solutions. We overcome dynamic team challenges, develop entrepreneurial skills,
            foster creativity, and build realistic ideas which impact the world.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/apply/form">
              <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90">Register Again</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-[#d9d9d9]">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

