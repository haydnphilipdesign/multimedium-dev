import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { trackContactFormSubmission } from '@/components/AdvancedAnalytics'

interface FormData {
  projectType: string
  timeline: string
  budget: string
  name: string
  email: string
  company: string
  phone: string
  projectDetails: string
  currentWebsite: string
  goals: string[]
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  phone?: string
  projectDetails?: string
}

const LeadQualificationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string>('')
  const [errors, setErrors] = useState<FormErrors>({})
  const totalSteps = 4

  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: '',
    currentWebsite: '',
    goals: []
  })

  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('leadQualificationForm')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(parsed)
      } catch (error) {
        console.error('Error loading saved form data:', error)
      }
    }
  }, [])

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (formData.name || formData.email || formData.projectType) {
      localStorage.setItem('leadQualificationForm', JSON.stringify(formData))
    }
  }, [formData])

  const projectTypes = [
    { id: 'new-website', label: 'New Website', price: '$15K+', icon: '🌟' },
    { id: 'redesign', label: 'Website Redesign', price: '$10K+', icon: '🔄' },
    { id: 'web-app', label: 'Web Application', price: '$25K+', icon: '⚡' },
    { id: 'ecommerce', label: 'E-commerce Platform', price: '$20K+', icon: '🛒' },
    { id: 'custom-software', label: 'Custom Software', price: '$50K+', icon: '🚀' },
    { id: 'consulting', label: 'Strategic Consulting', price: '$5K+', icon: '💡' }
  ]

  const timelines = [
    { id: 'asap', label: 'Ready to start immediately', urgency: 'high' },
    { id: '30-days', label: 'Planning for next 30 days', urgency: 'medium' },
    { id: '60-days', label: 'Next 2-3 months', urgency: 'medium' },
    { id: 'exploring', label: 'Just exploring options', urgency: 'low' }
  ]

  const budgets = [
    { id: '10-25k', label: '$10,000 - $25,000', tier: 'professional' },
    { id: '25-50k', label: '$25,000 - $50,000', tier: 'enterprise' },
    { id: '50k+', label: '$50,000+', tier: 'custom' },
    { id: 'discuss', label: "Let's discuss my needs", tier: 'consultation' }
  ]

  const businessGoals = [
    'Increase online sales',
    'Generate more leads',
    'Improve brand image',
    'Streamline operations',
    'Enter new markets',
    'Reduce manual work'
  ]

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true // Phone is optional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  const validateStep3 = (): FormErrors => {
    const stepErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      stepErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      stepErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      stepErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      stepErrors.email = 'Please enter a valid email address'
    }

    if (!formData.company.trim()) {
      stepErrors.company = 'Company name is required'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      stepErrors.phone = 'Please enter a valid phone number'
    }

    return stepErrors
  }

  const validateStep4 = (): FormErrors => {
    const stepErrors: FormErrors = {}
    
    if (!formData.projectDetails.trim()) {
      stepErrors.projectDetails = 'Project description is required'
    } else if (formData.projectDetails.trim().length < 20) {
      stepErrors.projectDetails = 'Please provide more details about your project (at least 20 characters)'
    }

    return stepErrors
  }

  const handleNext = () => {
    let stepErrors: FormErrors = {}
    
    // Validate current step before proceeding
    if (currentStep === 3) {
      stepErrors = validateStep3()
    } else if (currentStep === 4) {
      stepErrors = validateStep4()
    }

    setErrors(stepErrors)
    
    if (Object.keys(stepErrors).length === 0 && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({}) // Clear errors when going back
    }
  }

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const handleSubmit = async () => {
    // Final validation
    const step3Errors = validateStep3()
    const step4Errors = validateStep4()
    const allErrors = { ...step3Errors, ...step4Errors }
    
    setErrors(allErrors)
    
    if (Object.keys(allErrors).length > 0) {
      setSubmitError('Please fix the errors above before submitting')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Submit to Formspree with qualification data
      const response = await fetch('https://formspree.io/f/xqkadbwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Lead Qualification',
          _replyto: formData.email,
          _subject: `High-Value Lead: ${formData.name} - ${formData.budget} ${formData.projectType}`,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Clear saved form data on successful submission
        localStorage.removeItem('leadQualificationForm')
        
        // Track successful form submission
        trackContactFormSubmission('lead_qualification')
        
        // Track Google Ads conversion
        if (typeof window !== 'undefined' && (window as any).trackAdWordsConversion) {
          (window as any).trackAdWordsConversion('QUOTE_REQUEST_CONVERSION_LABEL')
        }
      } else {
        const errorData = await response.text()
        throw new Error(`Submission failed: ${response.status} ${errorData}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('There was an error submitting your form. Please try again or email me directly at haydn@multimedium.dev')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.projectType !== ''
      case 2: return formData.timeline !== '' && formData.budget !== ''
      case 3: {
        const stepErrors = validateStep3()
        return Object.keys(stepErrors).length === 0 && formData.name !== '' && formData.email !== '' && formData.company !== ''
      }
      case 4: {
        const stepErrors = validateStep4()
        return Object.keys(stepErrors).length === 0 && formData.projectDetails !== ''
      }
      default: return false
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-white border-green-200">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-green-800">
            Thank You! Your Project Looks Exciting 🚀
          </h3>
          <p className="text-green-700 mb-6">
            Based on your responses, this looks like a perfect fit. I'll review your requirements and 
            get back to you within 4-8 hours with next steps and a personalized proposal.
          </p>
          <div className="bg-green-100 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-700 font-medium">
              💼 Expect a detailed proposal with timeline, investment breakdown, and ROI projections
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => window.location.href = 'tel:+15709946186'}
              className="bg-green-600 hover:bg-green-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now: (570) 994-6186
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = 'mailto:haydn@multimedium.dev'}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Email Me Directly
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-2xl">Let's Build Something Amazing</CardTitle>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Step 1: Project Type */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">What type of project do you need?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.projectType === type.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setFormData({ ...formData, projectType: type.id })}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{type.icon}</span>
                        <div>
                          <div className="font-medium">{type.label}</div>
                          <div className="text-sm text-primary font-semibold">{type.price}</div>
                        </div>
                      </div>
                      {formData.projectType === type.id && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Timeline & Budget */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">When do you want to start?</h3>
              <div className="space-y-3">
                {timelines.map((time) => (
                  <div
                    key={time.id}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.timeline === time.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setFormData({ ...formData, timeline: time.id })}
                  >
                    <div className="flex items-center justify-between">
                      <span>{time.label}</span>
                      {formData.timeline === time.id && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">What's your investment range?</h3>
              <div className="space-y-3">
                {budgets.map((budget) => (
                  <div
                    key={budget.id}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.budget === budget.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setFormData({ ...formData, budget: budget.id })}
                  >
                    <div className="flex items-center justify-between">
                      <span>{budget.label}</span>
                      {formData.budget === budget.id && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Information */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Let's get to know you</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company *</label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                  className={errors.company ? 'border-red-500' : ''}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.company}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Current Website (if any)</label>
              <Input
                value={formData.currentWebsite}
                onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        )}

        {/* Step 4: Project Details */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tell me about your project</h3>
              <Textarea
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                placeholder="Describe your vision, requirements, and what success looks like..."
                rows={5}
                className={errors.projectDetails ? 'border-red-500' : ''}
              />
              {errors.projectDetails && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.projectDetails}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Character count: {formData.projectDetails.length} (minimum 20 recommended)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">What are your main business goals?</h3>
              <div className="grid grid-cols-2 gap-3">
                {businessGoals.map((goal) => (
                  <div
                    key={goal}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-sm ${
                      formData.goals.includes(goal)
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => handleGoalToggle(goal)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{goal}</span>
                      {formData.goals.includes(goal) && (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">Submission Error</span>
            </div>
            <p className="text-red-600 mt-1">{submitError}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Project
                  <CheckCircle className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default LeadQualificationForm