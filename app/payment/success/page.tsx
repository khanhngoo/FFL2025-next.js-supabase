import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="mx-auto w-24 h-24 rounded-full bg-[#21272a] flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-[#21272a]">PAYMENT SUCCESSFUL</h1>

          <h2 className="text-2xl font-medium text-[#21272a]">Thank you for applying to Future Founder Launchpad!</h2>

          <p className="text-[#61646b] max-w-2xl mx-auto">
            A confirmation of the application will be sent to your email as soon as possible. Please check your inbox
            regularly to ensure you don't miss any important updates from us!
          </p>

          <div className="max-w-md mx-auto space-y-2">
            <label className="block text-sm text-[#61646b]">Receive latest news from us</label>
            <div className="flex gap-4">
              <Input placeholder="example@email.com" className="border-[#d9d9d9]" />
              <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 whitespace-nowrap">Sign Me Up!</Button>
            </div>
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

