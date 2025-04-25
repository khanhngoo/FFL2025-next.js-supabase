"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/Footer"

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-center text-4xl font-bold text-[#21272a] mb-12">FUTURE FOUNDERS BOOTCAMP 2025 FAQ</h1>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
            <p className="text-[#61646b]">
            The Future Founder Bootcamp 2025 is designed to equip you with essential skills for success in college and beyond.
            </p>

            <p className="text-[#61646b]">
              All in one — <span className="font-bold">developing key life</span> skills such as time management, career planning, and independent living; <span className="font-bold">enhancing academic abilities</span> to excel at the college level; 
              <span className="font-bold">immersing yourself</span> in the real <span className="font-bold">Vietnamese culture and rising field: entrepreneurship.</span>
            </p>
            <p className="text-[#61646b]">
              Future Founders Bootcamp is where the best 'founders' find each other and foster life-time connections.
            </p>
        </div> 
        <div className="max-w-4xl mx-auto mb-20">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-[#d9d9d9]">
              <button
                className="w-full py-6 flex items-center justify-between text-left hover:text-[#2151a1] transition-colors"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <span className="text-xl font-medium">{item.question}</span>
                <ChevronRight className={`w-6 h-6 transition-transform ${openQuestion === index ? "rotate-90" : ""}`} />
              </button>
              {openQuestion === index && (
                <div className="pb-6">
                  <p className="text-[#61646b]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-xl font-medium text-[#21272a]">Got more questions?</h2>
          <div className="flex gap-2 justify-center">
            <div className="flex gap-1 justify-center">
              <Input placeholder="Your email" className="max-w-md border-[#d9d9d9]" />
              <Input placeholder="Type your question here" className="max-w-md border-[#d9d9d9]" />
            </div>
            <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90 px-8">Send</Button>
          </div>
          <Button className="bg-[#2151a1] text-white hover:bg-[#2151a1]/90 px-8">Contact us through fanpage</Button>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

const faqItems = [
  {
    question: "What is Future Founders Bootcamp 2025?",
    answer:
      "Future Founders Bootcamp 2025 is an intensive summer camp hosted by ELab at VinUniversity and AIESEC in Vietnam. The program offers an immersive experience designed for aspiring young entrepreneurs to develop essential entrepreneurial skills, foster creativity, and build impactful ideas.",
  },
  {
    question: "Which organization will host Future Founders Bootcamp 2025?",
    answer:
      "The program is co-hosted by ELab at VinUniversity and AIESEC in Vietnam. These organizations work together to provide a comprehensive entrepreneurship program that combines academic excellence with practical industry experience.",
  },
  {
    question: "Who is eligible for Future Founders Bootcamp 2025?",
    answer:
      "The program is open to all high school students who show interest and passion for entrepreneurship. Participants must be proficient in English as the program is conducted entirely in English.",
  },
  {
    question: "What is the cost of the program?",
    answer: (
      <>
        <p className="text-[#61646b]">
          The program fee is $2,000 per person. This includes all study materials, resources, program activities (workshops, networking events, field trips, cultural activities), accommodation and local transportation during the second week, and meals during the second event week. Additional costs like visa applications, flight tickets, and personal expenses are not included.
        </p>
        <p className="text-[#61646b] mt-4">
          Applicants who are qualified might receive merit-based scholarships. The application process will be reviewed on a rolling basis.
        </p>
      </>
    ),
  },
  {
    question: "What is the program timeline and activities?",
    answer:
      "The summer camp runs from July 7th to July 20th, 2025 (2 weeks). Week 1 is conducted online via Zoom, while Week 2 is held onsite at VinUniversity. Activities include welcome orientation, workshops on agile innovation and business development, field trips to startups and innovation centers, hackathon challenges, and networking opportunities with mentors and entrepreneurs.",
  },
]

