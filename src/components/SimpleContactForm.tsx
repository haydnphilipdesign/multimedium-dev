import React, { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { trackContactFormSubmission } from '@/components/AdvancedAnalytics'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const SimpleContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string>('')
  const [errors, setErrors] = useState<FormErrors>({})

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): FormErrors => {
    const formErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      formErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required'
    }

    return formErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formErrors = validateForm()
    setErrors(formErrors)
    
    if (Object.keys(formErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const response = await fetch('https://formspree.io/f/xqkadbwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Simple Contact',
          _replyto: formData.email,
          _subject: `New Contact Form: ${formData.name}`,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        trackContactFormSubmission('simple_contact')
        
        // Track Google Ads conversion
        if (typeof window !== 'undefined' && (window as any).trackAdWordsConversion) {
          (window as any).trackAdWordsConversion('CONTACT_CONVERSION_LABEL')
        }
      } else {
        throw new Error(`Submission failed: ${response.status}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('There was an error sending your message. Please try again or email me directly at haydn@multimedium.dev')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-white border-green-200">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-green-800">
            Message Sent Successfully! 🎉
          </h3>
          <p className="text-green-700 mb-6">
            Thanks for reaching out! I'll get back to you within 4-8 hours with a personalized response. 
            Let's turn your vision into reality.
          </p>
          <div className="bg-green-100 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-700 font-medium">
              💡 In the meantime, check out my portfolio above to see what we could create together
            </p>
          </div>
          <Button 
            onClick={() => window.location.href = 'mailto:haydn@multimedium.dev'}
            className="bg-green-600 hover:bg-green-700"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Me Directly
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-3">
          <Mail className="h-6 w-6 text-primary" />
          Get Your Free Quote
        </CardTitle>
        <p className="text-muted-foreground">
          Tell me about your project and I'll get back to you within 4-8 hours with a personalized quote.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name *</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
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

          <div>
            <label className="block text-sm font-medium mb-2">Tell me about your project *</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your project, goals, timeline, and budget range..."
              rows={5}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.message}
              </p>
            )}
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">Error</span>
              </div>
              <p className="text-red-600 mt-1">{submitError}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold h-12"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Get My Free Quote
              </>
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            <p>💡 Free consultation • No obligation • 4-8 hour response time</p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default SimpleContactForm