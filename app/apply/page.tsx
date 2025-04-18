import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/Footer"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Application Content */}
        <div className="flex-1 items-center px-6 lg:px-12 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-auto">
            <h1 className="text-4xl font-bold text-[#21272a] mb-8">
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

            <div className="flex gap-4">
              <Link href="/apply/form">
                <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90 px-8">Continue</Button>
              </Link>
              <Link href="/information">
                <Button variant="outline" className="border-[#d9d9d9] px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hidden lg:block lg:w-[35%] relative">
          <Image
            src="/images/apply1.png"
            alt="Future Founders Bootcamp Application"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

