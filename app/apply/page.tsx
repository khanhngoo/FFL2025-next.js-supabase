import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#21272a] text-center mb-12">
            FUTURE FOUNDERS BOOTCAMP 2025
            <br />
            APPLICATION FORM
          </h1>

          <div className="mb-6">
            <div className="flex gap-2">
              <div className="font-medium">Application Form Due:</div>
              <div className="text-[#61646b]">June 1st, 2025</div>
            </div>

            <div className="flex gap-2">
              <div className="font-medium">Results Announcement:</div>
              <div className="text-[#61646b]">Rolling Basis</div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-[#61646b]">
              This application form is designed to help the organizers better understand the participants and provide
              the most suitable support. It consists of two sections: Personal Information and Personal Introduction.
              The application is now open for submissions.
            </p>

            <p className="text-[#61646b]">
              Spend a summer in a professional environment with top-tier experts in entrepreneurship and hand-ons activities for your personal portfolio. Future Founders Bootcamp is where your dreams become true. 
            </p>
            <p className="text-[#61646b]">
              Future Founders Bootcamp provides you the need to <span className="font-bold">strengthen your college application</span> and <span className="font-bold">create meaningful experience</span>. So, what are you waiting for? 
            </p>

            <p className="text-[#61646b] italic">
              Note: The application form will not be saved automatically. Please make sure to save your information on a
              separate document to ensure a smooth application process.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Link href="/apply/form">
              <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 px-8">Continue</Button>
            </Link>
            <Link href="/information">
              <Button variant="outline" className="border-[#d9d9d9] px-8">
                Learn More
              </Button>
            </Link>
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

