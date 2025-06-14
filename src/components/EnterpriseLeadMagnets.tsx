import React, { useState } from 'react'
import { Download, FileText, Calculator, BarChart3, Users, Shield, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

/**
 * Enterprise-level lead magnets designed for Fortune 500 prospects
 * High-value resources that position as strategic partner
 */

interface LeadMagnetFormData {
  name: string
  email: string
  company: string
  title: string
  phone: string
  companySize: string
  industry: string
}

const EnterpriseLeadMagnets: React.FC = () => {
  const [selectedMagnet, setSelectedMagnet] = useState<string | null>(null)
  const [formData, setFormData] = useState<LeadMagnetFormData>({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    companySize: '',
    industry: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const leadMagnets = [
    {
      id: 'transformation-playbook',
      title: 'Fortune 500 Digital Transformation Playbook',
      subtitle: 'Complete strategic framework used by industry leaders',
      value: '$25,000',
      description: 'Comprehensive 50-page strategic guide covering digital transformation methodologies, ROI frameworks, and implementation roadmaps used by Fortune 500 companies.',
      icon: <FileText className="h-8 w-8" />,
      benefits: [
        'C-Suite digital strategy frameworks',
        'ROI calculation methodologies',
        'Change management strategies',
        'Technology stack recommendations',
        'Implementation timeline templates',
        'Risk mitigation frameworks'
      ],
      gradient: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-600'
    },
    {
      id: 'roi-calculator',
      title: 'Enterprise ROI Calculator & Strategy Framework',
      subtitle: 'Quantify your digital transformation investment',
      value: '$15,000',
      description: 'Advanced calculator and strategic framework to model ROI for enterprise digital initiatives, including cost-benefit analysis and strategic planning tools.',
      icon: <Calculator className="h-8 w-8" />,
      benefits: [
        'Custom ROI modeling tools',
        'Cost-benefit analysis templates',
        'Strategic planning frameworks',
        'Performance benchmarking',
        'Investment prioritization matrix',
        'Executive presentation templates'
      ],
      gradient: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-600'
    },
    {
      id: 'industry-report',
      title: 'Enterprise Digital Competitive Analysis Report',
      subtitle: 'Industry benchmarking and competitive intelligence',
      value: '$10,000',
      description: 'Comprehensive industry analysis covering digital maturity benchmarks, competitive positioning, and strategic opportunities in your sector.',
      icon: <BarChart3 className="h-8 w-8" />,
      benefits: [
        'Industry digital maturity benchmarks',
        'Competitive analysis frameworks',
        'Market opportunity identification',
        'Technology trend analysis',
        'Strategic positioning recommendations',
        'Implementation best practices'
      ],
      gradient: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-600'
    }
  ]

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Technology',
    'Retail/E-commerce',
    'Real Estate',
    'Professional Services',
    'Non-Profit',
    'Other'
  ]

  const companySizes = [
    '50-200 employees',
    '200-1,000 employees',
    '1,000-5,000 employees',
    '5,000+ employees (Fortune 500)',
    'Startup/Small Business'
  ]

  const handleDownload = async (magnetId: string) => {
    if (!selectedMagnet) return

    setIsSubmitting(true)
    
    const selectedMagnetData = leadMagnets.find(m => m.id === magnetId)
    
    try {
      const response = await fetch('https://formspree.io/f/xqkadbwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          leadMagnet: selectedMagnetData?.title,
          leadMagnetValue: selectedMagnetData?.value,
          formType: 'Enterprise Lead Magnet Download',
          _replyto: formData.email,
          _subject: `High-Value Lead: ${formData.name} - ${selectedMagnetData?.title}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // In a real implementation, you would trigger the actual download here
        console.log('Lead magnet download initiated for:', magnetId)
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

  const isFormValid = () => {
    return formData.name && formData.email && formData.company && formData.title && formData.companySize && formData.industry
  }

  return (
    <section id="enterprise-resources" className="section-spacing bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Download className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Exclusive Enterprise Resources</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Strategic <span className="gradient-text">Intelligence</span> for Digital Leaders
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Access the same strategic frameworks and methodologies used by Fortune 500 companies to 
            <span className="font-semibold text-foreground"> drive digital transformation and measurable ROI</span>.
          </p>
        </div>

        {/* Lead Magnets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {leadMagnets.map((magnet, index) => (
            <Card 
              key={magnet.id}
              className={`group hover-lift bg-gradient-to-br from-white to-secondary/20 border-2 ${magnet.borderColor} animate-fade-in animation-delay-${index * 100 + 400}`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${magnet.gradient} rounded-xl ${magnet.textColor} w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {magnet.icon}
                </div>
                
                <div className="mb-2">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {magnet.value} Value
                  </div>
                  <div className="text-xs text-muted-foreground font-medium bg-green-100 rounded-full px-2 py-1 inline-block">
                    FREE for Qualified Executives
                  </div>
                </div>

                <CardTitle className="text-xl mb-2 leading-tight">{magnet.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{magnet.subtitle}</p>
                <p className="text-sm leading-relaxed">{magnet.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-sm">What's Included:</h4>
                  <ul className="space-y-2">
                    {magnet.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full mt-4 bg-gradient-to-r from-primary to-accent text-white hover-glow`}
                      onClick={() => setSelectedMagnet(magnet.id)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Now (Free)
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-2">
                        Access Your Strategic Resource
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        This high-value resource is exclusively available to qualified enterprise executives. 
                        Please provide your information to access <strong>{magnet.title}</strong>.
                      </DialogDescription>
                    </DialogHeader>

                    {!isSubmitted ? (
                      <div className="space-y-4 mt-6">
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
                              placeholder="your@company.com"
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
                            <label className="block text-sm font-medium mb-2">Title *</label>
                            <Input
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              placeholder="CEO, CTO, VP, etc."
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Company Size *</label>
                            <Select value={formData.companySize} onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                              <SelectContent>
                                {companySizes.map((size) => (
                                  <SelectItem key={size} value={size}>{size}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Industry *</label>
                            <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                          />
                        </div>

                        <Button 
                          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white hover-glow"
                          onClick={() => selectedMagnet && handleDownload(selectedMagnet)}
                          disabled={!isFormValid() || isSubmitting}
                        >
                          {isSubmitting ? 'Processing...' : 'Access Resource Now'}
                          <Download className="h-4 w-4 ml-2" />
                        </Button>

                        <div className="text-xs text-muted-foreground text-center mt-4">
                          <Shield className="h-4 w-4 inline mr-1" />
                          Your information is secure and will never be shared. You'll receive the resource immediately via email.
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Download className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Resource Sent Successfully!</h3>
                        <p className="text-muted-foreground mb-4">
                          Check your email for the download link. I'll also follow up within 4-8 hours to discuss 
                          how we can help implement these strategies for your organization.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-sm text-green-700 font-medium">
                            💼 Want to fast-track your digital transformation? Let's schedule a strategic call.
                          </p>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Authority Positioning */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 animate-fade-in animation-delay-800">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">
              Trusted by <span className="gradient-text">Enterprise Leaders</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Fortune 500 Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$500M+</div>
              <div className="text-sm text-muted-foreground">Client ROI Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Implementation Success</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24hrs</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseLeadMagnets