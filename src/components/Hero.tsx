import { ArrowDown, Zap, Sparkles, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RobustImage from './RobustImage'

/**
 * Hero section component - the main landing area
 * Features:
 * - Compelling headline and value proposition
 * - Call-to-action buttons
 * - Visual elements with icons
 * - Animated scroll indicator
 * - Responsive typography and layout
 * - Modern gradient background effects
 */
const Hero: React.FC = () => {
  // Scroll to portfolio section
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Enhanced background effects */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-float animation-delay-500" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

      <div className="container-section relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-full px-4 py-2 mb-4 animate-fade-in backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-red-600 animate-pulse" />
              <span className="text-sm font-medium text-red-700">🔥 Taking Only 3 New Clients for Q3 2025</span>
            </div>
            
            {/* Phone number prominently displayed */}
            <div className="inline-flex items-center gap-3 bg-primary text-white rounded-full px-6 py-3 mb-6 animate-fade-in animation-delay-100 hover:bg-primary/90 transition-colors cursor-pointer">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">📞 (570) 994-6186</span>
              <span className="text-sm opacity-90">Call Now - Available Today</span>
            </div>

            {/* Revenue-focused headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animation-delay-200 leading-tight">
              <span className="gradient-text">Websites That Actually</span>
              <br />
              <span className="gradient-text">Make You Money</span>
              <br />
              Not Just Look Pretty
            </h1>

            {/* Revenue-focused value proposition */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-400 leading-relaxed">
              I help Pennsylvania businesses <span className="font-semibold text-foreground">increase revenue by 300% in 90 days</span> with websites designed to convert visitors into paying customers.
              <br />
              <span className="font-semibold text-foreground">Your website should pay for itself</span> – let me show you how.
            </p>

            {/* Revenue-focused social proof */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-12 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">$2M+ Client Revenue Generated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">300% Avg ROI Increase</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">Pennsylvania Local</span>
              </div>
            </div>

            {/* Irresistible call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-fade-in animation-delay-700">
              <Button 
                size="lg" 
                onClick={scrollToPortfolio}
                className="min-w-48 text-base h-12 btn-magnetic hover-glow bg-gradient-to-r from-primary to-accent text-white font-semibold"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact}
                className="min-w-48 text-base h-12 hover-lift border-2 border-primary/30 hover:border-primary bg-white/80 backdrop-blur-sm font-semibold"
              >
                Let's Work Together
              </Button>
            </div>
          </div>

          {/* Right side - Professional headshot */}
          <div className="flex-shrink-0 animate-fade-in animation-delay-600">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full p-1 animate-pulse-slow">
                <div className="w-full h-full bg-background rounded-full p-2">
                  <RobustImage
                    src="/profile-picture.jpg"
                    alt="Haydn Watkins - Professional Web Developer"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                    loading="eager"
                    fallbackSrc="/multimedium-logo.png"
                  />
                </div>
              </div>
              
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float animation-delay-300" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/30 rounded-full animate-float animation-delay-600" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/15 rounded-full animate-float animation-delay-900" />
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="text-center mt-16 animate-fade-in animation-delay-900">
          <p className="text-sm text-muted-foreground mb-6">Trusted by Pennsylvania businesses who've seen real results</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground bg-white/60 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm border border-primary/10">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">RE</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">PA Real Estate Support</div>
                <div className="text-xs text-green-600">+250% Lead Generation</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground bg-white/60 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm border border-primary/10">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">BE</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Blissful Existence</div>
                <div className="text-xs text-green-600">+400% Online Bookings</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground bg-white/60 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm border border-primary/10">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-purple-600">FC</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">The Falls Community</div>
                <div className="text-xs text-green-600">+180% Member Engagement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="text-center mt-12 animate-bounce animation-delay-1000">
          <button
            onClick={scrollToPortfolio}
            className="text-muted-foreground hover:text-primary transition-all duration-300 group"
            aria-label="Scroll to portfolio"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                See my work below
              </span>
              <ArrowDown className="h-6 w-6 group-hover:transform group-hover:scale-110 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float animation-delay-300" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float animation-delay-600" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary/20 rounded-full animate-float animation-delay-900" />
    </section>
  )
}

export default Hero