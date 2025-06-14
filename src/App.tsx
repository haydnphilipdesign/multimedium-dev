import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import LeadMagnets from './components/LeadMagnets'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialProofNotifications from './components/SocialProofNotifications'
import AdvancedAnalyticsProvider from './components/AdvancedAnalytics'
import SEOContent from './components/SEOContent'
import LocalSEO from './components/LocalSEO'
import GoogleMyBusinessOptimization from './components/GoogleMyBusinessOptimization'
import Blog from './components/Blog'

/**
 * Main App component for Multimedium.dev portfolio website
 * Single-page application with smooth scrolling sections
 * Responsive design optimized for desktop and mobile
 * 
 * Structure:
 * - Header with navigation
 * - Hero section with introduction
 * - Portfolio showcase
 * - Services offered
 * - About section
 * - Contact form
 * - Footer with social links
 */
function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Advanced Analytics & SEO */}
      <AdvancedAnalyticsProvider />
      <GoogleMyBusinessOptimization />
      
      {/* Fixed header with navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <About />
        <LeadMagnets />
        <SEOContent />
        <Blog />
        <LocalSEO />
        <Contact />
      </main>
      
      {/* Social proof notifications */}
      <SocialProofNotifications />
      
      {/* Footer with social links and contact info */}
      <Footer />
    </div>
  )
}

export default App