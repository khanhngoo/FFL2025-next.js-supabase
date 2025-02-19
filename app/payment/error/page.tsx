import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

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
            Future Founders Launchpad 2025 is an intensive summer camp hosted by ELab at VinUniversity in collaboration
            with AIESEC in Vietnam. Designed for ambitious young entrepreneurs, the program is a unique chance to
            network with like-minded peers, gain real-world insights, and kickstart your journey as a future
            changemaker. We are here to experience hands-on workshops, mentorship and culminate in a pitch competition
            to showcase your innovative solutions. We overcome dynamic team challenges, develop entrepreneurial skills,
            foster creativity, and build realistic ideas which impact the world.
          </p>

          <div className="flex justify-center gap-4">
            <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90">Register Again</Button>
            <Button variant="outline" className="border-[#d9d9d9]">
              Return Home
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2529ff] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div className="w-24 h-8 bg-[#d9d9d9]" />
            <div>
              <h3 className="font-bold mb-4">Column 1</h3>
              <ul className="space-y-2">
                <li>Option 1</li>
                <li>Option 1</li>
                <li>Option 1</li>
                <li>Option 1</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Column 2</h3>
              <ul className="space-y-2">
                <li>Option 1</li>
                <li>Option 1</li>
                <li>Option 1</li>
                <li>Option 1</li>
              </ul>
            </div>
            <div className="flex gap-4 justify-end">
              <Link href="#" className="hover:opacity-80">
                f
              </Link>
              <Link href="#" className="hover:opacity-80">
                t
              </Link>
              <Link href="#" className="hover:opacity-80">
                ig
              </Link>
              <Link href="#" className="hover:opacity-80">
                in
              </Link>
            </div>
          </div>
          <div className="text-center text-sm mt-8">CompanyName © 2024. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

