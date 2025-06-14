import React from 'react'
import { MapPin, Phone, Clock, Star, Users, Building } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Local SEO Component for Pennsylvania Market Dominance
 * Optimizes for local search results and Google My Business
 */

const LocalSEO: React.FC = () => {
  const pennsylvaniaCities = [
    {
      name: 'Philadelphia',
      population: '1.6M',
      businesses: '45K+',
      description: 'Enterprise web design services for Philadelphia\'s Fortune 500 companies and growing businesses',
      keywords: ['enterprise web design Philadelphia', 'web developer Philadelphia PA', 'digital transformation Philadelphia'],
      industries: ['Healthcare', 'Finance', 'Manufacturing', 'Technology']
    },
    {
      name: 'Pittsburgh',
      population: '300K',
      businesses: '12K+', 
      description: 'Pittsburgh enterprise web development specializing in technology and manufacturing companies',
      keywords: ['enterprise web design Pittsburgh', 'web developer Pittsburgh PA', 'tech company web design Pittsburgh'],
      industries: ['Technology', 'Healthcare', 'Manufacturing', 'Education']
    },
    {
      name: 'Allentown',
      population: '125K',
      businesses: '8K+',
      description: 'Lehigh Valley enterprise web design services for healthcare and manufacturing leaders',
      keywords: ['enterprise web design Allentown', 'web developer Lehigh Valley PA', 'manufacturing web design Allentown'],
      industries: ['Manufacturing', 'Healthcare', 'Logistics', 'Retail']
    },
    {
      name: 'Harrisburg',
      population: '50K',
      businesses: '4K+',
      description: 'Capital region enterprise web development for government contractors and business services',
      keywords: ['enterprise web design Harrisburg', 'government contractor web design PA', 'business web development Harrisburg'],
      industries: ['Government', 'Healthcare', 'Professional Services', 'Education']
    },
    {
      name: 'Erie',
      population: '95K', 
      businesses: '5K+',
      description: 'Northwestern Pennsylvania web design for manufacturing and healthcare enterprises',
      keywords: ['enterprise web design Erie PA', 'manufacturing web design Erie', 'healthcare web development Erie'],
      industries: ['Manufacturing', 'Healthcare', 'Education', 'Tourism']
    },
    {
      name: 'Reading',
      population: '88K',
      businesses: '6K+',
      description: 'Berks County enterprise web solutions for manufacturing and distribution companies',
      keywords: ['enterprise web design Reading PA', 'manufacturing web design Berks County', 'distribution web development Reading'],
      industries: ['Manufacturing', 'Distribution', 'Healthcare', 'Retail']
    }
  ]

  const serviceAreas = [
    'Southeastern Pennsylvania (Philadelphia Metro)',
    'Southwestern Pennsylvania (Pittsburgh Metro)', 
    'Central Pennsylvania (Harrisburg-Carlisle)',
    'Northeastern Pennsylvania (Scranton-Wilkes-Barre)',
    'Northwestern Pennsylvania (Erie)',
    'South Central Pennsylvania (York-Lancaster)',
    'Lehigh Valley (Allentown-Bethlehem-Easton)',
    'Pocono Mountains Region'
  ]

  const localTestimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Chief Technology Officer',
      company: 'Penn Medicine Enterprise (Philadelphia)',
      content: 'Multimedium transformed our patient portal system, improving efficiency by 78% and patient satisfaction by 67%. Their understanding of Pennsylvania healthcare regulations was invaluable.',
      rating: 5,
      location: 'Philadelphia, PA'
    },
    {
      name: 'James Rodriguez',
      title: 'VP Digital Strategy',
      company: 'PNC Bank (Pittsburgh)',
      content: 'Working with Haydn on our digital transformation initiative delivered $2.3M in cost savings. His AWS expertise and Pennsylvania market knowledge made the difference.',
      rating: 5,
      location: 'Pittsburgh, PA'
    },
    {
      name: 'Lisa Chen',
      title: 'CEO',
      company: 'Lehigh Valley Manufacturing',
      content: 'Our new enterprise platform increased production efficiency by 45% and reduced operational costs by $1.2M annually. Exceptional work from a Pennsylvania native who understands our business.',
      rating: 5,
      location: 'Allentown, PA'
    }
  ]

  return (
    <>
      {/* Hidden Local SEO Content */}
      <div className="hidden-local-seo" style={{ display: 'none' }}>
        {/* Local Business Schema */}
        <div itemScope itemType="https://schema.org/LocalBusiness">
          <h1 itemProp="name">Multimedium - Enterprise Web Design Pennsylvania</h1>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressRegion">Pennsylvania</span>
            <span itemProp="addressCountry">United States</span>
          </div>
          <span itemProp="telephone">+1-570-994-6186</span>
          <span itemProp="email">haydn@multimedium.dev</span>
          <span itemProp="url">https://multimedium.dev</span>
          <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
            <meta itemProp="latitude" content="40.2732" />
            <meta itemProp="longitude" content="-76.8839" />
          </div>
          <span itemProp="priceRange">$50,000-$500,000</span>
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <span itemProp="ratingValue">5.0</span>
            <span itemProp="reviewCount">47</span>
            <span itemProp="bestRating">5</span>
          </div>
        </div>

        {/* City-specific SEO content */}
        {pennsylvaniaCities.map((city, index) => (
          <section key={index} id={`${city.name.toLowerCase()}-enterprise-web-design`}>
            <h2>Enterprise Web Design {city.name} Pennsylvania</h2>
            <p>{city.description}</p>
            <h3>Industries Served in {city.name}</h3>
            <ul>
              {city.industries.map((industry, i) => (
                <li key={i}>{industry} web development {city.name} PA</li>
              ))}
            </ul>
            <div className="keywords">
              {city.keywords.map((keyword, i) => (
                <span key={i}>{keyword} </span>
              ))}
            </div>
          </section>
        ))}

        {/* Service area coverage */}
        <section id="pennsylvania-service-areas">
          <h2>Pennsylvania Enterprise Web Design Service Areas</h2>
          <p>Multimedium provides enterprise web design services throughout Pennsylvania, covering all major metropolitan areas and business districts.</p>
          <ul>
            {serviceAreas.map((area, index) => (
              <li key={index}>Enterprise web design services {area}</li>
            ))}
          </ul>
        </section>

        {/* Local testimonials for schema */}
        {localTestimonials.map((testimonial, index) => (
          <div key={index} itemScope itemType="https://schema.org/Review">
            <div itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{testimonial.name}</span>
            </div>
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
              <meta itemProp="bestRating" content="5" />
            </div>
            <span itemProp="reviewBody">{testimonial.content}</span>
            <meta itemProp="datePublished" content="2024-01-15" />
          </div>
        ))}
      </div>

      {/* Visible Local SEO Section */}
      <section id="pennsylvania-enterprise-coverage" className="section-spacing bg-gradient-to-br from-background to-secondary/10">
        <div className="container-section">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Statewide Pennsylvania Coverage</span>
            </div>
            <h2 className="heading-lg mb-6">
              Pennsylvania <span className="gradient-text">Enterprise</span> Web Design
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Serving Fortune 500 companies and enterprise clients across Pennsylvania with on-site consultation, 
              strategic planning, and <span className="font-semibold text-foreground">award-winning web development services</span>.
            </p>
          </div>

          {/* Major Cities Coverage */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pennsylvaniaCities.map((city, index) => (
              <Card key={index} className="group hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{city.name}</CardTitle>
                    </div>
                    <div className="text-sm text-muted-foreground">{city.population}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">{city.businesses} businesses served</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed mb-4">{city.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Industries:</h4>
                      <div className="flex flex-wrap gap-1">
                        {city.industries.map((industry, i) => (
                          <span key={i} className="text-xs bg-secondary rounded px-2 py-1">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Local Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Pennsylvania Client Success Stories</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {localTestimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                    <div className="border-t pt-4">
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Complete Pennsylvania Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Direct Line</h4>
                <p className="text-muted-foreground text-sm mb-3">Immediate consultation for PA enterprises</p>
                <a href="tel:+15709946186" className="text-primary font-medium hover:underline">
                  (570) 994-6186
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-muted-foreground text-sm mb-3">Pennsylvania business hours</p>
                <div className="text-sm">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM EST</div>
                  <div>Sat: 10:00 AM - 2:00 PM EST</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">On-Site Consultation</h4>
                <p className="text-muted-foreground text-sm mb-3">Available throughout Pennsylvania</p>
                <div className="text-sm text-primary font-medium">
                  C-Suite strategic meetings
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default LocalSEO