"use client"

import "../custom.css"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from 'react';
import { useCarouselState } from "@/hooks/useCarouselState"
import OptimizedImage from '@/components/OptimizedImage'

export default function LandingPage() {
  const { api: heroApi, setApi: setHeroApi, current: heroCurrent } = useCarouselState();
  const { api: expertApi, setApi: setExpertApi, current: expertCurrent, count: expertCount } = useCarouselState();
  // Remove unused student carousel state since that section is commented out
  // const { api: studentApi, setApi: setStudentApi, current: studentCurrent, count: studentCount } = useCarouselState();

  // Auto-sliding effect for Hero Carousel
  useEffect(() => {
    if (!heroApi) return;
    
    // Set up auto-sliding interval
    const autoSlideInterval = setInterval(() => {
      heroApi.scrollNext();
    }, 5000); // Change slide every 5 seconds
    
    // Clean up interval on unmount
    return () => clearInterval(autoSlideInterval);
  }, [heroApi]);

  // Auto-sliding effect for Expert Carousel
  useEffect(() => {
    if (!expertApi) return;
    
    // Set up auto-sliding interval
    const autoSlideInterval = setInterval(() => {
      expertApi.scrollNext();
    }, 7000); // Change slide every 7 seconds
    
    // Clean up interval on unmount
    return () => clearInterval(autoSlideInterval);
  }, [expertApi]);

  // Remove unused student carousel effect since that section is commented out
  // Auto-sliding effect for Student Carousel
  // useEffect(() => {
  //   if (!studentApi) return;
    
  //   // Set up auto-sliding interval
  //   const autoSlideInterval = setInterval(() => {
  //     studentApi.scrollNext();
  //   }, 7000); // Change slide every 7 seconds
    
  //   // Clean up interval on unmount
  //   return () => clearInterval(autoSlideInterval);
  // }, [studentApi]);

  // Auto-sliding effect for Benefits Carousel - replaced with CSS animation
  /*
  useEffect(() => {
    const benefitsInterval = setInterval(() => {
      const container = document.querySelector('.bg-\\[\\#e0f0ff\\] .embla__container');
      if (container) {
        const scrollAmount = 1; // Small increment for smooth scrolling
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (currentScroll >= maxScroll) {
          // Reset to beginning with smooth animation
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Increment by small amount for smooth animation
          container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }, 16); // ~60fps for smooth animation
    
    return () => clearInterval(benefitsInterval);
  }, []);
  */

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Carousel 
          className="absolute inset-0" 
          opts={{ 
            loop: true,
            duration: 30,
            dragFree: true,
          }} 
          setApi={setHeroApi}
        >
          <CarouselContent>
            {[
              { id: 1, src: '/images/hero1.jpg' },
              { id: 2, src: '/images/hero2.JPG' },
              { id: 3, src: '/images/hero3.jpg' },
              { id: 4, src: '/images/hero4.JPG' },
              { id: 5, src: '/images/hero5.JPG' }
            ].map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative h-screen w-full">
                  <OptimizedImage 
                    src={slide.src} 
                    alt={`Future Founders Bootcamp 2025 - Slide ${slide.id}`}
                    fill
                    priority={slide.id === 1}
                    className="object-cover"
                    sizes="100vw"
                    placeholderType="hero"
                    quality={85}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Hidden navigation buttons in hero section */}
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-opacity duration-300 ${
                  heroCurrent === index ? "bg-white opacity-100" : "bg-white opacity-50 hover:opacity-70"
                }`}
                onClick={() => heroApi?.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>
        
        {/* Fixed text overlay that doesn't move with the carousel */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-4">Future Founders Bootcamp 2025</h1>
              <p className="text-xl text-white mb-8 italic">Future Founders Bootcamp 2025 is more than a summer camp for future 
entrepreneurs, many things are available for you to kickstart your dream!</p>
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

      {/* Under Learn More Image */}
      <section className="w-full h-screen">
        <div className="relative w-full h-full">
          <OptimizedImage 
            src="/images/under_learn_more.jpg" 
            alt="Future Founders Learning Experience" 
            fill
            className="object-cover"
            quality={85}
          />
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
          <div className="infinite-scroll-wrapper">
            <div className="infinite-scroll-container">
              {/* Original items */}
              {benefits.map((benefit, index) => (
                <div key={index} className="flex-none w-[250px] mx-2">
                  <div className="bg-white rounded-lg overflow-hidden h-full">
                    <Image
                      src={`/images/benefit${index + 1}.jpg`}
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
                </div>
              ))}
              {/* Duplicated items for seamless looping */}
              {benefits.map((benefit, index) => (
                <div key={`dup-${index}`} className="flex-none w-[250px] mx-2">
                  <div className="bg-white rounded-lg overflow-hidden h-full">
                    <Image
                      src={`/images/benefit${index + 1}.jpg`}
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
            <Carousel className="w-full" opts={{ loop: true }} setApi={setExpertApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="relative px-14 pt-[350px] md:pt-0 md:pl-[400px] md:min-h-[500px]">
                    <div className="absolute left-1/2 top-0 md:left-14 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 md:translate-x-0 w-64 h-64 md:w-[320px] md:h-[320px]">
                      <Image
                        src="/images/Marc-Kramer.png"
                        alt="Marc Kramer"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 md:ml-10">
                      <h3 className="text-4xl font-bold mb-6 text-center md:text-left">Marc Kramer, MA</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">EXPERIENCE:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>VinUniversity College of Business and Management Faculty, Bachelor of Business Administration</li>
                          <li>Former Faculty Member at Wharton School of Business, University of Pennsylvania</li>
                          <li>Serial entrepreneur who has started over 28 companies and raised over $3.2 billion</li>
                          <li>Wrote six books—book "Small Business Turnaround" won the Executive Book Summaries Top 30 Business Books</li>
                        </ul>
                      </div>
                      
                      <p className="text-md">
                      Entrepreneurship is not just about starting a business; it's about seeing opportunities where others see obstacles. Through years in this field, I've learned that true leadership comes from resilience, adaptability, and the courage to innovate.
This summer program is the most suitable place for future change-makers—offering real-world insights, hands-on projects, and mentorship from industry experts. You'll gain the mindset and skills to turn ideas into impact, all while connecting with like-minded peers who challenge and inspire you.
If you're ready to think big and build something meaningful, this would be where your journey begins.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative px-14 pt-[350px] md:pt-0 md:pl-[400px] md:min-h-[500px]">
                    <div className="absolute left-1/2 top-0 md:left-14 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 md:translate-x-0 w-64 h-64 md:w-[320px] md:h-[320px]">
                      <Image
                        src="/images/Kim-Young-Un.png"
                        alt="Kim Young Un"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 md:ml-10">
                      <h3 className="text-4xl font-bold mb-6 text-center md:text-left">Kim Young Un, PhD</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">EXPERIENCE:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>VinUniversity College of Business and Management Assistant Professor, Faculty of Management & Entrepreneurship</li>
                          <li>Strategic Management & Entrepreneurship PhD degree, University of North Carolina at Chapel Hill</li>
                        </ul>
                      </div>
                      
                      <p className="text-md">
                      Having a chance to lead and inspire lots of prospective students at VinUniversity gives me the best experience ever. 
It has shown me that this country is not just a place of growth, but a place of opportunity. Future Founders Bootcamp is the place for students to gain hands-on experience, tackle real-world challenges, and develop the problem-solving mindset that top universities seek.
College applications can be a stressful journey, but it does not have to be. Enjoy your learning at Future Founders Bootcamp to not only academically grow, but also create meaningful experience for your youth. 
You cannot understand what I say if you do not shoot your shot in this amazing country. So, why not?
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative px-14 pt-[350px] md:pt-0 md:pl-[400px] md:min-h-[500px]">
                    <div className="absolute left-1/2 top-0 md:left-14 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 md:translate-x-0 w-64 h-64 md:w-[320px] md:h-[320px]">
                      <Image
                        src="/images/Phi-Thi-Linh-Giang.png"
                        alt="Phi Thi Linh Giang"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 md:ml-10">
                      <h3 className="text-4xl font-bold mb-6 text-center md:text-left">Phi Thi Linh Giang, PhD</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">EXPERIENCE:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>VinUniversity College of Business and Management Assistant Professor, Faculty of Tourism & Entrepreneurship</li>
                        </ul>
                      </div>
                      
                      <p className="text-md">
                      Entrepreneurship is not just about starting a business; it's about seeing opportunities where others see obstacles. Through years in this field, I've learned that true leadership comes from resilience, adaptability, and the courage to innovate.
This summer program is the most suitable place for future change-makers—offering real-world insights, hands-on projects, and mentorship from industry experts. You'll gain the mindset and skills to turn ideas into impact, all while connecting with like-minded peers who challenge and inspire you.
If you're ready to think big and build something meaningful, this would be where your journey begins.
                      </p>
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
                {Array.from({ length: expertCount }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-white transition-opacity duration-300 ${
                      expertCurrent === index ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Student Talk Section */}
      {/* <section className="text-[#21272a] py-20 pb-5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            WHAT COLLEGE STUDENTS TALK ABOUT
            <br />
            FUTURE FOUNDERS BOOTCAMP?
          </h2>
          <div className="px-6 relative">
            <Carousel className="w-full" opts={{ loop: true }} setApi={setStudentApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholders/student-placeholder.svg"
                      alt="Student"
                      width={300}
                      height={300}
                      className="w-48 h-48 md:w-[300px] md:h-[300px] border border-gray-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold mb-6">Nguyen Van A</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">EXPERIENCE:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Computer Science Student, Class of 2025</li>
                          <li>Future Founders Bootcamp Participant, 2023</li>
                          <li>Co-founder of Student Tech Initiative</li>
                        </ul>
                      </div>
                      
                      <p className="text-md">
                        The Future Founders Bootcamp was a transformative experience that shaped my entrepreneurial journey. The mentorship and hands-on projects helped me develop critical thinking skills I use every day. I particularly valued the networking opportunities with industry professionals.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholders/student-placeholder.svg"
                      alt="Student"
                      width={300}
                      height={300}
                      className="w-48 h-48 md:w-[300px] md:h-[300px] border border-gray-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold mb-6">Tran Thi B</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">EXPERIENCE:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Business Management Student, Class of 2024</li>
                          <li>Future Founders Bootcamp Participant, 2022</li>
                          <li>Student Ambassador for Entrepreneurship Programs</li>
                        </ul>
                      </div>
                      
                      <p className="text-md">
                        Participating in the Future Founders Bootcamp gave me invaluable insights into what it takes to build a successful startup. The program's focus on real-world applications and problem-solving equipped me with practical skills that complement my theoretical knowledge.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center gap-8 flex-col md:flex-row px-14">
                    <Image
                      src="/placeholders/student-placeholder.svg"
                      alt="Student"
                      width={300}
                      height={300}
                      className="w-48 h-48 md:w-[300px] md:h-[300px] border border-gray-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold mb-6">Le Hoang C</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">EXPERIENCE:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Engineering Student, Class of 2026</li>
                          <li>Future Founders Bootcamp Participant, 2023</li>
                          <li>Winner of Campus Innovation Challenge</li>
                        </ul>
                      </div>
                      
                      <p className="text-md">
                        As someone with a technical background, the bootcamp helped me understand the business side of innovation. I learned how to validate my ideas, communicate effectively with diverse stakeholders, and navigate the challenges of bringing a product to market.
                      </p>
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
                {Array.from({ length: studentCount }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-black transition-opacity duration-300 ${
                      studentCurrent === index ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </section> */}

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
      <footer className="bg-[#2529ff] text-white py-12 pb-5">
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

