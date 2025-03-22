import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'

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
              <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90">Register Again</Button>
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
      <footer className="bg-[#2529ff] text-white py-12 pb-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-8">
            <div>
              <div className="w-24 h-8 bg-[#d9d9d9]" />
            </div>
            <div>
              <h3 className="font-bold mb-2">About</h3>
              <div className="w-12 h-0.5 bg-white mb-4"></div>
              <ul className="space-y-2">
                <li>Future Founders Bootcamp 2025</li>
                <li>AISEC</li>
                <li>VinUniversity Entrepreneurship Lab</li>
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
                <Link href="#" className="hover:opacity-80 flex items-center gap-2">
                  <FacebookRoundedIcon />
                  <span>Facebook</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm mt-8">CompanyName © 2024. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

