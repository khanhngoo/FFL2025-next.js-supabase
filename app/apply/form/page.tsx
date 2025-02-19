"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"

export default function RegistrationForm() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1 flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-[#2529ff] text-white" : "border-2 border-[#d9d9d9] text-[#61646b]"
                }`}
              >
                1
              </div>
              <div className="h-[2px] flex-1 mx-2 bg-[#d9d9d9]" />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-[#2529ff] text-white" : "border-2 border-[#d9d9d9] text-[#61646b]"
                }`}
              >
                2
              </div>
              <div className="h-[2px] flex-1 mx-2 bg-[#d9d9d9]" />
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-[#2529ff] text-white" : "border-2 border-[#d9d9d9] text-[#61646b]"
                }`}
              >
                3
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-[#61646b]">
            <span className={step >= 1 ? "text-[#2529ff]" : ""}>Personal Information</span>
            <span className={step >= 2 ? "text-[#2529ff]" : ""}>Personal Introduction</span>
            <span className={step >= 3 ? "text-[#2529ff]" : ""}>Finalize & Check Out</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#21272a] mb-12">REGISTRATION FORM</h1>

          {step === 1 && (
            <form className="space-y-8">
              <p className="text-[#61646b]">
                Please enter your full legal name as it appears on your government ID/Passport.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Your first name" className="border-[#d9d9d9]" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Last or Family name <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Your last or family name" className="border-[#d9d9d9]" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Sex <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" placeholder="example@email.com" className="border-[#d9d9d9]" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Confirm email address <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" placeholder="example@email.com" className="border-[#d9d9d9]" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <Input type="date" placeholder="DD/MM/YYYY" className="border-[#d9d9d9]" required />
                </div>
              </div>

              <p className="text-sm text-[#61646b]">
                Please do not use an email address that you will lose access to before next fall (eg. school email, work
                email, etc.)
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Primary Citizenship <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Dropdown Item" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vn">Vietnam</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">Secondary Citizenship</label>
                  <Select>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Dropdown Item" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vn">Vietnam</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    School <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Your school name" className="border-[#d9d9d9]" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Grade <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">Grade 10</SelectItem>
                      <SelectItem value="11">Grade 11</SelectItem>
                      <SelectItem value="12">Grade 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    How do you know about FFL 2025? <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[#61646b]">
                  What activities are you most excited to participate in? (maximum 300 words)
                </label>
                <Textarea placeholder="Type here" className="min-h-[150px] border-[#d9d9d9]" maxLength={300} />
              </div>

              <div className="flex justify-center">
                <Button
                  className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 px-12"
                  onClick={() => setStep(2)}
                  type="button"
                >
                  Continue
                </Button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl font-medium">Question 1:</h2>
                <p className="text-[#61646b]">
                  Prepare a link to an introduction video (no longer than 3 minutes) to submit along with your
                  application. The video should briefly include:
                </p>
                <ul className="list-disc list-inside text-[#61646b] space-y-2">
                  <li>A short introduction about yourself</li>
                  <li>Your reason for wanting to join the Future Founders Launchpad</li>
                  <li>
                    A business idea you are currently pursuing or planning to develop. If you do not have any ideas to
                    propose, do not worry. You can tell us about your dreams and aspirations in the future.
                  </li>
                  <li>
                    Any additional information you would like to share. They might be your awards, your biggest
                    achievements, your relevant experience or your high school extracurricular activity.
                  </li>
                </ul>

                <div className="space-y-4">
                  <h3 className="font-medium">Submission Guidelines:</h3>
                  <ul className="list-disc list-inside text-[#61646b] space-y-2">
                    <li>
                      You must film your video in a 16:9 format. Make sure your face is clearly visible and your voice
                      is easily heard.
                    </li>
                    <li>
                      We encourage you to edit the video professionally and include subtitles; however, this is not a
                      requirement.
                    </li>
                    <li>
                      Upload your video to YouTube and set the privacy to "Unlisted" or "Password Protected," then
                      provide the video URL (and password if applicable) in your online application.
                    </li>
                    <li>
                      Alternatively, you can also upload it to Google Drive, and provide the URL. Please share access so
                      that we can view your video
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">Provide your URL here</label>
                  <Input placeholder="Your URL" className="border-[#d9d9d9]" />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-medium">Question 2:</h2>
                <p className="text-[#61646b]">Please prepare your CV highlighting previous achievements.</p>

                <div className="space-y-4">
                  <h3 className="font-medium">Submission Guidelines:</h3>
                  <ul className="list-disc list-inside text-[#61646b] space-y-2">
                    <li>You can find Harvard CV Templates to prepare your personal achievements.</li>
                    <li>Please upload your CV directly to this website.</li>
                    <li>Accepted file formats include PDF or Document.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">Upload file here</label>
                  <div className="border-2 border-dashed border-[#d9d9d9] rounded-lg p-8 text-center">
                    <p className="text-[#61646b]">Click or Drag to upload</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 px-12"
                  onClick={() => setStep(3)}
                  type="button"
                >
                  Review & Checkout
                </Button>
              </div>
            </form>
          )}
        </div>
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

