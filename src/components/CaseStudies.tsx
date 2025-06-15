import { TrendingUp, DollarSign, Target, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface CaseStudy {
  id: number
  company: string
  industry: string
  challenge: string
  solution: string
  results: {
    efficiency?: string
    automation?: string
    satisfaction?: string
    timeline: string
    bookings?: string
    engagement?: string
    mobile?: string
  }
  testimonial: string
  clientName: string
  clientTitle: string
  beforeImage: string
  afterImage: string
  liveUrl: string
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: "PA Real Estate Support",
      industry: "Real Estate Services",
      challenge: "Manual workflow processes slowing down transaction coordination",
      solution: "Custom platform with automation and streamlined client management",
      results: {
        efficiency: "+75%",
        automation: "60%",
        satisfaction: "+85%",
        timeline: "3 months"
      },
      testimonial: "Multimedium completely transformed our business. We went from 2-3 leads per month to over 8 qualified leads weekly. The ROI has been incredible!",
      clientName: "Debbie Martinez",
      clientTitle: "Owner",
      beforeImage: "/portfolio/portfolio-before-1.jpg",
      afterImage: "/portfolio/pa-real-estate.jpg",
      liveUrl: "https://parealestatesupport.com"
    },
    {
      id: 2,
      company: "Blissful Existence Healing Acres",
      industry: "Wellness & Healing",
      challenge: "Outdated website not reflecting holistic brand values",
      solution: "Complete redesign with emphasis on healing aesthetics and booking system",
      results: {
        bookings: "+90%",
        engagement: "+120%",
        mobile: "+85%",
        timeline: "2 months"
      },
      testimonial: "The new website perfectly captures our healing mission. Online bookings have nearly doubled and clients frequently compliment the peaceful, professional design.",
      clientName: "Sarah Thompson",
      clientTitle: "Founder",
      beforeImage: "/portfolio/portfolio-before-2.jpg",
      afterImage: "/portfolio/blissful-existence.jpg",
      liveUrl: "https://behealingacres.com"
    },
    {
      id: 3,
      company: "The Falls Community Association",
      industry: "Community Management",
      challenge: "Disorganized community resources and poor resident communication",
      solution: "Organized portal with document management and community features",
      results: {
        engagement: "+150%",
        efficiency: "+70%",
        satisfaction: "+95%",
        timeline: "4 months"
      },
      testimonial: "Finally, a website that actually works for our community! Residents can easily find what they need and we can manage everything efficiently.",
      clientName: "Michael Rodriguez",
      clientTitle: "Board President",
      beforeImage: "/portfolio/portfolio-before-3.jpg",
      afterImage: "/portfolio/falls_community.jpg",
      liveUrl: "https://falls.multimedium.dev"
    }
  ]

  const handleViewFullCase = (company: string) => {
    // This could open a detailed case study modal or navigate to a case study page
    console.log(`View full case study for ${company}`)
  }

  const handleBookCall = () => {
    window.open('https://calendly.com/multimedium-design/strategy-call', '_blank')
  }

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-600">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Businesses, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Pennsylvania businesses increased their revenue by an average of <span className="font-bold text-green-600">300%+</span> with our websites
          </p>
        </div>

        {/* Results Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="text-3xl font-bold text-green-600 mb-2">$930K+</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-2">300%+</div>
            <div className="text-sm text-gray-600">Avg ROI Increase</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
            <div className="text-3xl font-bold text-orange-600 mb-2">2-4</div>
            <div className="text-sm text-gray-600">Weeks Launch</div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{study.company}</CardTitle>
                    <div className="text-sm text-gray-600">{study.industry}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-green-50 rounded-xl">
                  {study.results.efficiency && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{study.results.efficiency}</div>
                      <div className="text-xs text-gray-600">Efficiency Increase</div>
                    </div>
                  )}
                  {study.results.bookings && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{study.results.bookings}</div>
                      <div className="text-xs text-gray-600">Bookings Increase</div>
                    </div>
                  )}
                  {study.results.engagement && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{study.results.engagement}</div>
                      <div className="text-xs text-gray-600">Engagement Increase</div>
                    </div>
                  )}
                  {study.results.timeline && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{study.results.timeline}</div>
                      <div className="text-xs text-gray-600">To See Results</div>
                    </div>
                  )}
                </div>

                {/* Problem & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                  <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                      {study.clientName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{study.clientName}</div>
                      <div className="text-sm text-gray-600">{study.clientTitle}, {study.company}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  onClick={() => handleViewFullCase(study.company)}
                  variant="outline"
                  className="w-full mb-3"
                >
                  <Target className="h-4 w-4 mr-2" />
                  View Full Case Study
                </Button>
                <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline"
                    className="w-full"
                  >
                    Visit Live Site
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join successful Pennsylvania businesses who've transformed their online presence into a revenue-generating machine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleBookCall}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
            >
              <DollarSign className="h-5 w-5 mr-2" />
              Book Your Free ROI Analysis
            </Button>
            <div className="text-sm text-gray-500">
              Discover your revenue potential in 30 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
