import React from 'react'
import { Check, Star, Crown, Zap, ArrowRight, TrendingUp } from 'lucide-react'
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
      name: "Starter",
      subtitle: "For small businesses",
      price: "$5,000",
      priceRange: "$3K - $8K",
      icon: <Star className="h-6 w-6" />,
      description: "Professional website with modern design and functionality",
      features: [
        "Custom responsive design",
        "Mobile-first development",
        "SEO optimization",
        "Contact forms",
        "Google Analytics setup",
        "1 month of support"
      ],
      popular: false,
      gradient: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Professional",
      subtitle: "For growing businesses",
      price: "$12,000",
      priceRange: "$8K - $20K",
      icon: <Crown className="h-6 w-6" />,
      description: "Advanced website with custom features and integrations",
      features: [
        "Everything in Starter",
        "Custom React development",
        "CMS integration",
        "E-commerce functionality",
        "Third-party integrations",
        "Advanced analytics",
        "3 months of support",
        "Performance optimization"
      ],
      popular: true,
      gradient: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-600"
    },
    {
      id: 3,
      name: "Enterprise",
      subtitle: "For established companies",
      price: "$25,000+",
      priceRange: "$20K+",
      icon: <Zap className="h-6 w-6" />,
      description: "Custom web applications and complex business solutions",
      features: [
        "Everything in Professional",
        "Custom web applications",
        "API development",
        "Database design",
        "User authentication",
        "Advanced security",
        "6 months of support",
        "Ongoing maintenance"
      ],
      popular: false,
      gradient: "from-green-500/10 to-green-600/10",
      borderColor: "border-green-500/20",
      textColor: "text-green-600"
    }
  ]

  const handleContactForPackage = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // You could also pre-fill form data here
    }
  }

  return (
    <section id="pricing" className="section-spacing bg-gradient-to-br from-background to-secondary/20">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Web Development Packages</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Investment in Your <span className="gradient-text">Digital Success</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Transparent pricing for quality web development. Each package includes everything needed to 
            <span className="font-semibold text-foreground">build a professional website that drives results</span>.
          </p>
        </div>

        {/* Quality Promise */}
        <div className="text-center mb-12 animate-fade-in animation-delay-400">
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-semibold">Quality guarantee: Your satisfaction is my top priority</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`relative overflow-hidden hover-lift ${pkg.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border'} animate-fade-in animation-delay-${index * 100 + 500}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm font-semibold">
                  Most Popular Choice
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
                  <div className="text-sm text-muted-foreground">
                    Starting investment
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

                <Button 
                  className={`w-full mt-6 ${pkg.popular ? 'bg-gradient-to-r from-primary to-accent text-white hover-glow' : 'variant-outline'}`}
                  onClick={handleContactForPackage}
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Start Your Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value proposition */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 animate-fade-in animation-delay-800">
          <h3 className="text-2xl font-bold mb-4">
            Why <span className="gradient-text">Businesses</span> Choose Multimedium
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">Quality</div>
              <div className="text-sm text-muted-foreground">Focused development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Personal</div>
              <div className="text-sm text-muted-foreground">Direct communication</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Reliable</div>
              <div className="text-sm text-muted-foreground">Ongoing support</div>
            </div>
          </div>
        </div>

        {/* Availability notice */}
        <div className="text-center mt-12 animate-fade-in animation-delay-900">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-800 text-sm font-medium">
              📅 Currently accepting new projects - let's discuss your needs
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing