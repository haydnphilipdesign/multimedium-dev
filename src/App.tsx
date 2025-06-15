import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import CaseStudies from './components/CaseStudies'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import CalendarBooking from './components/CalendarBooking'
import LeadMagnets from './components/LeadMagnets'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoogleAnalytics from './components/AdvancedAnalytics'
import GoogleMyBusinessOptimization from './components/GoogleMyBusinessOptimization'
import Blog from './components/Blog'
import SocialProof from './components/SocialProof'
import { CriticalCSS, ResourcePreloader, PerformanceDashboard } from './components/SpeedOptimization'

/**
 * Main App component for Multimedium.dev portfolio website
 * Optimized for maximum lead conversion with social proof and direct booking
 * 
 * Conversion Flow:
 * - Hero with immediate value proposition
 * - Portfolio to show capabilities  
 * - Case Studies with ROI proof (builds trust)
 * - Services overview
 * - Pricing with clear packages (qualifies leads)
 * - Calendar booking (removes friction)
 * - Social proof throughout (FOMO)
 * - Contact as final backup
 */
function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Performance optimizations */}
      <CriticalCSS />
      <ResourcePreloader />
      <PerformanceDashboard />
      
      {/* Google Analytics & SEO */}
      <GoogleAnalytics />
      <GoogleMyBusinessOptimization />
      
      {/* Fixed header with navigation */}
      <Header />
      
      {/* Main content sections - Optimized for conversion */}
      <main>
        <Hero />
        <SocialProof />
        <Portfolio />
        <CaseStudies />
        <Services />
        <Pricing />
        <CalendarBooking />
        <LeadMagnets />
        <About />
        <Blog />
        <Contact />
      </main>
      
      {/* Footer with social links and contact info */}
      <Footer />
    </div>
  )
}

export default App