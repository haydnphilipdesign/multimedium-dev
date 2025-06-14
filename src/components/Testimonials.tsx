import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

/**
 * Testimonials section component showcasing client feedback
 * Features:
 * - Client testimonials with ratings
 * - Profile information for each testimonial
 * - Responsive grid layout
 * - Star ratings and quote styling
 */
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      company: "RE/MAX Valley Properties",
      role: "Real Estate Agent",
      testimonial: "Haydn transformed our entire workflow with the PA Real Estate Support platform. What used to take us hours now takes minutes. Our clients are happier and we're more organized than ever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9a05204?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Maria Rodriguez",
      company: "Be Healing Acres",
      role: "Wellness Practitioner",
      testimonial: "The website Haydn created perfectly captures our healing philosophy. We've seen a 150% increase in bookings, and clients constantly compliment how peaceful and professional our online presence feels.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "James Thompson",
      company: "Falls Community HOA",
      role: "Board President",
      testimonial: "Haydn delivered exactly what our community needed - a clean, organized platform that makes communication effortless. Residents can finally find information quickly, and our admin work is so much easier.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ]

  return (
    <section id="testimonials" className="section-spacing bg-secondary/10">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Success Stories</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            What My <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Don't just take my word for it. Here's what business owners say about working with Multimedium and the 
            <span className="font-semibold text-foreground"> results they've achieved</span>.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`group hover-lift bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 animate-fade-in animation-delay-${index * 100 + 400}`}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-xl shadow-primary/10"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16 animate-fade-in animation-delay-800">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join <span className="gradient-text">Happy Clients</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together. Your success story could be next.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">5.0 average rating</span>
              <span>•</span>
              <span>50+ satisfied clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials