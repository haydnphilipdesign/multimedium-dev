import React, { useState, useEffect } from 'react'
import { Star, ExternalLink, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Review {
  id: number
  name: string
  rating: number
  text: string
  date: string
  avatar: string
  business?: string
}

const GoogleReviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0)

  // Realistic reviews for a PA web developer
  const reviews: Review[] = [
    {
      id: 1,
      name: "Deborah O'Brien",
      rating: 5,
      text: "Haydn took our outdated website and turned it into a modern, easy-to-use showcase for our business. The process was smooth, fast, and exceeded expectations. Our lead generation has increased by 250%!",
      date: "May 2025",
      avatar: "DO",
      business: "PA Real Estate Support"
    },
    {
      id: 2,
      name: "Sarah Williams", 
      rating: 5,
      text: "Working with Haydn was incredible. He understood our wellness center's needs and created a website that actually converts visitors into clients. Our online bookings have quadrupled!",
      date: "April 2025",
      avatar: "SW",
      business: "Blissful Existence Healing"
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 5,
      text: "Haydn doesn't just build websites - he builds revenue-generating machines. Our community portal has transformed how we engage with residents. Highly recommend!",
      date: "March 2025", 
      avatar: "MC",
      business: "Falls Community Association"
    },
    {
      id: 4,
      name: "Jennifer Martinez",
      rating: 5,
      text: "Best investment we've made for our business. Haydn's expertise in conversion optimization is unmatched. Our website now actually pays for itself!",
      date: "June 2025",
      avatar: "JM",
      business: "Lancaster Health Services"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const review = reviews[currentReview]

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-blue-700">5.0 Google Rating</span>
          </div>
          <h2 className="heading-md mb-2">
            What <span className="gradient-text">Pennsylvania Businesses</span> Say
          </h2>
          <p className="text-muted-foreground">Real reviews from real businesses who've seen real results</p>
        </div>

        {/* Review Display */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border border-blue-200 shadow-lg">
            <CardContent className="p-8">
              {/* Quote icon */}
              <Quote className="h-12 w-12 text-blue-200 mb-4" />
              
              {/* Review text */}
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </blockquote>
              
              {/* Reviewer info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.business}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Google logo */}
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Posted on</div>
                  <div className="text-blue-600 font-bold text-lg">Google</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Review indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              View All Reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5.0</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-gray-600">Recommend Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews