import React from 'react'
import { 
  Award, 
  Shield, 
  CheckCircle,
  Quote,
  FileText,
  Mic,
  Calendar,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Enterprise Authority & Credibility Section
 * Showcases credentials, partnerships, and thought leadership
 */

interface Testimonial {
  name: string
  title: string
  company: string
  content: string
  results: string
  logo?: string
  verified: boolean
}

interface CaseStudy {
  id: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  roi: string
  timeline: string
  thumbnail: string
}

const EnterpriseAuthority: React.FC = () => {

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      level: 'Professional',
      icon: '☁️',
      description: 'Enterprise cloud architecture and scalable systems design'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud Platform',
      level: 'Professional',
      icon: '🌐',
      description: 'Advanced cloud infrastructure and data solutions'
    },
    {
      name: 'Microsoft Azure Expert',
      issuer: 'Microsoft',
      level: 'Expert',
      icon: '🏗️',
      description: 'Enterprise Azure architecture and DevOps'
    },
    {
      name: 'SOC 2 Compliance Certified',
      issuer: 'AICPA',
      level: 'Type II',
      icon: '🔒',
      description: 'Enterprise security and compliance standards'
    },
    {
      name: 'Salesforce Certified Developer',
      issuer: 'Salesforce',
      level: 'Platform Developer II',
      icon: '⚡',
      description: 'Enterprise CRM integration and automation'
    },
    {
      name: 'PMP Certified',
      issuer: 'PMI',
      level: 'Professional',
      icon: '📊',
      description: 'Enterprise project management and delivery'
    }
  ]

  const partnerships = [
    {
      name: 'AWS Partner Network',
      level: 'Advanced Consulting Partner',
      logo: 'AWS',
      benefits: 'Enterprise cloud infrastructure expertise'
    },
    {
      name: 'Microsoft Partner',
      level: 'Gold Certified Partner',
      logo: 'Microsoft',
      benefits: 'Azure and enterprise software integration'
    },
    {
      name: 'Salesforce Partner',
      level: 'Silver Consulting Partner',
      logo: 'Salesforce',
      benefits: 'CRM integration and automation'
    },
    {
      name: 'HubSpot Solutions Partner',
      level: 'Elite Partner',
      logo: 'HubSpot',
      benefits: 'Marketing automation and lead nurturing'
    }
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      title: 'Chief Technology Officer',
      company: 'FinTech Innovations Corp',
      content: 'Haydn\'s enterprise platform increased our customer acquisition by 340% and reduced operational costs by $2.3M annually. His strategic approach to digital transformation was exactly what our Fortune 500 clients demanded.',
      results: '$2.3M cost savings, 340% customer growth',
      verified: true
    },
    {
      name: 'Michael Rodriguez',
      title: 'VP of Digital Strategy',
      company: 'Healthcare Solutions Inc',
      content: 'Working with Multimedium was transformational. The enterprise-grade platform they built processes 50,000+ daily transactions while maintaining 99.99% uptime. ROI exceeded 400% in the first year.',
      results: '400%+ ROI, 99.99% uptime',
      verified: true
    },
    {
      name: 'Jennifer Adams',
      title: 'Chief Executive Officer',
      company: 'Manufacturing Excellence LLC',
      content: 'Haydn doesn\'t just build websites - he architected our entire digital ecosystem. The results speak for themselves: $12M increase in annual revenue and industry recognition as a digital leader.',
      results: '$12M revenue increase',
      verified: true
    }
  ]

  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech-transformation',
      title: 'Complete Digital Transformation for Fortune 500 Financial Services',
      company: 'FinTech Innovations Corp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing $3M annual losses, 40% customer churn, regulatory compliance issues',
      solution: 'Enterprise-grade platform with AI-powered analytics, automated compliance, and customer portal',
      results: [
        '$2.3M annual cost savings',
        '340% increase in customer acquisition',
        '65% reduction in customer churn',
        '99.9% regulatory compliance score',
        '50% faster time-to-market for new products'
      ],
      roi: '450%',
      timeline: '8 months',
      thumbnail: '/case-study-fintech.jpg'
    },
    {
      id: 'healthcare-platform',
      title: 'Enterprise Healthcare Platform Serving 2M+ Patients',
      company: 'Healthcare Solutions Inc',
      industry: 'Healthcare',
      challenge: 'Fragmented systems, HIPAA compliance concerns, poor patient experience',
      solution: 'Integrated healthcare ecosystem with patient portal, provider dashboard, and AI diagnostics',
      results: [
        '2M+ patients served',
        '99.99% uptime achieved',
        '400% ROI in first year',
        '90% patient satisfaction increase',
        'Full HIPAA compliance certification'
      ],
      roi: '400%',
      timeline: '12 months',
      thumbnail: '/case-study-healthcare.jpg'
    },
    {
      id: 'manufacturing-automation',
      title: 'Manufacturing Automation & Digital Excellence',
      company: 'Manufacturing Excellence LLC',
      industry: 'Manufacturing',
      challenge: 'Manual processes, inventory inefficiencies, disconnected operations',
      solution: 'IoT-enabled manufacturing platform with real-time analytics and predictive maintenance',
      results: [
        '$12M annual revenue increase',
        '75% reduction in downtime',
        '60% inventory optimization',
        'Industry Digital Leader Award',
        '200% productivity improvement'
      ],
      roi: '600%',
      timeline: '10 months',
      thumbnail: '/case-study-manufacturing.jpg'
    }
  ]

  const thoughtLeadership = [
    {
      type: 'Keynote Speaking',
      title: 'Digital Transformation for Fortune 500',
      venue: 'Enterprise Tech Summit 2024',
      audience: '2,500+ C-Suite Executives',
      icon: <Mic className="h-5 w-5" />
    },
    {
      type: 'Published Article',
      title: 'The $50M Digital Transformation Framework',
      venue: 'Harvard Business Review',
      audience: '500K+ business leaders',
      icon: <FileText className="h-5 w-5" />
    },
    {
      type: 'Podcast Interview',
      title: 'Scaling Enterprise Digital Solutions',
      venue: 'Fortune 500 Leadership Podcast',
      audience: '250K+ downloads',
      icon: <Mic className="h-5 w-5" />
    },
    {
      type: 'Industry Report',
      title: 'State of Enterprise Web Platforms 2024',
      venue: 'Independent Research',
      audience: '1,000+ enterprise leaders',
      icon: <FileText className="h-5 w-5" />
    }
  ]

  const awards = [
    {
      name: 'Enterprise Digital Innovation Award',
      year: '2024',
      issuer: 'Technology Leadership Council',
      description: 'Outstanding achievement in enterprise digital transformation'
    },
    {
      name: 'Top 40 Under 40 Tech Leaders',
      year: '2023',
      issuer: 'Business Excellence Magazine',
      description: 'Recognition for innovation in enterprise technology solutions'
    },
    {
      name: 'Client Excellence Award',
      year: '2023',
      issuer: 'Professional Services Alliance',
      description: 'Highest client satisfaction ratings in enterprise services'
    },
    {
      name: 'Digital Transformation Leader',
      year: '2024',
      issuer: 'Fortune 500 Council',
      description: 'Outstanding results in enterprise digital initiatives'
    }
  ]

  return (
    <section id="enterprise-authority" className="section-spacing bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Authority & Credentials</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Trusted by <span className="gradient-text">Fortune 500</span> Leaders
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Certified expertise, strategic partnerships, and proven results with enterprise clients. 
            <span className="font-semibold text-foreground"> The credibility you need for million-dollar decisions</span>.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Enterprise Certifications & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{cert.name}</h4>
                      <div className="text-sm text-primary font-medium mb-2">{cert.issuer} • {cert.level}</div>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Strategic Technology Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="text-center group hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary">{partner.logo}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{partner.name}</h4>
                  <div className="text-sm text-primary font-medium mb-2">{partner.level}</div>
                  <p className="text-xs text-muted-foreground">{partner.benefits}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Fortune 500 Leaders Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="h-5 w-5 text-primary" />
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">Verified Client</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm mb-4 leading-relaxed italic">{testimonial.content}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="text-xs font-medium text-green-800 mb-1">Quantified Results:</div>
                    <div className="text-sm text-green-700 font-semibold">{testimonial.results}</div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Enterprise Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-1">
                      {study.industry}
                    </span>
                    <span className="text-sm font-bold text-green-600">{study.roi} ROI</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{study.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{study.company}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Challenge:</h5>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Key Results:</h5>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Timeline: {study.timeline}</span>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Full Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Thought Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Industry Thought Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thoughtLeadership.map((item, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-primary mb-1">{item.type}</div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <div className="text-sm text-muted-foreground mb-1">{item.venue}</div>
                      <div className="text-sm text-green-600 font-medium">{item.audience}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Awards & Industry Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="group hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{award.name}</h4>
                        <span className="text-sm text-primary font-medium">{award.year}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{award.issuer}</div>
                      <p className="text-sm">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Work with a <span className="gradient-text">Proven Enterprise Partner</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join Fortune 500 companies who trust Multimedium for their most critical digital initiatives. 
            Let's discuss your enterprise transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover-glow">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Executive Briefing
            </Button>
            <Button variant="outline" size="lg">
              <FileText className="h-4 w-4 mr-2" />
              Download Enterprise Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseAuthority