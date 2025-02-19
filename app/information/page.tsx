import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InformationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#21272a] mb-12">FUTURE FOUNDERS LAUNCHPAD 2025</h1>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 mb-16">
          <div className="bg-[#2529ff] aspect-video rounded-lg" />
          <div className="text-[#61646b] space-y-4">
            <p>
              Future Founders Launchpad 2025 is a dynamic summer camp co-hosted by ELab at VinUniversity and AIESEC in
              Vietnam. The program offers an immersive experience designed for aspiring young entrepreneurs to develop
              essential entrepreneurial skills, foster creativity, and build impactful ideas. Participants will engage
              in hands-on workshops, mentorship sessions, and team challenges, culminating in a pitch competition to
              showcase their innovative solutions. This camp is the perfect opportunity to connect with like-minded
              peers, industry experts, and global networks, empowering participants to become the changemakers of
              tomorrow.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#21272a] mb-4">Program Duration</h2>
          <p className="text-[#61646b] mb-2">The summer camp is expected to be held from July 7th to July 20th, 2025</p>
          <p className="text-[#61646b] mb-2">Program duration: 2 weeks with</p>
          <ul className="list-disc list-inside text-[#61646b] ml-4">
            <li>Week 1 online via Zoom</li>
            <li>Week 2 onsite at VinUniversity</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#21272a] mb-4">Eligibility</h2>
          <p className="text-[#61646b] mb-4">
            The Future Founders Launchpad 2025 program is open to all high school students, and the program is taught
            entirely in English.
          </p>
          <p className="text-[#61646b] mb-2">In order to take part in the Summer program, students must:</p>
          <ul className="list-disc list-inside text-[#61646b] ml-4">
            <li>Show their interest and passion for entrepreneurship</li>
            <li>Be proficient in the English language.</li>
          </ul>
        </section>

        <section className="mb-16 bg-[#e0f0ff] py-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#21272a] mb-12">HIGHLIGHTED ACTIVITIES</h2>
            <div className="relative">
              <div className="flex overflow-x-auto overflow-y-hidden pb-6 gap-6 snap-x snap-mandatory scrollbar-none">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden flex-none w-[250px] snap-center">
                    <Image
                      src="/placeholder.svg?height=192&width=250"
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
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#21272a] mb-4">Program Fee</h2>
          <p className="text-[#61646b] mb-8">The cost of the program is $2,000 per person.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="text-green-600" />
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
                <X className="text-red-600" />
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
          <h2 className="text-3xl font-bold text-[#21272a] mb-8">CALL TO ACTION SENTENCE!</h2>
          <div className="flex justify-center gap-4">
            <Link href="/apply">
                <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90">Apply Now</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-[#d9d9d9]">About Us</Button>
            </Link>
          </div>
        </section>
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
          </div>
          <div className="text-center text-sm mt-8">CompanyName © 2024. All rights reserved.</div>
        </div>
      </footer>
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

