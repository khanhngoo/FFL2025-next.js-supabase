import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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
      <footer className="bg-[#2151a1] text-white py-12 pb-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block">
              <Image
                src="/images/logo_old.png"
                alt="Future Founders Bootcamp Logo"
                width={250}
                height={100}
                className="object-contain brightness-0 invert"
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

