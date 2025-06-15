import React from 'react'
import { Check, Star, Crown, Zap, ArrowRight, TrendingUp, Calendar, Phone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

/**
 * Premium pricing section for high-ticket client positioning
 * Shows investment levels and filters out low-budget prospects
 */
const Pricing: React.FC = () => {
  const packages = [
    {
      id: 1,
      name: "Business Starter",
      subtitle: "Perfect for small businesses",
      price: "$3,500",
      priceRange: "$2.5K - $5K",
      roi: "2-3x ROI within 8-12 months",
      icon: <Star className="h-6 w-6" />,
      description: "Professional website that converts visitors into customers",
      features: [
        "Custom responsive design",
        "Mobile-optimized (70% of traffic)",
        "SEO setup for local search",
        "Lead capture forms",
        "Google Analytics & tracking",
        "30-day launch guarantee",
        "2 months support included"
      ],
      popular: false,
      gradient: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-600",
      timeline: "2-3 weeks"
    },
    {
      id: 2,
      name: "Growth Professional",
      subtitle: "For businesses ready to scale",
      price: "$7,500",
      priceRange: "$5K - $12K",
      roi: "2-3x ROI within 8-12 months",
      icon: <Crown className="h-6 w-6" />,
      description: "Advanced website with conversion optimization and automation",
      features: [
        "Everything in Business Starter",
        "Advanced lead qualification system",
        "CRM integration (HubSpot/Salesforce)",
        "E-commerce functionality",
        "Automated email sequences",
        "A/B testing setup",
        "Conversion rate optimization",
        "4 months premium support"
      ],
      popular: true,
      gradient: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-600",
      timeline: "3-4 weeks"
    },
    {
      id: 3,
      name: "Enterprise Revenue",
      subtitle: "For established companies",
      price: "$15,000+",
      priceRange: "$12K - $50K",
      roi: "2-3x ROI within 8-12 months",
      icon: <Zap className="h-6 w-6" />,
      description: "Custom web applications and revenue-generating systems",
      features: [
        "Everything in Growth Professional",
        "Custom web application development",
        "API integrations & automation",
        "Advanced analytics dashboard",
        "Multi-location/franchise support",
        "Priority support & maintenance",
        "Dedicated project manager",
        "12 months enterprise support"
      ],
      popular: false,
      gradient: "from-green-500/10 to-green-600/10",
      borderColor: "border-green-500/20",
      textColor: "text-green-600",
      timeline: "4-6 weeks"
    }
  ]

  const handleBookCall = () => {
    // This will be enhanced with calendar integration
    window.open('https://calendly.com/multimedium-design/strategy-call', '_blank')
  }

  const handleContactForPackage = (packageName: string) => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Pre-fill package selection if form supports it
      setTimeout(() => {
        const projectTypeField = document.querySelector('select[name="projectType"]') as HTMLSelectElement
        if (projectTypeField) {
          projectTypeField.value = packageName
        }
      }, 500)
    }
  }

  return (
    <section id="pricing" className="section-spacing bg-gradient-to-br from-background to-secondary/20">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transparent Pricing - No Hidden Fees</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Invest in <span className="gradient-text">Proven Results</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Our websites generate an average of <span className="font-bold text-green-600">$50,000+ additional revenue</span> in the first year. 
            <span className="font-semibold text-foreground"> Choose the package that fits your growth goals</span>.
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="text-center mb-12 animate-fade-in animation-delay-400">
          <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-800 text-sm font-medium">
              🔥 Only taking 3 new clients this month - Book your call today
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`relative overflow-hidden hover-lift ${pkg.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border'} animate-fade-in animation-delay-${index * 100 + 500}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm font-semibold">
                  🔥 Most Popular - 78% Choose This
                </div>
              )}

              <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${pkg.gradient} rounded-xl ${pkg.textColor} w-fit`}>
                  {pkg.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base mb-4">{pkg.subtitle}</CardDescription>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold gradient-text mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-green-600 font-semibold mb-2">
                    {pkg.roi}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Timeline: {pkg.timeline}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4">
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-accent text-white hover-glow' : 'bg-primary text-white hover:bg-primary/90'}`}
                    onClick={handleBookCall}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Free Strategy Call
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => handleContactForPackage(pkg.name)}
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Get Custom Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value proposition */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 animate-fade-in animation-delay-800">
          <h3 className="text-2xl font-bold mb-4">
            Why <span className="gradient-text">Smart Businesses</span> Choose Multimedium
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mt-8">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">300%+</div>
              <div className="text-sm text-muted-foreground">Average ROI increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2-4 weeks</div>
              <div className="text-sm text-muted-foreground">Launch timeline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support included</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-900">
          <Button 
            size="lg"
            onClick={handleBookCall}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Your Free 30-Min Strategy Call
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            💰 Discover how much revenue you're losing with your current website
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing