"use client"

import "../custom.css"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useCallback, useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import { useCarouselState } from "@/hooks/useCarouselState"

export default function LandingPage() {
  const { api, setApi, current, count } = useCarouselState();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Future Founders Bootcamp 2025"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">Future Founders Bootcamp 2025</h1>
              <p className="text-xl text-white mb-8 italic">Future Founders Bootcamp 2025 is more than a summer camp for future 
entrepreneurs, many things are available for you to kickstart your dream! 
</p>
              <Link href="/apply">
                <Button className="text-xl bg-[#2529ff] text-white hover:bg-[#2529ff]/90 p-6">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-[#21272a] mb-8">WHAT IS FUTURE FOUNDERS BOOTCAMP 2025?</h2>
          <p className="text-[#61646b] mb-8 mx-auto text-center">
            Future Founders Bootcamp 2025 is an intensive summer camp hosted by ELab at VinUniversity. 
            Designed for ambitious young entrepreneurs, the program is a unique chance to
            network with like-minded peers, gain real-world insights, and kickstart your journey as a future
            changemaker. We are here to experience hands-on workshops, mentorship and culminate in a pitch competition
            to showcase your innovative solutions. We overcome dynamic team challenges, develop entrepreneurial skills,
            foster creativity, and build realistic ideas which impact the world.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90">Apply Now</Button>
            </Link>
            <Link href="/information">
              <Button variant="outline" className="border-[#d9d9d9]">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Can You Get Section */}
      <section className="bg-[#e0f0ff] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#21272a] mb-12">
            WHAT CAN YOU GET FROM
            <br />
            FUTURE FOUNDERS BOOTCAMP 2025?
          </h2>
          <div className="relative">
            <div className="flex overflow-x-auto overflow-y-hidden pb-6 gap-6 snap-x snap-mandatory scrollbar-hide">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden flex-none w-[250px] snap-center">
                  <Image
                    src="/placeholder.svg?height=192&width=250"
                    alt={benefit.title}
                    width={250}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-[#21272a] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-[#61646b]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Talk Section */}
      <section className="bg-[#2529ff] py-20 pb-5 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            WHAT EXPERTS TALK ABOUT
            <br />
            FUTURE FOUNDERS BOOTCAMP?
          </h2>
          <div className="px-6 relative">
            <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Expert"
                      width={300}
                      height={300}
                      className="rounded-full w-48 h-48 md:w-[300px] md:h-[300px]"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col gap-6">
                        <p className="text-4xl font-bold text-center md:text-left">Ms. Hue/Alex</p>
                        <p className="text-md text-justify">For years, I’ve watched talented Vietnamese high school students travel across the world in search of experiences to strengthen their college applications and gain real-world skills. But today, Vietnam itself is becoming a hub of innovation, and Future Founder Bootcamp will offer you the same high-caliber opportunities, right at home.
It is where every magical thing can happen. You will gain core skills for your lifetime to independently grow as a person before learning to become an entrepreneur leader. You can turn your ideas into reality, or give yourself a chance to build a network with experts and all 'future founders' like you.
The world is looking at Vietnam. Now is your chance to grow, lead, and build your future—right here.
</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Expert"
                      width={300}
                      height={300}
                      className="rounded-full w-48 h-48 md:w-[300px] md:h-[300px]"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col gap-6">
                        <p className="text-4xl font-bold text-center md:text-left">Kim Young Un, PhD</p>
                        <p className="text-md text-justify">Having a chance to lead and inspire lots of prospective students at VinUniversity gives me the best experience ever. 
It has shown me that this country is not just a place of growth, but a place of opportunity. Future Founders Bootcamp is the place for students to gain hands-on experience, tackle real-world challenges, and develop the problem-solving mindset that top universities seek.
College applications can be a stressful journey, but it does not have to be. Enjoy your learning at Future Founders Bootcamp to not only academically grow, but also create meaningful experience for your youth. 
You cannot understand what I say if you do not shoot your shot in this amazing country. So, why not?
</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Expert"
                      width={300}
                      height={300}
                      className="rounded-full w-48 h-48 md:w-[300px] md:h-[300px]"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col gap-6">
                        <p className="text-4xl font-bold text-center md:text-left">Phi Thi Linh Giang, PhD</p>
                        <p className="text-md text-justify">Entrepreneurship is not just about starting a business; it’s about seeing opportunities where others see obstacles. Through years in this field, I’ve learned that true leadership comes from resilience, adaptability, and the courage to innovate.
This summer program is the most suitable place for future change-makers—offering real-world insights, hands-on projects, and mentorship from industry experts. You’ll gain the mindset and skills to turn ideas into impact, all while connecting with like-minded peers who challenge and inspire you.
If you’re ready to think big and build something meaningful, this would be where your journey begins.
</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0 h-12 w-12 border-0 hover:bg-white/50 text-black">
                <div className="text-white text-2xl">&lt;</div>
              </CarouselPrevious>
              <CarouselNext className="right-0 h-12 w-12 border-0 hover:bg-white/50 text-black">
                <div className="text-white text-2xl">&gt;</div>
              </CarouselNext>
              <div className="bottom-0 left-0 right-0 flex justify-center gap-2 py-4">
                {Array.from({ length: count }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-white transition-opacity duration-300 ${
                      current === index ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Student Talk Section */}
      <section className="text-[#21272a] py-20 pb-5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            WHAT COLLEGE STUDENTS TALK ABOUT
            <br />
            FUTURE FOUNDERS BOOTCAMP?
          </h2>
          <div className="px-6 relative">
            <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Expert"
                      width={300}
                      height={300}
                      className="rounded-full w-48 h-48 md:w-[300px] md:h-[300px]"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col gap-6">
                        <p className="text-4xl font-bold text-center md:text-left">STUDENT NAME</p>
                        <p className="text-md text-justify">lorem ipsum
</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Expert"
                      width={300}
                      height={300}
                      className="rounded-full w-48 h-48 md:w-[300px] md:h-[300px]"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col gap-6">
                        <p className="text-4xl font-bold text-center md:text-left">STUDENT NAME</p>
                        <p className="text-md text-justify">lorem ipsum
</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Expert"
                      width={300}
                      height={300}
                      className="rounded-full w-48 h-48 md:w-[300px] md:h-[300px]"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col gap-6">
                        <p className="text-4xl font-bold text-center md:text-left">STUDENT NAME</p>
                        <p className="text-md text-justify">lorem ipsum
</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0 h-12 w-12 border-0 bg-black hover:bg-black/50 hover:text-white text-white">
                <div className="text-white text-2xl">&lt;</div>
              </CarouselPrevious>
              <CarouselNext className="right-0 h-12 w-12 border-0 bg-black hover:bg-black/50 hover:text-white text-white">
                <div className="text-white text-2xl">&gt;</div>
              </CarouselNext>
              <div className="bottom-0 left-0 right-0 flex justify-center gap-2 py-4">
                {Array.from({ length: count }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-black transition-opacity duration-300 ${
                      current === index ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#21272a] mb-8">RECEIVE THE LATEST NEWS</h2>
          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Email:" className="border-[#d9d9d9]" />
            <Button variant="outline" className="border-[#d9d9d9]"> {/* email button */}
              Send
            </Button>
          </div>
        </div>
      </section>

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

const benefits = [
  {
    title: "Entrepreneurship Foundation & Practical Experience",
    description:
      "Gain a strong foundation in entrepreneurship and learn from industry experts. Engage in hands-on projects to apply these concepts in real-world scenarios.",
  },
  {
    title: "Leadership & Essential Soft Skills",
    description:
      "Develop leadership, teamwork, and critical problem-solving skills while building connections. Network with mentors and industry experts, improving communication and presentation abilities.",
  },
  {
    title: "Vietnamese Cultural & Market Insights",
    description:
      "Immerse yourself in Vietnam's rich culture and heritage while gaining valuable insights into the emerging market, preparing you for future entrepreneurial challenges.",
  },
  {
    title: "Industry & Expert Connections",
    description:
      "Learn directly from VinUniversity faculty and industry experts, with all communication in English to provide a global learning experience.",
  },
  {
    title: "Boost Your College Applications",
    description:
      "Joining a summer camp focused on projects about Entrepreneur is an effective way to demonstrate your strengths and demonstrate dedication, especially when you hope to get into top universities.",
  },
]

