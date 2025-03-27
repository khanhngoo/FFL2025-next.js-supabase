"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from 'next/navigation'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"
import Image from "next/image"

// First, define an interface for the form data structure
interface FormData {
  guardian_relationship: string;
  first_name_guardian: string;
  last_name_guardian: string;
  email_guardian: string;
  tel_guardian: string;
  date_of_birth_guardian: string;
  first_name: string;
  last_name: string;
  sex: string;
  email: string;
  tel: string;
  date_of_birth: string;
  citizenship: string;
  school: string;
  grade: string;
  group_name: string;
  referral_source: string;
  referral_source_other?: string;
  activities: string;
  video_url: string;
  cv_url: string;
  ielts_url: string;
  payment_status: string;
  application_status: string;
}

export default function RegistrationForm() {
  const router = useRouter()
  const [step, setStep] = useState(() => {
    // Get the saved step from sessionStorage or default to 1
    if (typeof window !== 'undefined') {
      const savedStep = sessionStorage.getItem('formStep')
      return savedStep ? parseInt(savedStep) : 1
    }
    return 1
  })

  const [formData, setFormData] = useState(() => {
    // Get the saved form data from sessionStorage or use default values
    if (typeof window !== 'undefined') {
      const savedFormData = sessionStorage.getItem('formData')
      return savedFormData ? JSON.parse(savedFormData) : {
      guardian_relationship: '',
      first_name_guardian: '',
      last_name_guardian: '',
      email_guardian: '',
      tel_guardian: '',
      date_of_birth_guardian: '',
      first_name: '',
      last_name: '',
      sex: '',
      email: '',
      tel: '',
      date_of_birth: '',
      citizenship: '',
      school: '',
      grade: '',
      group_name: '',
      referral_source: '',
      referral_source_other: '',
      activities: '',
      video_url: '',
      cv_url: '',
      ielts_url: '',
      payment_status: 'pending',
      application_status: 'submitted'
      }
    }
    return {
      guardian_relationship: '',
      first_name_guardian: '',
      last_name_guardian: '',
      email_guardian: '',
      tel_guardian: '',
      date_of_birth_guardian: '',
      first_name: '',
      last_name: '',
      sex: '',
      email: '',
      tel: '',
      date_of_birth: '',
      citizenship: '',
      school: '',
      grade: '',
      group_name: '',
      referral_source: '',
      referral_source_other: '',
      activities: '',
      video_url: '',
      cv_url: '',
      ielts_url: '',
      payment_status: 'pending',
      application_status: 'submitted'
    }
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Save form data to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  // Save step to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('formStep', step.toString())
  }, [step])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev: FormData) => ({ ...prev, [name]: value }))
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
      !formData.activities ||
      !formData.guardian_relationship
    ) {
      alert('Please fill in all required fields before continuing')
      return
    }
    setStep(2)
  }

  const handleBack = () => {
    // Clear session storage when going back to apply page
    sessionStorage.removeItem('formData')
    sessionStorage.removeItem('formStep')
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
        .insert([formData])
        .select()

      if (error) {
        console.error('Error:', error)
        alert('Error submitting application. Please try again.')
        return
      }

      if (data && data[0]) {
        // Store the application ID for payment processing
        localStorage.setItem('applicationId', data[0].id)
        // Clear session storage after successful submission
        sessionStorage.removeItem('formData')
        sessionStorage.removeItem('formStep')
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
                    type="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleInputChange}
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
              <div className="space-y-2">
                  <label className="text-sm text-[#61646b]">
                    If you want to register within a group, please provide me your group name 
                  </label>
                  <Input 
                    name="group_name"
                    value={formData.group_name}
                    onChange={handleInputChange}
                    placeholder="Your group name"
                    className="border-[#d9d9d9]"
                  />
                </div>
              <div className="space-y-2 h-full">
                <label className="text-sm text-[#61646b]">
                  How do you know about FFL 2025? <span className="text-red-500">*</span>
                </label>
                <RadioGroup
                  value={formData.referral_source}
                  onValueChange={(value: string) => handleSelectChange('referral_source', value)}
                  className="space-y-1 mt-1"
                >
                  <RadioGroupItem value="ffl_fanpage" id="ffl_fanpage">
                    Future Founder Bootcamp Fanpage
                  </RadioGroupItem>
                  <RadioGroupItem value="ffl_website" id="ffl_website">
                    Future Founder Bootcamp Website
                  </RadioGroupItem>
                  <RadioGroupItem value="school" id="school">
                    School
                  </RadioGroupItem>
                  <RadioGroupItem value="ffl_ambassadors" id="ffl_ambassadors">
                    Future Founder Bootcamp Ambassadors
                  </RadioGroupItem>
                  <RadioGroupItem value="dash_channels" id="dash_channels">
                    Dash For Impact channels: Dash For Impact Email, Dash For Impact Fanpage, Dash For Impact Business Hub, ...
                  </RadioGroupItem>
                  <RadioGroupItem value="aiesec_channels" id="aiesec_channels">
                    AIESEC channels: AIESEC in Vietnam Fanpage, AIESEC in Vietnam Email, …
                  </RadioGroupItem>
                  <RadioGroupItem value="vinuni_channels" id="vinuni_channels">
                    VinUniversity channels: VinUniversity Fanpage, VinUniversity Email, …
                  </RadioGroupItem>
                  <RadioGroupItem value="friends" id="friends">
                    Friends
                  </RadioGroupItem>
                  <RadioGroupItem value="other" id="other">
                    Others
                  </RadioGroupItem>
                </RadioGroup>

                {/* Show text input if "Others" is selected */}
                {formData.referral_source === 'other' && (
                  <div className="mt-2 ml-6">
                    <Input
                      name="referral_source_other"
                      value={formData.referral_source_other || ''}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[#61646b]">
                  What activities are you most excited to participate in? (maximum 300 words) <span className="text-red-500">*</span>
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
                  Please enter your guardian's full legal name as it appears on your guardian's government ID/Passport.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      name="first_name_guardian"
                      value={formData.first_name_guardian}
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
                      name="last_name_guardian"
                      value={formData.last_name_guardian}
                      onChange={handleInputChange}
                      placeholder="Your last or family name"
                      className="border-[#d9d9d9]"
                    />
                  </div>
                  <div className="space-y-2 h-full">
                  <label className="text-sm text-[#61646b]">
                    Relationship with you<span className="text-red-500">*</span>
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('guardian_relationship', value)} value={formData.guardian_relationship}>
                    <SelectTrigger className="border-[#d9d9d9]">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="step_mother">Step-mother</SelectItem>
                      <SelectItem value="step_father">Step-father</SelectItem>
                      <SelectItem value="grandmother">Grandmother</SelectItem>
                      <SelectItem value="grandfather">Grandfather</SelectItem>
                      <SelectItem value="step_grandmother">Step-grandmother</SelectItem>
                      <SelectItem value="step_grandfather">Step-grandfather</SelectItem>
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
                      name="email_guardian"
                      value={formData.email_guardian}
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
                      name="date_of_birth_guardian"
                      value={formData.date_of_birth_guardian}
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
                      type="tel"
                      name="tel_guardian"
                      value={formData.tel_guardian}
                      onChange={handleInputChange}
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
                  <li>Your reason for wanting to join the Future Founders Bootcamp</li>
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
                  <label className="text-sm text-[#61646b]">Video URL <span className="text-red-500">*</span></label>
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
                <ul className="list-disc list-inside text-[#61646b] space-y-2">
                  <li>Personal details such as name, email, school, and grade.</li>
                  <li>Highlights achievements, extracurricular activities, and relevant experiences.</li>
                  <li>Academic achievements: GPA from Grade 9 to Summer 2025 and awards at your schools.</li>
                  <li>Parental/guardian consent form.</li>
                  <li>English proficiency proof: Applicants must submit one of the following if English is not their native language.</li>
                  <li>TOEFL iBT or IELTS (minimum IELTS 6.0 or equivalent B2 level).</li>
                  <li>Exemption: Students studying full-time in an international school with English as the primary language of instruction do not need to submit IELTS/TOEFL.</li>
                </ul>

                <div className="space-y-4">
                  <h3 className="font-medium">Submission Guidelines:</h3>
                  <ul className="list-disc list-inside text-[#61646b] space-y-2">
                    <li>You can find Harvard CV Templates to prepare your personal achievements.</li>
                    <li>Please upload your CV to Google Drive or any file hosting service.</li>
                    <li>CVs should follow professional templates and be uploaded in PDF or DOCX format.</li>
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

                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Question 3:</h2>
                  <p className="text-[#61646b]">Please prepare your IELTS Official Report.</p>
                

                  <div className="space-y-4">
                    <h3 className="font-medium">Submission Guidelines:</h3>
                    <ul className="list-disc list-inside text-[#61646b] space-y-2">
                      <li>Please upload your CV to Google Drive or any file hosting service.</li>
                      <li>CVs should follow professional templates and be uploaded in PDF or DOCX format.</li>
                      <li>Provide the URL to access your CV.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[#61646b]">IELTS Report URL</label>
                    <Input 
                      name="ielts_url"
                      value={formData.ielts_url}
                      onChange={handleInputChange}
                      placeholder="Your IELTS Report URL"
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

