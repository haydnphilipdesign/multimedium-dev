import React, { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Multi-step lead qualification form to filter high-value prospects
 * Pre-qualifies leads and demonstrates premium positioning
 */

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

const LeadQualificationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 4

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

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
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
    setIsSubmitting(true)
    
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
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error. Please email me directly at haydn@multimedium.dev')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.projectType !== ''
      case 2: return formData.timeline !== '' && formData.budget !== ''
      case 3: return formData.name !== '' && formData.email !== '' && formData.company !== ''
      case 4: return formData.projectDetails !== ''
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
          <div className="bg-green-100 rounded-lg p-4">
            <p className="text-sm text-green-700 font-medium">
              💼 Expect a detailed proposal with timeline, investment breakdown, and ROI projections
            </p>
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
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
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
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company *</label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                />
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
              />
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
              {isSubmitting ? 'Submitting...' : 'Submit Project'}
              <CheckCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default LeadQualificationForm