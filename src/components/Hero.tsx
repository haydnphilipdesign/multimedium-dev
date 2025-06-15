import { ArrowDown, Zap, Sparkles, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            {/* Professional badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary animate-glow" />
              <span className="text-sm font-medium text-primary">Professional Web Developer & Digital Strategist</span>
            </div>

            {/* Professional headline with gradient text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animation-delay-200 leading-tight">
              Hi, I'm <span className="gradient-text">Haydn Watkins</span>
              <br />
              I Build <span className="gradient-text">Custom Web</span>
              <br />
              <span className="gradient-text">Solutions</span> That Work
            </h1>

            {/* Honest value proposition */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-400 leading-relaxed">
              Pennsylvania-based web developer specializing in custom solutions for growing businesses. 
              I focus on building <span className="font-semibold text-foreground">high-quality, results-driven websites</span> that help your business succeed.
            </p>

            {/* Honest social proof */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-12 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">Pennsylvania Based</span>
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
                  <img
                    src="/profile-picture.jpg"
                    alt="Haydn Watkins - Professional Web Designer"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                    loading="eager"
                    crossOrigin="anonymous"
                    onLoad={() => console.log('Hero image loaded successfully')}
                    onError={(e) => {
                      console.error('Hero image failed to load, showing fallback');
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.classList.remove('hidden');
                        fallback.classList.add('flex');
                      }
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center shadow-2xl">
                    <div className="text-4xl md:text-6xl font-bold text-primary">HW</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float animation-delay-300" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/30 rounded-full animate-float animation-delay-600" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/15 rounded-full animate-float animation-delay-900" />
            </div>
          </div>
        </div>

        {/* Professional Trust Section */}
        <div className="text-center mt-16 animate-fade-in animation-delay-900">
          <p className="text-sm text-muted-foreground mb-6">Trusted by Pennsylvania businesses and beyond</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">RE</span>
              </div>
              PA Real Estate Support
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">BE</span>
              </div>
              Blissful Existence Healing Acres
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-purple-600">FC</span>
              </div>
              The Falls Community Association
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