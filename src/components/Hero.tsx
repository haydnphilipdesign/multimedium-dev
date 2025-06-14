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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-float animation-delay-500" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

      <div className="container-section relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Attention-grabbing badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-primary">Award-winning designer in Pennsylvania</span>
          </div>

          {/* Powerful headline with gradient text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in animation-delay-200 leading-tight">
            Websites That
            <br />
            <span className="gradient-text">Convert Dreams</span>
            <br />
            Into Customers
          </h1>

          {/* Compelling subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-400 leading-relaxed">
            I'm Haydn Watkins, and I don't just build websites—I craft digital experiences that 
            <span className="font-semibold text-foreground"> turn visitors into loyal customers</span>. 
            Let's make your business unforgettable online.
          </p>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-fade-in animation-delay-500">
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm">30+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm">100% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm">PA Based Studio</span>
            </div>
          </div>

          {/* Irresistible call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in animation-delay-700">
            <Button 
              size="lg" 
              onClick={scrollToPortfolio}
              className="min-w-48 text-base h-12 btn-magnetic hover-glow bg-gradient-to-r from-primary to-accent text-white font-semibold"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              See the Magic
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="min-w-48 text-base h-12 hover-lift border-2 border-primary/30 hover:border-primary bg-white/80 backdrop-blur-sm font-semibold"
            >
              Start Your Project
            </Button>
          </div>

          {/* Animated scroll indicator */}
          <div className="animate-bounce animation-delay-800">
            <button
              onClick={scrollToPortfolio}
              className="text-muted-foreground hover:text-primary transition-all duration-300 group"
              aria-label="Scroll to portfolio"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Scroll to explore
                </span>
                <ArrowDown className="h-6 w-6 group-hover:transform group-hover:scale-110 transition-transform" />
              </div>
            </button>
          </div>
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