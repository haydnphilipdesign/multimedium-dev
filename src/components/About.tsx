import { Users, Award, Clock, Heart, Quote, Star, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

/**
 * About section component introducing the company
 * Features:
 * - Company story and mission
 * - Statistics and achievements
 * - Team introduction
 * - Values and approach
 * - Professional imagery placeholders
 */
const About: React.FC = () => {
  // Professional statistics
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "Happy",
      label: "Clients",
      description: "Small businesses and organizations trusting Multimedium"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "Quality",
      label: "Focus",
      description: "Committed to delivering exceptional results"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "7+",
      label: "Years Experience",
      description: "Deep expertise in web design and development"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "PA",
      label: "Based in Pennsylvania",
      description: "Serving clients locally and nationwide"
    }
  ]

  // Client testimonial (real testimonial only)
  const testimonial = {
    quote: "Haydn took our outdated website and turned it into a modern, easy-to-use showcase for our business. The process was smooth, fast, and exceeded expectations.",
    author: "Deborah O'Brien",
    company: "PA Real Estate Support Services",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=300&h=300&fit=crop&crop=face"
  }

  return (
    <section id="about" className="section-spacing bg-secondary/20">
      <div className="container-section">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Multimedium Story</span>
          </div>
          <h2 className="heading-lg mb-6 animate-fade-in animation-delay-200">
            Where <span className="gradient-text">Creativity Meets</span> Strategy
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Behind every successful business is a digital presence that tells their story, 
            connects with customers, and <span className="font-semibold text-foreground">drives real results</span>. 
            That's where I come in.
          </p>
        </div>

        {/* Enhanced story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-fade-in animation-delay-400">
            <h3 className="heading-md mb-6">Meet Haydn</h3>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                <span className="font-semibold text-foreground">I don't just build websites—I craft digital experiences that transform businesses.</span> 
                I'm Haydn Watkins, the creative force behind Multimedium, where every pixel has purpose 
                and every line of code tells your story.
              </p>
              <p>
                Based in Pennsylvania, I've spent years perfecting the art of turning visions into 
                <span className="font-semibold text-foreground"> high-converting digital realities</span>. 
                My secret? I combine the strategic thinking of a consultant with the creative eye of an artist 
                and the technical precision of a developer.
              </p>
              <p>
                When you work with me, you're not just getting a website—you're getting a 
                <span className="font-semibold text-foreground"> strategic partner who genuinely cares about your success</span>. 
                I take the time to understand your business, your goals, and your customers, then craft 
                a digital experience that not only looks stunning but drives real results.
              </p>
              
              {/* Personal touch */}
              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm italic">
                  "Every project is a new adventure, and I love the challenge of bringing unique 
                  visions to life. Your success is my success."
                </p>
                <p className="text-xs mt-2 font-semibold">— Haydn Watkins, Founder</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced professional image */}
          <div className="relative animate-fade-in animation-delay-500">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-30"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-picture-WhzFDMCS0GhdPK8fpi1PmPFDVw9NXd.jpg"
              alt="Haydn Watkins - Professional Web Designer"
              className="relative rounded-xl shadow-2xl w-full h-80 object-cover hover-lift"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent rounded-xl" />
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-primary/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className={`text-center group hover-lift bg-card/50 backdrop-blur-sm border border-primary/10 animate-scale-in animation-delay-${index * 100 + 600}`}>
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 w-fit animate-glow">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="font-semibold mb-2 group-hover:text-primary transition-colors">{stat.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client testimonial section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Client Feedback</span>
          </div>
          <h3 className="heading-md mb-6 animate-fade-in animation-delay-200">
            What Clients <span className="gradient-text">Actually Say</span>
          </h3>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Real feedback from a Pennsylvania business owner who trusted Multimedium with their website.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="group hover-lift relative overflow-hidden bg-gradient-to-br from-white to-primary/5 border border-primary/10 animate-fade-in animation-delay-400">
            <CardContent className="p-8">
              {/* Quote icon */}
              <Quote className="h-12 w-12 text-primary/30 mb-6 mx-auto" />
              
              {/* Star rating */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="mb-8 text-center">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author info */}
              <div className="flex items-center gap-4 justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-base">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full"></div>
            </CardContent>
          </Card>
        </div>

        {/* Approach */}
        <div className="text-center">
          <h3 className="heading-md mb-8">My Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Collaborative</h4>
              <p className="text-sm text-muted-foreground">
                I work closely with clients throughout the entire process, ensuring 
                your vision is realized and your goals are achieved.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Results-Driven</h4>
              <p className="text-sm text-muted-foreground">
                Every design decision is made with your business goals in mind. 
                Beautiful websites that actually convert visitors into customers.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold">Detail-Oriented</h4>
              <p className="text-sm text-muted-foreground">
                From the initial concept to the final launch, I ensure every detail 
                is perfect and every interaction is smooth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About