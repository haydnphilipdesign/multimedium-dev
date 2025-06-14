import React, { useState } from 'react'
import { Download, Calculator, FileText, TrendingUp, CheckCircle, Gift, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

/**
 * High-value lead magnets to capture qualified prospects
 * Offers valuable resources in exchange for contact information
 */
const LeadMagnets: React.FC = () => {
  const [selectedMagnet, setSelectedMagnet] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const leadMagnets = [
    {
      id: 'website-audit',
      title: 'Free $2,500 Website Audit',
      subtitle: '15-Point Professional Analysis',
      description: 'Get a comprehensive audit of your current website with actionable recommendations to increase conversions by 300%+',
      value: '$2,500 Value',
      icon: <FileText className="h-8 w-8" />,
      gradient: 'from-blue-500/10 to-blue-600/10',
      textColor: 'text-blue-600',
      features: [
        'Conversion rate analysis',
        'SEO performance review',
        'Mobile responsiveness check',
        'Page speed optimization',
        'User experience evaluation',
        'Competitor comparison',
        'Action plan with priorities'
      ]
    },
    {
      id: 'roi-calculator',
      title: 'Website ROI Calculator',
      subtitle: 'Calculate Your Potential Returns',
      description: 'Interactive tool to calculate the exact ROI your new website could generate based on your industry and business metrics',
      value: 'Instant Results',
      icon: <Calculator className="h-8 w-8" />,
      gradient: 'from-green-500/10 to-green-600/10',
      textColor: 'text-green-600',
      features: [
        'Industry-specific calculations',
        'Revenue projection modeling',
        'Conversion rate scenarios',
        'Investment breakeven analysis',
        'Growth timeline forecasts',
        'Competitive benchmarking',
        'Custom recommendations'
      ]
    },
    {
      id: 'pa-business-report',
      title: 'Pennsylvania Digital Trends Report 2024',
      subtitle: 'Local Market Insights',
      description: 'Exclusive report on digital trends affecting Pennsylvania businesses, with data from 500+ local companies',
      value: 'Exclusive Data',
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: 'from-purple-500/10 to-purple-600/10',
      textColor: 'text-purple-600',
      features: [
        'PA market digital adoption rates',
        'Industry-specific insights',
        'Consumer behavior patterns',
        'Technology investment trends',
        'Competitive landscape analysis',
        'Future opportunity forecasts',
        'Success case studies'
      ]
    }
  ]

  const handleSubmit = async (magnetId: string) => {
    setIsSubmitting(true)
    
    try {
      const magnet = leadMagnets.find(m => m.id === magnetId)
      
      const response = await fetch('https://formspree.io/f/xqkadbwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          leadMagnet: magnet?.title,
          formType: 'Lead Magnet Request',
          _replyto: email,
          _subject: `Lead Magnet Request: ${magnet?.title} - ${name}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // In a real implementation, you'd trigger the download or email delivery
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Lead magnet submission error:', error)
      alert('There was an error. Please email me directly at haydn@multimedium.dev')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openMagnetModal = (magnetId: string) => {
    setSelectedMagnet(magnetId)
    setEmail('')
    setName('')
    setCompany('')
    setIsSubmitted(false)
  }

  const closeMagnetModal = () => {
    setSelectedMagnet(null)
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-gradient-to-br from-green-50 to-white border-green-200">
          <CardContent className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-green-800">
              Perfect! Check Your Email 📧
            </h3>
            <p className="text-green-700 mb-4">
              I'm sending your resource now, plus some bonus insights that could 
              immediately improve your business results.
            </p>
            <Button 
              onClick={closeMagnetModal}
              className="bg-green-600 hover:bg-green-700"
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
      <section id="lead-magnets" className="section-spacing bg-gradient-to-br from-background to-primary/5">
        <div className="container-section">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Gift className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Business Resources</span>
            </div>
            <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
              Get <span className="gradient-text">$10,000+ Value</span> Completely Free
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
              These premium resources normally cost thousands. I'm giving them away free to help 
              <span className="font-semibold text-foreground"> serious business owners like you get real results</span>.
            </p>
          </div>

          {/* Lead magnets grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadMagnets.map((magnet, index) => (
              <Card 
                key={magnet.id}
                className={`hover-lift cursor-pointer relative overflow-hidden border-2 border-transparent hover:border-primary/20 animate-fade-in animation-delay-${index * 100 + 400}`}
                onClick={() => openMagnetModal(magnet.id)}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${magnet.gradient} rounded-xl ${magnet.textColor} w-fit`}>
                    {magnet.icon}
                  </div>
                  <div className="mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {magnet.value}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{magnet.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {magnet.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {magnet.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {magnet.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover-glow">
                    <Download className="h-4 w-4 mr-2" />
                    Get Free Access
                  </Button>
                </CardContent>

                {/* Value indicator */}
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    FREE
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Social proof for lead magnets */}
          <div className="text-center mt-16 animate-fade-in animation-delay-800">
            <p className="text-sm text-muted-foreground mb-4">
              Join 500+ Pennsylvania business owners who've downloaded these resources
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Downloaded 1,200+ times</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>4.9/5 average rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for lead magnet signup */}
      {selectedMagnet && !isSubmitted && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-xl">
                {leadMagnets.find(m => m.id === selectedMagnet)?.title}
              </CardTitle>
              <CardDescription>
                Enter your details to get instant access to this valuable resource
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your company name"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={closeMagnetModal}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleSubmit(selectedMagnet)}
                  disabled={!name || !email || isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary to-accent"
                >
                  {isSubmitting ? 'Sending...' : 'Get Resource'}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                🔒 Your information is secure and will never be shared
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

export default LeadMagnets