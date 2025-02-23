"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function RegistrationForm() {
  const router = useRouter()
  const [step, setStep] = useState(1) // Manage the current step
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    sex: '',
    email: '',
    date_of_birth: '',
    citizenship: '',
    school: '',
    grade: '',
    referral_source: '',
    activities: '',
    video_url: '',
    cv_url: '',
    payment_status: 'pending',
    application_status: 'submitted'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleContinue = () => {
    // Check if all required fields in step 1 are filled
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.sex ||
      !formData.email ||
      !formData.date_of_birth ||
      !formData.citizenship ||
      !formData.school ||
      !formData.grade ||
      !formData.referral_source ||
      !formData.activities
    ) {
      alert('Please fill in all required fields before continuing')
      return
    }
    setStep(2)
  }

  const handleBack = () => {
    router.push('/apply')
  }

  const handleSubmit = async () => {
    // Check if all required fields in step 2 are filled
    if (!formData.video_url || !formData.cv_url) {
      alert('Please provide both video URL and CV URL before submitting')
      return
    }
    
    if (isSubmitting) return
    setIsSubmitting(true)
    
    try {
      const { data, error } = await supabase
        .from('applications')
        .insert([
          {
            first_name: formData.first_name,
            last_name: formData.last_name,
            sex: formData.sex,
            email: formData.email,
            date_of_birth: formData.date_of_birth,
            citizenship: formData.citizenship,
            school: formData.school,
            grade: formData.grade,
            referral_source: formData.referral_source,
            activities: formData.activities,
            video_url: formData.video_url,
            cv_url: formData.cv_url,
            payment_status: 'pending',
            application_status: 'submitted'
          }
        ])
        .select()

      if (error) {
        console.error('Error:', error)
        alert('Error submitting application. Please try again.')
        return
      }

      if (data && data[0]) {
        // Store the application ID for payment processing
        localStorage.setItem('applicationId', data[0].id)
        // Redirect to checkout page
        router.push('/checkout')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <h1 className="text-4xl font-bold text-center text-[#21272a] mb-12">APPLICATION FORM</h1>

          {step === 1 && (
            <div className="space-y-8">
              <p className="text-[#61646b]">
                <span className="font-bold text-[#21272a] text-xl">Your Personal Information</span> <br />
                Please enter your full legal name as it appears on your government ID/Passport.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="Your first name"
                    className="border-[#d9d9d9]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Last or Family name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Your last or family name"
                    className="border-[#d9d9d9]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Sex <span className="text-red-500">*</span>
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('sex', value)} value={formData.sex}>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Choose one"/>
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
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="example@email.com"
                    className="border-[#d9d9d9]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Confirm email address <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    type="email"
                    placeholder="example@email.com"
                    className="border-[#d9d9d9]"
                  />
                </div>
              </div>
              <p className="text-sm text-[#61646b]">
                Please do not use an email address that you will lose access to before next fall (eg. school email, work
                email, etc.)
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    type="date"
                    className="border-[#d9d9d9]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Mobile phone<span className="text-red-500">*</span>
                  </label>
                  <Input 
                    type="email"
                    placeholder="(+84) 123 456 789"
                    className="border-[#d9d9d9]"
                  />
                </div>
              </div>
              
            

              

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    Primary Citizenship <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={handleInputChange}
                    placeholder="Your citizenship"
                    className="border-[#d9d9d9]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">Secondary Citizenship</label>
                  <Input
                    placeholder="Optional"
                    className="border-[#d9d9d9]"
                  />
                </div>
              </div>
              

              <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    School <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    placeholder="Your school name"
                    className="border-[#d9d9d9]"
                  />
                </div>
                <div className="space-y-2 h-full">
                  <label className="text-sm text-[#61646b]">
                    Grade <span className="text-red-500">*</span>
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('grade', value)} value={formData.grade}>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">Grade 9</SelectItem>
                      <SelectItem value="10">Grade 10</SelectItem>
                      <SelectItem value="11">Grade 11</SelectItem>
                      <SelectItem value="12">Grade 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2 h-full">
                  <label className="text-sm text-[#61646b]">
                    How do you know about FFL 2025? <span className="text-red-500">*</span>
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('referral_source', value)} value={formData.referral_source}>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fanpage">Fan Page</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="ambassadors">Future Founder Bootcamp Ambassadors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              <div className="space-y-2">
                <label className="text-sm text-[#61646b]">
                  What activities are you most excited to participate in? (maximum 300 words)
                </label>
                <Textarea 
                  name="activities"
                  value={formData.activities}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  className="min-h-[150px] border-[#d9d9d9]"
                  maxLength={300}
                />
              </div>

              {/* Guardian Information Section */}
              <div className="space-y-8">
                <p className="text-[#61646b]">
                  <span className="font-bold text-[#21272a] text-xl">Your Legal Guardian Information</span> <br />
                  Please enter your guardian's full legal name as it appears on your government ID/Passport.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">
                      Last or Family name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Your last or family name"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                  
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="example@email.com"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">
                      Confirm email address <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      type="email"
                      placeholder="example@email.com"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                </div>
                <p className="text-sm text-[#61646b]">
                  Please do not use an email address that you will lose access to before next fall (eg. school email, work
                  email, etc.)
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleInputChange}
                      type="date"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">
                      Mobile phone<span className="text-red-500">*</span>
                    </label>
                    <Input 
                      type="email"
                      placeholder="(+84) 123 456 789"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-[#d9d9d9] px-8"
                  onClick={handleBack}
                  type="button"
                >
                  Back
                </Button>
                <Button
                  className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 px-12"
                  onClick={handleContinue}
                  type="button"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
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
                  <label className="text-sm text-[#61646b]">Video URL</label>
                  <Input 
                    name="video_url"
                    value={formData.video_url}
                    onChange={handleInputChange}
                    placeholder="Your URL"
                    className="border-[#d9d9d9]"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-medium">Question 2:</h2>
                <p className="text-[#61646b]">Please prepare your CV highlighting previous achievements.</p>

                <div className="space-y-4">
                  <h3 className="font-medium">Submission Guidelines:</h3>
                  <ul className="list-disc list-inside text-[#61646b] space-y-2">
                    <li>You can find Harvard CV Templates to prepare your personal achievements.</li>
                    <li>Please upload your CV to Google Drive or any file hosting service.</li>
                    <li>Provide the URL to access your CV.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">CV URL <span className="text-red-500">*</span></label>
                  <Input 
                    name="cv_url"
                    value={formData.cv_url}
                    onChange={handleInputChange}
                    placeholder="Your CV URL"
                    className="border-[#d9d9d9]"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 px-12"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  type="button"
                >
                  {isSubmitting ? 'Submitting...' : 'Review & Checkout'}
                </Button>
              </div>
            </div>
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

