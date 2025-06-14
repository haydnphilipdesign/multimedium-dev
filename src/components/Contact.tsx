import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, MessageSquare, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Contact section component with form and contact information
 * Features:
 * - React Hook Form for form validation
 * - Contact form with validation
 * - Contact information display
 * - Success/error states
 * - Responsive design
 * - Form submission handling (placeholder)
 */

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  // Handle form submission
  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual API call
    try {
      // Here you would typically send the data to your backend
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      // Handle error state
    } finally {
      setIsSubmitting(false)
    }
  }

  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "haydn@multimedium.dev",
      href: "mailto:haydn@multimedium.dev"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(570) 994-6186",
      href: "tel:+15709946186"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Pennsylvania, USA",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="section-spacing">
      <div className="container-section">
        {/* Enhanced Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to Start?</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Let's Create Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Your next breakthrough is just one conversation away. I'm here to turn your vision into a 
            <span className="font-semibold text-foreground"> digital experience that drives real results</span>. 
            Let's make it happen together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="bg-gradient-to-br from-white to-primary/5 backdrop-blur-sm border border-primary/10 animate-fade-in animation-delay-400">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-2xl">Let's Start the Conversation</CardTitle>
              </div>
              <CardDescription className="text-base">
                Ready to transform your business? I typically respond within 4 hours and 
                <span className="font-semibold text-foreground"> I'd love to hear about your project</span>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="relative mb-6">
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto animate-scale-in" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 gradient-text">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground mb-2">
                    🎉 Awesome! I've received your message and I'm excited to learn about your project.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    I'll get back to you within 4-8 hours with next steps.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-2 hover-lift"
                    onClick={() => setIsSubmitted(false)}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name field with enhanced styling */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      What should I call you? *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={`transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email field with enhanced styling */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      Best email to reach you? *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject field with enhanced styling */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      What's this about? *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="New website, redesign, consultation..."
                      {...register('subject', { 
                        required: 'Subject is required',
                        minLength: { value: 5, message: 'Subject must be at least 5 characters' }
                      })}
                      className={`transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message field with enhanced styling */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      Tell me about your vision *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="What's your dream website? Tell me about your business, goals, timeline, budget, and anything else that will help me understand your vision..."
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: { value: 20, message: 'Message must be at least 20 characters' }
                      })}
                      className={`transition-all duration-300 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Enhanced Submit button */}
                  <Button 
                    type="submit" 
                    className="w-full btn-magnetic hover-glow bg-gradient-to-r from-primary to-accent text-white font-semibold h-12" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Sending Your Message...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Send My Message
                      </>
                    )}
                  </Button>
                  
                  {/* Trust indicator */}
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    🔒 Your information is secure and will never be shared
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in animation-delay-500">
            <div>
              <h3 className="heading-md mb-6">Other Ways to Connect</h3>
              <p className="body-md text-muted-foreground mb-8">
                Prefer a different approach? <span className="font-semibold text-foreground">I'm flexible</span>. 
                Choose whatever feels most comfortable for you—I'll respond quickly either way.
              </p>
            </div>

            {/* Enhanced Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`group hover-lift bg-gradient-to-r from-white to-primary/5 border border-primary/10 animate-scale-in animation-delay-${index * 100 + 600}`}>
                  <CardContent className="p-5">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href && info.href !== '#' ? (
                          <a 
                            href={info.href}
                            className="font-semibold hover:text-primary transition-colors text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-base">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Quick action button */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 animate-fade-in animation-delay-800">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Prefer to schedule a call?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's hop on a quick 15-minute call to discuss your project
                </p>
                <Button variant="outline" className="hover-lift">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Availability */}
            <Card className="bg-gradient-to-br from-white to-green-50 border border-green-200 animate-fade-in animation-delay-900">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-green-800">I'm Available Now!</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">By appointment</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-xs text-green-700 font-medium">
                    ⚡ Lightning-fast response: Usually within 4 hours!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact