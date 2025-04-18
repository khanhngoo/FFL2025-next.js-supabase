import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
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
              <li><Link href="/information" className="hover:opacity-80">Information</Link></li>
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
  )
} 