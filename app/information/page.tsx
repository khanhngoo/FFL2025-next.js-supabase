"use client"

import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "../../custom.css"
import { Footer } from "@/components/Footer"

export default function InformationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#21272a] mb-12">FUTURE FOUNDERS BOOTCAMP 2025</h1>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 mb-16 items-center">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/info1.jpg"
              alt="Future Founders Bootcamp"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-[#61646b] space-y-4">
            <p>
              With the theme of <span className="font-bold text-[#2151a1]">Dash for Greener Impact</span>, Future Founders Bootcamp 2025 
              is a proudly Vietnamese, exclusive, and highly selective pre-college program 
              designed for high school students worldwide. A collaboration between VinUni 
              Entrepreneurship Lab and AIESEC in Vietnam, the program offers a dynamic blend 
              of immersive, enjoyable "college student" life with cross-cultural connections 
              while empowering students with rigorous, hands-on challenges through a college-level 
              leadership and entrepreneurship course.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#21272a] mb-4">Program Duration</h2>
              <p className="text-[#61646b] mb-2">The summer camp is expected to be held from July 7th to July 20th, 2025</p>
              <p className="text-[#61646b] mb-2">Program duration: 2 weeks with</p>
              <ul className="list-disc list-inside text-[#61646b] ml-4">
                <li>Week 1 online via Zoom</li>
                <li>Week 2 onsite at VinUniversity</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/info2.jpg"
                alt="Program Duration"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/info3.JPG"
                alt="Eligibility"
                width={500}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#21272a] mb-4">Eligibility</h2>
              <p className="text-[#61646b] mb-4">
                The Future Founders Bootcamp 2025 program is open to all high school students, and the program is taught
                entirely in English.
              </p>
              <p className="text-[#61646b] mb-2">In order to take part in the Summer program, students must:</p>
              <ul className="list-disc list-inside text-[#61646b] ml-4">
                <li>Show their interest and passion for entrepreneurship</li>
                <li>Be proficient in the English language.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Highlighted Activities - Full width section */}
      <section className="bg-[#e0f0ff] py-12 mb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#21272a] mb-12">HIGHLIGHTED ACTIVITIES</h2>
          <div className="infinite-scroll-wrapper">
            <div className="infinite-scroll-container">
              {/* Original items */}
              {activities.map((activity, index) => (
                <div key={index} className="flex-none w-[250px] mx-2">
                  <div className="bg-white rounded-lg overflow-hidden h-full">
                    <Image
                      src={`/images/activity${index + 1}.jpg`}
                      alt={activity.title}
                      width={250}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-[#21272a] mb-2">{activity.title}</h3>
                      <p className="text-sm text-[#61646b]">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicated items for seamless looping */}
              {activities.map((activity, index) => (
                <div key={`dup-${index}`} className="flex-none w-[250px] mx-2">
                  <div className="bg-white rounded-lg overflow-hidden h-full">
                    <Image
                      src={`/images/activity${index + 1}.jpg`}
                      alt={activity.title}
                      width={250}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-[#21272a] mb-2">{activity.title}</h3>
                      <p className="text-sm text-[#61646b]">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#21272a] mb-4">Program Fee</h2>
          <p className="text-[#61646b] mb-8">The cost of the program is $2,000 per person.
            <br /><i>Note: The program cost will be changed after the application process. Qualified applications might receive financial aid after the review process.</i>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="text-green-600 w-5 h-5" />
                <h3 className="font-bold text-[#21272a]">FEE INCLUDES</h3>
              </div>
              <ul className="space-y-2 text-[#61646b]">
                <li>• All Study materials and resources.</li>
                <li>
                  • Full Access to all program activities, including workshops, networking events, field trips, cultural
                  activities, and more.
                </li>
                <li>• All accommodation & local transportation during the second event week.</li>
                <li>• All meals during the second event week.</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <X className="text-red-600 w-5 h-5" />
                <h3 className="font-bold text-[#21272a]">FEE DOES NOT INCLUDE</h3>
              </div>
              <ul className="space-y-2 text-[#61646b]">
                <li>• Visa and passport application.</li>
                <li>• Flight tickets.</li>
                <li>• Additional meals not included in the program schedule.</li>
                <li>• Personal expenses and other non-program-related costs.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#21272a] mb-8">DEAR FUTURE ENTREPRENEURS, LET'S START SHAPING THE FUTURE TODAY!</h2>
          <div className="flex justify-center gap-4">
            <Link href="/apply">
                <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90">Apply Now</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-[#d9d9d9]">About Us</Button>
            </Link>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

const activities = [
  {
    title: "Welcome Orientation",
    description: "To kick off the program.",
  },
  {
    title: "Workshops",
    description:
      "Exploring agile innovation, business model development, and startup fundamentals through hands-on activities.",
  },
  {
    title: "Field trips",
    description:
      "Experience firsthand collaboration with startups and visits to the National Innovation Center and destinations like Ninh Binh or Ha Long.",
  },
  {
    title: "Hackathon Challenge",
    description:
      "Collaborate in a high-energy, competitive problem-solving situation, prototyping and pitching innovative solutions to life.",
  },
  {
    title: "Networking Spaces",
    description: "Connect with mentors, peers, and local entrepreneurs.",
  },
]

