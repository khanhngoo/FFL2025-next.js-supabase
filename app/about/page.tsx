"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"



export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024); // Update isMobile state

      // Run your specific logic when the width is less than lg
      if (width < 1024) {
        console.log('Window resized to less than lg breakpoint');
        // Add any additional logic you want to execute here
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      {isMobile ? (
        <div className="min-h-screen bg-white">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-[#21272a] mb-12">INTRODUCTION ABOUT ORGANIZERS</h1>
  
          {/* About VinUni Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#21272a] mb-6">About VinUni Entrepreneurship Lab</h2>
  
            <div className="flex flex-col gap-8 mb-8">
              
              <div className="space-y-4 text-[#61646b] text-justify">
                <p>
                  <span className="font-semibold">VinUniversity</span> is a private, not-for-profit university established
                  by Vingroup – the largest private conglomerate in Vietnam. VinUni aspires to become a university of
                  excellence with a mission to develop talents for the future. The University has built strategic
                  collaborations with Cornell University and the University of Pennsylvania — a choice that speaks to our
                  commitment to excellence, innovation in research and teaching, and to making a difference in the world.
                </p>
                <p>
                  In October 2024, VinUni has become the youngest and fastest university in the world to achieve QS 5
                  stars, earning 5 stars in 9 categories: global engagement, good governance, programme strength, academic
                  development, teaching, employability, facilities, arts, and social impact.
                </p>
                <div className="relative w-full h-[400px] my-6">
                  <Image
                    src="/images/about1.jpg"
                    alt="VinUniversity Campus"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <p>
                  <span className="font-semibold">Entrepreneurship Lab</span> is a crucial part of the entrepreneurship
                  ecosystem at VinUniversity, where the spirit of innovation thrives, and entrepreneurial minds find their
                  home. At VinUniversity, we believe in nurturing entrepreneurial talent that can change the world. We
                  have recognized the exceptional potential within our student body, and we're committed to creating an
                  ecosystem that fosters innovation, growth, and success. With cutting-edge resources and expert guidance,
                  we're helping to shape the entrepreneurs of tomorrow.
                </p>
                <p className="font-medium">
                  Website:{" "}
                  <Link
                    href="https://ehub.vinuni.edu.vn/"
                    className="text-[#2151a1] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ehub.vinuni.edu.vn/
                  </Link>
                </p>
              </div>
            </div>
          </section>
  
          {/* About AIESEC Section */}
          {/* <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#21272a] mb-6">About AIESEC</h2>
              <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-[#2529ff]">By Youth, For Youth
                    <br />We are a "Youth Leadership" movement </h3>
                    <p className="text-[#61646b] text-justify">
                      AIESEC in Vietnam (FHN Branch) is a branch of the world's largest youth-led organization, dedicated to
                      leadership development, global internships, and volunteer opportunities. We aim to develop
                      responsible, entrepreneurial and skilled young leaders today to contribute to societal change both
                      locally and globally through our unique approach combining experiential learning, cross-cultural
                      collaboration, and a global network.
                    </p>
                    
                    <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="AIESEC in Vietnam"
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-auto"
                    />

                    <h3 className="text-xl font-bold text-[#2529ff]">We create value-driven leaders</h3>
                    <p ="text-[#61646b] text-justify">
                      Youth Engagement is a series of projects for High School students, aiming to engage young students
                      with AIESEC as an organization and the concept of Leadership Development.
                    </p>

                    <p ="text-[#61646b] text-justify">
                      By focusing on education initiatives inspired by the Sustainable Development Goals (SDGs), Youth
                      Engagement fosters Self-leadership, helping students navigate the uncertainties and challenges of
                      adolescence with confidence. Through meaningful connections with like-minded peers and professionals,
                      Youth Engagement equips them with critical skills, expanded networks, and opportunities to become
                      "value-driven" leaders and change-makers in Vietnam and beyond.
                    </p>
  
                    <p className="text-[#61646b]">Find out more at: {" "}
                      <Link
                        href="https://www.aiesec.vn/"
                        className="text-[#2529ff] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.aiesec.vn/
                      </Link>
                    </p>
                    

                  </div>
              
  
                
              
          </section> */}
  
          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-[#21272a] mb-8">CALL TO ACTION!</h2>
            <div className="flex justify-center gap-4">
              <Link href="/apply">
                <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90">Apply Now</Button>
              </Link>
              <Link href="/information">
                <Button variant="outline" className="border-[#d9d9d9]">
                  Learn more
                </Button>
              </Link>
            </div>
          </section>
  
        </main>
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
      ) : (
        <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#21272a] mb-12">INTRODUCTION ABOUT ORGANIZERS</h1>

        {/* About VinUni Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#21272a] mb-6">About VinUni Entrepreneurship Lab</h2>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 mb-8">
            <div className="relative h-full min-h-[500px]">
              <Image
                src="/images/about1.jpg"
                alt="VinUniversity Campus"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-4 text-[#61646b]">
              
              <p>
                <span className="font-semibold">VinUniversity</span> is a private, not-for-profit university established
                by Vingroup – the largest private conglomerate in Vietnam. VinUni aspires to become a university of
                excellence with a mission to develop talents for the future. The University has built strategic
                collaborations with Cornell University and the University of Pennsylvania — a choice that speaks to our
                commitment to excellence, innovation in research and teaching, and to making a difference in the world.
              </p>
              <p>
                In October 2024, VinUni has become the youngest and fastest university in the world to achieve QS 5
                stars, earning 5 stars in 9 categories: global engagement, good governance, programme strength, academic
                development, teaching, employability, facilities, arts, and social impact.
              </p>
              <p>
                <span className="font-semibold">Entrepreneurship Lab</span> is a crucial part of the entrepreneurship
                ecosystem at VinUniversity, where the spirit of innovation thrives, and entrepreneurial minds find their
                home. At VinUniversity, we believe in nurturing entrepreneurial talent that can change the world. We
                have recognized the exceptional potential within our student body, and we're committed to creating an
                ecosystem that fosters innovation, growth, and success. With cutting-edge resources and expert guidance,
                we're helping to shape the entrepreneurs of tomorrow.
              </p>
              <p className="font-medium">
                Website:{" "}
                <Link
                  href="https://ehub.vinuni.edu.vn/"
                  className="text-[#2151a1] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ehub.vinuni.edu.vn/
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* About AIESEC Section mobile */}
        {/*<section className="mb-16">
          <h2 className="text-2xl font-bold text-[#21272a] mb-6">About AIESEC</h2>
            <div className="grid lg:grid-cols-[1fr_400px] gap-2 h-auto">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <h3 className="text-xl font-bold text-[#2529ff] w-[300px]">By Youth, For Youth
                  <br />We are a "Youth Leadership" movement </h3>
                  <p className="text-[#61646b] flex-1 text-justify">
                    AIESEC in Vietnam (FHN Branch) is a branch of the world's largest youth-led organization, dedicated to
                    leadership development, global internships, and volunteer opportunities. We aim to develop
                    responsible, entrepreneurial and skilled young leaders today to contribute to societal change both
                    locally and globally through our unique approach combining experiential learning, cross-cultural
                    collaboration, and a global network.
                  </p>
                </div>

                <div className="flex">
                  <h3 className="text-xl font-bold text-[#2529ff] w-[300px]">We create value-driven leaders</h3>
                  <p className="text-[#61646b] flex-1 text-justify">
                    Youth Engagement is a series of projects for High School students, aiming to engage young students
                    with AIESEC as an organization and the concept of Leadership Development.
                  </p>
                </div>

                <div className="font-medium flex items-end">
                  <Link
                    href="https://www.aiesec.vn/"
                    className="text-[#2529ff] hover:underline w-[300px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.aiesec.vn/
                  </Link>
                  <p className="text-[#61646b] flex-1 text-justify">
                    By focusing on education initiatives inspired by the Sustainable Development Goals (SDGs), Youth
                    Engagement fosters Self-leadership, helping students navigate the uncertainties and challenges of
                    adolescence with confidence. Through meaningful connections with like-minded peers and professionals,
                    Youth Engagement equips them with critical skills, expanded networks, and opportunities to become
                    "value-driven" leaders and change-makers in Vietnam and beyond.
                  </p>
                </div>
              </div>
            

              
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="AIESEC in Vietnam"
              width={400}
              height={300}
              className="rounded-lg w-full h-auto"
            />
            </div>
        </section> */}

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#21272a] mb-8">HEY SUCCESSFUL ENTREPRENEUR, WHAT ARE YOU WAITING FOR?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/apply">
              <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90">Apply Now</Button>
            </Link>
            <Link href="/information">
              <Button variant="outline" className="border-[#d9d9d9]">
                Learn more
              </Button>
            </Link>
          </div>
        </section>

      </main>
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
      )}
    </div>
      
    
    

  )
}

