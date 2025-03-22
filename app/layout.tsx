"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="relative border-b">
          <div className="flex items-center justify-between px-6 py-2 lg:px-8">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="Future Founders Bootcamp Logo" 
                width={240}
                height={64}
                className="w-auto h-12 object-contain"
                priority
              />
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#61646b]" />
              ) : (
                <Menu className="h-6 w-6 text-[#61646b]" />
              )}
            </button>

            {/* Desktop navigation */}
            <div className="hidden sm:flex items-center gap-8">
              <Link href="/" className="text-[#61646b] hover:text-[#21272a]">
                Home
              </Link>
              <Link href="/information" className="text-[#61646b] hover:text-[#21272a]">
                Information
              </Link>
              <Link href="/faq" className="text-[#61646b] hover:text-[#21272a]">
                FAQ
              </Link>
              <Link href="/about" className="text-[#61646b] hover:text-[#21272a]">
                About Us
              </Link>
              <Link href="/apply">
                <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 rounded-full">Apply Now</Button>
              </Link>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t">
              <div className="flex flex-col space-y-4 px-6 py-4">
                <Link 
                  href="/" 
                  className="text-[#61646b] hover:text-[#21272a]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/information" 
                  className="text-[#61646b] hover:text-[#21272a]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Information
                </Link>
                <Link 
                  href="/faq" 
                  className="text-[#61646b] hover:text-[#21272a]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  href="/about" 
                  className="text-[#61646b] hover:text-[#21272a]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/apply" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-[#2529ff] text-white hover:bg-[#2529ff]/90 rounded-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
        {children}
      </body>
    </html>
  )
}

